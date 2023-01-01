import getFileExtension from '../../utilities/fileExtension';

describe('To test an return the extension of a file', () => {
    it('It should return jpg as the file extension of fjord.jpg', async () => {
        const fileExtend = getFileExtension('fjord.jpg');
        expect(fileExtend).toEqual('jpg');
    });
});
