const express = require('express');
const session = require('express-session');

////////////////////////////////
const initMW = require('./middleware/init');
const renderMW = require('./middleware/render');
const incrementMW = require('./middleware/increment');
const restartMW = require('./middleware/restart');
const authMW = require('./middleware/auth');
////////////////////////////////

const app = express();
const port = 4400;

app.set('view engine', 'ejs');
app.use('/public',express.static('public'));

app.use(session({
    secret: 'naezegyjokistitokitt',
    resave:false,
    saveUninitialized: true,
    
}))

app.get('/', initMW, renderMW)
//app.get('/public', renderMW)
app.get('/increment', authMW, incrementMW, renderMW);
app.get('/restart', authMW, restartMW, initMW, renderMW);


app.listen(port, () =>{
    
    console.log(`Listen on ${port}`)
})
