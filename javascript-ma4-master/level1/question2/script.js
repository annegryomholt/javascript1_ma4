fetch("https://jsonplaceholder.typicode.com/todos")
	.then(function(response) {
	return response.json();
})
	.then(function(json) {
	loopTroughResults(json);
})
	.catch(function(error){
	console.log(error);
});

function loopTroughResults(cards){
	var cardsSections = document.getElementById("cards");
	for (var i = 0; i < cards.length; i++){
		cardsSections.innerHTML += "<div><h3>User Id: " + cards[i].userId+ "</h3><p>Id: " + cards[i].id + "</p><p>Title: " + cards[i].title + "</p><p>Completed: " + cards[i].completed + "</p><div>"
	}
}