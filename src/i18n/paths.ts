import type { TranslatedLocale } from './content';

export function getTranslatedLocalePaths(): Array<{ params: { locale: string }; props: { locale: TranslatedLocale } }> {
  return [
    { params: { locale: 'zh-cn' }, props: { locale: 'zh-Hans' } },
    { params: { locale: 'en' }, props: { locale: 'en' } },
  ];
}
