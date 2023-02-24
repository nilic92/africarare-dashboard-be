import { Schema, model, Document } from 'mongoose';

interface IOrganisation extends Document {
	logo?: string;
	name: string;
	email: string;
	city: string;
	address: string;
	postcode: string;
	location?: {
		lat?: string;
		lng?: string;
	};
	vat: string;
	registrationNumber: string;
	active: boolean;
	phone?: string;
	bank?: {
		name?: string;
		accountNumber?: string;
		foreignAccountNumber?: string;
	};
}

const organisationSchema: Schema = new Schema(
	{
		logo: {
			type: String,
		},
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		city: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		postcode: {
			type: String,
			required: true,
		},
		location: {
			lat: String,
			lng: String,
		},
		vat: {
			type: String,
			required: true,
			unique: true,
		},
		registrationNumber: {
			type: String,
			required: true,
			unique: true,
		},
		active: {
			type: Boolean,
			default: true,
		},
		phone: {
			type: String,
		},
		bank: {
			name: {
				type: String,
			},
			accountNumber: {
				type: String,
			},
			foreignAccountNumber: {
				type: String,
			},
		},
	},
	{ timestamps: true }
);

const objectModel = model<IOrganisation>('Organisation', organisationSchema);

export { IOrganisation };
export default objectModel;
