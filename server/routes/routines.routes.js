const express = require('express')
const router = express.Router()

const Routine = require('../models/routine.model')
const Exercise = require('../models/exercise.model')
const User = require('../models/User.model')

router.get('/getAllRoutines', (req, res, next) => {

    Routine.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/getOneRoutine/:routine_id', (req, res, next) => {

    Routine.findById(req.params.routine_id)
        .populate('exercises')
        .then(response => res.json(response))
        .catch(err => next(err))


})


router.post('/newRoutine', (req, res, next) => {

    const exercises = [req.body.exercise1, req.body.exercise2, req.body.exercise3]
    const {title, type, muscleGroup, author} = req.body


    Routine.create({title, type, muscleGroup, author, exercises})
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.post('/favouriteRoutine', (req, res, next) => {

    const {routineId, userId} = req.body


    User.findByIdAndUpdate(userId, /*meter aqui en su array de favourite_routines el ID de la rutina que llega como routineId */)

})



module.exports = router
