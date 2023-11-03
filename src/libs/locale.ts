import i18nConfig from "@/i18nConfig";


const defLocale = i18nConfig.defaultLocale

export function localePath (path:string, locale=defLocale):string {
    return locale === defLocale ? path : `/${locale}${path}`
}