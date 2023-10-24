import { Model, DataTypes } from 'sequelize';

export default class Rubros extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Rubros',
      }
    );
  }

  static associate(Model) {
    Rubros.hasMany(Model.SubsidiosAsignados, { foreignKey: 'idRubro' });
  }
}
