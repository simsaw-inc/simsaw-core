'use strict';

/***
 * Regioster Simsaw as a hapiJs plugin
 * @param server
 * @param options
 * @param next
 */

exports.register = function (server, options, next) {

    server.on('request-internal', function (request, event, tags) {

        if (tags.error && tags.state) {
            console.error(event);
        }
    });

    server.after(function () {

        // Perform some pre-start logic
    });

    //server.path(__dirname + '../static');

    //server.decorate('reply', 'success', function () {
    //
    //    return this.response({ status: 'ok' });
    //});

    //server.expose('util', function () { console.log('something');

    //server.handler('test', function (route, options) {
    //
    //    return function (request, reply) {
    //
    //        return reply('new handler: ' + options.msg);
    //    }
    //});


    next();
};


exports.register.attributes = {
    pkg: require('./package.json')
};
