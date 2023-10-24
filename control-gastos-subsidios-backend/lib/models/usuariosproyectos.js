import { Model, DataTypes } from 'sequelize';
import Proyectos from './proyectos';
import Usuario from './usuario';

export default class UsuariosProyectos extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idUsuario: DataTypes.INTEGER,
        idProyecto: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'UsuariosProyectos',
      }
    );
  }
  static associate(Model) {
    UsuariosProyectos.belongsTo(Usuario, { foreignKey: 'idUsuario' });
    UsuariosProyectos.belongsTo(Proyectos, { foreignKey: 'idProyecto' });
  }
}
