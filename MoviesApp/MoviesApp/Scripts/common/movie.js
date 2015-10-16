//start - simple way to check the movie id
var urlString = document.URL;
    urlParams = parseURLParams(urlString);

function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");   
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

var myObj = urlParams;

var movie_id_array = $.map(myObj, function(value, index) {
    return [value];
});

var id = movie_id_array;
id.toString();

var valueAtIndex0 = id[0];
var id_num = parseInt(valueAtIndex0);

console.log(id_num)
//end

// /movie/{id}
//"original_title":"The Martian"
//"release_date":"2015-10-02"
//"genres":[{"id":18,"name":"Drama"},{"id":12,"name":"Adventure"},{"id":878,"name":"Science Fiction"}]

//"overview":"During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive."

//"imdb_id":"tt???"

// /movie/{id}/credits

// /movie/{id}/videos
//"key":"???"
