// program to get the file extension

function getFileExtension(fileName: string) {
    // get file extension
    const extension = fileName.split('.').pop();
    return extension;
}

export default getFileExtension;
