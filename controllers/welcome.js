const HiServices =  require('../services/hi');
exports.index = (req,res) => {
    //to not to make controllers so much large you can use services to perform
    //tasks like saving to db or sending a request to another server etc.
    res.send(HiServices.hi());
}