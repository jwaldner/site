(function () {
  const navLinks = document.querySelectorAll('.top-nav a[href]');
  const currentPage = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  navLinks.forEach((link) => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  document.body.classList.add('ready');
})();
