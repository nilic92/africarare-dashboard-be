import mongoose from 'mongoose';
import { Express } from 'express';

const PORT: number | string = process.env.PORT || 8088;

export default function (app: Express) {
	mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://telefon1234:telefon1234@cluster0.tn8r4ph.mongodb.net/africarare-database?retryWrites=true&w=majority');

	const server = app.listen(PORT, () => {
		console.log('Server is on PORT: ', PORT);
	});

	return server;
}
