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
const imgSharp_1 = __importDefault(require("../../utilities/imgSharp"));
const path_1 = __importDefault(require("path"));
// const thumbDir=path.resolve(__dirname,`../../assets/images/thumb/fjord.jpg`);
const fullDir = path_1.default.resolve(__dirname, `../../../assets/images/full/fjord.jpg`);
describe('To test image sharp module', () => {
    it('It should return true if image is correctly resized and all details are provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const imagResize = yield (0, imgSharp_1.default)(300, 350, fullDir, 'fjord.jpg');
        expect(imagResize).toEqual(true);
    }));
    it('It should return false if image is not correctly resized', () => __awaiter(void 0, void 0, void 0, function* () {
        const fulDir = path_1.default.resolve(__dirname, `../../../assets/images/full/ford.jpg`);
        const imagResize = yield (0, imgSharp_1.default)(300, 300, fulDir, 'fjord.jpg');
        expect(imagResize).toEqual(false);
    }));
});
