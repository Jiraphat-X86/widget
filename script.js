$('.project-percent').each(function(){
  var $this = $(this);
  var percent = $this.attr('percent');
  $this.css("width",percent+'%');
  $({animatedValue: 0}).animate({animatedValue: percent},{
      duration: 2000,
      step: function(){
          $this.attr('percent', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
          $this.attr('percent', Math.floor(this.animatedValue) + '%');
      }
  });
});
 
/* ------------------------------------------- */
$(document).ready(function() {
  $('#loadbar').removeClass('ins');
  $('#loadbar').removeClass('ins').delay(10).queue(function(next) {
    $(this).addClass('ins');
    next();
  });
  return false;
});