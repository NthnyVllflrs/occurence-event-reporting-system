import $ from 'jquery'
$(document).ready(() => {
  $('#message-type').hide()

  //Change style on scroll
  $(window).scroll((e) => {
    if($(window).scrollTop() > 0){
      $('#nav-scroll').addClass('scrolled')
      $('.links').css({
        color: '#455a64'
      })
    } else {
      $('#nav-scroll').removeClass('scrolled')
      $('.links').css({
        color: 'white'
      })
    }
    $('#banner-text-container').css({
      position: 'relative',
      top: $(window).scrollTop() * 0.5 + 'px'
    })
  })

})
