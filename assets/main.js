
$(function() {
  let i = 0;

  $(".button").click(function() {
    console.log(i);
    let colors = ["#a6c4e0", "#e1e7ed", "#ebd28f", "#e3a25d", "#d67f67", "#8b88b3","#4a5285"];
    $("body").css("background-color", colors[i]);
    i++;
    if (i >= colors.length) {
      i = 0;
    }
  });
});