module.exports = function(req, res, next){
    console.log(req.client.address().address + ' consulting ' + req.url);
    next();
};