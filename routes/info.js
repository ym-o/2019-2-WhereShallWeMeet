

exports.get = function(req, res){
	console.log(req.param("id"));
	res.render('info');
};



exports.post = function(req, res){
	console.log(req.body.name);
	console.log(req.body.address);
	res.render('midmap',{adr:req.body.adr,na:req.body,name});
};
