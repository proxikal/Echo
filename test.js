var original = Params;
if(Params.indexOf(" ") >= 0) {
       Params = Replace(Params, " ", "-");
}
var obj = GetJSON("http://api.tenor.co/v1/search?tag=" + Params);
if(obj.results.length > 0) {
    resp = "Results for: `" + original + "`:\n" + obj.results[0].url;
} else {
    resp = "Sorry, no results found!";
}
