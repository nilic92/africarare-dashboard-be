import { RequestHandler } from 'express';
import { getCordinates } from 'helpers/cordinates';
import { queryFilter } from 'helpers/filters';

import i18n from 'helpers/i18n';
import { createMeta } from 'helpers/meta';
import Organisation from 'models/organisation';
import path from 'path';

export const getMineOrganisation: RequestHandler = async (req, res, next) => {
	try {
		const { organisationId } = req.auth;

		const organisation = await Organisation.findById(organisationId);

		res.json({
			data: organisation,
		});
	} catch (err) {
		next(err);
	}
};

export const getOrganisations: RequestHandler = async (req, res, next) => {
	try {
		const { organisationId } = req.auth;

		const { data: organisations, count } = await queryFilter({
			Model: Organisation,
			query: req.query,
			searchFields: ['name', 'email', 'vat', 'registrationNumber'],
			defaultFilters: { _id: { $ne: organisationId } },
		});

		res.json({
			data: organisations,
			meta: createMeta({ count }),
		});
	} catch (err) {
		next(err);
	}
};

export const postOrganisation: RequestHandler = async (req, res, next) => {
	try {
		const { name, email, city, address, postcode, vat, registrationNumber } = req.body;
		const location = await getCordinates({
			postcode,
			city,
			address,
			name,
		});

		await Organisation.create({
			name,
			email,
			city,
			address,
			postcode,
			location,
			vat,
			registrationNumber,
		});

		res.json({
			message: i18n.__('CONTROLLER.ORGANISATION.POST_ORGANISATION.ADDED'),
		});
	} catch (err) {
		next(err);
	}
};

export const putOrganisation: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { name, email, city, address, postcode, vat, registrationNumber, phone, bank } = req.body;

		let logo;
		if (req.file) {
			logo = path.join('./', req.file.path);
		}

		const location = await getCordinates({
			postcode,
			city,
			address,
			name,
		});

		await Organisation.findByIdAndUpdate(id, {
			name,
			email,
			city,
			address,
			postcode,
			location,
			vat,
			registrationNumber,
			phone,
			bank,
			logo,
		});

		res.json({
			message: i18n.__('CONTROLLER.ORGANISATION.PUT_ORGANISATION.UPDATED'),
		});
	} catch (err) {
		next(err);
	}
};

export const deleteOrganisation: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		await Organisation.findByIdAndDelete(id);

		res.json({
			message: i18n.__('CONTROLLER.ORGANISATION.DELETE_ORGANISATION.DELETED'),
		});
	} catch (err) {
		next(err);
	}
};

export const deactivateOrganisation: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		await Organisation.findByIdAndUpdate(id, {
			active: false,
		});

		res.json({
			message: i18n.__('CONTROLLER.ORGANISATION.DELETE_ORGANISATION.DEACTIVATED'),
		});
	} catch (err) {
		next(err);
	}
};

export const getSingleOrganisation: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		const organisation = await Organisation.findById(id);

		res.json({
			data: organisation,
		});
	} catch (err) {
		next(err);
	}
};
