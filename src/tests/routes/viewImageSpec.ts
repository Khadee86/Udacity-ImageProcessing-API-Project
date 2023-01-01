import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('To test ViewImage Page endpoint response /api/image', () => {
    it('It should return 200 if image from filename=fjord.jpg is displayed', async (): Promise<void> => {
        const response = await request.get('/api/image?filename=fjord.jpg');
        expect(response.status).toBe(200);
    });

    it('It should return 400 if image from filename=fjord.jpg is not part of full folder and cannot be displayed', async (): Promise<void> => {
        const response = await request.get('/api/image?filename=khadijah.jpg');
        expect(response.status).toBe(400);
    });
});
