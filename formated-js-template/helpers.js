// Додавання loaded для HTML після повного завантаження сторінки
export function addLoadedClass() {
  if (!document.documentElement.classList.contains('loading')) {
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add('loaded');
      }, 0);
    });
  }
}
// Отримання хешу на адресі сайту
export function getHash() {
  if (location.hash) { return location.hash.replace('#', ''); }
}
// Вказівка хеша на адресу сайту
export function setHash(hash) {
  hash = hash ? `#${hash}` : window.location.href.split('#')[0];
  history.pushState('', '', hash);
}
// Облік плаваючої панелі на мобільних пристроях при 100vh
export function fullVHfix() {
  const fullScreens = document.querySelectorAll('[data-fullscreen]');
  if (fullScreens.length && isMobile.any()) {
    window.addEventListener('resize', fixHeight);
    function fixHeight() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    fixHeight();
  }
}