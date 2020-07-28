module.exports = app => {

    // Base URLS
    app.use('/api/members', require('./members.routes'))
    app.use('/api/routines', require('./routines.routes'))
    app.use('/api/exercises', require('./exercises.routes'))
    app.use('/api', require('./auth.routes.js'))


}