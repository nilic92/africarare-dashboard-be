import { createMeta, createMetaStatistics } from '../../helpers/meta';

describe('Helper createMeta returns valid results meta', () => {
	test('valid pagination for page: 1, limit: 20 and count: 1', () => {
		expect(
			createMeta({
				page: 1,
				limit: 20,
				count: 1,
			})
		).toStrictEqual({
			pagination: {
				currentPage: 1,
				pageSize: 20,
				totalPages: 1,
				totalResults: 1,
			},
		});
	});

	test('valid pagination for page: 2, limit: 50 and count: 151', () => {
		expect(
			createMeta({
				page: 2,
				limit: 50,
				count: 151,
			})
		).toStrictEqual({
			pagination: {
				currentPage: 2,
				pageSize: 50,
				totalPages: 4,
				totalResults: 151,
			},
		});
	});
});

describe('Helper createMetaStatistics returns valid results meta', () => {
	test('valid statistic meta for array 15, 32, 48, 12, 13', () => {
		expect(
			createMetaStatistics({
				values: [15, 32, 48, 12, 13],
			})
		).toStrictEqual({
            statistics: {
                total: 120,
                average: 24,
                max: 48,
                min: 12,
            },
		});
	});
});
