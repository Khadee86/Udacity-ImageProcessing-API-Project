import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';
import getFileName from './fileName';
import getFileExtension from './fileExtension';

const sharpResizeImg = async (
    width: number,
    height: number,
    inputPath: string,
    fname: string
): Promise<boolean> => {
    try {
        const thumbDir = path.resolve(__dirname, `../../assets/images/thumb/`);
        const fileName = getFileName(fname);
        const newFname =
            fileName +
            `-${width}-` +
            `${height}.` +
            `${getFileExtension(fname)}`;
        const outPath = path.join(thumbDir, newFname);
        const ImgSharpBuffer = await sharp(inputPath)
            .resize(width, height)
            .toBuffer();

        await fsPromises.writeFile(outPath, ImgSharpBuffer).then(() => {
            return true;
        });

        console.log('resize successful');
        return true;
    } catch {
        return false;
    }
};
export default sharpResizeImg;
