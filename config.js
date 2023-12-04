var config = {
	debug: false,
	database: {
	    connectionLimit: 500,
	    host: "191.101.0.235",
	    user: "bytes",
	    password: "bytes",
	    database: "bytes",
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