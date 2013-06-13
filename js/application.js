$( document ).ready(function() {
  var wrapper = $('.toggle-wrap');
  var slider  = $('.switch');

  $(slider).click(function() {
    $(wrapper).toggleClass('on');
  });
});