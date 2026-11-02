(() => {
  const file = location.pathname.split('/').pop() || 'portfolio.html';
  const isXiaoice = file === 'xiaoice-storytelling.html';
  const lang = () => isXiaoice ? (window.xiaoiceI18n?.language || 'zh') : (file.endsWith('-zh.html') ? 'zh' : 'en');
  const route = (path, language) => {
    const url = new URL(path, location.href);
    if (url.origin !== location.origin) return url;
    const name = url.pathname.split('/').pop();
    const base = name.replace(/-zh(?=\.html$)/, '');
    if (['portfolio.html','voice-ime.html','copilot-ime.html','microclaw.html'].includes(base)) {
      url.pathname = url.pathname.slice(0, -name.length) + base.replace('.html', language === 'zh' ? '-zh.html' : '.html');
    } else if (base === 'xiaoice-storytelling.html') url.searchParams.set('lang', language);
    return url;
  };
  const parent = document.querySelector('.topbar .top-actions, .nav-shell .top-actions');
  if (parent) {
    parent.querySelectorAll('.case-language,.lang-toggle').forEach(n => n.remove());
    const nav = document.createElement('nav');
    nav.className = 'case-language';
    nav.setAttribute('aria-label', lang() === 'zh' ? '页面语言' : 'Page language');
    for (const [code,label] of [['en','EN'],['zh','中文']]) {
      const a = document.createElement('a'); a.textContent = label; a.lang = code === 'zh' ? 'zh-CN' : 'en'; a.hreflang = a.lang;
      a.dataset.siteLanguage = code; nav.append(a);
    }
    parent.prepend(nav);
  }
  function sync() {
    document.querySelectorAll('.case-language a').forEach(a => {
      a.href = route(location.href, a.dataset.siteLanguage).href;
      if (a.dataset.siteLanguage === lang()) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
    document.querySelectorAll('a[href]:not([data-site-language])').forEach(a => {
      const url = route(a.getAttribute('href'), lang());
      // Keep fragment-only links fragment-only for existing scroll-spy selectors.
      if (!a.getAttribute('href').startsWith('#') && url.origin === location.origin) a.href = url.href;
    });
  }
  if (isXiaoice) document.querySelectorAll('[data-doc]').forEach(card => {
    const url = new URL(card.dataset.doc, location.href); url.searchParams.set('lang', lang()); card.dataset.doc = url.href;
  });
  sync(); window.addEventListener('hashchange', sync);
  document.querySelectorAll('[data-site-language]').forEach(a => a.addEventListener('click', () => sync()));
})();
