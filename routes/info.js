

exports.get = function(req, res){
	console.log(req.param("id"));
	res.render('info');
};



exports.post = function(req, res){
	console.log(req.body.address);
	res.render('midmap',{name:req.body.name, address:req.body.address});
};
