exports.log = (req,res,next) => {
    //here you can perform some operations with request
    //or do logging
    console.log('request received');
    next();
}