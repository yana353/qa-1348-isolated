const menuToggle = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('#mobile-navigation');

if (menuToggle && mobileNavigation) {
  const setMenuState = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('.sr-only').textContent = isOpen
      ? 'Close navigation'
      : 'Open navigation';
    mobileNavigation.hidden = !isOpen;
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuState(!isOpen);
  });

  mobileNavigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setMenuState(false);
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
      setMenuState(false);
    }
  });
}
