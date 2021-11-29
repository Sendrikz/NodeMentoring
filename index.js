const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

const users = JSON.parse(fs.readFileSync('./users.json',"utf8"));

const server = app.listen(3000, () => {
    console.log("Server is running at http://localhost:" + server.address().port);
});

app.use(express.json());


router.param('id', (req, res, next, id) => {
    let user = users.find(user => user.id == id);

    if (user) {
        req.user = user;
        next();
    } else {
        let error = new Error("There is no user with such id");
        error.httpStatusCode = 404;
        next(error);
    }

});

router.route('/users/:id')
.get((req, res) => {
    res.json(req.user);
})
.put((req, res) => {
    let updateUser = req.user;
    updateUser.login = req.body.login;
    updateUser.password = req.body.password;
    updateUser.age = req.body.age;

    res.json(updateUser);
})
.delete((req, res) => {
    let deleteUser = req.user;
    deleteUser.isDeleted = true;

    res.json(deleteUser);
});

router.route('/users')
.get((req, res) => {
    let limit = req.body.limit;
    let loginSubstr = req.body.loginSubstring;

    let result = users.sort((first, second) => {
        return first.login.localeCompare(second.login);
    })
    .filter(user => user.login.includes(loginSubstr))
    .slice(0, limit);

    res.json(result);

})
.post((req, res) => {
    let newUser = {
        id: Math.floor(Math.random() * 100),
        login: req.body.login,
        password: req.body.password,
        age: req.body.age,
        isDeleted: false
    };

    users.push(newUser);

    res.json(newUser);
});

app.use('/api/', router);

app.use(function (err, req, res, next) {
    res.status(err.httpStatusCode).send(err.message);
});