const express = require('express')
const { engine } =require('express-handlebars');

const app = express()

const port = (process.env.NODE_ENV == 'production') ? 80 : 3000

app.engine('handlebars', engine({
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/lsp', (req, res) => {
  res.render('lsp')
})

app.get('/houseplant', (req, res) => {
  res.render('houseplant')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})