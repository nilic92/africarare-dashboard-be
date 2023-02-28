import { RequestHandler } from 'express';
import { queryFilter } from 'helpers/filters';

import i18n from 'helpers/i18n';
import { createMeta } from 'helpers/meta';
import Level from 'models/level';

export const getLevels: RequestHandler = async (req, res, next) => {
	try {

		const { data: level, count } = await queryFilter({
			Model: Level,
			query: req.query,
			searchFields: ['name'],
		});

		res.json({
			data: level,
			meta: createMeta({ count }),
		});
	} catch (err) {
		next(err);
	}
}
	

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
