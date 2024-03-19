const express = require('express');
const sequelize = require('../db/cnx');
const Partenaire = require('../models/partenaire');

const router = express.Router();



router.get('/get-partenaires-by-region/:region', async (req, res) => {
  const region = req.params.region;

  try {
    const partenairesByRegion = await Partenaire.findAll({
      where: {
        region: region,
      },
    });

    res.status(200).json(partenairesByRegion);
  } catch (error) {
    console.error('Error getting partenaires by region:', error);
    res.status(500).json({ error: 'Error getting partenaires by region' });
  }
});
router.get('/get-all-partenaires', async (req, res) => {
  try {
    const partenaires = await Partenaire.findAll();

    res.status(200).json(partenaires);
  } catch (error) {
    console.error('Error getting all partenaires:', error);
    res.status(500).json({ error: 'Error getting all partenaires' });
  }
});
module.exports = router;
