import express from 'express';
import compras from './compra';
import usuarios from './usuario';
import proyectos from './proyecto';
import proveedores from './proveedores';
import convocatorias from './convocatoria'; // importa route de convocatoria
import Rubros from './rubros'; // importa route de rubros
import SubsidiosAsignados from './subsidiosAsignados'; // importa route de los subsidios
import UsuariosProyectos from './usuariosproyectos'; // importa route de los usuarios x proyectos

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/compras', compras);
router.use('/api/proyectos', proyectos);
router.use('/api/proveedores', proveedores);
// router.use('/api/convocatoria', convocatoria); // publicacion en la API
router.use('/api/rubros', Rubros); // publicacion en la API
router.use('/api/subsidiosAsignados', SubsidiosAsignados); // publicacion en la API
router.use('/api/usuariosproyectos', UsuariosProyectos); // publicacion en la API
router.use('/api/convocatorias', convocatorias);

export default router;
