
document.addEventListener("DOMContentLoaded", function(){

    setInterval(function(){
      fetch(apiUrl + '/api/log')
      .then(response => response.json())
      .then(data => {
        console.log(data)
          let userIds = ''

          for(const d of data.docs){
            userIds += '<span>' + d.userId + ':' + d.target + '</span></br>'
          }
          document.querySelector('#nine').innerHTML = userIds
      });
    }, 700)
})
