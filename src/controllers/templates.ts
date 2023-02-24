import { RequestHandler } from 'express';
import path from 'path';

export const renderInvoice: RequestHandler = async (req, res, next) => {
	try {
		res.render(path.join(__dirname, '../utils/invoice/templates/invoice'), {
			// TITLES
			document_title: 'Račun-Otpremnica',
			number_title: 'Br. Fakture',
			sale_date_title: 'Datum Prometa',
			date_title: 'Datum Fakture',
			due_date_title: 'Rok Plaćanja',
			account_number_title: 'Broj računa',
			vat_title: 'PIB',
			registration_number_title: 'Matični Broj',
			bottom_notice: 'Faktura napravljena na ',
			products_header_number: 'Br.',
			products_header_products: 'Naziv Proizvoda',
			products_header_ppu: 'Cena po jedinici',
			products_header_amount: 'Količina',
			products_header_price_net: 'Cena (Neto)',
			products_header_vat: 'PDV Stopa',
			products_header_vat_amount: 'PDV',
			products_header_total: 'Ukupno',
			subtotal_title: 'Ukupno',
			tax_notation: 'PDV',
			total_title: 'Ukupno sa PDV-om',
			note_title: 'Napomena',
			// SENT FROM
			logo: 'https://backend.destiliraj.rs/public/images/destiliraj-logo.png',
			company_from: 'Destiliraj DOO',
			email_from: 'destiliraj@gmail.com',
			address_from: 'Čairksa 12a-1',
			zip_from: '18110',
			city_from: 'Niš',
			country_from: 'Srbija',
			vat_from: '1241512413',
			registration_number_from: '21412512',
			account_number: '123642136236',
			// SEND TO
			company_to: 'Preporod DOO',
			mail_to: 'preporodnis@gmail.com',
			address_to: 'Svetislava Trgojevića 45',
			zip_to: '18000',
			city_to: 'Niš',
			country_to: 'Srbija',
			vat_to: '31251252',
			registration_number_to: '1235123',
			// INVOICE DATA
			number: 'FA0001',
			sale_date: '01/01/2022',
			date: '01/01/2022',
			due_date: '01/02/2022',
			note: 'Nema napomena',
			// PRODUCTS
			products: [
				{
					description: 'Flasa Rakije Dunje',
					ppu: '350 RSD',
					amount: '1 kom',
					price_net: '350 RSD',
					vat: '10',
					vat_amount: '35 RSD',
					row_total: '385 RSD',
				},
				{
					description: 'Flasa Rakije Dunje',
					ppu: '350 RSD',
					amount: '1 kom',
					price_net: '350 RSD',
					vat: '10',
					vat_amount: '35 RSD',
					row_total: '385 RSD',
				},
				{
					description: 'Flasa Rakije Dunje',
					ppu: '350 RSD',
					amount: '1 kom',
					price_net: '350 RSD',
					vat: '10',
					vat_amount: '35 RSD',
					row_total: '385 RSD',
				},
			],
			// TOTAL
			subtotal: '350 RSD',
			tax_rate: '10',
			tax: '35 RSD',
			total: '385 RSD',
		});
	} catch (err) {
		next(err);
	}
};

export const renderInvitaitonMail: RequestHandler = async (req, res, next) => {
	try {
		res.render(path.join(__dirname, '../utils/mailer/templates/invitation'), {
			welcome_label: 'Dobrodosli!',
			description_label:
				'Dobrodošli na aplikaciju Destiliraj! Klikom na dugme "Registruj se" vodimo Vas na formu za unos podataka kako bi dobili pristup vašoj destileriji',
			confirm_account_label: 'Registruj se',
			additional_label:
				'Poštovani, nemojte odgovarati na ovaj mejl, ovaj mejl je informativnog karaktera i automatizovano se šalje dodatim korisnicima sistema',
			organisation_name: 'Destiliraj',
			user_id: '1234',
		});
	} catch (err) {
		next(err);
	}
};
