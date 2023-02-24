import { Router } from 'express';
import defineRoutes from 'helpers/defineRoutes';
import {
	renderInvoice as renderInvoiceController,
	renderInvitaitonMail as renderInvitaitonMailController,
} from 'controllers/templates';

const router = Router();
defineRoutes(router, [
	{
		method: 'get',
		route: '/invoice',
		controller: renderInvoiceController,
	},
	{
		method: 'get',
		route: '/mail/invitation',
		controller: renderInvitaitonMailController,
	},
]);

export default router;
