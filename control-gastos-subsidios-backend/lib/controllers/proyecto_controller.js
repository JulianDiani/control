import Proyecto from '../models/proyecto';
import Compra from '../models/compras';
import Convocatorias from '../models/convocatoria';
import Proyectos from '../models/proyectos';
import SubsidiosAsignados from '../models/subsidiosasignados';
import Rubros from '../models/rubros';
import Compras from '../models/compras';
import UsuariosProyectos from '../models/usuariosproyectos';

export const getProyectoG2 = async (req, res) => {
  const user = req.body.user;
  console.log('User', user);
  const proyecto = await Proyectos.findAll({});
  const proyectoForUser = proyecto.filter(
    (proyecto) => proyecto.usuario === user
  );
  res.json(proyectoForUser);
};

export const getProyecto = async (req, res) => {
  const user = req.params.username;
  const proyectos = await Proyecto.findAll({});
  const proyectosForUser = proyectos.filter(
    (proyecto) => proyecto.usuario === user
  );
  res.json(proyectosForUser);
};



export const getProyectoByIdG2 = async (req, res) => {
  console.log(req.params);
  const idProyecto = req.params.idProyecto;
  const proyectos = await Proyecto.findAll({});
  const selectedProyecto = proyectos.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const getProyectoById = async (req, res) => {
  const idProyecto = req.body.id;
  const proyecto = await Proyectos.findAll({});
  const selectedProyecto = proyecto.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const getProyectoByIdConCompra = async (req, res) => {
  const idProyecto = req.body.id;
  const proyectos = await Proyecto.findAll({
    include: [{ model: Compra }],
  });
  const selectedProyecto = proyectos.filter(
    (proyecto) => proyecto.id == idProyecto
  );
  res.json(selectedProyecto);
};

export const getAllProyectos = async (req, res) => {
  const proyectos = await Proyecto.findAll({});
  res.json(proyectos.map((proyecto) => proyecto.toJSON()));
};

export const getAllProyectosG2 = async (req, res) => {
  const proyecto = await Proyectos.findAll({
    include: [
      { model: Convocatorias },
      { model: SubsidiosAsignados, include: [Rubros] },
      { model: SubsidiosAsignados, include: [Compras] },
    ],
  });
  res.json(proyecto.map((proyecto) => proyecto.toJSON()));
};

export const getAllProyectosConCompras = async (req, res) => {
  const proyectos = await Proyecto.findAll({
    include: [{ model: Compra }],
  });
  res.json(proyectos.map((proyecto) => proyecto.toJSON()));
};

export const createProyectoG2 = async (req, res) => {
  const id = Math.floor(Math.random() * 100);
  const body = req.body;
  const usuarios = body.usuario; //lista de usuarios
  const subsidios = body.subsidios; //lista de subsidios
  try {
    await Proyectos.create({
      id: id,
      titulo: body.titulo,
      tipo: body.tipo,
      organismo: body.organismo,
      lineaFinanciamiento: body.lineaFinanciamiento,
      //año: body.año, año no se usa
      convocatoria: body.convocatoria.nombre, //se agrega convocatoria
      idconvocatoria: body.convocatoria.id,
      unidadAcademica: body.unidadAcademica,
      areaTematica: body.areaTematica,
      //subsidio: body.subsidio, subsidio vuela se agregan los rubros individualmente
      fechaInicio: body.fechaInicio,
      fechaFin: body.fechaFin,
      numeroProyecto: body.numeroProyecto,
      numeroExpediente: body.numeroExpediente,
      numeroResolucion: body.numeroResolucion,
      director: body.director,
      codirector: body.codirector,
      //usuario: body.usuario, usuario vuela se agregan los usuarios individualmente
      resumen: body.resumen,
    })
      //.then((proyecto) =>
      //  request = proyecto //res.status(201)//.send({ idProyecto: proyecto.id, titulo: body.titulo })
      //)
      .catch((error) => {
        if (error.message) {
          console.log(error.message);
          res.status(404).send('Bad request ' + error.message);
        } else {
          res.status(500).send({
            message: 'Bad request ',
            errorType: error.name,
            errorImage: 'https://http.cat/500',
          });
        }
      });

    await usuarios.forEach((usuario) => {
      UsuariosProyectos.create({
        idUsuario: usuario.id,
        idProyecto: id,
      });
    });

    await subsidios.forEach((subsidio) => {
      SubsidiosAsignados.create({
        idProyecto: id,
        idRubro: subsidio.id,
        montoAsignado: subsidio.monto,
      });
    });

    res.status(201).send({ idProyecto: id, titulo: body.titulo });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Internal server error');
  }
};

export const createProyecto = (req, res) => {
  const id = Math.floor(Math.random() * 100);
  const body = req.body;
  Proyecto.create({
    id: id,
    titulo: body.titulo,
    tipo: body.tipo,
    organismo: body.organismo,
    lineaFinanciamiento: body.lineaFinanciamiento,
    año: body.año,
    unidadAcademica: body.unidadAcademica,
    areaTematica: body.areaTematica,
    subsidio: body.subsidio,
    fechaInicio: body.fechaInicio,
    fechaFin: body.fechaFin,
    numeroProyecto: body.numeroProyecto,
    numeroExpediente: body.numeroExpediente,
    numeroResolucion: body.numeroResolucion,
    director: body.director,
    codirector: body.codirector,
    usuario: body.usuario,
  })
    .then((proyecto) =>
      res.status(201).send({ idProyecto: proyecto.id, titulo: body.titulo })
    )
    .catch((error) => {
      if (error.message) {
        console.log(error.message);
        res.status(404).send('Bad request ' + error.message);
      } else {
        res.status(500).send({
          message: 'Bad request',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};


