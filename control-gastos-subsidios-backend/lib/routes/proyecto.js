import express from 'express';

import {
  getAllProyectos,
  getProyecto,
  getProyectoById,
  createProyecto,
  getAllProyectos,
  getProyectoByIdConCompra,
  getAllProyectosConCompras,
} from '../controllers/proyecto_controller';

import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/allProyects', withErrorHandling(getAllProyectosG2));
router.get('/', withErrorHandling(getProyectoG2));
router.get('/findById', withErrorHandling(getProyectoByIdG2));
router.post('/createG2', withErrorHandling(createProyectoG2));
router.get('/findByName/:idProyecto', withErrorHandling(getProyectoById));

router.post('/create', withErrorHandling(createProyecto));
router.get('/findAll', withErrorHandling(getAllProyectos));
router.get('/findByIdConCompra', withErrorHandling(getProyectoByIdConCompra));
router.get('/findAllConCompra', withErrorHandling(getAllProyectosConCompras));

router.get('/:username', withErrorHandling(getProyecto));

export default router;
