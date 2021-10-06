import '../styles/styles.scss';
import { changeTheme, initializeTheme } from './accessibility/theme';

window.addEventListener('load', initializeTheme);

document
  .querySelector('.toggle__default-checkbox')
  .addEventListener('click', changeTheme);
