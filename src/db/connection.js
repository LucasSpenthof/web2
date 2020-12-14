const {Pool} = require('pg')

const db = new Pool({
    user:'postgres',
    host:'localhost',
    database:'sistema_vendas',
    password:'lucas',
    port:5432
})
db.connect()
module.exports = db