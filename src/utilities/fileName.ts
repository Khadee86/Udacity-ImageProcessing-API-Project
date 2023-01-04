// program to get the file name

function getFileName(fname: string) {
    // get file name
    const fileName = fname.split('.').shift();
    return fileName;
}

export default getFileName;
