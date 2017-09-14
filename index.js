$( document ).ready(function() {

	$.post( "http://promo.fabiohome.ru/test", {begin: "2017/08/13", end: "2017/10/13"})
	.done(function(date){

		console.log("success");
	});

	console.log("hi");
});
