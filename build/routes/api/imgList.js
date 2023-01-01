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
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const fileExtension_1 = __importDefault(require("../../utilities/fileExtension"));
const imgList = express_1.default.Router();
const filePath = path_1.default.resolve(__dirname, `../../../assets/images/full`);
// this router is created to list out all the valid image files in full folder
imgList.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let fileList = '';
    try {
        const files = yield fs_1.promises.readdir(filePath);
        files.forEach((file) => {
            // eslint-disable-next-line no-constant-condition
            //displays image files that are of jpg or jpeg format only from folder
            if (((0, fileExtension_1.default)(file)) == 'jpg' || ((0, fileExtension_1.default)(file)) == 'jpeg' || ((0, fileExtension_1.default)(file)) == 'JPEG' || ((0, fileExtension_1.default)(file)) == 'JPG') {
                fileList = fileList + `<p>${file}</p>`;
            }
        });
        res.status(200).send(`<h1><center>Image Processing API Project</center></h1>
        <p>You will find the list of available images fro this project below.</p>
        <p>You can use the images below to specify your filename parameter in the url.</p>
        <p>Here is a sample demo of what you are to put in the url to make it work: http://localhost:3000/api/images?filename=fjord.jpg&width=100&height=200</p>
        <br>` + fileList);
    }
    catch (err) {
        res.status(500).send("Error! Cannot read from Directory");
    }
}));
exports.default = imgList;
