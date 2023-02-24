import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import i18n from 'helpers/i18n';
import User, { Roles, RoleType } from 'models/user';

const auth: (roles: RoleType[]) => RequestHandler = (roles) => async (req, res, next) => {
	try {
		if (req?.headers?.authorization) {
			const authorization = req.headers.authorization.split(' ')[1];
			const decoded = jwt.verify(authorization, process.env.DECODE_KEY ?? '');

			const { id } = decoded as { id: string };
			const user = await User.findById(id);
			if (!user) {
				res.status(403).json({ message: i18n.__('MIDDLEWARE.AUTH.USER_NOT_FOUND') });
			} else if (!roles.includes(user.role)) {
				res.status(403).json({ message: i18n.__('MIDDLEWARE.AUTH.NOT_AUTHORIZED') });
			} else {
				let organisationId = user.organisation;

				if (user.role === Roles.PORTAL_ADMIN && req.query?.organisation) {
					organisationId = `${req.query.organisation}`;
				}

				req.auth = {
					id,
					organisationId,
				};
				next();
			}
		} else res.status(403).json({ message: i18n.__('MIDDLEWARE.AUTH.MISSING_TOKEN') });
	} catch (err) {
		res.status(500).json({ message: i18n.__('GLOBAL.ERROR.NETWORK') });
	}
};

export default auth;
