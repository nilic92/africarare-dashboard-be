import { Schema, model, Document } from 'mongoose';

export enum FeatureTypeEnum {
	ACCESS = 'access',
	CHATLOG = 'chatlog',
	EXPERIENCE_AVATARS = 'experience-avatars',
}

interface IFeature extends Document {
	experience: string;
	level: string;
	type: string;
}

const featureSchema: Schema = new Schema(
	{
		experience: {
			type: Schema.Types.ObjectId,
			ref: 'Experience',
			required: false,
			select: false,
		},
		level: {
			type: Schema.Types.ObjectId,
			ref: 'Level',
			required: false,
			select: false,
		},
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
