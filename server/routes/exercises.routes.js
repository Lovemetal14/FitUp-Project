const express = require('express')
const router = express.Router()

const Exercise = require('../models/exercise.model')



router.get('/getAllExercises', (req, res, next) => {

    Exercise.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/:exercise_id', (req, res, next) => {

    Exercise.findById(req.params.exercise_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/newExercise', (req, res, next) => {

    Exercise.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
