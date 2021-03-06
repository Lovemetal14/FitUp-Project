const express = require('express')
const router = express.Router()

const Member = require('../models/member.model')


router.get('/getAllMembers', (req, res, next) => {

    Member.find()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get('/getOneMember/:member_id', (req, res, next) => {

    Member.findById(req.params.member_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/newMember', (req, res, next) => {

    Member.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))
})


module.exports = router
