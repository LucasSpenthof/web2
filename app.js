const express = require('express')
const nunjucks = require('nunjucks')
const clienteController = require('./src/controllers/ClienteController')


const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','.html')

nunjucks.configure('./src/views', {
  autoescape: true,
  express: app
});

app.get('/',(req,res)=>{
  res.render('index')
})

app.get('/categoria-produto/listar',categoriaProdutoController.index)
app.get('/categoria-produto/adicionar',categoriaProdutoController.create)
app.get('/categoria-produto/salvar',categoriaProdutoController.store)
app.get('/categoria-produto/editar/:id',categoriaProdutoController.edit)
app.post('/categoria-produto/atualizar',categoriaProdutoController.update)
app.get('/categoria-produto/excluir/:id',categoriaProdutoController.delete)


app.get('/cliente/listar',clienteController.index)
app.get('/cliente/adicionar',clienteController.create)
app.post('/cliente/salvar',clienteController.store)
app.get('/cliente/editar/:id',clienteController.edit)
app.post('/cliente/atualizar',clienteController.update)
app.get('/cliente/excluir/:id',clienteController.delete)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})