import { getMineOrganisation } from '../../controllers/organisation';
import Organisation from '../../models/organisation';

jest.mock('../../models/organisation');

beforeEach(() => {
	jest.clearAllMocks();
});

describe('Controller Organisation returns valid results', () => {
	test('getOrganisations returns organisation list', async () => {
		const organisationId = 'random-id';

		const req = {
			auth: {
				organisationId,
			},
		};

		const res: any = { json: jest.fn(() => res), status: jest.fn(() => res) };
		const next = jest.fn();

		await getMineOrganisation(req as any, res, next);

		expect(Organisation.findById).toHaveBeenCalledTimes(1);
		expect(Organisation.findById).toHaveBeenCalledWith(organisationId);
		expect(res.json).toHaveBeenCalledTimes(1);
		expect(next).not.toBeCalled();
	});
});
