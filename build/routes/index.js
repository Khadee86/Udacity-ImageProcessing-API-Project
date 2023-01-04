"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imgList_1 = __importDefault(require("./api/imgList"));
const imgResize_1 = __importDefault(require("./api/imgResize"));
const viewImage_1 = __importDefault(require("./api/viewImage"));
const routes = express_1.default.Router();
routes.use('/', imgList_1.default);
routes.use('/images', imgResize_1.default);
routes.use('/image', viewImage_1.default);
exports.default = routes;
