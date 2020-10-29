document.addEventListener("DOMContentLoaded", function(){

    // var url = 'https://dc.egstep.com/api/log'
    var url = 'http://localhost:3000/api/log'

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data));

})
