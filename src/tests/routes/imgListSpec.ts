import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('To test Image List Page endpoint response /api/', () => {
    it('It should return 200 if image file list is displayed', async (): Promise<void> => {
        const response = await request.get('/api/');
        expect(response.status).toBe(200);
    });
});
