var friendsArray = require("../data/friends.js");

module.exports = function(app) {

	app.post("/survey", function(req, res) {
		// friends.push(req.body);
		var newFriendName = req.body.name;
		var newFriendPhoto = req.body.photo;
		var newFriendAnswers = req.body.answers;
		// vaiable to hold friendsArray.name of the current match
		var match = {
			curMatch: "",
			curMatchPhoto:""
		}

		// variable set to an arbitrary high number, lowered as user iterates through potential matches if curFriendScore < matchScore, then matchScore = curFriendScore
		var matchScore = 1000
		for (i = 0; i<friendsArray.length; i++){
			var curFriendAnswers = friendsArray[i].answers;
			var curFriendScore = 0
			for(j = 0; j< curFriendAnswers.length; j++) {
				var num1 = newFriendAnswers[j];
				var num2 = curFriendAnswers[j];
				var diff = Math.abs(num1 - num2);
				curFriendScore += diff
			}
			if(curFriendScore < matchScore) {
				match.curMatch = friendsArray[i].name;
				match.curMatchPhoto = friendsArray[i].photo;
				matchScore = curFriendScore
			}
		}
		console.log(match);
		// console.log(matchScore)
		// res.json("You matched with " + curMatch +"!"+"\n<img src="+ curMatchPhoto +" height=42width=42>")
		res.json(match)
	});


	app.get("/api/friends", function(req, res) {
		res.json(friendsArray);
	});
}

