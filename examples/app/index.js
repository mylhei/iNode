var Framework = require("../../lib/framework");

var config = require("./config").config;

/**
 * app main enter
 *
 * @author blue5tar
 * @return void
 */
exports.main = function (req, res) {
    console.log("app path : %s", global.APP_PATH);
    
    var app = new Framework(req, res).createApp(config);
    //app.setView("ejs");
    //app.setRoute(routeParser);
    app.run();
}

/**
 * custom router
 * 
 * @param string uri uri
 *
 * @author blue5tar
 * @return {controller:xxx, action:xxx}
 */
function routeParser(uri)
{
	var ctr = "index";
	var act = "show";
	return {controller: ctr, action: act};
}