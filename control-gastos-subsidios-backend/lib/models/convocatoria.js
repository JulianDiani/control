import { Model, DataTypes } from 'sequelize';

export default class Convocatorias extends Model {
  static // associate(models) {
  // define association here
  // }
  init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
        fechainicio: DataTypes.DATE,
        fechafin: DataTypes.DATE,
      },
      {
        sequelize,
        modelName: 'Convocatorias',
      }
    );
  }
  static associate(Model) {
    Convocatorias.hasMany(Model.Proyectos, { foreignKey: 'idconvocatoria' });
  }
}
