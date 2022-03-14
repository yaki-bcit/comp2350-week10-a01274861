const is_heroku = process.env.IS_HEROKU || false;
const dbConfigHeroku = "mysql://dsd5n3dc92jki58d:y3fnkt3m7pe1iv2o@eanl4i1omny740jw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gbkh5ozj9a8qgypl";
const dbConfigLocal = "mysql://adbmin:AbI35RicV5LSHm1A@localhost/week-10-lab";

if (is_heroku) {
  var databaseConnectionString = dbConfigHeroku;
} else {
  var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;