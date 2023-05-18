'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Matriculas', [{
        status: 'Cancelado',
        estudante_id: 1,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Confirmado',
        estudante_id: 3,
        turma_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Confirmado',
        estudante_id: 3,
        turma_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Matriculas', null, {});
     
  }
};
