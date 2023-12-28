const express = require("express");
const db = require('./models')
const cors = require('cors')

const app = express();
const port = 5000;

app.use(express.json())
app.use(cors())

const userRouter = require('./routes/user')
const authTokenRouter = require('./routes/authToken')
const productsDataRouter = require('./routes/retrieveProductsData')
const queryDataRouter = require('./routes/queryData')
const searchProductsRouter = require('./routes/searchProducts')

app.use("/user", userRouter)
app.use('/auth-token', authTokenRouter)
app.use('/retrieve-data', productsDataRouter)
app.use('/query-data', queryDataRouter)
app.use('/search-products', searchProductsRouter)

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`server is running at localhost`, port);
    });
});
