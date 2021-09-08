(function(){
    var div = document.createElement('div')
    div.id = 'script-blocked'
    div.textContent = ">>>>>>>>>Hello World Fron blocked Script"
    document.getElementById('content').appendChild(div)
})()