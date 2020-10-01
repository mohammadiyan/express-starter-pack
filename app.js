const app = require('express')();
switch(process.env.APP_ENV){
    case 'development':
        app.use(require('morgan')('dev'))
    break;
    case 'production':
        app.use(require('morgan')('tiny'))
    break;
}
app.get('/',(req,res)=>{
    console.log('express is working');
    res.end('welcome to our Express web server')
})
//------------------------------------------------ Export Express App
module.exports = app