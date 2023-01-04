import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

const sharpResizeImg = async (
    width: number,
    height: number,
    inputPath: string,
    fname: string
): Promise<boolean> => {
    try {
        const thumbDir = path.resolve(__dirname, `../../assets/images/thumb/`);
        const outPath = path.join(thumbDir, fname);
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
