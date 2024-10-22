const getHomepageHandler = (req, h) => {
    return 'Homepage';
}


const getAboutpageHandler = (req, h) => {
    return 'About page';
}

const getUserProfileHandler = (req, h) => {
    const { username = 'guest' } = req.params;
    const { lang = 'en' } = req.query;

    if (lang === 'en') {
        return `Displaying profile of ${username}`;
    }

    return `Menampilkan profil ${username}`;

}

const postLoginHandler = (req, h) => {
    const { username, password } = req.payload;
    return `Welcome back, ${username}`;
}


module.exports = { getHomepageHandler, getAboutpageHandler, getUserProfileHandler, postLoginHandler }