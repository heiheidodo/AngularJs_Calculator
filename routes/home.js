var ejs = require("ejs");

function calculator(req,res) {

	ejs.renderFile('./views/calculator.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
}

exports.calculator=calculator;