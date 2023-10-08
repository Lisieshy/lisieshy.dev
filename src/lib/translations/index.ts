import I18n from "sveltekit-i18n";
import lang from "./lang.json";

const config = {
    translations: {
        en: { lang },
        fr: { lang },
        ja: { lang },
    },
    loaders: [
        {
            locale: "en",
            key: "menu",
            loader: async () => (await import("./en/menu.json")).default,
        },
        {
            locale: "en",
            key: "main",
            loader: async () => (await import("./en/main.json")).default,
        },
        {
            locale: "en",
            key: "error",
            routes: ['error'],
            loader: async () => (await import("./en/error.json")).default,
        },
        {
            locale: "en",
            key: "home",
            routes: ['', '/'],
            loader: async () => (await import("./en/home.json")).default,
        },
        {
            locale: "en",
            key: "about",
            routes: ['/about'],
            loader: async () => (await import("./en/about.json")).default,
        },
        {
            locale: "en",
            key: "projects",
            routes: ['/projects'],
            loader: async () => (await import("./en/projects.json")).default,
        },
        {
            locale: "en",
            key: "contact",
            routes: ['/contact'],
            loader: async () => (await import("./en/contact.json")).default,
        },
        {
            locale: "fr",
            key: "menu",
            loader: async () => (await import("./fr/menu.json")).default,
        },
        {
            locale: "fr",
            key: "main",
            loader: async () => (await import("./fr/main.json")).default,
        },
        {
            locale: "fr",
            key: "error",
            routes: ['error'],
            loader: async () => (await import("./fr/error.json")).default,
        },
        {
            locale: "fr",
            key: "home",
            routes: ['', '/'],
            loader: async () => (await import("./fr/home.json")).default,
        },
        {
            locale: "fr",
            key: "about",
            routes: ['/about'],
            loader: async () => (await import("./fr/about.json")).default,
        },
        {
            locale: "fr",
            key: "projects",
            routes: ['/projects'],
            loader: async () => (await import("./fr/projects.json")).default,
        },
        {
            locale: "fr",
            key: "contact",
            routes: ['/contact'],
            loader: async () => (await import("./fr/contact.json")).default,
        },
        {
            locale: "ja",
            key: "menu",
            loader: async () => (await import("./ja/menu.json")).default,
        },
        {
            locale: "ja",
            key: "main",
            loader: async () => (await import("./ja/main.json")).default,
        },
        {
            locale: "ja",
            key: "error",
            routes: ['error'],
            loader: async () => (await import("./ja/error.json")).default,
        },
        {
            locale: "ja",
            key: "home",
            routes: ['', '/'],
            loader: async () => (await import("./ja/home.json")).default,
        },
        {
            locale: "ja",
            key: "about",
            routes: ['/about'],
            loader: async () => (await import("./ja/about.json")).default,
        },
        {
            locale: "ja",
            key: "projects",
            routes: ['/projects'],
            loader: async () => (await import("./ja/projects.json")).default,
        },
        {
            locale: "ja",
            key: "contact",
            routes: ['/contact'],
            loader: async () => (await import("./ja/contact.json")).default,
        },
    ],
};

export const defaultLocale = "en";

export const { t, locale, locales, loading, addTranslations, loadTranslations, translations, setRoute, setLocale } = new I18n(config);

loading.subscribe(async ($loading) => {
    if ($loading) {
        // console.log("Loading translations...");

        await loading.toPromise();
        // console.log("Updated translations!", translations.get());
    }
});