var totalDiv=16;


function clearDivs(){
	for (var n=totalDiv; n!=0; n--) {
	$(".item").remove(); }
}

function newDivs(number){
	clearDivs();
		
	for (var n=0; n<number*number; n++) {
		$(".container").append("<div class='item'></div>");}
	totalDiv=number;
	var divsize= 200/(number);
	$(".item").height(divsize);
	$(".item").width(divsize);

	$(".item").hover(function() {
	$(this).css('background-color', "black");
	});
}

function partyTime(){
	var number=parseInt(prompt("What's the total dimension? 1 to 40 pls"));
	newDivs(number);

	$(".item").hover(function() {
	$(this).css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16));
	});
}





$(document).ready(function(){
	$("body").append("<p>JS working</p>");
	newDivs(totalDiv);
	//$("#clear").click(function(){clearDivs();});
	$("#new").click(function(){
		var number=parseInt(prompt("What's the total dimension? 1 to 40 pls"));
		newDivs(number);});
	$("#party").click(function(){partyTime();
});



});



