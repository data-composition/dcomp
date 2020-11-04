const userId = uuidv4();
// const apiUrl = 'https://dc.egstep.com'
// const apiUrl = 'http://localhost:3000'


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

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
    // console.log(`target: ${t}`)

    var data = {
        userId: userId,
        top: top,
        left: left,
        target: t
    };

    fetch(apiUrl + '/api/log', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
    });

    // fetch('http://example.com/movies.json')
    //   .then(response => response.json())
    //   .then(data => console.log(data));
}
