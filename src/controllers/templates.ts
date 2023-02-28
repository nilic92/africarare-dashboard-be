import { RequestHandler } from 'express';
import path from 'path';

export const renderInvitaitonMail: RequestHandler = async (req, res, next) => {
	try {
		res.render(path.join(__dirname, '../utils/mailer/templates/invitation'), {
			welcome_label: 'Welcome!',
			description_label:
				'Dobrodošli na aplikaciju Destiliraj! Klikom na dugme "Registruj se" vodimo Vas na formu za unos podataka kako bi dobili pristup vašoj destileriji',
			confirm_account_label: 'Registruj se',
			additional_label:
				'Poštovani, nemojte odgovarati na ovaj mejl, ovaj mejl je informativnog karaktera i automatizovano se šalje dodatim korisnicima sistema',
			organisation_name: 'Africarare Dashboard',
			user_id: '1234',
		});
	} catch (err) {
		next(err);
	}
};
