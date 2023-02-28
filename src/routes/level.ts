import { Router } from 'express';
import defineRoutes from 'helpers/defineRoutes';

import {
	getLevels as getLevelsController,
	postLevel as postLevelController,
	putLevel as putLevelController,
	deleteLevel as deleteLevelController,
	getSingleLevel as getSingleLevelController,
} from 'controllers/level';
import {
	postLevel as postLevelValidator,
	putLevel as putlevelValidator,
} from 'validators/level';

const router = Router();
defineRoutes(router, [
	{
		method: 'get',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['read:levels'],
		controller: getLevelsController,
	},
	{
		method: 'post',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['write:levels'],
		validator: postLevelValidator,
		controller: postLevelController,
	},
	{
		method: 'put',
		route: '/:id',
		roles: ['portal-admin', 'land-owner'],
		permissions: ['update:levels'],
		validator: putlevelValidator,
		controller: putLevelController,
	},
	{
		method: 'delete',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['delete:levels'],
		controller: deleteLevelController,
	},
	{
		method: 'get',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['read:levels'],
		controller: getSingleLevelController,
	},
]);

export default router;
