var express = require('express');
var friends = require("../data/friends.js")
var router = express.Router();

router.post("/api/new", function(req, res) {
    var newFriend = req.body;
    friends.addFriend(newFriend);
    res.json(friends.getArray());
});

router.get("/api/all", function(req,res){
	res.json(friends.getArray());
});

module.exports = router;