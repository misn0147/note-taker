
// const { v4: uuidv4 } = require('uuid');
const notesData = require('../db/db.json');



module.exports = (app) => {
    
    app.get('/api/notes', (req, res) => res.json(notesData));

    app.post('/api/notes', (req, res) => {
        console.log('this worked');
        notesData.push(req.body);
        res.json(true);
    })
};