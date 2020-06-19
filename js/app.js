var $checkbox = $('.navigation-checkbox'),
  $body = $('body'),
  $cursorHover = $('.navigation-button, .navigation-menu, a'),
  $navigationButton = $('.navigation-button'),
  $cursorColorChange = $('.section.about'),
  $sectionHeroLine = $('.section-hero .line'),
  $sectionHeroMiddle = $('.section-hero .middle .text'),
  $cursor = $('.cursor'),
  $jsNavigation = $('.js-navigation'),
  $cursorBorder = $('.cursor-border');

// Cursor
$body.on('mousemove', function (e) {
  $cursorHover.on('mouseenter', function () {
    $cursor.addClass('cursor-hover');
    $cursorBorderr.hide();
  });
  $cursorHover.on('mouseleave', function () {
    $cursor.removeClass('cursor-hover');
    $cursorBorder.show();
  });
  $cursor.css({
    left: e.clientX,
    top: e.clientY
  });
  $cursorBorder.css({
    left: e.clientX - 13,
    top: e.clientY - 13
  });
});

// Navigation
$(document).on('keyup', function (evt) {
  if (evt.keyCode == 27) {
    $checkbox.prop('checked', false);
    $body.removeClass("no-scroll body-blur");
  }
});
$navigationButton.on('click', function () {
  $body.toggleClass("no-scroll body-blur");
});

$( document ).ready(function() {
  // Section hero
  var width = $body.width() / 100;
  var widthText = $('.section-hero .text').width() / width;
  var lineWidth = 92.2 - widthText;

  $sectionHeroLine.css('width', + lineWidth + '%');
  $sectionHeroMiddle.css('margin', '0');

  // Cursor on tablet and phones
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $cursor.hide();
    $cursorBorder.hide();
  }

  // Navigation
  var leftNav = ($body.width() - $('.wrapper').width()) / 2;
  $navigationButton.css('right', leftNav);
});

$( window ).resize(function() {
  // Navigation
  var leftNav = ($body.width() - $('.wrapper').width()) / 2;
  $navigationButton.css('right', leftNav);

  // Section hero
  var width = $body.width() / 100;
  var widthText = $('.section-hero .text').width() / width;
  var lineWidth = 92.2 - widthText;

  $sectionHeroLine.css('width', + lineWidth + '%');
  $sectionHeroMiddle.css('margin', '0');
});

// Smooth scroll navigaton
$jsNavigation.on("click touchstart", function () {
  var dataId = $(this).attr('data-id'),
    widowsHeight = $('body').outerHeight() * .02;
  $('html, body').animate({
    scrollTop: $('[data-name="' + dataId + '"]').offset().top - widowsHeight
  }, 1000);
});