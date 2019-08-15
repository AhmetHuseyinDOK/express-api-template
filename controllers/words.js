const WordService =  require('../services/word');

exports.get = (req,res) => {
    res.send(WordService.all());
}

exports.post = (req,res) => {
    let {word,meaning} = req.body;
    WordService.add(word,meaning);
    res.status(200).send();
}

exports.random = (req,res) => {
    res.send({
        word:"random",
        meaning:"rastgele"
    });
}