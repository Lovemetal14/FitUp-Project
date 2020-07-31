const express = require('express')
const router = express.Router()

const Routine = require('../models/routine.model')
const Exercise = require('../models/exercise.model')
const User = require('../models/member.model')

router.get('/getAllRoutines', (req, res, next) => {

    Routine.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/favRoutines/:user_id', (req, res, next) => {

    User.findById(req.params.user_id)
    .populate('favourite_routines')
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

    console.log('ESTO ES LO QUE LLEGA!', routineId, userId)


    User.findByIdAndUpdate(userId, {$push: {favourite_routines: routineId}}, {new: true})
    .then(response => res.json(response))
    .catch(err=> next(err))

})



module.exports = router
