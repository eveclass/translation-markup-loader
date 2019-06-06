// tslint:disable-next-line: no-implicit-dependencies
import { Engine, Translator } from 'translate-markup';

export default async function(source: string) {
  const translator = new Translator();
  const engine = new Engine();

  const translationsArray = await translator.generateYamlFileTranslationsArray({
    fileContent: source
  });

  const translationContent = engine.getJSTranslationsString({
    fileTranslations: translationsArray
  });

  return translationContent;
}
