$(document).ready(function(){

  setInterval(
    function(){
      var timeNow = new Date();
      var hours   = timeNow.getHours();
      var minutes;
      var seconds;
      if (parseInt(timeNow.getMinutes()) < 10) {
        minutes = "0" + timeNow.getMinutes();
      } else {
        minutes = timeNow.getMinutes();
      }

      if (parseInt(timeNow.getSeconds()) < 10) {
        seconds = "0" + timeNow.getSeconds();
      } else {
        seconds = timeNow.getSeconds();
      }

      var color = "#" + hours + minutes + seconds;
      var clock = hours + ":" + minutes + ":" + seconds

      $("#time").text(clock)
      $("#color").text(color)
      $("body").css("background", color)
    }
  , 1000);


});