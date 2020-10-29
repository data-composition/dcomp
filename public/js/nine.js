document.addEventListener("DOMContentLoaded", function(){

    fetch(apiUrl + '/api/log')
      .then(response => response.json())
      .then(data => console.log(data));

})
