const { Model, DataTypes } = require('sequelize');

class Aluno extends Model{
    static init(sequelize){
        super.init({
            rga: DataTypes.STRING,
            nome: DataTypes.STRING,
            curso: DataTypes.STRING,
            situacao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Aluno;