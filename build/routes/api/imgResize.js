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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const imgExists_1 = __importDefault(require("../../utilities/imgExists"));
const imgSharp_1 = __importDefault(require("../../utilities/imgSharp"));
const fileExtension_1 = __importDefault(require("../../utilities/fileExtension"));
const fileName_1 = __importDefault(require("../../utilities/fileName"));
const imgResize = express_1.default.Router();
imgResize.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const widthParam = parseInt(req.query.width, 10);
    const fileParam = req.query.filename;
    const heightParam = parseInt(req.query.height, 10);
    if (!heightParam || !widthParam || !fileParam) {
        res.status(400).send('Error!please check that your width,height are numbers and filename is a valid string');
        return;
    }
    if (widthParam <= 0 || heightParam <= 0) {
        res.status(400).send('Error!please check that your width and height parameters are positive and are numbers');
        return;
    }
    const fullDir = path_1.default.resolve(__dirname, `../../../assets/images/full/${fileParam}`);
    const thumbDir = path_1.default.resolve(__dirname, `../../../assets/images/thumb/`);
    if (!(0, imgExists_1.default)(fullDir)) {
        res.status(400).send('Error!, image does not exist in folder, Please try inputing an image name that exists');
        return;
    }
    try {
        yield fs_1.promises.access(thumbDir);
    }
    catch (_a) {
        yield fs_1.promises.mkdir(thumbDir);
        console.log('dir created');
    }
    const newFname = (0, fileName_1.default)(fileParam);
    const thumbPath = path_1.default.resolve(__dirname, `../../../assets/images/thumb/${newFname}-${widthParam}-${heightParam}.${(0, fileExtension_1.default)(fileParam)}`);
    if (!(0, imgExists_1.default)(thumbPath)) {
        const imageResized = yield (0, imgSharp_1.default)(widthParam, heightParam, fullDir, fileParam);
        if (!imageResized) {
            res.status(400).send('Error! cannot display the resized image');
        }
    }
    res.status(200).sendFile(thumbPath);
}));
exports.default = imgResize;
