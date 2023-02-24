import dotenv from 'dotenv';
import moduleAlias from 'module-alias';

dotenv.config();
moduleAlias.addAliases({
	helpers: __dirname + '/helpers',
	routes: __dirname + '/routes',
	models: __dirname + '/models',
	controllers: __dirname + '/controllers',
	middlewares: __dirname + '/middlewares',
	validators: __dirname + '/validators',
	utils: __dirname + '/utils',
});

import express from 'express';
import cors from 'cors';

import storage from 'helpers/storage';
import swagger from 'helpers/swagger';
import headersMiddleware from 'middlewares/headers';
import errorMiddleware from 'middlewares/error';
import { i18nMiddleware } from 'helpers/i18n';
import connection from 'helpers/connection';

import routing from 'routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'jade');

swagger(app);
storage(app);
app.use(i18nMiddleware);
app.use(headersMiddleware);
routing(app);
app.use(errorMiddleware);

connection(app);
