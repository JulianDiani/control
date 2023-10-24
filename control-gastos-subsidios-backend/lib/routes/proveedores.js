import express from 'express';

import {
  getProveedor,
  getAllProveedores,
  postProveedor,
} from '../controllers/proveedores_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/:id', withErrorHandling(getProveedor));
router.get('/', withErrorHandling(getAllProveedores));

router.post('/', withErrorHandling(postProveedor));
export default router;
