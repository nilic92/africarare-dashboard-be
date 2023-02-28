import { RequestHandler } from 'express';

import i18n from 'helpers/i18n';
import { queryFilter } from 'helpers/filters';
import { createMeta } from 'helpers/meta';
import User, { IUser, Roles } from 'models/user';
import { sendEmailInvitation } from 'utils/mailer';
import { getHistory } from 'utils/models/getHistory';

export const getUsers: RequestHandler = async (req, res, next) => {
	try {
		const { id, organisationId } = req.auth;
		const { data: users, count } = await queryFilter({
			Model: User,
			query: req.query,
			searchFields: ['name', 'email'],
			defaultFilters: { organisation: organisationId, _id: { $ne: id } },
		});

		res.json({
			data: users,
			meta: createMeta({ count }),
		});
	} catch (err) {
		next(err);
	}
};

export const getStatisticsUsers: RequestHandler = async (req, res, next) => {
	try {
		const { organisationId } = req.auth;

		const totalUsers = await User.count({ organisation: organisationId });
		const confirmedUsers = await User.count({ organisation: organisationId, confirmed: true });
		const unconfirmedUsers = await User.count({ organisation: organisationId, confirmed: false });
		const organisationOwners = await User.count({ organisation: organisationId, role: Roles.LAND_OWNER });
		const organisationEmployees = await User.count({ organisation: organisationId, role: Roles.LAND_OWNER });

		const statistics = {
			totalUsers,
			confirmedUsers,
			unconfirmedUsers,
			organisationOwners,
			organisationEmployees,
		};

		res.json({
			data: {
				keys: Object.keys(statistics),
				values: Object.values(statistics),
			},
			meta: {
				statistics,
			},
		});
	} catch (err) {
		next(err);
	}
};

export const postInviteUser: RequestHandler = async (req, res, next) => {
	try {
		const { organisationId } = req.auth;
		const { email, role } = req.body;

		const user = await User.create({
			organisation: organisationId,
			role,
			email,
		});
		await sendEmailInvitation({ organisationId, userId: user._id, email });

		res.json({
			message: i18n.__('CONTROLLER.USER.POST_INVITE_USER.INVITATION_SENT'),
		});
	} catch (err) {
		next(err);
	}
};

export const putUser: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { role, email, name } = req.body;

		await User.findByIdAndUpdate(id, {
			role,
			email,
			name,
		});

		res.json({
			message: i18n.__('CONTROLLER.USER.PUT_USER.UPDATED'),
		});
	} catch (err) {
		next(err);
	}
};

export const deleteUser: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		await User.findByIdAndDelete(id);

		res.json({
			message: i18n.__('CONTROLLER.USER.DELETE_USER.DELETED'),
		});
	} catch (err) {
		next(err);
	}
};

export const postResendEmail: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = (await User.findById(id)) as IUser;

		await sendEmailInvitation({ organisationId: user.organisation, userId: user._id, email: user.email });

		res.json({
			message: i18n.__('CONTROLLER.USER.RESEND_EMAIL.SENDED'),
		});
	} catch (err) {
		next(err);
	}
};

export const getSingleUnconfirmedUser: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;

		const user = await User.findById(id).populate('organisation');

		res.json({
			data: user,
		});
	} catch (err) {
		next(err);
	}
};

export const getSingleUserHistory: RequestHandler = async (req, res, next) => {
	try {
		const { id } = req.params;
		const { property } = req.query;
		const user = await User.findById(id).populate('history');

		let history;

		if (property) {
			history = getHistory(user, property as string);
		} else {
			history = user;
		}

		res.json({
			data: history,
		});
	} catch (err) {
		next(err);
		console.log(err);
	}
};
