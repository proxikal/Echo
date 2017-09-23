var original = Params; // Keep the original Params
if(Params.indexOf(" ") >= 0) {
       Params = Replace(Params, " ", "-"); // Replace spaces with dashes (for the api)
}
var obj = GetJSON("http://api.tenor.co/v1/search?tag=" + Params); // Collect Info from API.
if(obj.results.length > 0) {
    // Displays the first image from Tenor GIF Website.
    resp = "Results for: `" + original + "`:\n" + obj.results[0].url;
} else {
    // results array is empty.
    resp = "Sorry, no results found!";
}
