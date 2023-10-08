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