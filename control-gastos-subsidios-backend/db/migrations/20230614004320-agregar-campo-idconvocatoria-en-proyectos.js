'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Proyectos', 'idconvocatoria', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Convocatorias',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Proyectos', 'idconvocatoria');
  },
};
