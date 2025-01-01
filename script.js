document.getElementById('menu-icon').addEventListener('click', () => {
  const navItems = document.getElementById('nav-items');
  navItems.style.display = navItems.style.display === 'flex' ? 'none' : 'flex';
});