import { RequestHandler } from 'express';

import i18n from 'helpers/i18n';
import Experience from 'models/experience';


export const postExperience: RequestHandler = async (req, res, next) => {
	try {
		const { name, land } = req.body;

		await Experience.create({
			name,
			land,
		});

		res.json({ 
			message: i18n.__('CONTROLLER.EXPERIENCE.POST_LAND.ADDED'),
		});
	} catch (err) {
		next(err);
	}
};

export const putExperience: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, land } = req.body;

		await Experience.findByIdAndUpdate(id, {
            name,
			land,
		});

		res.json({
			message: i18n.__('CONTROLLER.EXPERIENCE.PUT.UPDATED'),
		});
	} catch (err) {
		next(err);
	}
};

export const deleteExperience: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		await Experience.findByIdAndDelete(id);

		res.json({
			message: i18n.__('CONTROLLER.EXPERIENCE.DELETE.DELETED'),
		});
	} catch (err) {
		next(err);
	}
};
