var main = function(){
  $(".button").click(function(){
    $(".mario").animate({
      left: "50%"}, 600);  //animates mario running in from left //
  });
}

$(document).ready(main);
