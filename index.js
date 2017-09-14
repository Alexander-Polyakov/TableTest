$( document ).ready(function() {


	$.getJSON("http://promo.fabiohome.ru/test?callback=?", 'begin=2017/08/13&end=2017/10/13' ,function(json){
		console.log(json);
	});
});



