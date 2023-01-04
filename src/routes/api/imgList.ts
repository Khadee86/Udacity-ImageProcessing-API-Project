import express, { Request, Response } from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';
import getFileExtension from '../../utilities/fileExtension';

const imgList = express.Router();
const filePath = path.resolve(__dirname, `../../../assets/images/full`);

// this router is created to list out all the valid image files in full folder
imgList.get('/', async (req: Request, res: Response): Promise<void> => {
    let fileList = '';
    try {
        const files: string[] = await fsPromises.readdir(filePath);
        files.forEach((file: string) => {
            // eslint-disable-next-line no-constant-condition
            //displays image files that are of jpg or jpeg format only from folder
            if (
                getFileExtension(file) == 'jpg' ||
                getFileExtension(file) == 'jpeg' ||
                getFileExtension(file) == 'JPEG' ||
                getFileExtension(file) == 'JPG'
            ) {
                fileList = fileList + `<p>${file}</p>`;
            }
        });
        res.status(200).send(
            `<h1><center>Image Processing API Project</center></h1>
        <p>You will find the list of available images fro this project below.</p>
        <p>You can use the images below to specify your filename parameter in the url.</p>
        <p>Here is a sample demo of what you are to put in the url to make it work: http://localhost:3000/api/images?filename=fjord.jpg&width=100&height=200</p>
        <br>` + fileList
        );
    } catch (err) {
        res.status(500).send('Error! Cannot read from Directory');
    }
});

export default imgList;
