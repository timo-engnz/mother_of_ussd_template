var env = process.env.NODE_ENV || 'development';
var default_config = require('../config/defaults.json')[env];
var database_config = require('../config/database.json')[env];

class Index {

    constructor() {
        this.config = database_config;
        this.allowLogging = "";
        this.models = {};
    }

    init() {
        return this.connectToDb().then(result => {
            return this
        })
    }

    async checkIfExist(params) {
        let {session, msisdn} = params;

        return {
            status: false, data:
                {
                    name: "Timothy",
                }
        };

    }

    async loginUser(params) {
        let {session, msisdn} = params;

        return {
            status: true, data:{}
        };

    }

    connectToDb() {
        return new Promise(resolve => {
            return resolve(this)
        })

    }

    /**

     connectToDb() {
        this.sequelize = new Sequelize(
            this.config['database'],
            this.config['username'],
            this.config['password'],
            {
                logging: this.allowLogging.includes("db") ? console.log : false,
                host: this.config['host'],
                port: this.config['port'],
                dialect: this.config['dialect'],
                // dialectOptions: {
                //     options: {
                //         encrypt: true,
                //     }
                // },
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                define: {
                    timezone: '+03:00',
                    underscored: false,
                    freezeTableName: false,
                    charset: 'utf8',
                    dialectOptions: {
                        collate: 'utf8_general_ci'
                    },
                    timestamps: false
                },
            }
        );

        this.models.Users = (require('./models/Users'))(this.sequelize, Sequelize);

        return this.sequelize
            .authenticate()

    }


     */

}


function init() {
    return new Index().init()
}

module.exports = {init};