import express from "express";
import mysql from "mysql";
//import * as path from "path";

const app = express();
const port = 5000;

app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '13152569',
    database: 'website',
    insecureAuth: true,
});

connection.connect((err) => {
    if (err) {
        console.error("error:", err);
        return
    }
    console.log('success');

    app.listen(port, () => {
        console.log('server is running at localhost:', port);
    })
    connection.end()
});

app.post('/crie-sua-conta', (req, res) => {
    const { data } = req.body;

    const query = `INSERT INTO your_table (userdata) VALUES (${data.name}, ${data.email}, ${data.password})`;

    connection.query(query, [data], (error, results, fields) => {
        if (error) {
            console.error("Error storing data:", error);
            res.status(500).send('Error storing data');
            return;
        }

        console.log('Data stored successfully');
        res.status(200).send('Data stored successfully');
    });
});