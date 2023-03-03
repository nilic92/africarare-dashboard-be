import { Schema, model, Document } from 'mongoose';

interface ILand extends Document {
	name: string;
	organisation: string;
	mapId: string;
}

const landSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		organisation: {
			type: Schema.Types.ObjectId,
			ref: 'Organisation',
			required: true,
		},
		mapId: {
			type: String,
			required: true,
			unique: true,
		},
		previewImage: {
			type: String,
		},
	},
	{ timestamps: true }
);

const objectModel = model<ILand>('Land', landSchema);

export { ILand };
export default objectModel;
