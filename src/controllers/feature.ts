
import { RequestHandler } from 'express';
import { queryFilter } from 'helpers/filters';

import i18n from 'helpers/i18n';
import Feature from 'models/feature';
import { createMeta } from 'helpers/meta';

export const getFeatures: RequestHandler = async (req, res, next) => {
	try {
		const { data: feature, count } = await queryFilter({
			Model: Feature,
			query: req.query,
			searchFields: [],
		});

		res.json({
			data: feature,
			meta: createMeta({ count }),
		});
	} catch (err) {
		next(err);
	}
};

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

export const getSingleFeature: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		const feature = await Feature.findById(id);

		res.json({
			data: feature,
		});
	} catch (err) {
		next(err);
	}
};
