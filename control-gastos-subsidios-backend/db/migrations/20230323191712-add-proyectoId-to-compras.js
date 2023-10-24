'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Compras', 'idProyecto', {
      type: Sequelize.INTEGER,
      refereces: {
        model: 'Proyectos',
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Compras', 'idProyecto');
  },
};
