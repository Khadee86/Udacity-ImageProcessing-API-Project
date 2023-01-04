import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('To test Image Resize Parameters /api/images', () => {
    it('It should return 400 if image parameters are not completely present e.g. no filename or height/width not a number', async (): Promise<void> => {
        const response = await request.get(
            '/api/images?filename=fjord.jpg&height=name&width=300'
        );
        expect(response.status).toBe(400);
    });
    it('It should return 400 if image parameters height or width are negative', async (): Promise<void> => {
        const response = await request.get(
            '/api/images?filename=fjord.jpg&height=-900&width=300'
        );
        expect(response.status).toBe(400);
    });
});
