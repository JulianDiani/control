'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Convocatorias', [
      {
        id: 1,
        nombre: 'UNAH22-1',
        fechainicio: new Date('Mon Apr 12 2022'),
        fechafin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        nombre: 'UNAH22-2',
        fechainicio: new Date('Mon Nov 07 2022'),
        fechafin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        nombre: 'UNAH23-Marzo',
        fechainicio: new Date('Mon Mar 20 2023'),
        fechafin: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Convocatorias', null, {});
  },
};
