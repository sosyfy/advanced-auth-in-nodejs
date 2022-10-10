const express = require("express")
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const cookieParser = require("cookie-parser")
const fileUpload = require("express-fileupload")

// * reqular middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true }))

//* coookies and file upload 

app.use(cookieParser())
app.use(fileUpload())


//* morgan middleware 
app.use(morgan("tiny"))

//* swagger ui documentation 
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//* import all routes here 

const home = require('./routes/home')
const user = require('./routes/userRoute')

//* Router middleware 

app.use('/api/v1', home )
app.use('/api/v1', user )







module.exports = app; 