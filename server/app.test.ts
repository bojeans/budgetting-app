import request from 'supertest';
import app from './app';

describe('GET /budget', () => {
    it('responds with JSON', async () => {
        const response = await request(app).get('/budget');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'yay it works' });
    });
});
