import express from 'express';
import { getAllSubsidiosAsignados, getIdSubsidio, getTotalSubsidios, getSubsidios, getSubsidiosXproyectoXrubro, postSubsidios } from '../controllers/subsidiosasignados_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

// para poder probarlas, ej.: GET en http://localhost:3001/api/subsidiosAsignados/buscartodos
router.get('/getAllSubsidiosAsignados', withErrorHandling(getAllSubsidiosAsignados));

// para poder probarlas, ej.: GET en http://localhost:3001/api/subsidiosAsignados/buscarpor/4
router.get('/getIdSubsidio/:id', withErrorHandling(getIdSubsidio));

// para probarla ej.: GET en http://localhost:3001/api/subsidiosAsignados/totaldelproyecto/1
router.get('/getTotalSubsidios/:id', withErrorHandling(getTotalSubsidios));

// para probarla ej.: GET en http://localhost:3001/api/subsidiosAsignados/delproyecto/1
router.get('/getSubsidios/:id', withErrorHandling(getSubsidios));

// para probar ej.: http://localhost:3001/api/subsidiosAsignados/xproyectoxrubro/1/3
router.get('/xproyectoxrubro/:idProyecto/:idRubro', withErrorHandling(getSubsidiosXproyectoXrubro));

// para probar ej.: http://localhost:3001/api/subsidiosAsignados/postSubsidio/1/4/5400
router.post('/postSubsidio/:idProyecto/:idRubro/:montoAsignado', withErrorHandling(postSubsidios));

export default router;
