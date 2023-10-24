'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'Proyectos',
          'convocatoria',
          {
            type: Sequelize.STRING,
            allowNull: true,
          },
          { transaction: t }
        ),
        queryInterface.removeColumn('Proyectos', 'año', { transaction: t }),
        queryInterface.removeColumn('Proyectos', 'subsidio', {
          transaction: t,
        }),
        queryInterface.removeColumn('Proyectos', 'usuario', { transaction: t }),
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Proyectos', 'convocatoria', {
          transaction: t,
        }),
        queryInterface.addColumn(
          'Proyectos',
          'año',
          {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Proyectos',
          'subsidio',
          {
            type: Sequelize.INTEGER,
            allowNull: true,
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'Proyectos',
          'usuario',
          {
            type: Sequelize.STRING,
            allowNull: true,
          },
          { transaction: t }
        ),
      ]);
    });
  },
};
