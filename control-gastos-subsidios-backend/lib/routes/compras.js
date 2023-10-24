import express from 'express';

import {
  getCompraByProyectId,
  getAllCompras,
  postCompra,
  getTotal,
  findByRubro,
  getAllComprasConProyecto,
  getCompraById,
  getCompraByIdConProyecto,
  putCompra,
  getCompraTotal,
} from '../controllers/compra_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getAllCompras));
router.get('/gastos/totalGastos', withErrorHandling(getTotal));
router.get('/gastos/findByRubro', withErrorHandling(findByRubro));
router.post('/', withErrorHandling(postCompra));
router.get(
  '/allComprasConProyecto',
  withErrorHandling(getAllComprasConProyecto)
);
router.get('/getCompraById/:idCompra', withErrorHandling(getCompraById));
router.post(
  '/getCompraByIdConProyecto',
  withErrorHandling(getCompraByIdConProyecto)
);
router.get(
  '/getComprasByProyect/:idProyecto',
  withErrorHandling(getCompraByProyectId)
);
router.put('/:id', withErrorHandling(putCompra));
router.get('/getCompraTotal/:id', withErrorHandling(getCompraTotal));
export default router;
