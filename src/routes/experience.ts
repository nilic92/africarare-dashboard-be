import { Router } from 'express';
import defineRoutes from 'helpers/defineRoutes';

import {
	getExperiences as getExperienceController,
	postExperience as postExperienceController,
	putExperience as putExperienceController,
	deleteExperience as deleteExperienceController,
	getSingleExperience as getSingleExperienceController,
} from 'controllers/experience';
import {
	postExperience as postExperienceValidator,
	putExperience as putExperienceValidator,
} from 'validators/experience';

const router = Router();
defineRoutes(router, [
	{
		method: 'get',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['read:experiences'],
		controller: getExperienceController,
	},
	{
		method: 'post',
		route: '/',
		roles: ['portal-admin'],
		permissions: ['write:experiences'],
		validator: postExperienceValidator,
		controller: postExperienceController,
	},
	{
		method: 'put',
		route: '/:id',
		roles: ['portal-admin', 'land-owner'],
		permissions: ['update:experiences'],
		validator: putExperienceValidator,
		controller: putExperienceController,
	},
	{
		method: 'delete',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['delete:experiences'],
		controller: deleteExperienceController,
	},
	{
		method: 'get',
		route: '/:id',
		roles: ['portal-admin'],
		permissions: ['read:experiences'],
		controller: getSingleExperienceController,
	},
]);

export default router;
