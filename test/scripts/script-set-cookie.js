(function(){
    console.log("setcookie script called");
    var date = new Date();
    var expires = "";
    var cookieVal = "hello Cookie"
    date.setTime(date.getTime() + (24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = "one=" + cookieVal + expires + "; path=/";
})()