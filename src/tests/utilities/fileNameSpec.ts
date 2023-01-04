import getFileName from '../../utilities/fileName';

describe('To test an return the name of a file after split from its extension', () => {
    it('It should return fjord as the file name of fjord.jpg', async () => {
        const fileExtend = getFileName('fjord.jpg');
        expect(fileExtend).toEqual('fjord');
    });
});
