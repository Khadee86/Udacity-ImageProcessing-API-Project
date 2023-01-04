"use strict";
// program to get the file name
Object.defineProperty(exports, "__esModule", { value: true });
function getFileName(fname) {
    // get file name
    const fileName = fname.split('.').shift();
    return fileName;
}
exports.default = getFileName;
