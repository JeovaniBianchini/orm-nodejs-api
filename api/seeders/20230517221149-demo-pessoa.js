'use strict';

/*@type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Pessoas', [
    {
      nome: 'Ana Souza',
      ativo: true,
      email: 'ana@ana.com',
      usuario: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      nome: 'José',
      ativo: true,
      email: 'jose@josse.com',
      usuario: 'estudante',
      createdAt: new Date(),
      updatedAt: new Date() 
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
   await queryInterface.bulkDelete('Pessoas', null, {});
    
  }
};
