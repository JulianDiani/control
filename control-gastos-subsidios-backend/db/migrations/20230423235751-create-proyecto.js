'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Proyectos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      tipo: {
        type: Sequelize.STRING,
      },
      organismo: {
        type: Sequelize.STRING,
      },
      lineaFinanciamiento: {
        type: Sequelize.STRING,
      },
      año: {
        type: Sequelize.DATE,
      },
      unidadAcademica: {
        type: Sequelize.STRING,
      },
      areaTematica: {
        type: Sequelize.STRING,
      },
      subsidio: {
        type: Sequelize.STRING,
      },
      fechaInicio: {
        type: Sequelize.DATE,
      },
      fechaFin: {
        type: Sequelize.DATE,
      },
      fechaInicioGastos: {
        type: Sequelize.STRING,
      },
      numeroProyecto: {
        type: Sequelize.INTEGER,
      },
      numeroExpediente: {
        type: Sequelize.INTEGER,
      },
      numeroResolucion: {
        type: Sequelize.INTEGER,
      },
      director: {
        type: Sequelize.STRING,
      },
      codirector: {
        type: Sequelize.STRING,
      },
      usuario: {
        type: Sequelize.STRING,
      },
      resumen: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Proyectos');
  },
};
