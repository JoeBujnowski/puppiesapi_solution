const express = require('express');
const router = express.Router();
const { getAllPuppies, createPuppy, abandonPuppy, likePuppy } = require('../../models/puppy');

// handle all the routes

// get all puppies
router.get('/', getAllPuppies, (req, res) => {
  res.json(res.puppies || []);
});

router.post('/', createPuppy, (req, res) => {
  res.json(res.puppy || {});
});

router.put('/:id', likePuppy, (req, res) => {
  res.json(res.puppy || {});
});

router.delete('/:id', abandonPuppy, (req, res) => {
  res.json(res.puppy || {});
});

module.exports = router;
