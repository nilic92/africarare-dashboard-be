import { Schema, model, Document } from 'mongoose';

interface ILevel extends Document {
	name: string;
	scene: string;
	features: string[];
}

const levelSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		scene: {
			type: String,
			required: true,
		},
		features: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Feature',
			},
		],
	},
	{ timestamps: true }
);

const objectModel = model<ILevel>('Level', levelSchema);

export { ILevel };
export default objectModel;
