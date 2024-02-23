const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/lsp', (req, res) => {
    technologies= [
      "Meta Attack Language", 
      "Language Server Protocol", 
      "Java", 
      "Maven", 
      "TypeScript", 
      "VSCode Extension API"]
    repos= [
      {url: 'https://github.com/lucasvil/mal-ls', name: 'Language Server'},
      {url: 'https://github.com/lucasvil/mal-vscode-plugin', name: 'VSCode Extension'}
    ]

    res.render('lsp', {technologies, repos})
})

router.get('/houseplant', (req, res) => {
  technologies= [
    "Raspberry Pi", 
    "Python", 
    "MQTT", 
    "WebSockets", 
    "MongoDB"]
  repos= [
    {url: 'https://github.com/lucasvil/PlantWatch-device', name: 'Raspberry Code'},
    {url: 'https://github.com/lucasvil/PlantWatch', name: 'Web Application'}
  ]

  res.render('houseplant', {technologies, repos})
})

router.get('/portfolio', (req, res) => {
  technologies= [
    "JavaScript", 
    "HTML/CSS + Handlebars", 
    "ExpressJS", 
    "AWS Elastic Cloud Compute", 
    "AWS CodePipeline (Github -> CodeBuild -> CodeDeploy)", 
    "Certbot (TLS)",
    "PM2"]
  repos= [
    {url: 'https://github.com/lucasvil/portfolio', name: 'Source Code'},
  ]

  res.render('portfolio', {technologies, repos})
})

module.exports = {
    routes: router
}