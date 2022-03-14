const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "eanl4i1omny740jw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "dsd5n3dc92jki58d",
	password: "y3fnkt3m7pe1iv2o",
	database: "gbkh5ozj9a8qgypl",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "adbmin",
	password: "AbI35RicV5LSHm1A",
	database: "week-10-lab",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		