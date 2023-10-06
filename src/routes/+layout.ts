import { addTranslations, setLocale, setRoute } from "$lib/translations";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ data, url }) => {
    const { i18n, translations } = data;
    const { lang, route } = i18n;

    addTranslations(translations);

    await setRoute(route);
    await setLocale(lang);

    return { i18n, pathname: url.pathname };
};
