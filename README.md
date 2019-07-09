# Translation-Markup-Loader

Translating your project to multiple languages just became a lot easier! Meet Translation Markup Loader, a webpack loader that helps you organize your translations in a much cleaner way.

Using [Translation Markup](https://translationmarkup.com/), Translation Markup Loader let's you write your translations in yaml files, and use them as a JS objects in your code!

## Getting started

Translation Markup Loader lets you organize your translation files in wichever way you want using yaml instead of JS, simplifying the organization of your files and eliminating all the JSON boilerplate, lets see some code:

`paymentTranslations.lang.yaml`

```
LANGUAGES:
  1: enUS
  2: ptBR

CREDIT_CARD:
  NAME:
    1: Credit Card
    2: Cartão de Crédito
```

Now, just import and use your translation as a plain JS object and integrate with any `i18n` library you want to.

`app.js`

```
import paymentTranslations from './paymentTranslations.lang.yaml';

console.log(paymentTranslations);

/*
*{
*  enUS: {
*    CREDIT_CARD: {
*      NAME: "Credit Card"
*    }
*  },
*  ptBR: {
*    CREDIT_CARD: {
*      NAME: "Cartão de Crédito"
*    }
*  }
*}
*/
```

#### Languages Key

At the top of each translation file there should be defined the LANGUAGES key, with all languages mapping. In the example above `1: enUs` maps number 1 as language enUS and `2: ptBR` maps number 2 as ptBR.

### Install

**NPM:**

```sh
npm install @shiftcode/translation-markup-loader
```

**Yarn:**

```sh
yarn add @shiftcode/translation-markup-loader
```

### Config

Translation Markup Loader is a webpack loader, to learn about them go to [loaders.](https://webpack.js.org/concepts/loaders/)

To configure Translation Markup Loader you need to register a new loader and tell webpack wich type of files to look for.

In this documentation we use the `.lang.yaml` extensions as a best practice to separate your regular `.yaml` from the translations files, but you could use just the `.yaml` extension in the regex.

#### Webpack

`webpack.config.js`

```
module: {
  rules: [
    {
      test: /\.lang.yaml$/,
      use: "@shiftcode/translation-markup-loader"
     }
   ]
 }
```

#### Vuejs

When configuring with [Vue.js](https://vuejs.org/) you need to use the [Vue config](https://cli.vuejs.org/guide/webpack.html#simple-configuration) file to chain the webpack configuration and declare a new loader. [(learn more)](https://cli.vuejs.org/guide/webpack.html#adding-a-new-loader)

`vue.config.js`

```
module.exports = {
  chainWebpack: config => {
    // Adding Translation Markup Loader
    config.module
      .rule("translations")
      .test(/\.lang.yaml$/)
      .use("@shiftcode/translation-markup-loader")
      .loader("@shiftcode/translation-markup-loader")
      .end();
  }
};
```

#### Nuxtjs

In [Nuxt.js](https://nuxtjs.org/) you need modify you [Nuxt config](https://nuxtjs.org/guide/configuration/) file to push a new rule to the webpack config in the build part of the configuration. [(learn more)](https://nuxtjs.org/faq/extend-webpack/)

`nuxt.config.js`

```
{
  // ... rest of config

   build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.lang.yaml$/,
        use: { loader: '@shiftcode/translation-markup-loader' },
      });
    },
   }

   // ... rest of config
};
```

## Examples

### Multiple translations for some languages

If you have the same translation for more than one language, you can separate their indexes by `_` in the translation key so you don't have to repeat it.

`paymentTranslations.lang.yaml`

```
LANGUAGES:
  1: enUS
  2: ptBR
  3: esES

CREDIT_CARD:
  NAME:
    1: Credit Card
    2: Cartão de Crédito
    3: Tarjeta de Crédito
  FLAG:
    VISA:
      1_2_3: Visa
    MASTERCARD:
      1_2_3: Mastercard
    AMEX:
      1_2_3: American Express
    DINERS:
      1_2_3: Diners
```

`app.js`

```
import paymentTranslations from './paymentTranslations.lang.yaml';

console.log(paymentTranslations);
/*
* {
*  enUS: {
*    CREDIT_CARD: {
*      NAME: "Credit Card",
*      FLAG: {
*        VISA: "Visa",
*        AMEX: "American Express",
*        DINERS: "Diners",
*        MASTERCARD: "Mastercard"
*      }
*    }
*  },
*  ptBR: {
*    CREDIT_CARD: {
*      NAME: "Cartão de Crédito",
*      FLAG: {
*        VISA: "Visa",
*        AMEX: "American Express",
*        DINERS: "Diners",
*        MASTERCARD: "Mastercard"
*      }
*    }
*  },
*  esES: {
*    CREDIT_CARD: {
*      NAME: "Tarjeta de Crédito",
*      FLAG: {
*        VISA: "Visa",
*        AMEX: "American Express",
*        DINERS: "Diners",
*        MASTERCARD: "Mastercard"
*      }
*    }
*  }
* }
*/
```
