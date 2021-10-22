'use strict';

const express = require('express');

const data = require('../models/index.js');
const router = express.Router();


router.get('/cats', getAll);
router.get('/cats/:catsId', getOne);
router.post('/cats', create);
router.put('/cats/:catsId', update);
router.delete('/cats/:catsId', remove);


async function getAll(req, res) {
  const allcats = await data.cats.findAll();
  res.status(200).send(allcats);
}

async function getOne(req,res) {
  const catsId = req.params.catsId;
  const cats = await data.cats.findOne({
    where: {
      id: catsId
    }
  });
  res.status(200).send(cats);
}

async function create(req, res) {
  const catsObject = req.body;
  const catsData = await data.cats.create(catsObject);
  res.status(200).send(catsData);
}

async function update(req, res) {
  const catsId = req.params.catsId;
  const catsObject = req.body;
  const catsData = await data.cats.findOne({where: { id: catsId} });
  await catsData.update(catsObject);
  res.status(200).send(catsData);
}

async function remove(req, res) {
  const catsId = req.params.catsId;
  await data.cats.destroy({ where: { id: catsId }});
  res.status(204).send('Success');
}

module.exports = router;