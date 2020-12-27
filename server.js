const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('home', {})
})

app.listen(process.env.PORT || 5000,
    console.log('Server running at http://localhost:5000')
    )