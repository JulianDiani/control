import Convocatorias from '../models/convocatoria';

export const getAllConvocatorias = async (req, res) => {
  const convocatorias = await Convocatorias.findAll({});
  res.json(convocatorias.map((convocatoria) => convocatoria.toJSON()));
};

export const postConvocatoria = (req, res) => {
  Convocatorias.create({
    nombre: req.body.nombre,
    fechainicio: req.body.fechainicio,
    duracionmeses: req.body.duracionmeses,
  })
    .then((convocatoria) =>
      res.status(201).send({
        nombre: convocatoria.nombre,
        fechainicio: convocatoria.fechainicio,
        duracionmeses: convocatoria.duracionmeses,
      })
    )
    .catch((error) => {
      if (error.message) {
        res.status(404).send('Bad request');
      } else {
        res.status(500).send({
          message: 'Serivice error',
          errorType: error.name,
          errorImage: 'https://http.cat/500',
        });
      }
    });
};

export const getConvocatoriaById = async (req, res) => {
  const convocatoriaById = await Convocatorias.findByPk(req.params.id);
  res.json(convocatoriaById);
};

export const deleteConvocatoriaById = async (req, res) => {
  const convocatoriaById = await Convocatorias.findByPk(req.params.id);
  convocatoriaById.destroy();
  res.json(convocatoriaById);
};

export const updateConvocatoriaById = async (req, res) => {
  const convocatoriaById = await Convocatorias.findByPk(req.params.id);
  convocatoriaById.update(req.body);
  res.json(convocatoriaById);
};
