var movies = [
	item1:{id:"1", poster:"http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY317_CR0,0,200,300_AL_.jpg"},
	item2:{id:"2", poster:"http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY317_CR0,0,200,300_AL_.jpg"}
];

console.log(movies);

$.each(movies, function(i, v) {
	$('#cover-scroller').append('<img src="' + v + '" alt="image">');
});