const express = require("express");
const db = require('./models')
const cors = require('cors')

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

const userRouter = require('./routes/user')

app.use("/user", userRouter)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("server is running at localhost:", port);
    });
});
