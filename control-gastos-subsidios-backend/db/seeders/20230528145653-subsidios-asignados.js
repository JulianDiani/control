'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('SubsidiosAsignados', [
      {
        id: 1,
        idProyecto: 1,
        idRubro: 1,
        montoAsignado: 10500.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        idProyecto: 1,
        idRubro: 2,
        montoAsignado: 14500.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        idProyecto: 1,
        idRubro: 3,
        montoAsignado: 8400.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        idProyecto: 1,
        idRubro: 4,
        montoAsignado: 12400.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        idProyecto: 1,
        idRubro: 5,
        montoAsignado: 150000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        idProyecto: 1,
        idRubro: 6,
        montoAsignado: 90000.00,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SubsidiosAsignados', null, {});
  }
};
