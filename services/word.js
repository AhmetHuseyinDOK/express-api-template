let words = require('../words.json');
const fs = require('fs');

exports.add = (word,meaning) => {
    words.push({word:word,meaning:meaning});
    fs.writeFile('words.json',JSON.stringify(words),console.log);
}

exports.all = () => {
    return words;
}