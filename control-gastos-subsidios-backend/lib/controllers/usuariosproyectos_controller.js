import UsuariosProyectos from '../models/usuariosproyectos';
import Usuario from '../models/usuario';
import Proyectos from '../models/proyectos';


//getUsuariosIdProyecto: devuelve una lista de los usuarios vinculados a un
//proyecto, filtrado por el idProyecto
export const getUsuariosIdProyecto = async (req, res) => {
  const usuariosEncontrados = await UsuariosProyectos.findAll({
    where: { idProyecto: req.params.idProyecto },
  });
  res.json({
    data: usuariosEncontrados.map((usuario) => usuario.toJSON()),
  });
};

//getAllUsuariosProyectos: devuelve una lista de todos los usuarios
export const getAllUsuariosProyectos = async (req, res) => {
  const usuariosEncontrados = await UsuariosProyectos.findAll({
    include: [
      { model: Usuario },
      { model: Proyectos },
    ],
  });
  res.json({
    data: usuariosEncontrados.map((usuario) => usuario.toJSON()),
  });
};

//postUsuarioProyecto: agrega un usuario a un proyecto mediante
// la vinculacion de los id: idUsuario e idProyecto
export const postUsuarioProyecto = (req, res) => {
  /*
    const usuarioNuevo = {
        idUsuario: parseInt(req.params.idUsuario),
        idProyecto: parseInt(req.params.idProyecto)
    }
    res.status(200).send(console.log(usuarioNuevo.idProyecto))
    */

  UsuariosProyectos.create({
    idUsuario: parseInt(req.params.idUsuario),
    idProyecto: parseInt(req.params.idProyecto),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then((usuarioXproyecto) =>
      res.status(201).send({ usuarioXproyecto: usuarioXproyecto.id })
    ) // devuelve el id del subsidio creado
    .catch((error) => {
      if (error.message) {
        res.status(404).send('Bad request');
      } else {
        res.status(500).send({
          message: 'Serivice error',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};
