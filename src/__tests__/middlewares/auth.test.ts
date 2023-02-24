import authMiddleware from '../../middlewares/auth';
import i18n from 'i18n';

describe('Middleware auth returns valid response if there is no token', () => {
	test('responds with 403 when there is no token', () => {
		const req = {};
		const res: any = { json: jest.fn(() => res), status: jest.fn(() => res) };
		const next = jest.fn();

		authMiddleware([])(req as any, res, next);
		expect(next).not.toHaveBeenCalled();
		expect(res.status).toHaveBeenCalledWith(403);
		expect(res.status).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith({ message: i18n.__('MIDDLEWARE.AUTH.MISSING_TOKEN') });
		expect(res.json).toHaveBeenCalledTimes(1);
	});
});
