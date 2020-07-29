const express = require('express')
const router = express.Router()

const Routine = require('../models/routine.model')
const Exercise = require('../models/exercise.model')


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
    const {title, type, muscleGroup} = req.body


    Routine.create({title, type, muscleGroup, exercises})
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.get('/', (req, res) => {

    Routine
        .findOne(req.routine)
        .then(Objroutine => {
            Routine

                .findById(Objroutine._id)
                .populate("exercises")
                .then(routine => {
                    res.render('routines/routine-list', routine)
                })



        })
})



module.exports = router
