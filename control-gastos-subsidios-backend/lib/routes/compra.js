import express from 'express';
import {
  getComprasByProyecto,
  getAllCompras,
  postCompra,
  getTotal,
  findByRubro,
  getTotalComprasXSubsidio,
  getAllComprasNueva,
} from '../controllers/compra_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get(
  '/getComprasByProyecto/:idProyecto',
  withErrorHandling(getComprasByProyecto)
);
router.get('/', withErrorHandling(getAllCompras));
router.get('/gastos/totalGastos', withErrorHandling(getTotal));
router.get('/gastos/findByRubro', withErrorHandling(findByRubro));
router.post('/', withErrorHandling(postCompra));

// para probar ej.: http://localhost:3001/api/compras/getTotalxSubsidio/5
router.get(
  '/getTotalxSubsidio/:idSubsidio',
  withErrorHandling(getTotalComprasXSubsidio)
);

// para probar ej.: http://localhost:3001/api/compras/getAllCompras
router.get('/getAllCompras', withErrorHandling(getAllComprasNueva));

export default router;
