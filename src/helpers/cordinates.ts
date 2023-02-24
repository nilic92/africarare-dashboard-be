import utf8 from 'utf8';
import axios from 'axios';

/*
    Format such as: POSTCODE, CITY, ADDRESS, NAME
*/
interface IGetCordinates {
	postcode?: string;
	city?: string;
	address?: string;
	name?: string;
}
export const getCordinates = async ({ postcode, city, address, name }: IGetCordinates) => {
	try {
		const query = utf8.encode([postcode, city, address, name].join(', '));
		const url = 'https://maps.googleapis.com/maps/api/geocode/json';
		const { data }: any = await axios.get(url, {
			params: {
				address: query,
				key: process.env.GOOGLE_APIKEY,
			},
		});

		if (!data?.results?.length || !data?.results[0]?.geometry?.location) return null;
		const location = data.results[0].geometry.location;

		return location;
	} catch (err: any) {
		console.log('Error', err);
	}
};
