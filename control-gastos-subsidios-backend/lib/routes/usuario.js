import express from 'express';

import {
  index,
  searchUser,
  postUsuario,
  setUserProyectoActual,
} from '../controllers/usuario_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/searchUser/:username', withErrorHandling(searchUser));
router.post('/newUser', withErrorHandling(postUsuario));
router.put('/setUserProject', withErrorHandling(setUserProyectoActual));

export default router;
