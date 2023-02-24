import { Schema, model, Document } from 'mongoose';
import { PermissionsType } from 'helpers/permissions';
import { createHistory } from 'utils/plugins/createHistory';

export enum Roles {
	PORTAL_ADMIN = 'portal-admin',
	LAND_OWNER = 'land-owner',
}
export type RoleType = `${Roles}`;

export interface IUser extends Document {
	organisation: string;
	role: RoleType;
	permissions: PermissionsType[];
	email: string;
	password: string;
	name?: string;
	confirmed: boolean;
	phone?: string;
	history?: IUser[];
}

const userSchema: Schema = new Schema(
	{
		organisation: {
			type: Schema.Types.ObjectId,
			ref: 'Organisation',
			required: true,
		},
		role: {
			type: String,
			enum: Roles,
			required: true,
		},
		permissions: [{ type: String }],
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			select: false,
		},
		name: {
			type: String,
		},
		confirmed: {
			type: Boolean,
			default: false,
		},
		phone: {
			type: String,
		},
		history: [
			{
				type: Object,
				select: false,
			},
		],
	},
	{ timestamps: true }
);

userSchema.plugin(createHistory);
const objectModel = model<IUser>('User', userSchema);

export default objectModel;
