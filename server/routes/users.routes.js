const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

// Endpoints

//router.get('/getAllUsers', (req, res) => res.send('JELOU FITTER!'))

router.get('/getAllUsers', (req, res, next) => {

    User.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/:user_id', (req, res, next) => {

    User.findById(req.params.user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/newUser', (req, res, next) => {

    User.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
