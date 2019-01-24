
/*
 * GET home page.
 */

exports.view = function(req, res){
	var naemToShow = req.params.userName;
	if (naemToShow === undefined) {
		nameToShow = 'World';
	}
	console.log("Name is " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
