import { RequestHandler } from 'express';

import i18n from 'helpers/i18n';
import Level from 'models/level';
import Experience from 'models/experience';

export const postLevel: RequestHandler = async (req, res, next) => {
	try {
		const { experience, name, scene } = req.body;
		const level = await Level.create({
			name,
			scene,
		});
		await Experience.findByIdAndUpdate(experience, {
			$push: { levels: level._id },
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
		const { name, scene } = req.body;

		await Level.findByIdAndUpdate(id, {
			name,
			scene,
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

		await Experience.updateMany(
			{},
			{
				$pull: { levels: id },
			}
		);

		res.json({
			message: i18n.__('CONTROLLER.LEVEL.DELETE.DELETED'),
		});
	} catch (err) {
		next(err);
	}
};

export const getSingleLevel: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		const level = await Level.findById(id);

		res.json({
			data: level,
		});
	} catch (err) {
		next(err);
	}
};
