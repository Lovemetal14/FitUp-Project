const express = require('express')
const router = express.Router()

const Routine = require('../models/routine.model')



router.get('/getAllRoutines', (req, res, next) => {

    Routine.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/getOneRoutine/:routine_id', (req, res, next) => {

    Routine.findById(req.params.routine_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/newRoutine', (req, res, next) => {

    Routine.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
