import { useEffect } from 'react';

const MenuScript = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerInner = document.querySelector('.hamburger__inner');
    const hamburgerBlackInner = document.querySelector(
      '.hamburger__blackInner'
    );
    const mobileMenu = document.querySelector('.mobile-menu');
    const cross = document.querySelector('.mobile-menu__cross');
    const nav = document.querySelector('nav');

    const closeMenu = () => {
      mobileMenu.style.transform = 'translateX(-100vw)';
    };
    const openMenu = () => {
      mobileMenu.style.transform = 'translateX(0)';
    };

    const scroll = () => {
      if (window.pageYOffset === 0) {
        hamburgerBlackInner
          ? (nav.style.background = 'white')
          : (nav.style.background = 'none');
        hamburgerInner
          ? (hamburgerInner.style.background = 'white')
          : (hamburgerBlackInner.style.background = 'black');
      } else {
        nav.style.background = 'white';
        hamburgerInner
          ? (hamburgerInner.style.background = 'black')
          : (hamburgerBlackInner.style.background = 'black');
      }
    };
    hamburger.addEventListener('click', openMenu);
    cross.addEventListener('click', closeMenu);
    window.addEventListener('scroll', scroll);
  });
  return null;
};

export default MenuScript;
