const express    = require('express');
const bodyParser = require('body-parser');
const Webtask    = require('webtask-tools');
const works = require('./works.js');
const filters = require('./filters.js');
const slugify = require('./utility/slugify.js');
const app = express();

app.use(bodyParser.json());

app.get('/works', function(req, res) {
    const key = req.query.key;
    const genre = req.query.genre;
    const mode = req.query.mode;
    const opus = Number(req.query.opus);
    const instruments = req.query.instruments ? req.query.instruments.split(',') : [];
    
    let filteredWorks = works;
    
    if (key) { filteredWorks = filters.keyFilter(filteredWorks, key); }
    if (genre) { filteredWorks = filters.genreFilter(filteredWorks, genre); }
    if (mode) { filteredWorks = filters.modeFilter(filteredWorks, mode); }
    if (opus) { filteredWorks = filters.opusFilter(filteredWorks, opus); }
    if (instruments) { filteredWorks = filters.instrumentsFilter(filteredWorks, instruments); }

    res.send(filteredWorks);
});

module.exports = Webtask.fromExpress(app);
module.exports.app = app;
