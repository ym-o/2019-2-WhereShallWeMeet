exports.get = function(req, res){
    console.log(req.body);
    res.render('places', {});
};

exports.post=function(req,res){
    console.log(req.body);
    res.render('places',{middle0:req.body.m0,middle1:req.body.m1});
}