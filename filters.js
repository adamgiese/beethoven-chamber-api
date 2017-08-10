const slugify = require('./utility/slugify.js');

const keyFilter = function(works, key) {
    return works.filter(
        function(work) {
            return work.key.toLowerCase() === key.toLowerCase();
        }
    );
};

const genreFilter = function(works, genre) {
    return works.filter(
        function(work) {
            return slugify(work.genre) === slugify(genre);
        }
    );
};

const modeFilter = function(works, mode) {
    return works.filter(
        function(work) {
            return slugify(work.mode) === slugify(mode);
        }
    );
};

const opusFilter = function(works, opus) {
    return works.filter(
        function(work) {
            return work.opus === opus;
        }
    );
};

const instrumentsFilter = function(works, instruments) {
    return works.filter(
        function(work) {
            let containsInstruments = true;
            const instrumentation = work.instrumentation.map(
                function(instrument) {
                    return slugify(instrument);
                }
            );
            instruments.forEach(
                function(instrument) {
                    if (instrumentation.indexOf(instrument) === -1 ) {
                        containsInstruments = false;
                    }
                }
            );
            return containsInstruments;
        }
    )
}

module.exports.keyFilter = keyFilter;
module.exports.genreFilter = genreFilter;
module.exports.modeFilter = modeFilter;
module.exports.opusFilter = opusFilter;
module.exports.instrumentsFilter = instrumentsFilter;
