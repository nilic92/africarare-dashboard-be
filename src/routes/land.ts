import { Router } from 'express';
import defineRoutes from 'helpers/defineRoutes';

import {
	getLands as getLandController,
	postLand as postLandController,
	putLand as putLandController,
	deleteLand as deleteLandController,
	getSingleLand as getSingleLandController,
} from 'controllers/land';
import {
	postLand as postLandValidator,
	putLand as putLandValidator,
} from 'validators/land';

const router = Router();
defineRoutes(router, [

	{
		method: 'get',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['read:lands'],
		controller: getLandController,
	},
	{
		method: 'post',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['write:lands'],
		validator: postLandValidator,
		controller: postLandController,
	},
	{
		method: 'put',
		route: '/:id',
		roles: ['portal-admin', 'land-owner'],
		permissions: ['update:lands'],
		validator: putLandValidator,
		controller: putLandController,
	},
	{
		method: 'delete',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['delete:lands'],
		controller: deleteLandController,
	},
	{
		method: 'get',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['read:lands'],
		controller: getSingleLandController,
	},
]);

export default router;
