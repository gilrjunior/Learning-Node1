const Sequelize = require('sequelize');

//DATABASE CONNECTION
const sequelize = new Sequelize('aplicacao1', 'root', 'admgil', {

    host: 'localhost',
    dialect: 'mysql'

})

module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize

}