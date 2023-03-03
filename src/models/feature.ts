import { Schema, model, Document } from 'mongoose';

export enum FeatureTypeEnum {
	ACCESS = 'access',
	PORTAL = 'portal',
	LEADERBOARD = 'leaderboard',
	CHATLOG = 'chatlog',
	RESTRICTED_PEN_DRAWING = 'restricted-pen-drawing',
	EXPERIENCE_AVATARS = 'experience-avatars',
	PRESENTATION = 'presentation',
	PARTICIPATION = 'participation',
	INFO_PIN = 'info-pin',
}

interface IFeature extends Document {
	type: string;
}

const featureSchema: Schema = new Schema(
	{
		type: {
			type: String,
			enum: FeatureTypeEnum,
			required: true,
		},
	},
	{ timestamps: true }
);

const objectModel = model<IFeature>('Feature', featureSchema);

export { IFeature };
export default objectModel;
