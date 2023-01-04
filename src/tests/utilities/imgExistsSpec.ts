import imgExists from '../../utilities/imgExists';
import path from 'path';

describe('Image exists module tests', () => {
    it('It should return true if icelandwaterfall.jpg from file full exists', async (): Promise<void> => {
        const fullDir = path.resolve(
            __dirname,
            `../../../assets/images/full/icelandwaterfall.jpg`
        );
        const img = imgExists(fullDir);
        expect(img).toEqual(true);
    });

    it('It should return false if khadijah.jpg from file full does not exists', async (): Promise<void> => {
        const fullDir = path.resolve(
            __dirname,
            `../../../assets/images/full/khadijah.jpg`
        );
        const img = imgExists(fullDir);
        expect(img).toEqual(false);
    });
});
