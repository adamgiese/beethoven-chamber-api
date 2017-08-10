const key = function(key) {
    const validKeys = ['Ab','Bb','Cb','Db','Eb','Fb','Gb','A','B','C','D','E','F','G','As','Bs','Cs','Ds','Es','Fs','Gs'];
    return validKeys.indexOf(key) !== -1;
}
module.exports.key = key;
