var main = function(){
  $(".button").click(function(){
    $(".mario").animate({
      left: "400px"}, 600);  //animates mario running in from left //
  });
}

$(document).ready(main);
