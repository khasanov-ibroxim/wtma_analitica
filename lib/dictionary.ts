import type { Locale } from '@/i18n-config';

const validLocales = [ 'ru', 'en'];


export const getCommonDictionary = async (locale: Locale) =>
    (await import(`@/dictionaries/common/${locale}.json`)).default;

export const getHomeDictionary = async (locale: Locale) => {
    const safeLocale = validLocales.includes(locale) ? locale : 'ru';

    return (await import(`@/dictionaries/home/${safeLocale}.json`)).default;
};



export type CommonDictionary    = Awaited<ReturnType<typeof getCommonDictionary>>;
export type HomeDictionary = Awaited<ReturnType<typeof getHomeDictionary>>;
