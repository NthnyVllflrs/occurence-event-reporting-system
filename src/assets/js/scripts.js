import $ from 'jquery'
$(document).ready(() => {

  //Change style on scroll
  $(window).scroll((e) => {
    $('#banner-text-container').css({
      position: 'relative',
      top: $(window).scrollTop() * 0.5 + 'px'
    })
  })

})
