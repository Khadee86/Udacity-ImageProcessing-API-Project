import express, { Request, Response } from 'express';
import path from 'path';
import { promises as fsPromises } from 'fs';
import imgExists from '../../utilities/imgExists';
import sharpResizeImg from '../../utilities/imgSharp';

const imgResize = express.Router();

imgResize.get('/', async (req: Request, res: Response): Promise<void> => {
    const widthParam: number = parseInt(req.query.width as string, 10);
    const fileParam = req.query.filename as string;
    const heightParam: number = parseInt(req.query.height as string, 10);

    if (!heightParam || !widthParam || !fileParam) {
        res.status(400).send(
            'Error!please check that your width,height are numbers and filename is a valid string'
        );
        return;
    }

    if (widthParam <= 0 || heightParam <= 0) {
        res.status(400).send(
            'Error!please check that your width and height parameters are positive and are numbers'
        );
        return;
    }

    const fullDir = path.resolve(
        __dirname,
        `../../../assets/images/full/${fileParam}`
    );
    const thumbDir = path.resolve(__dirname, `../../../assets/images/thumb/`);

    if (!imgExists(fullDir)) {
        res.status(400).send(
            'Error!, image does not exist in folder, Please try inputing an image name that exists'
        );
        return;
    }

    try {
        await fsPromises.access(thumbDir);
    } catch {
        await fsPromises.mkdir(thumbDir);
        console.log('dir created');
    }

    const thumbPath = path.resolve(
        __dirname,
        `../../../assets/images/thumb/${fileParam}`
    );
    if (imgExists(thumbPath)) {
        const imageResized = await sharpResizeImg(
            widthParam,
            heightParam,
            fullDir,
            fileParam
        );

        if (!imageResized) {
            res.status(400).send('Error! cannot display the resized image');
        }
        res.status(200).sendFile(thumbPath);
    } else {
        const imgResized = await sharpResizeImg(
            widthParam,
            heightParam,
            fullDir,
            fileParam
        );
        if (!imgResized) {
            res.status(400).send('Error! could not resize image');
        }
        res.status(200).sendFile(thumbPath);
    }
});

export default imgResize;
