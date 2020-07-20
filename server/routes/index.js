module.exports = app => {

    // Base URLS
    app.use('/users', require('./users.routes.js'))
}