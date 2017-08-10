// vendor
const express    = require('express');
const bodyParser = require('body-parser');
const Webtask    = require('webtask-tools');

// modules
const works = require('./works.js');
const filters = require('./filters.js');
const slugify = require('./utility/slugify.js');

// app

const app = express();
app.use(bodyParser.json());

// routes
app.get('/works', function(req, res) {
    const key = req.query.key;
    const genre = req.query.genre;
    const mode = req.query.mode;
    const opus = Number(req.query.opus);
    const instruments = req.query.instruments ? req.query.instruments.split(',') : [];
    
    let filteredWorks = works;
    
    if (key) { filteredWorks = filters.key(filteredWorks, key); }
    if (genre) { filteredWorks = filters.genre(filteredWorks, genre); }
    if (mode) { filteredWorks = filters.mode(filteredWorks, mode); }
    if (opus) { filteredWorks = filters.opus(filteredWorks, opus); }
    if (instruments) { filteredWorks = filters.instruments(filteredWorks, instruments); }

    res.send(filteredWorks);
});

// exports
module.exports = Webtask.fromExpress(app);
module.exports.app = app;
