const Sequelize = require("sequelize");

const db = {};
const sequelize = new Sequelize(
	"bfilmfxyq1b7eyf1d5yi",
	"u18k7zd2kk4pc5dj",
	"u18k7zd2kk4pc5dj",
	{
		host: "bfilmfxyq1b7eyf1d5yi-mysql.services.clever-cloud.com",
		port: "3306",
		dialect: "mysql",
		operatorAliases: false,
		pool: {
			max: 10,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);

db.sequelize = sequelize;

module.exports = db;
