import { Router } from 'express';
import defineRoutes from 'helpers/defineRoutes';

import {
	postExperience as postExperienceController,
	putExperience as putExperienceController,
	deleteExperience as deleteExperienceController,
} from 'controllers/experience';
import {
	postExperience as postExperienceValidator,
	putExperience as putExperienceValidator,
} from 'validators/experience';

const router = Router();
defineRoutes(router, [
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
]);

export default router;
