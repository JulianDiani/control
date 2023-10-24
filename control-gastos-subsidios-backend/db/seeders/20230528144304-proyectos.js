'use strict';
// generar seed     npx sequelize-cli seed:generate --name proyectos
// insertar seed    npx sequelize-cli db:seed --seed 20230528144304-proyectos
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
    // seeders proyectos
    await queryInterface.bulkInsert('Proyectos', [
      {
        id: 1,
        titulo: 'Proyecto 1',
        tipo: 'Investigación',
        organismo: 'UNLP',
        lineaFinanciamiento: 'UNLP',
        año: '2021-01-01',
        unidadAcademica: 'Facultad de Informática',
        areaTematica: 'Informática',
        subsidio: 'No',
        fechaInicio: '2021-01-01',
        fechaFin: '2021-12-31',
        fechaInicioGastos: '2021-01-01',
        numeroProyecto: '1',
        numeroExpediente: '1',
        numeroResolucion: '1',
        director: 'Director 1',
        codirector: 'Codirector 1',
        usuario: 'usuario1',
        resumen: 'Resumen 1',
        createdAt: new Date(),
        updatedAt: new Date(),
        idconvocatoria: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    // seeders proyectos
    await queryInterface.bulkDelete('Proyectos', null, {});
  },
};
