// import pdf from 'html-pdf-node';
// import fs from 'fs';
// import path from 'path';
// import { readFile } from 'helpers/readFile';
// import { IInvoice } from 'models/invoice';
// import Partner, { IPartner } from 'models/partner';
// import Sale, { ISale } from 'models/sale';
// import Product from 'models/product';
// import { IOrganisation } from 'models/organisation';
// import { priceFormatter } from 'utils/formatters/priceFormatter';
// import { dateFormatter } from 'utils/formatters/dateFormatter';
// import { quantityFormatter } from 'utils/formatters/quantityFormatter';

// export const createInvoicePDF = async (organisation: IOrganisation, invoice: IInvoice) => {
// 	const partner = (await Partner.findById(invoice.partner)) as IPartner;
// 	const sale = (await Sale.findById(invoice.sale)) as ISale;

// 	const products = await Promise.all(
// 		sale.products.map(async (product) => {
// 			const productObject = await Product.findById(product.product);
// 			return {
// 				description: productObject?.name,
// 				ppu: priceFormatter(product.pricePerUnit),
// 				amount: quantityFormatter({ quantity: product.quantity, unit: productObject?.unit }),
// 				price_net: priceFormatter(product.priceNet),
// 				vat: sale.vatRate,
// 				vat_amount: priceFormatter(product.price - product.priceNet),
// 				row_total: priceFormatter(product.price),
// 			};
// 		})
// 	);

// 	const content = await readFile({
// 		path: path.join(__dirname, './templates/invoice.jade'),
// 		context: {
// 			// TITLES
// 			document_title: 'Račun-Otpremnica',
// 			number_title: 'Br. Fakture',
// 			sale_date_title: 'Datum Prometa',
// 			date_title: 'Datum Fakture',
// 			due_date_title: 'Rok Plaćanja',
// 			account_number_title: 'Broj računa',
// 			vat_title: 'PIB',
// 			registration_number_title: 'Matični Broj',
// 			bottom_notice: 'Faktura napravljena na ',
// 			products_header_number: "Br.",
// 			products_header_products: 'Opis',
// 			products_header_ppu: 'Cena po jedinici',
// 			products_header_amount: 'Količina',
// 			products_header_price_net: 'Cena (Neto)',
// 			products_header_vat: 'PDV Stopa',
// 			products_header_vat_amount: 'PDV',
// 			products_header_total: 'Ukupno',
// 			subtotal_title: 'Ukupno',
// 			tax_notation: 'PDV',
// 			total_title: 'Ukupno sa PDV-om',
// 			note_title: 'Napomena',
// 			// SENT FROM
// 			logo: 'https://backend.destiliraj.rs/public/images/destiliraj-logo.png',
// 			company_from: organisation.name,
// 			email_from: organisation.email,
// 			address_from: organisation.address,
// 			zip_from: organisation.postcode,
// 			city_from: organisation.city,
// 			country_from: 'Srbija',
// 			vat_from: organisation.vat,
// 			registration_number_from: organisation.registrationNumber,
// 			account_number: organisation.bank?.accountNumber ?? '',
// 			// SEND TO
// 			company_to: partner.name,
// 			mail_to: partner.email,
// 			address_to: partner.address,
// 			zip_to: partner.postcode,
// 			city_to: partner.city,
// 			country_to: 'Srbija',
// 			vat_to: partner.vat,
// 			registration_number_to: partner.registrationNumber,
// 			// INVOICE DATA
// 			number: invoice.code,
// 			sale_date: dateFormatter(sale.date),
// 			date: dateFormatter(invoice.date),
// 			due_date: dateFormatter(invoice.dueDate),
// 			note: invoice.note || 'Nema napomena',
// 			// PRODUCTS
// 			products,
// 			// TOTAL
// 			subtotal: priceFormatter(sale.priceNet),
// 			tax_rate: sale.vatRate,
// 			tax: priceFormatter(sale.price - sale.priceNet),
// 			total: priceFormatter(sale.price),
// 		},
// 	});

// 	const result = await pdf.generatePdf(
// 		{ content },
// 		{
// 			format: 'A4',
// 			args: ['--no-sandbox', '--disable-setuid-sandbox'],
// 		}
// 	);

// 	const nameOfPDF = `/uploads/invoices/${organisation.name}-${invoice.code}-${Date.now()}.pdf`;
// 	fs.writeFileSync(path.join('./', nameOfPDF), result);

// 	return `${nameOfPDF}`;
// };

// export const deleteInvoicePDF = (nameOfPDF: string | undefined) => {
// 	if (!nameOfPDF) return;

// 	if (!fs.existsSync(path.join('./', nameOfPDF))) return;

// 	fs.unlinkSync(path.join('./', nameOfPDF));
// };
