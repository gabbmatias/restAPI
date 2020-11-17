'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('alunos', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rga:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      curso: {
        type: Sequelize.STRING,
      },
      situacao: {
        type: Sequelize.STRING,
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      } ,

    });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('alunos');
  }
};
