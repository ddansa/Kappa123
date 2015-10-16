
//
var api_url = "http://api.themoviedb.org/3/",
	api_key = "?api_key=34a209538e9c2bf4cbcdef696f2bf6a2";

function apiURL(call, page) {
    var txt = api_url + call + api_key;
    return ($.isNumeric(page) && page <= 50) ?
		txt + "&page=" + page :
		txt;
}

/*$(function () {
	$.ajax({
			//url: api_url + 'movie/popular' + api_key + '&page=1',
			url: apiURL('movie/popular', 1),
			jsonp: 'callback',
			dataType: 'jsonp',
		}).success(function (data){
			$.each(data.results, function(n, movie){
				if(movie.poster_path) {
					$('#cover-scroller').append('<div class="poster" style="background-image: url(https://image.tmdb.org/t/p/w300/' + movie.backdrop_path + ')">');
					//$('#cover-scroller').append('<img src="https://image.tmdb.org/t/p/w185/' + movie.backdrop_path + '" id="poster-' + n + '" class="poster" alt="image"/>');
				}
			});
		});
})*/

$("#filter-search-bar").focusout(function (e) {
    ($(this).val()) ?
		$(this).addClass("active") :
		$(this).removeClass("active");
});

$("#main-search").submit(function (e) {
    e.preventDefault();
    $(".moviecovers").empty();
    $(".filter-error").hide().empty();
    var searchQ = encodeURIComponent($("#filter-search-bar").val());
    if (searchQ) {
        $.ajax({
            url: apiURL("search/movie", 1) + "&query=" + searchQ,
            jsonp: "callback",
            dataType: "jsonp",
        }).success(function (data) {

            if (data.results.length === 0) {
                $(".filter-error").append("<span>No results found :(</span>").fadeIn("250");
                $(".filter-error");
            } else {
                $.each(data.results, function (n, movie) {
                    if (movie.poster_path) {
                        $(".moviecovers").append("<img src=\"https://image.tmdb.org/t/p/w185/" + movie.poster_path + "\" alt=\"image\"/>");
                    }
                });
                $("html, body").animate({
                    scrollTop: parseInt($(".moviecovers").offset().top, 10)
                }, 500);
            }
        });
    }
});