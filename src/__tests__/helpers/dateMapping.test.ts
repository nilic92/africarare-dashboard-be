import { populateDates } from '../../helpers/dateMapping';
import dayjs from 'dayjs';

describe('Helper populateDates returns valid dates', () => {
	test('valid month dates for current year', () => {
		const startDate: Date = dayjs().year(2000).startOf('year').toDate();
		const endDate: Date = dayjs().year(2001).startOf('year').toDate();
		expect(populateDates({ startDate, endDate }, [], 'year')).toStrictEqual({
			keys: [
				'2000-01',
				'2000-02',
				'2000-03',
				'2000-04',
				'2000-05',
				'2000-06',
				'2000-07',
				'2000-08',
				'2000-09',
				'2000-10',
				'2000-11',
				'2000-12',
			],
			values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		});
	});
});
