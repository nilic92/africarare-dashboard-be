import { body } from 'express-validator';
import i18n from 'helpers/i18n';
import Experience from 'models/experience';

export const postLevel = [
	body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty(),
	body('experience', i18n.__('VALIDATOR.EXPERIENCE.REQUIRED'))
		.notEmpty()
		.custom(async (value: string) => {
			const experienceExists = await Experience.exists({ _id: value });

			if (!experienceExists) {
				throw new Error(i18n.__('VALIDATOR.EXPERIENCE.NOT_FOUND'));
			}

			return true;
		}),
	body('scene', i18n.__('VALIDATOR.SCENE.REQUIRED')).notEmpty(),
];

export const putLevel = [body('name', i18n.__('VALIDATOR.NAME.REQUIRED')).notEmpty()];
