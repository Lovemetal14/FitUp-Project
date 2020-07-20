const express = require('express')
const router = express.Router()

// Endpoints
router.get('/getAllusers', (req, res) => res.send('HOLA FITTER'))


module.exports = router
