(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__mobile-menu-btn'),
    closeMenuBtn: document.querySelector('.mobile-menu__close-btn'),
    modal: document.querySelector('.mob-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();