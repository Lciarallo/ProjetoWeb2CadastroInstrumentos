const { DataTypes } = require('sequelize')
const db = require ('../db/conn')

const Instrumentos = db.define('Instrumentos', {
   
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    nome: {
        type: DataTypes.CHAR(100),
        allowNull: false        
    },
    codigo: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    ultima_calibracao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    frequencia_calibracao_dias:{
        type: DataTypes.INTEGER
    },
    proxima_calibracao:{
        type: DataTypes.DATE
    }
})
module.exports = Instrumentos
