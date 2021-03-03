const express = require('express');

const router = express.Router();
const axios = require('axios');

const api = require('../../config');

router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('Could\'n find the data your found'));
});

router.get('/products/:id/styles', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/products/${id}/styles`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { data } = response;
      res.status(200).send(data);
    })
    .catch(() => res.status(400).send('Bad'));
});

router.get('/reviews/:id', (req, res) => {
  const { id } = req.params;
  axios.get(`${api.api}/reviews/?product_id=${id}`, {
    headers: {
      Authorization: api.TOKEN,
    },
  })
    .then((response) => {
      const { results } = response.data;
      let sum = 0;
      results.map((result) => {
        sum += result.rating;
        return sum;
      });
      const aveRating = Math.floor(sum / results.length);
      res.status(200).send(aveRating.toString());
    })
    .catch(() => res.sendStatus(400));
});

module.exports = router;
