import $ from 'jquery'
$(document).ready(() => {

  //Change style on scroll
  $(window).scroll((e) => {
    if($(window).scrollTop() > 0){
      $('#nav-scroll').addClass('scrolled')
    } else {
      $('#nav-scroll').removeClass('scrolled')
    }
    $('#banner-text-container').css({
      position: 'relative',
      top: $(window).scrollTop() * 0.5 + 'px'
    })
  })

})
