import { getJSTranslation } from '@shiftcode/translation-markup';

export default async function(source: string) {
  const translationContent = await getJSTranslation({
    yamlLangContent: source
  });

  return translationContent;
}
