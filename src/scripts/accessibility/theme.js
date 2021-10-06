import githubWhite from '../../assets/images/logos/GitHub-White-Mark-32px.png';
import githubBlack from '../../assets/images/logos/GitHub-Black-Mark-32px.png';

/*
 * THEMES
 *
 * Controls which theme is active on the page and saves settings
 * to users' local storage.
 */

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
const DEFAULT_THEME = DARK_THEME;
const githubLogo = document.querySelector('.github-icon');

const setTheme = (theme) => {
  if (theme === LIGHT_THEME) {
    document.documentElement.className = LIGHT_THEME;
    githubLogo.src = githubBlack;
  } else {
    document.documentElement.className = DARK_THEME;
    githubLogo.src = githubWhite;
  }
};

function changeTheme() {
  const currentTheme = document.documentElement.className;
  const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || DEFAULT_THEME;

  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', savedTheme);
  }

  setTheme(savedTheme);
}

export { changeTheme, initializeTheme };
