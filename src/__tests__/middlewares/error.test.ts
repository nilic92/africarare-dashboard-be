import errorMiddleware from '../../middlewares/error';

describe('Middleware error returns valid response if error occured', () => {
	test('responds with 500 for generic Error', () => {
		const message = 'Error Message';

		const error: Error = new Error(message);
		const req = {};
		const res: any = { json: jest.fn(() => res), status: jest.fn(() => res) };
		const next = jest.fn();

		errorMiddleware(error, req as any, res, next);
		expect(next).not.toHaveBeenCalled();
		expect(res.status).toHaveBeenCalledWith(500);
		expect(res.status).toHaveBeenCalledTimes(1);
		expect(res.json).toHaveBeenCalledWith({ message });
		expect(res.json).toHaveBeenCalledTimes(1);
	});
});
