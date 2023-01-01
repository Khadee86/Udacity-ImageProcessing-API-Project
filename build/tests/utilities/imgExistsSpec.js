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
const imgExists_1 = __importDefault(require("../../utilities/imgExists"));
const path_1 = __importDefault(require("path"));
describe('Image exists module tests', () => {
    it('It should return true if icelandwaterfall.jpg from file full exists', () => __awaiter(void 0, void 0, void 0, function* () {
        const fullDir = path_1.default.resolve(__dirname, `../../../assets/images/full/icelandwaterfall.jpg`);
        const img = (0, imgExists_1.default)(fullDir);
        expect(img).toEqual(true);
    }));
    it('It should return false if khadijah.jpg from file full does not exists', () => __awaiter(void 0, void 0, void 0, function* () {
        const fullDir = path_1.default.resolve(__dirname, `../../../assets/images/full/khadijah.jpg`);
        const img = (0, imgExists_1.default)(fullDir);
        expect(img).toEqual(false);
    }));
});
