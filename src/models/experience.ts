import { Schema, model, Document } from 'mongoose';

interface IExperience extends Document {
	name: string;
	land: string;
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
	},
	{ timestamps: true }
);

const objectModel = model<IExperience>('Experience', experienceSchema);

export { IExperience };
export default objectModel;
