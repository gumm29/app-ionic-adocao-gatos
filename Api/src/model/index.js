const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')
const Gato = require('./gatos')

const gato = Gato(sequelize, Sequelize.DataTypes)

const db = {
  gato,
  sequelize
}

module.exports = db