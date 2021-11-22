const Sequelize = require('sequelize')
const config = require('./bd')

const sequelize = new Sequelize(config)

module.exports = sequelize