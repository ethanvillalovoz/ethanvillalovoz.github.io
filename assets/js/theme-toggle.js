function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Save the user's preference in localStorage
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Check the user's preference on page load
  document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
  