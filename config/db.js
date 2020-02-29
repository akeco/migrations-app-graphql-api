const knex = require('knex');
const knexPostgis = require('knex-postgis');
const knexStringcase = require('knex-stringcase');
const knexfile = require('../knexfile');

const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];
const db = knex(knexStringcase(configOptions));
knexPostgis(db);

module.exports = db;