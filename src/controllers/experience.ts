import { RequestHandler } from 'express';
import { queryFilter } from 'helpers/filters';

import i18n from 'helpers/i18n';
import Experience from 'models/experience';
import { createMeta } from 'helpers/meta';

export const getExperiences: RequestHandler = async (req, res, next) => {
	try {
		const { data: experiences, count } = await queryFilter({
			Model: Experience,
			query: req.query,
			searchFields: ['name'],
			populate: [{ path: 'levels' }, { path: 'features' }, { path: 'levels', populate: { path: 'features' } }],
			// populate: 'levels levels.features features',
		});

		res.json({
			data: experiences,
			meta: createMeta({ count }),
		});
	} catch (err) {
		next(err);
	}
};

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

export const getSingleExperience: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		const experience = await Experience.findById(id);

		res.json({
			data: experience,
		});
	} catch (err) {
		next(err);
	}
};
