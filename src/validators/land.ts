import { body } from 'express-validator';
import i18n from 'helpers/i18n';
import Organisation from 'models/organisation';

export const postLand = [
	body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty(),
	body('mapId', i18n.__('VALIDATOR.MAPID.REQUIRED')).notEmpty(),
	body('organisation', i18n.__('VALIDATOR.ORGANISATION.REQUIRED'))
		.notEmpty()
		.custom(async (value: string) => {
			const organisationExists = await Organisation.exists({ _id: value });
			if (!organisationExists) {
				throw new Error(i18n.__('VALIDATOR.ORGANISATION.NOT_FOUND'));
			}

			return true;
		}),
];

export const putLand = [body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty()];
