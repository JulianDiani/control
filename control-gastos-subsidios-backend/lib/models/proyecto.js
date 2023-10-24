import { Model, DataTypes } from 'sequelize';
export default class Proyecto extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        titulo: DataTypes.STRING,
        tipo: DataTypes.STRING,
        organismo: DataTypes.STRING,
        lineaFinanciamiento: DataTypes.STRING,
        año: DataTypes.DATE,
        unidadAcademica: DataTypes.STRING,
        areaTematica: DataTypes.STRING,
        subsidio: DataTypes.INTEGER,
        fechaInicio: DataTypes.DATE,
        fechaFin: DataTypes.DATE,
        fechaInicioGastos: DataTypes.STRING,
        numeroProyecto: DataTypes.INTEGER,
        numeroExpediente: DataTypes.INTEGER,
        numeroResolucion: DataTypes.INTEGER,
        director: DataTypes.STRING,
        codirector: DataTypes.STRING,
        usuario: DataTypes.STRING,
        resumen: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Proyectos',
      }
    );
  }

  static associate(models) {
    Proyecto.hasMany(models.Compras, {
      foreignKey: 'idProyecto',
    });
  }
}

/*Proyecto.hasMany(Compras, {
  foreignKey: 'idProyecto'
});*/
