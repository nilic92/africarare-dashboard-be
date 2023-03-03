import { Router } from 'express';
import defineRoutes from 'helpers/defineRoutes';

import {
	postFeature as postFeatureController,
	putFeature as putFeatureController,
	deleteFeature as deleteFeatureController,
	getSingleFeature as getSingleFeatureController,
} from 'controllers/feature';
import { postFeature as postFeatureValidator, putFeature as putFeatureValidator } from 'validators/feature';

const router = Router();
defineRoutes(router, [
	{
		method: 'post',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['write:features'],
		validator: postFeatureValidator,
		controller: postFeatureController,
	},
	{
		method: 'put',
		route: '/:id',
		roles: ['portal-admin', 'land-owner'],
		permissions: ['update:features'],
		validator: putFeatureValidator,
		controller: putFeatureController,
	},
	{
		method: 'delete',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['delete:features'],
		controller: deleteFeatureController,
	},
	{
		method: 'get',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['read:features'],
		controller: getSingleFeatureController,
	},
]);

export default router;
