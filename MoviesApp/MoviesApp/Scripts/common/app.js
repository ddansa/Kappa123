var genres = {28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 10769: "Foreign", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}

function hoverListener() {
	$('.item').hover(function () {
		console.log(1);
	});
}

$(document).ready(function() {
	$.ajax({
		url: 'http://api.themoviedb.org/3/movie/popular?api_key=34a209538e9c2bf4cbcdef696f2bf6a2&page=1',
		jsonp: 'callback',
		dataType: 'jsonp',
	}).success(function (data){
		console.log(data);
		var d = data;
		$.each(d.results, function(n, movie){
			if(movie.poster_path !== 'N/A') {

				var url = 'movie.html?id=' + movie.id + '';

				var item = $('<div class="item" style="background-image: url(http://image.tmdb.org/t/p/w300' + movie.backdrop_path + ')"><div class="overlay"><section class="top"><span class="rating">' + movie.vote_average + '</span><span class="bookmark"><input type="checkbox"></span></section><section class="bottom"><span class="title">' + movie.title + '</span> <span class="release">(' + movie.release_date.split('-')[0] + ')</span><span class="genre">' + genres[movie.genre_ids[0]] + '</span></section></div></div>');

				item.appendTo('#cover-scroller');
			}
		});
		hoverListener();
	});
});