const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const cors = require('cors')

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}

//routes
const tarefaRoutes = require('./routes/tarefasRoutes')

app.engine('handlebars',exphbs.engine())
app.set('view engine', 'handlebars')
app.use(cors(corsOptions))

//Middlewares para transformar formulario em JSON
app.use(
    express.urlencoded({
        extended : true
    })
)
app.use(express.json())

//definicao da pasta estatica
app.use(express.static('public'))

//Chama as rotas
app.use('/instrumentos',tarefaRoutes)

//roda o servidor se conseguir conectar ao bd
conn.sync()
    .then(()=> {
        app.listen(3000)
    }).catch((err) => console.log(err))

