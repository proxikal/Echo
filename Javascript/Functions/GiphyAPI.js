function GiphyAPI(apikey, keyword) {
  var clean = Replace(keyword, " ", "-");
  var obj = GetJSON("http://api.giphy.com/v1/gifs/random?api_key="+apikey+"&tag=" + clean);
  if(obj.hasOwnProperty('data')) {
    return obj["data"]["image_original_url"];
  } else {
    return "No results found";
  }
}
