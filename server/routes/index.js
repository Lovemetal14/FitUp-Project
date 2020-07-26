module.exports = app => {

    // Base URLS
    app.use('/api/members', require('./members.routes'))
    app.use('/api', require('./auth.routes.js'))

}