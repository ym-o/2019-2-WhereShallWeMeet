

exports.get = function(req, res){
	console.log(req.param("id"));
	res.render('test');
};



exports.post = function(req, res){
		console.log(req.body.user_id);
		res.render('index', { title: 'Express' , name:req.body.user_id});
};
