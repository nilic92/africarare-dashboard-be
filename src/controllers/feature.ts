import { RequestHandler } from 'express';
import Experience from 'models/experience';
import Level from 'models/level';

import i18n from 'helpers/i18n';
import Feature from 'models/feature';

export const postFeature: RequestHandler = async (req, res, next) => {
	try {
		const { model, modelId, type } = req.body;

		const feature = await Feature.create({
			type,
		});

		const Model = model === 'experience' ? Experience : Level;
		//@ts-expect-error
		await Model.findByIdAndUpdate(modelId, {
			$push: { features: feature._id },
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
		const { type } = req.body;

		await Feature.findByIdAndUpdate(id, {
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

		for await (const Model of [Experience, Level]) {
			await Model.updateMany(
				{},
				{
					$pull: { features: id },
				}
			);
		}

		res.json({
			data: feature,
		});
	} catch (err) {
		next(err);
	}
};
