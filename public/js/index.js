$(document).ready(function(){
    setInterval(function(){
        log();
    }, 1000);
})

function log() {
    var w = screen.width;
    var h = screen.height;
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var left = document.documentElement.scrollLeft || document.body.scrollLeft;

    var t = 1;

    if (left > (w/3)) {
        t = 2;
    }
    if (left > (w/2)) {
        t = 3;
    }

    if (top > (h/3)) {
        t = t+3;
    }
    if (top > (h/2)) {
        t = t+3;
    }

    // console.log(`w:${w} h:${h}, top:${top} left:${left} w/2:${w/2}`)
    console.log(`target: ${t}`)

    // fetch('http://example.com/movies.json')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
}
