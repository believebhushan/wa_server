var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "217.21.84.205",
	    user: "u203451300_test",
	    password: "@User_2001",
	    database: "u203451300_test",
	    charset : "utf8mb4",
	    debug: false,
	    waitForConnections: true,
	    multipleStatements: true
	},
	cors: {
		origin: '*',
 		optionsSuccessStatus: 200
	}
}

module.exports = config; 