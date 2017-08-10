const slugify = require('./utility/slugify.js');

const key = function(works, key) {
    return works.filter(
        function(work) {
            return work.key.toLowerCase() === key.toLowerCase();
        }
    );
};

const genre = function(works, genre) {
    return works.filter(
        function(work) {
            return slugify(work.genre) === slugify(genre);
        }
    );
};

const mode = function(works, mode) {
    return works.filter(
        function(work) {
            return slugify(work.mode) === slugify(mode);
        }
    );
};

const opus = function(works, opus) {
    return works.filter(
        function(work) {
            return work.opus === opus;
        }
    );
};

const instruments = function(works, instruments) {
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

module.exports.key = key;
module.exports.genre = genre;
module.exports.mode = mode;
module.exports.opus = opus;
module.exports.instruments = instruments;
