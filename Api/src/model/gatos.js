const gatos = (sequelize, DataTypes) => {
  const Gatos = sequelize.define('Gato', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    arquivo: {
      type: DataTypes.STRING
    },
    nome: {
      type: DataTypes.STRING
    },
    descricao: {
      type: DataTypes.STRING
    },
    adotado: {
      type: DataTypes.BOOLEAN
    },
    nomeArquivo: {
      type: DataTypes.TEXT('long')
    }},{
      tableName: 'gato'
  })
  return Gatos
}

module.exports = gatos