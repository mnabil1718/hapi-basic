const { getHomepageHandler, getAboutpageHandler, getUserProfileHandler, postLoginHandler } = require('./handlers.js');

const routes = [
    {
        method: "GET",
        path: "/",
        handler: getHomepageHandler
    },
    {
        method: "*",
        path: "/",
        handler: (req, h) => {
            return 'Method not allowed';
        }
    },
    {
        method: "GET",
        path: "/about",
        handler: getAboutpageHandler
    },
    {
        method: "*",
        path: "/about",
        handler: (req, h) => {
            return 'Method not allowed';
        }
    },
    {
        method: "GET",
        path: "/users/{username?}",
        handler: getUserProfileHandler
    },
    {
        method: "POST",
        path: "/login",
        handler: postLoginHandler
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (req, h) => {
            return 'Page not found';
        }
    },
];

module.exports = routes;