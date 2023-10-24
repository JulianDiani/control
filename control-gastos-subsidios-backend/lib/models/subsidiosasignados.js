import { Model, DataTypes } from 'sequelize';

export default class SubsidiosAsignados extends Model {
  static init(sequelize) {
    return super.init(
      {
        idProyecto: DataTypes.INTEGER,
        idRubro: DataTypes.INTEGER,
        montoAsignado: DataTypes.FLOAT,
      },
      {
        sequelize,
        modelName: 'SubsidiosAsignados',
      }
    );
  }

  static associate(Model) {
    SubsidiosAsignados.belongsTo(Model.Rubros, { foreignKey: 'idRubro' });
    SubsidiosAsignados.hasMany(Model.Compras, { foreignKey: 'idsubsidio' });
    SubsidiosAsignados.belongsTo(Model.Proyectos, { foreignKey: 'idProyecto' });
  }
}
