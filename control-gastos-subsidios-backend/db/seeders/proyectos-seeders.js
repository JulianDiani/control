'use strict';
// seeders compras

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Proyectos', [
      {
        titulo:
          'Plataforma abierta de gestion de camaras IP y aplicaciones moviles para la seguridad civil ciudadana',
        tipo: 'Proyecto',
        organismo: 'UNAHUR',
        lineaFinanciamiento: 'Programas I+D UNAHUR',
        año: '2020/09/18',
        unidadAcademica: 'Instituto de Tecnología e Ingeniería',
        areaTematica: 'Seguridad informática',
        subsidio: 585000,
        fechaInicio: '2020/09/18',
        fechaFin: '2022/09/18',
        fechaInicioGastos: '2020/12/18',
        numeroProyecto: 7567,
        numeroExpediente: 1646,
        numeroResolucion: 31285,
        director: 'D amato, Juan Pablo',
        codirector: 'Dominguez, Leonardo Daniel',
        usuario: 'artigas',
        resumen:
          'Plataforma de cámaras y sensores apoya seguridad en ciudades globales con técnicas de análisis automatizado y acceso a recursos para otras entidades, mejorando eficiencia y transparencia de organismos públicos.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo:
          'Desarrollo de software para la monitorización y control de la calidad del aire en tiempo real',
        tipo: 'Proyecto',
        organismo: 'UNAHUR',
        lineaFinanciamiento:
          'Proyectos de Investigación Científica y Tecnológica',
        año: '2021/03/01',
        unidadAcademica: 'Instituto de Ingeniería y Ciencias Hídricas',
        areaTematica: 'Tecnologías de la Información y las Comunicaciones',
        subsidio: 950000,
        fechaInicio: '2021/03/01',
        fechaFin: '2024/03/01',
        fechaInicioGastos: '2021/06/01',
        numeroProyecto: 6789,
        numeroExpediente: 1500,
        numeroResolucion: 387,
        director: 'García, Martín',
        codirector: 'López, Ana',
        usuario: 'artigas',
        resumen:
          'Desarrollo de un software para monitorear y controlar la calidad del aire en tiempo real mediante sensores y algoritmos de aprendizaje automático para generar alertas y mejorar la toma de decisiones en la gestión ambiental.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo:
          'Desarrollo de un software de gestión de recursos humanos para pequeñas y medianas empresas',
        tipo: 'Proyecto',
        organismo: 'UNAHUR',
        lineaFinanciamiento:
          'Programa de Desarrollo de la Pequeña y Mediana Empresa',
        año: '2022/03/01',
        unidadAcademica: 'Instituto de Ciencias Económicas',
        areaTematica: 'Gestión empresarial',
        subsidio: 900000,
        fechaInicio: '2022/03/01',
        fechaFin: '2024/03/01',
        fechaInicioGastos: '2022/06/01',
        numeroProyecto: 1234,
        numeroExpediente: 9876,
        numeroResolucion: 555,
        director: 'Martinez, Ana',
        codirector: 'García, Pablo',
        usuario: 'artigas',
        resumen:
          'Desarrollo de software para gestión de recursos humanos en PYMES. Control de sueldos, asistencia, vacaciones y licencias. Adaptable y accesible a empresas con presupuestos reducidos. En colaboración con empresas piloto.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Proveedores', null, {});
  },
};
