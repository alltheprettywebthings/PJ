/* Workwrights docs: theme toggle, mobile nav drawer, tabs, code-block bars, and the on-page contents. */
(function () {
  'use strict';
  var root = document.documentElement;

  /* Theme toggle: flips data-theme on <html> and remembers the choice. The logo swaps from CSS. */
  function themeLabel(btn) {
    btn.setAttribute('aria-label', root.getAttribute('data-theme') === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
    themeLabel(btn);
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('ww-theme', next); } catch (e) {}
      themeLabel(btn);
    });
  });

  /* Mobile nav drawer */
  var toggle = document.querySelector('[data-drawer-toggle]');
  var nav = document.getElementById('sidenav');
  var scrim = document.querySelector('[data-drawer-scrim]');
  if (toggle && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('ww-drawer-open', open);
      if (scrim) scrim.hidden = !open;
      if (open) { var first = nav.querySelector('a, summary'); if (first) first.focus(); }
    };
    toggle.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    if (scrim) scrim.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); toggle.focus(); }
    });
  } else if (toggle) {
    toggle.hidden = true; /* pages without a SideNav (404) */
  }

  /* Tabs (WAI-ARIA tabs pattern). Groups with the same data-tabs-sync value stay in step. */
  var groups = [].slice.call(document.querySelectorAll('.ww-tabs'));
  function selectTab(group, label, focus) {
    var tabs = [].slice.call(group.querySelectorAll('[role=tab]'));
    tabs.forEach(function (t) {
      var on = t.textContent.trim() === label;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
      if (on && focus) t.focus();
    });
  }
  groups.forEach(function (group) {
    var tabs = [].slice.call(group.querySelectorAll('[role=tab]'));
    var sync = group.getAttribute('data-tabs-sync');
    function pick(t, focus) {
      var label = t.textContent.trim();
      if (sync) {
        groups.filter(function (g) { return g.getAttribute('data-tabs-sync') === sync; })
              .forEach(function (g) { selectTab(g, label, focus && g === group); });
        try { localStorage.setItem('ww-tab-' + sync, label); } catch (e) {}
      } else selectTab(group, label, focus);
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { pick(t, false); });
      t.addEventListener('keydown', function (e) {
        var j = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
        if (j === undefined) return;
        e.preventDefault();
        pick(tabs[(j + tabs.length) % tabs.length], true);
      });
    });
    if (sync) {
      var saved = null;
      try { saved = localStorage.getItem('ww-tab-' + sync); } catch (e) {}
      if (saved && tabs.some(function (t) { return t.textContent.trim() === saved; })) selectTab(group, saved, false);
    }
  });

  /* Code blocks from Markdown fences: add the CodeBlock bar (language + Copy). */
  var LANGS = { shell: 'Shell', bash: 'Shell', sh: 'Shell', console: 'Shell', text: 'Text', plaintext: 'Text', json: 'JSON', yaml: 'YAML', yml: 'YAML', md: 'Markdown', markdown: 'Markdown', js: 'JavaScript', javascript: 'JavaScript', html: 'HTML', css: 'CSS', python: 'Python', py: 'Python' };
  document.querySelectorAll('.ww-prose div.highlighter-rouge').forEach(function (block) {
    var m = /language-([\w-]+)/.exec(block.className);
    var lang = m ? (LANGS[m[1]] || m[1]) : 'Text';
    var pre = block.querySelector('pre');
    if (pre) pre.tabIndex = 0;
    var bar = document.createElement('div');
    bar.className = 'ww-code__bar';
    var file = block.getAttribute('data-file');
    if (file) { var f = document.createElement('span'); f.className = 'ww-code__file'; f.textContent = file; bar.appendChild(f); }
    var l = document.createElement('span'); l.className = 'ww-code__lang'; l.textContent = lang; bar.appendChild(l);
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'ww-button ww-button--secondary ww-button--sm'; b.textContent = 'Copy';
    b.style.margin = '0 4px 0 0';
    b.addEventListener('click', function () {
      var clone = pre.cloneNode(true);
      clone.querySelectorAll('.gp').forEach(function (p) { p.remove(); }); /* leave shell prompts out */
      var text = clone.textContent.replace(/\n$/, '');
      var done = function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done); else done();
    });
    bar.appendChild(b);
    block.insertBefore(bar, block.firstChild);
    block.classList.add('ww-code');
  });

  /* Markdown tables scroll sideways on small screens */
  document.querySelectorAll('.ww-prose > table').forEach(function (t) {
    var w = document.createElement('div'); w.className = 'ww-table-wrap';
    t.parentNode.insertBefore(w, t); w.appendChild(t);
  });

  /* On this page: built from the article's h2/h3, shown when there are 3+ h2s. */
  var toc = document.querySelector('[data-toc]');
  var heads = [].slice.call(document.querySelectorAll('.ww-prose > h2[id], .ww-prose > h3[id]'));
  if (toc && heads.filter(function (h) { return h.tagName === 'H2'; }).length >= 3) {
    var list = toc.querySelector('ol'), sub = null, links = [];
    heads.forEach(function (h) {
      var li = document.createElement('li'), a = document.createElement('a');
      a.className = 'ww-toc__link'; a.href = '#' + h.id;
      a.textContent = h.textContent.replace(/\s+/g, ' ').trim();
      li.appendChild(a); links.push([h, a]);
      if (h.tagName === 'H2' || !list.lastElementChild) { list.appendChild(li); sub = null; }
      else { if (!sub) { sub = document.createElement('ol'); list.lastElementChild.appendChild(sub); } sub.appendChild(li); }
    });
    toc.hidden = false;
    var current = null;
    var mark = function () {
      var y = window.scrollY + 64 + 32, pick = links[0];
      links.forEach(function (p) { if (p[0].offsetTop <= y) pick = p; });
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 2) pick = links[links.length - 1];
      if (pick && pick[1] !== current) {
        if (current) current.removeAttribute('aria-current');
        current = pick[1]; current.setAttribute('aria-current', 'true');
      }
    };
    var ticking = false;
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { mark(); ticking = false; }); } }, { passive: true });
    mark();
  }
})();
