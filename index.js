$(document).ready(function() {
  // $('.menu').on('click', '.collection', function() {
  //
  //   $('.collection-content').slideToggle('slow')
  //
  // })
  // $('.menu').on('blur', '.collection', function() {
  //
  //   $('.collection-content').slideToggle('fast')
  //
  // })
  // $('.menu').on('click', '.color', function() {
  //
  //   $('.color-content').slideToggle('slow')
  // })
  // $('.menu').on('blur', '.color', function() {
  //
  //   $('.color-content').slideToggle('fast')
  // })
  // $('.menu').on('click', '.width', function() {
  //
  //   $('.width-content').slideToggle('slow')
  // })
  // $('.menu').on('blur', '.width', function() {
  //
  //   $('.width-content').slideToggle('fast')
  // })
  // $('.menu').on('click', '.fabric', function() {
  //
  //   $('.fabric-content').slideToggle('slow')
  // })
  // $('.menu').on('blur', '.fabric', function() {
  //
  //   $('.fabric-content').slideToggle('fast')
  // })
  // $('.menu').on('click', '.pattern', function() {
  //
  //   $('.pattern-content').slideToggle('slow')
  // })
  // $('.menu').on('blur', '.pattern', function() {
  //
  //   $('.pattern-content').slideToggle('fast')
  // })

  $('.menu').on('click', '.cartsmall', function(e) {
    $('.nothing').slideToggle('slow')

  })
  $('.menu').on('click', '.searchs', function() {
    $('.searchsmall').slideToggle('slow')
    $('.searchiconsmall').slideToggle('slow')
  })
  $('.menu').on('click', '.usersmall', function() {
    $('.accesssmall').slideToggle('slow')

  })

  $(".slidescont").owlCarousel({
    "dots": false,
    "autoWidth": true,
    "items": 9,
    "slideBy": 3
  });
});
