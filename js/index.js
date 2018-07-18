$(document).ready(function () {
  console.log('CALL BACK')
  var words = [].slice.call($('.word'))
  var i = 0

  setTimeout(function () {
    $('.image-container').removeClass('no-show-image')
    $('.image-conatiner').addClass('show')
  }, 1000)

  setTimeout(function () {
    $('.contact-btn').removeClass('no-show')
  }, 1200)

  setTimeout(function () {
    $('.instagram-btn').removeClass('no-show')
  }, 1600)

  $('.contact-btn').click(function () {
    window.location.href = "mailto:joshua@painteddogz.com";
  })

  $('.instagram-btn').click(function () {
    window.open('https://www.instagram.com/painteddogz/')
  })
})