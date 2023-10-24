import { Model, DataTypes } from 'sequelize';

export default class Proveedores extends Model {
  static init(sequelize) {
    return super.init(
      {
        nombre: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese nombre valido',
            },
          },
        },
        telefono: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'igrese numero valido',
            },
          },
        },
        mail: {
          type: DataTypes.STRING,
          validate: {
            isEmail: {
              msg: 'Ingrese mail valido',
            },
          },
        },
        cuit: {
          type: DataTypes.STRING,
          validate: {
            //Validacion custom
            esFormatoCuit(value) {
              const formato = /^[0-9]{2}-[0-9]{8}-[0-9]?$/;
              if (!formato.test(value)) {
                throw new Error('El formato de cuit es incorrecto');
              }
            },
          },
        },
      },
      {
        sequelize,
        modelName: 'Proveedores',
      }
    );
  }

  static associate(Model) {
    Proveedores.hasMany(Model.Compras, { foreignKey: 'idproveedor' });
  }
}
