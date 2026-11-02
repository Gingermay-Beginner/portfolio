(() => {
  const norm = value => value.replace(/\s+/g,' ').trim();
  const dict = window.portfolioZh || {};
  const attrs = ['title','alt','aria-label','placeholder','data-title','data-caption','data-demo-title','data-gallery-label','data-label'];
  const isChinese = () => document.documentElement.lang.toLowerCase().startsWith('zh');
  function text(node) {
    if (!isChinese() || !node.parentElement || node.parentElement.closest('script,style,code,pre')) return;
    const original = node.nodeValue, key = norm(original), value = dict[key];
    if (value && value !== key) node.nodeValue = original.replace(original.trim(), value);
  }
  function element(el) {
    if (!isChinese()) return;
    for (const attr of attrs) {
      const value = el.getAttribute(attr), translated = value && dict[norm(value)];
      if (translated && translated !== value) el.setAttribute(attr, translated);
    }
  }
  function scan(root) {
    if (!isChinese()) return;
    if (root.nodeType === Node.TEXT_NODE) return text(root);
    if (root.nodeType === Node.ELEMENT_NODE) element(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while(walker.nextNode()) text(walker.currentNode);
    root.querySelectorAll?.('*').forEach(element);
  }
  scan(document.documentElement);
  // Translation changes paragraph heights; align deep links after the final layout.
  const alignHash = () => {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView({behavior:'instant',block:'start'});
  };
  requestAnimationFrame(alignHash);
  (document.fonts?.ready || Promise.resolve()).then(alignHash);
  new MutationObserver(records => {
    for (const record of records) {
      if (record.type === 'characterData') text(record.target);
      else if (record.type === 'attributes') element(record.target);
      else record.addedNodes.forEach(scan);
    }
  }).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attrs});
})();
