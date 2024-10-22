const routes = [
    {
        method: "GET",
        path: "/",
        handler: (req, h) => {
            return 'Homepage';
        }
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
        handler: (req, h) => {
            return 'About page';
        }
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
        handler: (req, h) => {
            const { username = 'guest' } = req.params;
            return `Displaying profile of ${username}`;
        }
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