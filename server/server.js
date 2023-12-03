const express = require("express");
const users = require('./models/users.js');
const db = require('./models')

const app = express();
const port = 5000;

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("server is running at localhost:", port);
    });
});


// app.use(json())

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '13152569',
//     database: 'website',
//     insecureAuth: true,
// });

// connection.connect((err) => {
//     if (err) {
//         console.error("error:", err);
//         return
//     }
//     console.log('success');

//     app.listen(port, () => {
//         console.log('server is running at localhost:', port);
//     })
// });
