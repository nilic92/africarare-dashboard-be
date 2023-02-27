
import { RequestHandler } from 'express';
import { queryFilter } from 'helpers/filters';

import i18n from 'helpers/i18n';
import { createMeta } from 'helpers/meta';
import Land from 'models/land';

export const getLands: RequestHandler = async (req, res, next) => {
	try {
		const { organisationId } = req.auth;

		const { data: lands, count } = await queryFilter({
			Model: Land,
			query: req.query,
			searchFields: ['name'],
			defaultFilters: { organisation: organisationId },
		});

		res.json({
			data: lands,
			meta: createMeta({ count }),
		});
	} catch (err) {
		next(err);
	}
};

export const postLand: RequestHandler = async (req, res, next) => {
	try {
		const { name, organisation, mapId } = req.body;
		
		await Land.create({
			name,
			organisation,
			mapId,
		});

		res.json({
			message: i18n.__('CONTROLLER.LAND.POST_LAND.ADDED'),
		});
	} catch (err) {
		next(err);
	}
};

export const putLand: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, organisation, mapId } = req.body;

		await Land.findByIdAndUpdate(id, {
            name,
			organisation,
			mapId,
		});

		res.json({
			message: i18n.__('CONTROLLER.LAND.PUT_LAND.UPDATED'),
		});
	} catch (err) {
		next(err);
	}
};

export const deleteLand: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		await Land.findByIdAndDelete(id);

		res.json({
			message: i18n.__('CONTROLLER.LAND.DELETE_LAND.DELETED'),
		});
	} catch (err) {
		next(err);
	}
};

export const getSingleLand: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		const land = await Land.findById(id);

		res.json({
			data: land,
		});
	} catch (err) {
		next(err);
	}
};
