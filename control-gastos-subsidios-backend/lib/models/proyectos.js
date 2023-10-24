import { Model, DataTypes } from 'sequelize';
import UsuariosProyectos from './usuariosproyectos';

export default class Proyectos extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        //titulo: DataTypes.STRING,
        titulo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese titulo valido',
            },
          },
        },
        //tipo: DataTypes.STRING,
        tipo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese tipo valido',
            },
          },
        },
        //organismo: DataTypes.STRING,
        organismo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese organismo valido',
            },
          },
        },
        //lineaFinanciamiento: DataTypes.STRING,
        lineaFinanciamiento: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese linea de financiamiento valida',
            },
          },
        },
        //año: DataTypes.DATE, //este campo no se usa
        convocatoria: DataTypes.STRING, // se agregar convocatoria
        //unidadAcademica: DataTypes.STRING,
        unidadAcademica: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese unidad Academica valida',
            },
          },
        },
        //areaTematica: DataTypes.STRING,
        areaTematica: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: 'ingrese area tematica valida',
            },
          },
        },
        //subsidio: DataTypes.INTEGER, //este campo no se usa
        //fechaInicio: DataTypes.DATE,
        fechaInicio: {
          type: DataTypes.DATE,
          validate: {
            isDate: {
              msg: 'ingrese fecha valida',
            },
          },
        },
        //fechaFin: DataTypes.DATE,
        fechaFin: {
          type: DataTypes.DATE,
          validate: {
            isDate: {
              msg: 'ingrese fecha valida',
            },
          },
        },
        fechaInicioGastos: DataTypes.STRING,
        numeroProyecto: DataTypes.INTEGER,
        numeroExpediente: DataTypes.INTEGER,
        numeroResolucion: DataTypes.INTEGER,
        director: DataTypes.STRING,
        codirector: DataTypes.STRING,
        //usuario: DataTypes.STRING, //este campo no se usa
        resumen: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Proyectos',
      }
    );
  }

  static associate(Model) {
    Proyectos.hasMany(Model.SubsidiosAsignados, { foreignKey: 'idProyecto' });
    Proyectos.belongsTo(Model.Convocatorias, { foreignKey: 'idconvocatoria' });
    Proyectos.belongsToMany(Model.Usuario, {
      through: UsuariosProyectos,
      foreignKey: 'idProyecto',
    });
  }
}
