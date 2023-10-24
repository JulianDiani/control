import express from 'express';
import {
  getUsuariosIdProyecto,
  getAllUsuariosProyectos,
  postUsuarioProyecto,
} from '../controllers/usuariosproyectos_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/usuariosproyectos/buscaridproyecto/1
router.get(
  '/getUsuariosIdProyecto/:idProyecto',
  withErrorHandling(getUsuariosIdProyecto)
);

// para poder probarlas, ej.: GET en http://localhost:3001/api/usuariosproyectos/getAllUsuariosProyectos
router.get(
  '/getAllUsuariosProyectos',
  withErrorHandling(getAllUsuariosProyectos)
);

// para probar ej.: http://localhost:3001/api/usuariosproyectos/postUsuarioXProyecto/3/1
router.post(
  '/postUsuarioXProyecto/:idUsuario/:idProyecto',
  withErrorHandling(postUsuarioProyecto)
);

export default router;
