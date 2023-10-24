'use strict';
// seeders compras
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Compras', [
      {
        fecha: '2021-11-21',
        rubro: 'Equipamiento',
        subrubro: 'PC y notebooks',
        numeroCompra: '1',
        proveedor: 'Garbarino',
        monto: '110000',
        estado: 'Pendiente',
        factura: 'fac-00001',
        nombre: 'Lenovo 45',
        createdAt: new Date(),
        updatedAt: new Date(),
        idProyecto: 1,
      },
      {
        fecha: '2021-11-22',
        rubro: 'Insumos',
        subrubro: 'Hojas',
        numeroCompra: '2',
        proveedor: 'Papelera Rio de la Plata',
        monto: '500',
        estado: 'Pendiente',
        factura: 'fac-00002',
        nombre: 'Rivadavia',
        createdAt: new Date(),
        updatedAt: new Date(),
        idProyecto: 3,
      },
      {
        fecha: '2021-12-02',
        rubro: 'Equipamiento',
        subrubro: 'Impresora',
        numeroCompra: '1',
        proveedor: 'Garbarino',
        monto: '70000',
        estado: 'Pendiente',
        factura: 'fac-00003',
        nombre: 'HP',
        createdAt: new Date(),
        updatedAt: new Date(),
        idProyecto: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Compras', null, {});
  },
};
