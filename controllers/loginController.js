
const registerView = (req, res) => {
    let title = 'Register';

    res.render("register", {
        title:title
    } );
}

const loginView = (req, res) => {
    let title = 'Login';

    res.render("login", {
        title:title
    } );
}



module.exports =  {
    registerView,
    loginView
};