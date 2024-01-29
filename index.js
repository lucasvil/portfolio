const express = require('express')
const { engine } =require('express-handlebars');

const app = express()

const port = (process.env.NODE_ENV == 'production') ? 80: 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/project', (req, res) => {
  res.render('project')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})