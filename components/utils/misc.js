export const hideShowMainNav = () => {
  const navListItems = document.querySelectorAll('ul.nav-list li.nav-item');
  console.log(navListItems);
};

export const hideShowNav = () => {
  // show nav on focus (for accessibility)
  const navListItems = document.querySelectorAll('ul.drop-menu li');
  // link that can be tabbed to
  const navLink = document.querySelectorAll('.nav-link.main-link');

  navLink.forEach((link, index) => {
    let start,
      start2,
      duration,
      duration2 = 0;

    if (index === 0) {
      // set loop vars for showing dropdown
      start = 0;
      duration = 4;
      // set loop vars for hiding previous dropdown

      start2 = 25;
      duration2 = 28;
    }
    if (index === 1) {
      // set loop vars for showing dropdown
      start = 4;
      duration = 10;
      // set loop vars for hiding previous dropdown
      start2 = 0;
      duration2 = 4;
    }
    if (index === 2) {
      // set loop vars for showing dropdown
      start = 10;
      duration = 14;
      // set loop vars for hiding previous dropdown
      start2 = 4;
      duration2 = 10;
    }
    if (index === 3) {
      // set loop vars for showing dropdown
      start = 14;
      duration = 20;
      // set loop vars for hiding previous dropdown
      start2 = 10;
      duration2 = 14;
    }
    if (index === 4) {
      // set loop vars for showing dropdown
      start = 20;
      duration = 25;
      // set loop vars for hiding previous dropdown
      start2 = 14;
      duration2 = 20;
    }
    if (index === 5) {
      // set loop vars for showing dropdown
      start = 25;
      duration = 28;
      // set loop vars for hiding previous dropdown
      start2 = 20;
      duration2 = 25;
    }
    if (index === 6) {
      // set loop vars for showing dropdown
      start = 28;
      duration = 33;
      // set loop vars for hiding previous dropdown
      start2 = 25;
      duration2 = 28;
    }

    link.addEventListener('focus', () => {
      for (let i = start; i < duration; i++) {
        navListItems[i].classList.add('show');
      }
    });
    link.addEventListener('blur', () => {
      for (let i = start2; i < duration2; i++) {
        navListItems[i].classList.remove('show');
      }
    });
  });

  // add listener for final item to close out the remainder of the showing navs
  const navListItemLinks = document.querySelectorAll(
    'ul.drop-menu li a.nav-link'
  );
  navListItemLinks[navListItemLinks.length - 1].addEventListener('blur', () => {
    for (let i = 28; i < 33; i++) {
      navListItems[i].classList.remove('show');
    }
  });
};
