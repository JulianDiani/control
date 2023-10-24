'use strict';
// modulo compras migracion
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Compras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fecha: {
        type: Sequelize.DATE,
      },
      rubro: {
        type: Sequelize.STRING,
      },
      subrubro: {
        type: Sequelize.STRING,
      },
      numeroCompra: {
        type: Sequelize.INTEGER,
      },
      proveedor: {
        type: Sequelize.STRING,
      },
      monto: {
        type: Sequelize.DECIMAL(20, 2),
      },
      estado: {
        type: Sequelize.STRING,
      },
      factura: {
        type: Sequelize.STRING,
      },
      nombre: {
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
    await queryInterface.dropTable('Compras');
  },
};
