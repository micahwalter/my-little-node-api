module.exports = {

	ok: function(req, res, query){	
		res.send(query);
	},
	
	error: function(req, res, code, msg){
		res.send(code + " " + msg);
	}
	
};