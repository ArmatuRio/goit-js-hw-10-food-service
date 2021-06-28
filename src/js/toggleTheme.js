
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
  const body = document.querySelector('body');
  themeSwitchToggle.addEventListener('change', themeControl);
  currentTheme();
  
  function currentTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
      body.classList.add(Theme.DARK);
      themeSwitchToggle.checked = true;
    } else {
      body.classList.add(Theme.LIGHT);
    }
  }
  
  function themeControl() {
    if (themeSwitchToggle.checked) {
      body.classList.remove(Theme.LIGHT);
      body.classList.add(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
      return;
    }
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }