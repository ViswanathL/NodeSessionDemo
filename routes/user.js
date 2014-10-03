var express = require('express');
var router = express.Router();

// Create session details
router.get('/login', function(request, response) {
	console.log(request.session);
	request.session.authenticated = true;
	request.session.authTime = new Date();
	response.json({login: true});
});

// Show session details
router.get('/home', function(request, response) {
	console.log(request.session);
	response.json({home: true});
});

// Destroy the session
router.get('/logout', function(request, response) {
	request.session.destroy();
	console.log(request.session);
	response.json({logout: true});
});


module.exports = router;