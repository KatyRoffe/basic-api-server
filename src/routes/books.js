'use strict';

const express = require('express');

const data = require('../models/index.js');
const router = express.Router();


router.get('/books', getAll);
router.get('/books/:booksId', getOne);
router.post('/books', create);
router.put('/books/:booksId', update);
router.delete('/books/:booksId', remove);


async function getAll(req, res) {
  const allbooks = await data.books.findAll();
  res.status(200).send(allbooks);
}

async function getOne(req,res) {
  const booksId = req.params.booksId;
  const books = await data.books.findOne({
    where: {
      id: booksId
    }
  });
  res.status(200).send(books);
}

async function create(req, res) {
  const booksObject = req.books;
  const booksData = await data.books.create(booksObject);
  res.status(200).send(booksData);
}

async function update(req, res) {
  const booksId = req.params.booksId;
  const booksObject = req.body;
  const booksData = await data.books.findOne({where: { id: booksId} });
  await booksData.update(booksObject);
  res.status(200).send(booksData);
}

async function remove(req, res) {
  const booksId = req.params.booksId;
  await data.books.destroy({ where: { id: booksId }});
  res.status(204).send('Success');
}

module.exports = router;