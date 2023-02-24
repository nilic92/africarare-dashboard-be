import { body } from 'express-validator';
import i18n from 'helpers/i18n';

import Organisation from 'models/organisation';

export const postOrganisation = [
	body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty(),
	body('email', i18n.__('VALIDATOR.EMAIL.REQUIRED'))
		.notEmpty()
		.isEmail()
		.withMessage(i18n.__('VALIDATOR.EMAIL.NOT_VALID'))
		.custom(async (value: string) => {
			const organisationExists = await Organisation.exists({ email: value });

			if (organisationExists) {
				throw new Error(i18n.__('VALIDATOR.EMAIL.IN_USE'));
			}

			return true;
		}),
	body('city', i18n.__('VALIDATOR.CITY.REQUIRED')).notEmpty(),
	body('address', i18n.__('VALIDATOR.ADDRESS.REQUIRED')).notEmpty(),
	body('postcode', i18n.__('VALIDATOR.POSTCODE.REQUIRED')).notEmpty(),
	body('vat', i18n.__('VALIDATOR.VAT.REQUIRED'))
		.notEmpty()
		.custom(async (value: string) => {
			const organisationExists = await Organisation.exists({ vat: value });

			if (organisationExists) {
				throw new Error(i18n.__('VALIDATOR.VAT.IN_USE'));
			}

			return true;
		}),
	body('registrationNumber', i18n.__('VALIDATOR.REGISTRATION_NUMBER.REQUIRED'))
		.notEmpty()
		.custom(async (value: string) => {
			const organisationExists = await Organisation.exists({ registrationNumber: value });

			if (organisationExists) {
				throw new Error(i18n.__('VALIDATOR.REGISTRATION_NUMBER.IN_USE'));
			}

			return true;
		}),
];

// TODO | Look for duplicates vat and registration number and email
export const putOrganisation = [
	body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty(),
	body('email', i18n.__('VALIDATOR.EMAIL.REQUIRED'))
		.notEmpty()
		.isEmail()
		.withMessage(i18n.__('VALIDATOR.EMAIL.NOT_VALID')),
	body('city', i18n.__('VALIDATOR.CITY.REQUIRED')).notEmpty(),
	body('address', i18n.__('VALIDATOR.ADDRESS.REQUIRED')).notEmpty(),
	body('postcode', i18n.__('VALIDATOR.POSTCODE.REQUIRED')).notEmpty(),
	body('vat', i18n.__('VALIDATOR.VAT.REQUIRED')).notEmpty(),
	body('registrationNumber', i18n.__('VALIDATOR.REGISTRATION_NUMBER.REQUIRED')).notEmpty(),
];
