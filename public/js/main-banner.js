
const mainBanner = document.querySelector(".main-banner-container");
var prevScroll = new Date();
var afterLastScroll;
const manageBannerStickyness = function (forced) {
    // throttle
    var now = new Date();
    var scrollInterval = now - prevScroll;
    if (scrollInterval < 100 && !forced) {
      clearTimeout(afterLastScroll);
      afterLastScroll = setTimeout(manageBannerStickyness, 200);
      return;
    }
    prevScroll = now;

    // stick or unstick banner
    if (window.scrollY > 92) {
        mainBanner.classList.add("stuck");
    } else {
        mainBanner.classList.remove("stuck");
    }
}
document.addEventListener('scroll', manageBannerStickyness);
manageBannerStickyness(true);
