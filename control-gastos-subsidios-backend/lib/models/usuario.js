import { Model, DataTypes } from 'sequelize';

export default class Usuario extends Model {
  static init(sequelize) {
    return super.init(
      {
        usuario: DataTypes.STRING,
        contraseña: DataTypes.STRING,
        rol: DataTypes.STRING,
        nombre: DataTypes.STRING,
        apellido: DataTypes.STRING,
        fechaNacimiento: DataTypes.DATEONLY,
        avatarUrl: DataTypes.STRING,
        proyectoActualId: DataTypes.STRING,
        // Este "campo" no se persiste, se calcula a partir de otro/s.
        edad: {
          // Definimos el tipo (INTEGER) y de qué atributo/s depende (fechaNacimiento).
          type: new DataTypes.VIRTUAL(DataTypes.INTEGER, ['fechaNacimiento']),
          get: function () {
            return Math.floor(
              (new Date() - new Date(this.get('fechaNacimiento'))) /
              (1000 * 60 * 60 * 24 * 365.25)
            );
          },
        },
      },
      {
        sequelize,
        modelName: 'Usuario',
      }
    );
  }

  esTocayoDe(otroUsuario) {
    return otroUsuario.nombre === this.nombre;
  }

  static associate(Model) {
    Usuario.belongsToMany(Model.Proyectos, {
      through: Model.UsuariosProyectos,
      foreignKey: 'idUsuario'
    });
  }
}
