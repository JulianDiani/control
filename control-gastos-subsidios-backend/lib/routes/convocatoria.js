import express from 'express';

import {
  getAllConvocatorias,
  getConvocatoriaById,
  postConvocatoria,
  deleteConvocatoriaById,
  updateConvocatoriaById,
} from '../controllers/convocatoria_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(getAllConvocatorias));
router.get('/:id', withErrorHandling(getConvocatoriaById));
router.post('/', withErrorHandling(postConvocatoria));
router.delete('/:id', withErrorHandling(deleteConvocatoriaById));
router.put('/:id', withErrorHandling(updateConvocatoriaById));

export default router;
