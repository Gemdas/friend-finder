friends = {
	friendArray:[{
		name: "Emmett",
		pic: "https://vignette.wikia.nocookie.net/lego/images/e/e7/Lego-emmet.png/revision/latest/scale-to-width-down/171?cb=20150528230000",
		answerArray:[3,3,3,3,3,3,3,3,3,3]	
	}],
	addFriend: function(newFriend){
		this.friendArray.push(newFriend);
	},
	getArray: function (){
		return this.friendArray;
	}
}
module.exports =friends;