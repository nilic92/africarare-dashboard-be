import { body } from 'express-validator';
import i18n from 'helpers/i18n';
import Land from 'models/land';

export const postExperience = [
	body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty(),
	body('land', i18n.__('VALIDATOR.LAND.REQUIRED'))
		.notEmpty()
		.custom(async (value: string) => {
			const experienceExists = await Land.exists({ _id: value });

			if (!experienceExists) {
				throw new Error(i18n.__('VALIDATOR.LAND.NOT_FOUND'));
			}

			return true;
		}),
];

export const putExperience = [body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty()];
