// tslint:disable-next-line: no-implicit-dependencies
import { getJSTranslation } from 'translate-markup';

export default async function(source: string) {
  const translationContent = await getJSTranslation({
    yamlLangContent: source
  });

  return translationContent;
}
