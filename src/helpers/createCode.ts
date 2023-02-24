import { Model } from 'mongoose';

const createCode = async (prefix: string, model: Model<any>, organisation: string) => {
	try {
		const objectHighest = await model
			.findOne({ code: { $regex: prefix, $options: 'i' }, organisation })
			.sort('-code')
			.select('code');
		let number = 1;

		if (objectHighest) {
			number = parseInt(objectHighest.code.replace(prefix, '')) + 1;
		}

		return prefix + number.toLocaleString('en-US', { minimumIntegerDigits: 4, useGrouping: false });
	} catch (err) {
		throw new Error();
	}
};

export default createCode;
