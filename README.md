# Translation-Loader

Webpack loader to import YAML translation files and use it in JS code as objects.

A YAML translation file begins with the declaration of all supported languages of your application. A custom numeric code (key) must be assigned to each one of the declared languages. Then, you declare each translation, based on the initial languages index.

## Getting started

### Intall

TODO: npm tal e tal

### Config

On your webpack config file:

```
module: {
  rules: [
    {
      test: /\.yaml$/,
      use: "translation-loader"
     }
   ]
 }
```

On you JS file, just import or require the YAML translation file and use the translations as objects.

## Examples

YAML File 'translations.yaml':

```
LANGUAGES:
  1: enUS
  2: ptBR

CREDIT_CARD:
  NAME:
    1: Credit Card
    2: Cartão de Crédito

```

JS:

```
import translations from './translations.yaml';

console.log(translations);
/*
* {
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
* }
*/
```

### Multiple translations for some languages

If you have the same translation for more than one language, you can separate their indexes by `_` in the translation key so you don't have to repeat it.

YAML File 'translations.yaml':

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

JS:

```
import translations from './translations.yaml';

console.log(translations);
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
