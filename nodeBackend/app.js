
const express = require("express");
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')
const multer  =   require('multer');  

//const sessionsData = require('./src/data/sessions.json');

const PORT = process.env.PORT || 3000;

const app = express();
const sessionsRouter = require('./src/routers/sessionsRouter');
const adminRouter = require('./src/routers/adminRouter');

//const sessionsRouter = express.Router();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));

app.set('views','./src/views');
app.set('view engine','ejs');

// sessionsRouter.route('/')
//     .get((req,res)=>{
//         //res.send('hello sessions')
//         // res.render('sessions',{
//         //     sessions:[
//         //         { title:'Session 1', description: 'this is session 1'},
//         //         { title:'Session 2', description: 'this is session 2'},
//         //         { title:'Session 3', description: 'this is session 3'},
//         //         { title:'Session 4', description: 'this is session 4'}
//         //     ]
//         // });
//         res.render('sessions',sessionsData);
//     });

// //sessionsRouter.route('/1')
// sessionsRouter.route('/:id')
//     .get((req,res)=>{
//         const id = req.params.id;
//         //res.send('hello single sessions >>> ' + id);
//         res.render('session',{
//             session:sessionsData.sessions[id]
//         }
//         )
//     });

// app.get('/sessions',(req,res)=>{
//     res.send('Welcome to sessions page');
// });
app.use('/sessions',sessionsRouter);
app.use('/admin',adminRouter);

app.get('/',(req,res)=>{
    //res.send('Hello from my app');
    //res.render('index',{title:'Welcome to TechDotMasterpiece'});

    //passing data
    res.render('index',{title:'Welcome to TechDotMasterpiece',data:['a','b','c']});

});

const Storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './uploads');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  

const upload = multer({ storage : Storage}).single('myfile');  
app.post('/fileupload-endpoint',(req,res)=>{
    
    upload(req,res,function(err) {  
        if(err) {  
            debug(err);
            return res.end("Error uploading file.");  
        }  
        debug('file upload successful');
        res.end("File is uploaded successfully!");  
    });  
    //res.send('Hello from my app');
    //res.render('index',{title:'Welcome to TechDotMasterpiece'});

    //passing data
    //res.render('index',{title:'Welcome to TechDotMasterpiece',data:['a','b','c']});

});

app.listen(PORT,()=>{
    debug('listening to port ' + chalk.green(PORT));
});
