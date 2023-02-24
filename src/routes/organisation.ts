import { Router } from 'express';
import defineRoutes from 'helpers/defineRoutes';

import {
	getOrganisations as getOrganisationsController,
	postOrganisation as postOrganisationController,
	putOrganisation as putOrganisationController,
	deleteOrganisation as deleteOrganisationController,
	deactivateOrganisation as deactivateOrganisationController,
	getMineOrganisation as getMineOrganisationController,
	getSingleOrganisation as getSingleOrganisationController,
} from 'controllers/organisation';
import {
	postOrganisation as postOrganisationValidator,
	putOrganisation as putOrganisationValidator,
} from 'validators/organisation';

const router = Router();
defineRoutes(router, [
	{
		method: 'get',
		route: '/mine',
		roles: ['portal-admin', 'land-owner'],
		controller: getMineOrganisationController,
	},
	{
		method: 'get',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['read:organisations'],
		controller: getOrganisationsController,
	},
	{
		method: 'post',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['write:organisations'],
		validator: postOrganisationValidator,
		controller: postOrganisationController,
	},
	{
		method: 'put',
		route: '/:id',
		roles: ['portal-admin', 'land-owner'],
		permissions: ['update:organisations'],
		validator: putOrganisationValidator,
		controller: putOrganisationController,
	},
	{
		method: 'delete',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['delete:organisations'],
		// validator: deleteOrganisationValidator, // TODO | Validator missing
		controller: deleteOrganisationController,
	},
	{
		method: 'delete',
		route: '/deactivate/:id',
		roles: ['portal-admin'],
		permissions: ['delete:organisations'],
		// validator: deactivateOrganisationValidator, // TODO | Validator missing
		controller: deactivateOrganisationController,
	},
	{
		method: 'get',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['read:organisations'],
		controller: getSingleOrganisationController,
	},
]);

export default router;
