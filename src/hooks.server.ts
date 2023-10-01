import { sequence } from "@sveltejs/kit/hooks";
import { themes } from "$lib/themes";
import type { Handle } from "@sveltejs/kit";
import type { HandleServerError } from "@sveltejs/kit";
import { defaultLocale, loadTranslations, locales } from "$lib/translations";

const handleTheme: Handle = async ({ event, resolve }) => {
    const theme = event.cookies.get('theme');

    if (!theme || !themes.includes(theme)) {
        return await resolve(event);
    }

    return await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace('data-theme=""', `data-theme="${theme}"`);
        }
    });
}

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

const handleLocales: Handle = async ({ event, resolve }) => {
    const { url, request, isDataRequest } = event;
    const { pathname, origin } = url;

    // test if request is a route request
    if (routeRegex.test(pathname)) {

        // get available locales
        const supportedLocales = locales.get().map((l) => l.toLowerCase());

        // try to get the locale from pathname
        let locale = supportedLocales.find((l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());

        // We want to redirect the default locale to the "no-locale" path
        if (locale === defaultLocale && !request.headers.get('prevent-redirect')) {
            const localeRegex = new RegExp(`^/${locale}`);
            const location = `${pathname}`.replace(localeRegex, '') || '/';

            return new Response(undefined, { headers: { 'location': location }, status: 301 });
            // If the route locale is not supported
        } else if (!locale) {

            // Get the user preference if navigation is direct
            if (!isDataRequest) {
                locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
            }

            // Check if locale is undefined, null or empty, otherwise this causes issues.
            if (!locale) locale = defaultLocale;

            // If the user preference is not supported, use the default locale
            if (!supportedLocales.includes(locale)) locale = defaultLocale;

            if (locale === defaultLocale) {
                const path = `${pathname}`.replace(/\/$/, '');
                const redirectTo = `${origin}/${locale}${path}${isDataRequest ? '/__data.json?x-sveltekit-invalidated=100' : ''}`;

                // Prevent redirect to fetch data for the default locale
                request.headers.set('prevent-redirect', '1');

                // Fetch the redirected route
                const response = await fetch(redirectTo, request);

                const data = await response.text();

                // Serve the redirected route
                return new Response(data, {
                    ...response,
                    headers: {
                        ...response.headers,
                        'Content-Type': isDataRequest ? 'application/json' : 'text/html',
                    },
                });
            }

            // 301 redirect
            return new Response(undefined, { headers: { 'location': `/${locale}${pathname}` }, status: 301 });
        }

        // Add the html lang attribute
        return resolve({ ...event, locals: { lang: locale } }, {
            transformPageChunk: ({ html }) => html.replace('%lang%', `${locale}`),
        });
    }

    return resolve(event);
};

export const handle = sequence(handleTheme, handleLocales);

export const handleError: HandleServerError = async ({ error, event }) => {
    const { locals } = event;
    const { lang } = locals;

    await loadTranslations(lang, 'error');

    const { message } = error as Error;

    return { 
        message: message,
        locals
    };
};