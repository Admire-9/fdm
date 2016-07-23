$(document).ready(function () {
  $(".login").css("display","block");
  $(".cart").css("display","block");
  $(".login").html("");
  $(".pull-left").click(function() {
    $(".topNav").slideToggle();
  });
});
