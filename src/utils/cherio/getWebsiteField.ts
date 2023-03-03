import axios from 'axios';
import cheerio from 'cherio';

export const getWebstieField = async (url: string, field: string, attribute?: string) => {
	try {
		const { data: html } = await axios.get(url);
		const $ = cheerio.load(html);

		if (attribute) {
			return $(field).attr(attribute);
		}
		return $(field).html();
	} catch (err) {
		return null;
	}
};
