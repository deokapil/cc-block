(function() {
    var div = document.createElement('div')
    div.id = 'not-blocked'
    div.textContent = ">>>>>Hello From an Unblocked safe Script"
    document.getElementById('content').appendChild(div)
})()