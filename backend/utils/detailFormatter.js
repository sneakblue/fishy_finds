function detailFormatter (detailStr) {
    const res = {};
    const pairs = detailStr.split(',');
    pairs.forEach(pair => {
        const [ key, val ] = pair.split('-');
        res[key] = val;
    });
    return res;
}

module.exports = detailFormatter;
