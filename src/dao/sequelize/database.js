const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(
    'db_projet',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)
module.exports = sequelize