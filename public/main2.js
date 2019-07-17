

function myFunctionTimer( ele ) {
 
  //attach the timer to the element
  var tickTimer = ele.tickTimer;
  if ( tickTimer )
  {
     clearTimeout( tickTimer );
  }

  function countdown(minutes) {
    var seconds = 60;
    var mins = minutes

    function tick() {
      var counter = ele;
      var current_minutes = mins - 1
      seconds--;
      counter.innerHTML =
        current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if (seconds > 0) {
        ele.tickTimer = setTimeout(tick, 1000); //set the timer here
      }      
    }
    tick();
  }
  countdown(1);
}

document.querySelector( "button" ).addEventListener( "click", function(){
   myFunctionTimer( document.getElementById( "time" ) );
});
