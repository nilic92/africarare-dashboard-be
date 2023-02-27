
import { RequestHandler } from 'express';

import i18n from 'helpers/i18n';
import Feature from 'models/feature';

export const postFeature: RequestHandler = async (req, res, next) => {
	try {
		const { experience, level, type } = req.body;
		
		await Feature.create({
			experience,
			level,
			type,
		});

		res.json({
			message: i18n.__('CONTROLLER.FEATURE.POST.ADDED'),
		});
	} catch (err) {
		next(err);
	}
};

export const putFeature: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { experience, level, type } = req.body;

		await Feature.findByIdAndUpdate(id, {
            experience,
			level,
			type,
		});

		res.json({
			message: i18n.__('CONTROLLER.FEATURE.PUT.UPDATED'),
		});
	} catch (err) {
		next(err);
	}
};

export const deleteFeature: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		await Feature.findByIdAndDelete(id);

		res.json({
			message: i18n.__('CONTROLLER.FEATUER.DELETE.DELETED'),
		});
	} catch (err) {
		next(err);
	}
};
