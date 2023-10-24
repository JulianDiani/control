import Proveedores from '../models/proveedores';

export const getProveedor = async (req, res) => {
  const compraId = req.params.id;
  const proveedor = await Proveedores.findByPk(compraId);

  res.json(proveedor.toJSON());
};

export const getAllProveedores = async (req, res) => {
  const proveedores = await Proveedores.findAll({});
  res.json({ data: proveedores.map((proveedor) => proveedor.toJSON()) });
};

export const postProveedor = async (req, res) => {
  //INSERT ROW
  Proveedores.create({
    nombre: req.body.nombre,
    telefono: req.body.telefono,
    mail: req.body.mail,
    cuit: req.body.cuit,
  })
    .then((proveedor) => res.status(201).send({ nombre: proveedor.nombre }))
    .catch((error) => {
      if (error.message) {
        res.status(404).send(error.message);
      } else {
        res.status(500).send({
          message: 'Bad request',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};
