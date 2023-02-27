import { Schema, model, Document } from 'mongoose';

interface ILevel extends Document {
	name: string;
	experience: string;
	scene: string;
}

const levelSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		experience: {
			type: Schema.Types.ObjectId,
			ref: 'Experience',
			required: true,
			select: false,
		},
		scene: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const objectModel = model<ILevel>('Level', levelSchema);

export { ILevel };
export default objectModel;
