function test() {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
           document.getElementById("newsPanel").innerHTML = xmlHttp.responseText;
        }
    }

    start = new Date().getTime();
    xmlHttp.open("GET", "https://xtclabs.net/pages/news_content.php", true); // true for asynchronous
    xmlHttp.send(null);
    // 1039
}

setTimeout(function() {
  test();
}, 1500);
setInterval(function(){
  test();
}, 10000);
