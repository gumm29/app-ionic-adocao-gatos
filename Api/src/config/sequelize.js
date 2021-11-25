const Sequelize = require('sequelize')

if(process.env.NODE_ENV != 'production'){
  const config = require('./bd')
  sequelize = new Sequelize(config)
}else{
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }})
}

module.exports = sequelize