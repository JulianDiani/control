import express from 'express';
import {
  getAllRubros,
  getIdRubro,
  getRubros,
} from '../controllers/rubros_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/rubros/buscarid/3
router.get('/getIdRubro/:id', withErrorHandling(getIdRubro));
// para poder probarlas, ej.: GET en http://localhost:3001/api/rubros/buscartodos
router.get('/getAllRubros', withErrorHandling(getAllRubros));
// para poder probarlas, ej.: GET en http://localhost:3001/api/rubros/listadetodos
router.get('/getRubros', withErrorHandling(getRubros));

export default router;
