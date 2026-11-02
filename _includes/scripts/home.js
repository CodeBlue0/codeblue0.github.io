(function () {
  var root = document.getElementById('home-categories');
  if (!root) return;
  var params = new URLSearchParams(window.location.search);
  var category = params.get('category');
  if (!category) return;
  var sub = params.get('sub') || '';
  var sections = root.querySelectorAll('section[data-category]');
  var selected = Array.from(sections).find(function (section) {
    return section.dataset.category === category && section.dataset.sub === sub;
  });
  if (!selected) return;
  var articles = document.querySelector('.layout--articles');
  var pagination = document.querySelector('.layout--home');
  if (articles) articles.classList.add('d-none');
  if (pagination) pagination.classList.add('d-none');
  root.classList.remove('d-none');
  selected.classList.remove('d-none');
  document.querySelectorAll('.blog-sidebar__categories a').forEach(function (link) {
    var url = new URL(link.href);
    if (url.searchParams.get('category') !== category) return;
    var details = link.closest('details');
    if (details) details.open = true;
    if ((url.searchParams.get('sub') || '') === sub) {
      link.setAttribute('aria-current', 'page');
      link.closest('li').classList.add('active');
    }
  });
})();
