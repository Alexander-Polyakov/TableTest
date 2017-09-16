$( document ).ready(function() {


	$.getJSON("https://cors.io/?http://promo.fabiohome.ru/test?format=json", 'begin=2017/08/1&end=2017/10/1' ,function(successData){
		successData.map(function(item){
			var date = item.data.substr(-2),
				color = item.color,
				rate = item.rate;
				element = $("[data-date='"+date+"']"),
				elementStars = element.find(".js-stars");
			element.addClass("table-item_stars-active");
			if (rate === "5") {
				elementStars.css("color", color);
			} else {
				for (var i = 0; i < rate; i++) {
					elementStars.find("li:eq("+i+")").css("color", color);
				}
			}
		});

	});
});





