const selector = "ytd-menu-renderer.ytd-video-primary-info-renderer > div > :nth-child(2) yt-formatted-string";
var paramsID = ""
setInterval(function(){
    var params = new URLSearchParams(document.location.search.substring(1));
    var ID = params.get("v");
    
    if (ID == paramsID && document.querySelector(selector).textContent == "DISLIKE") {

    }else if (ID !== paramsID && document.querySelector(selector).textContent !== "DISLIKE"){
    fetch('https://mixerno.space/api/youtube-video-counter/user/'+ID+'')
  .then(response => response.json())
  .then(data => {
    console.log('FETCH')
      var count = 0;
      if (data.counts[4].count < 1000) {
          count = data.counts[4].count
      } else if (data.counts[4].count > 10000000) {
        var a = data.counts[4].count.toString()[0]
        var b = data.counts[4].count.toString()[1]
        count = a+""+b+"M"
      } else if (data.counts[4].count > 1000000) {
        var a = data.counts[4].count.toString()[0]
        var b = data.counts[4].count.toString()[1]
        count = a+"."+b+"M"
      } else if (data.counts[4].count > 100000) {
        var a = data.counts[4].count.toString()[0]
        var b = data.counts[4].count.toString()[1]
        count = a+"."+b+"K"
    } else if (data.counts[4].count > 10000) {
        var a = data.counts[4].count.toString()[0]
        var b = data.counts[4].count.toString()[1]
        count = a+""+b+"K"
    } else if (data.counts[4].count > 1000) {
        var a = data.counts[4].count.toString()[0]
        var b = data.counts[4].count.toString()[1]
        count = a+"."+b+"K"
    }     
  document.querySelector(selector).textContent = count;
  });

}
  paramsID = ID
},100)

