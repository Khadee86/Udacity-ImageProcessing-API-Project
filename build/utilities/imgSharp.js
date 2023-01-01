"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const sharpResizeImg = (width, height, inputPath, fname) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const thumbDir = path_1.default.resolve(__dirname, `../../assets/images/thumb/`);
        const outPath = path_1.default.join(thumbDir, fname);
        const ImgSharpBuffer = yield (0, sharp_1.default)(inputPath)
            .resize(width, height)
            .toBuffer();
        yield fs_1.promises.writeFile(outPath, ImgSharpBuffer).then(() => { return true; });
        console.log("resize successful");
        return true;
    }
    catch (_a) {
        return false;
    }
});
exports.default = sharpResizeImg;