var friendsArray = require("../data/friends.js");

module.exports = function(app) {

app.post("/survey", function(req, res) {
	// friends.push(req.body);
	console.log(req.body)
	console.log("\nanswers: "+req.body.answers);
	res.json(true);


});


}

// vaiable to hold friendsArray.name of the current match
// var curMatch;
// // variable set to an arbitrary high number, lowered as user iterates through potential matches if curFriendScore < matchScore, then matchScore = curFriendScore
// var matchScore = 1000

// for (i = 0; i<friendsArray.length; i++){
// 	var curFriendAnswers = friendsArray[i].answers;
// 	var curFriendScore = 0
// 	for(j = 0; j< curFriendAnswers.length; j++) {
// 		var num1 = userAnswers[j];
// 		var num2 = curFriendAnswers[j];
// 		var diff = Math.abs(num1 - num2);
// 		curFriendScore += diff
// 	}
	
// 	if(curFriendScore < matchScore) {
// 		curMatch = friendsArray[i].name;
// 		matchScore = curFriendScore
// 	}
// }