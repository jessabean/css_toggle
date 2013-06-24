$( document ).ready(function() {
  var wrapper = $('.toggle-wrap');

  $(wrapper).click(function() {
    $(wrapper).toggleClass('on');
  });
});