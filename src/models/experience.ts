import { Schema, model, Document } from 'mongoose';

interface IExperience extends Document {
	name: string;
	land: string;
	features: string[];
	levels: string[];
}

const experienceSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		land: {
			type: Schema.Types.ObjectId,
			ref: 'Land',
			required: true,
			select: false,
		},
		features: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Feature',
			},
		],
		levels: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Level',
			},
		],
	},
	{ timestamps: true }
);

const objectModel = model<IExperience>('Experience', experienceSchema);

export { IExperience };
export default objectModel;
