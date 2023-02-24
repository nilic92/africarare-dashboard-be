import { Schema } from 'mongoose';

export const createHistory = (schema: Schema) => {
	schema.pre('findOneAndUpdate', async function (next) {
		const historyObject: any = {};

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		const rawObject = await this.findOne({ _id: this._conditions._id }).populate('history').clone();

		Object.keys(rawObject._doc).forEach((key) => {
			if (key !== 'history') {
				historyObject[key] = rawObject[key];
			}
		});

		let hasChanged = false;

		Object.keys(historyObject).forEach((key) => {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			if (this._update[key] && this._update[key] !== historyObject[key]) {
				hasChanged = true;

				historyObject.updatedProperties = [...(historyObject.updatedProperties ?? []), key];
			}
		});

		if (hasChanged) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-expect-error
			this._update.history = [historyObject, ...rawObject._doc.history];
		}

		next();
	});
};
