"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const translation_markup_1 = require("@shiftcode/translation-markup");
function default_1(source) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const translationContent = yield translation_markup_1.getJSTranslation({
            yamlLangContent: source
        });
        return translationContent;
    });
}
exports.default = default_1;
//# sourceMappingURL=main.js.map