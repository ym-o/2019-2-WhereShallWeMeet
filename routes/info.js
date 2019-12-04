

exports.get = function(req, res){
	res.render('info');
};



exports.post = function(req, res){
	res.render('midmap',{name:req.body.name, address:req.body.address});
};
