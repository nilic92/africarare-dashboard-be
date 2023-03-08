import { body } from 'express-validator';
import i18n from 'helpers/i18n';
import { FeatureTypeEnum } from 'models/feature';
// import Experience from 'models/feature';

// import Level from 'models/level';

export const postFeature = [
	// body('experience', i18n.__('VALIDATOR.EXPERIENCE.REQUIRED'))
	// 	.notEmpty()
	// 	.custom(async (value: string) => {
	// 		const experienceExists = await Experience.exists({ _id: value });

	// 		if (!experienceExists) {
	// 			throw new Error(i18n.__('VALIDATOR.EXPERIENCE.NOT_FOUND'));
	// 		}

	// 		return true;
	// 	}),

	// body('level', i18n.__('VALIDATOR.LEVEL.REQUIRED'))
	// 	.notEmpty()
	// 	.custom(async (value: string) => {
	// 		const levelExists = await Level.exists({ _id: value });

	// 		if (!levelExists) {
	// 			throw new Error(i18n.__('VALIDATOR.LEVEL.NOT_FOUND'));
	// 		}

	// 		return true;
	// 	}),

	body('type', i18n.__('VALIDATOR.FEATURE_TYPE.REQUIRED'))
		.notEmpty()
		.isIn(Object.values(FeatureTypeEnum))
		.withMessage(i18n.__('VALIDATOR.FEATURETYPE.ONE_OF')),
];

export const putFeature = [
	body('type', i18n.__('VALIDATOR.FEATURE_TYPE.REQUIRED'))
		.notEmpty()
		.isIn(Object.values(FeatureTypeEnum))
		.withMessage(i18n.__('VALIDATOR.FEATURETYPE.ONE_OF')),
];
