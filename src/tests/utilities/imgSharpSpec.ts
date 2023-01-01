import sharpResizeImg from '../../utilities/imgSharp';
import path from 'path';

// const thumbDir=path.resolve(__dirname,`../../assets/images/thumb/fjord.jpg`);
const fullDir = path.resolve(
    __dirname,
    `../../../assets/images/full/fjord.jpg`
);

describe('To test image sharp module', () => {
    it('It should return true if image is correctly resized and all details are provided', async () => {
        const imagResize: boolean = await sharpResizeImg(
            300,
            350,
            fullDir,
            'fjord.jpg'
        );
        expect(imagResize).toEqual(true);
    });

    it('It should return false if image is not correctly resized', async () => {
        const fulDir = path.resolve(
            __dirname,
            `../../../assets/images/full/ford.jpg`
        );

        const imagResize: boolean = await sharpResizeImg(
            300,
            300,
            fulDir,
            'fjord.jpg'
        );
        expect(imagResize).toEqual(false);
    });
});
