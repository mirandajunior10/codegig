const express = require('express');
const router = express.Router();
const db  = require("../config/database");
const Gig = require('../models/Gig'); 

//Rota padrão para /Gigs(get), foi definido no app.js que gigs.js só é chamado quando a rota for /gigs
router.get("/", (req, res) => 
Gig.findAll().then( gigs => {
    res.render('gigs', {
        gigs
    });
})
.catch(err => console.log(err))); 
//Display add gig form
router.get('/add', (req, res) => res.render('add'));

//Add a gig
router.post('/add', (req, res) =>{
    const data = {
        title: "Looking for a React developer",
        technologies: "React, Javascript, HTML, CSS",
        budget: "$1000",
        description: "Lorem voluptate velit esse cillum dolore eu ",
        contact_email: "user1@gmail.com",
    }

    let {title, technologies, budget,description, contact_email} = data;
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email,  
    }) 
    .then(gig => res.redirect('/gigs')).catch(err => console.log(err)); 
});
module.exports = router; 