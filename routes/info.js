

exports.get = function(req, res){
	console.log(req.param("id"));
	res.render('info');
};



exports.post = function(req, res){
		console.log(req.body);
		res.render('info');
};
