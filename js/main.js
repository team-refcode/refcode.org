const navList = $('.main-banner .main-banner-nav-list');

$(window).click(() => {
  navList.removeClass('open');
});

$('.main-banner .toggle').click((e) => {
  e.stopPropagation();
  navList.addClass('open');
});
