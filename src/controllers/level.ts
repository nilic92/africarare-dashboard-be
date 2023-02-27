import { RequestHandler } from 'express';

import i18n from 'helpers/i18n';
import Level from 'models/level';


export const postLevel: RequestHandler = async (req, res, next) => {
	try {
		const { name, experience, scene } = req.body;
		await Level.create({
			name,
			experience,
            scene,
		});

		res.json({ 
			message: i18n.__('CONTROLLER.LEVEL.POST.ADDED'),
		});
	} catch (err) {
		next(err);
	}
};

export const putLevel: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
        const { name, experience, scene } = req.body;

		await Level.findByIdAndUpdate(id, {
            name,
			experience,
            scene
		});

		res.json({
			message: i18n.__('CONTROLLER.LEVEL.PUT.UPDATED'),
		});
	} catch (err) {
		next(err);
	}
};

export const deleteLevel: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		await Level.findByIdAndDelete(id);

		res.json({
			message: i18n.__('CONTROLLER.LEVEL.DELETE.DELETED'),
		});
	} catch (err) {
		next(err);
	}
};
