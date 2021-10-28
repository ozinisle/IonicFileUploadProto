const express = require("express");
const sessionsRouter = express.Router();
const sessionsData = require('../data/sessions.json');

sessionsRouter.route('/')
    .get((req,res)=>{
        res.render('sessions',sessionsData);
    });

sessionsRouter.route('/:id')
    .get((req,res)=>{
        const id = req.params.id;
        res.render('session',{
            session:sessionsData.sessions[id]
        }
        )
    });

module.exports = sessionsRouter;