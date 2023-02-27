import { Schema, model, Document } from 'mongoose';

interface ILand extends Document {
	name: string;
	organisation: string;
	mapId: number;
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
			select: false,
		},
		mapId: {
			type: Number,
			required: true,
			unique: true,
		},
	},
	{ timestamps: true }
);

const objectModel = model<ILand>('Land', landSchema);

export { ILand };
export default objectModel;
