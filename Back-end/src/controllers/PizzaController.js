const fs = require('fs');

const fakeJson = fs.readFileSync('fake_bd.json', 'utf8');

async function pizzaParts(req, res) {

    return res.send(fakeJson);
}

module.exports = {pizzaParts} ;

