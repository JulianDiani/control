'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        usuario: 'azurduy',
        contraseña: '123456',
        rol: 'admin',
        nombre: 'Juana',
        apellido: 'Azurduy',
        fechaNacimiento: '1780-07-12',
        avatarUrl: 'http://www.laizquierdadiario.com/IMG/arton21559.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: 'artigas',
        contraseña: '123456',
        rol: 'otro',
        nombre: 'José',
        apellido: 'Artigas',
        contraseña: '123456',
        fechaNacimiento: '1764-06-19',
        avatarUrl:
          'https://www.famousbirthdays.com/faces/artigas-jose-image.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        usuario: 'bolivar',
        contraseña: '123456',
        rol: 'otro',
        nombre: 'Simón',
        apellido: 'Bolívar',
        fechaNacimiento: '1783-04-24',
        avatarUrl:
          'https://img.goraymi.com/2019/01/15/95f0f23f742a6f7a28fd225745095d04_lg.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
