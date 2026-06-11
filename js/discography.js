(function () {
  'use strict';

  var FILTER_ALL = 'all';

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function t(key, fallback) {
    if (window.EJI18n && typeof window.EJI18n.t === 'function') {
      var val = window.EJI18n.t(key);
      if (val && val !== key) return val;
    }
    return fallback;
  }

  function typeLabel(type) {
    var map = {
      Album: t('stammbaum.discography.types.album', 'Album'),
      EP: t('stammbaum.discography.types.ep', 'EP'),
      Single: t('stammbaum.discography.types.single', 'Single'),
      Live: t('stammbaum.discography.types.live', 'Live'),
      Compilation: t('stammbaum.discography.types.compilation', 'Compilation')
    };
    return map[type] || type;
  }

  function buildFilterButtons(types, active, onChange) {
    var wrap = document.createElement('div');
    wrap.className = 'ej-discography-filters';
    wrap.setAttribute('role', 'tablist');
    wrap.setAttribute('aria-label', t('stammbaum.discography.filterLabel', 'Filter releases'));

    var filters = [{ id: FILTER_ALL, label: t('stammbaum.discography.filters.all', 'All') }];
    types.forEach(function (type) {
      filters.push({ id: type, label: typeLabel(type) });
    });

    filters.forEach(function (f) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'ej-discography-filter' + (f.id === active ? ' is-active' : '');
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', f.id === active ? 'true' : 'false');
      btn.dataset.filter = f.id;
      btn.textContent = f.label;
      btn.addEventListener('click', function () {
        onChange(f.id);
      });
      wrap.appendChild(btn);
    });

    return wrap;
  }

  function renderRelease(release) {
    var item = document.createElement('article');
    item.className = 'ej-discography-item';
    item.dataset.type = release.type;

    var coverWrap = document.createElement('div');
    coverWrap.className = 'ej-discography-cover';

    if (release.cover) {
      var img = document.createElement('img');
      img.src = release.cover;
      img.alt = release.title + (release.year ? ' (' + release.year + ')' : '');
      img.width = 250;
      img.height = 250;
      img.loading = 'lazy';
      img.decoding = 'async';
      coverWrap.appendChild(img);
    } else {
      var ph = document.createElement('div');
      ph.className = 'ej-discography-cover-placeholder';
      ph.setAttribute('aria-hidden', 'true');
      ph.textContent = release.year || '—';
      coverWrap.appendChild(ph);
    }

    var body = document.createElement('div');
    body.className = 'ej-discography-body';

    var meta = document.createElement('p');
    meta.className = 'ej-discography-meta';
    meta.textContent = [release.year, typeLabel(release.type)].filter(Boolean).join(' · ');

    var title = document.createElement('h4');
    title.className = 'ej-discography-title';
    title.textContent = release.title;

    var links = document.createElement('p');
    links.className = 'ej-discography-links';
    links.innerHTML =
      '<a href="' + escapeHtml(release.discogsSearch) + '" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(t('stammbaum.discography.linkDiscogs', 'Discogs')) +
      '</a> · <a href="' + escapeHtml(release.mbUrl) + '" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(t('stammbaum.discography.linkMusicBrainz', 'MusicBrainz')) +
      '</a>';

    body.appendChild(meta);
    body.appendChild(title);
    body.appendChild(links);

    item.appendChild(coverWrap);
    item.appendChild(body);
    return item;
  }

  function mountDiscography(container, projectId) {
    var catalog = window.ARCHIV_DISCOGRAPHY && window.ARCHIV_DISCOGRAPHY[projectId];
    if (!catalog || !catalog.releases || !catalog.releases.length) return;

    var activeFilter = FILTER_ALL;
    var types = [];
    catalog.releases.forEach(function (r) {
      if (types.indexOf(r.type) === -1) types.push(r.type);
    });

    var head = document.createElement('div');
    head.className = 'ej-discography-head';

    var title = document.createElement('h4');
    title.className = 'ej-discography-heading';
    title.textContent = t('stammbaum.discography.title', 'Discography');

    var intro = document.createElement('p');
    intro.className = 'ej-discography-intro';
    intro.innerHTML = t(
      'stammbaum.discography.intro',
      'Release list indexed from MusicBrainz; cover thumbnails from the Cover Art Archive where available. Open Discogs or MusicBrainz for editions, track lists, and credits.'
    );

    var sources = document.createElement('p');
    sources.className = 'ej-discography-sources';
    sources.innerHTML =
      '<a href="' + escapeHtml(catalog.discogsArtist) + '" target="_blank" rel="noopener noreferrer">' +
      escapeHtml(t('stammbaum.discography.fullDiscogs', 'Full catalogue on Discogs')) +
      '</a> · <a href="' + escapeHtml(catalog.musicbrainzArtist) + '" target="_blank" rel="noopener noreferrer">' +
      'MusicBrainz</a>';

    head.appendChild(title);
    head.appendChild(intro);
    head.appendChild(sources);

    var filtersEl = buildFilterButtons(types, activeFilter, function (next) {
      activeFilter = next;
      filtersEl.querySelectorAll('.ej-discography-filter').forEach(function (btn) {
        var on = btn.dataset.filter === next;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      grid.querySelectorAll('.ej-discography-item').forEach(function (el) {
        var show = next === FILTER_ALL || el.dataset.type === next;
        el.hidden = !show;
      });
      count.textContent = String(
        next === FILTER_ALL
          ? catalog.releases.length
          : catalog.releases.filter(function (r) { return r.type === next; }).length
      );
    });

    var countWrap = document.createElement('p');
    countWrap.className = 'ej-discography-count-wrap';
    var countLabel = document.createElement('span');
    countLabel.className = 'ej-discography-count-label';
    countLabel.textContent = t('stammbaum.discography.showing', 'Showing') + ' ';
    var count = document.createElement('span');
    count.className = 'ej-discography-count';
    count.textContent = String(catalog.releases.length);
    var countSuffix = document.createElement('span');
    countSuffix.className = 'ej-discography-count-label';
    countSuffix.textContent = ' ' + t('stammbaum.discography.releases', 'releases');
    countWrap.appendChild(countLabel);
    countWrap.appendChild(count);
    countWrap.appendChild(countSuffix);

    var grid = document.createElement('div');
    grid.className = 'ej-discography-grid';
    catalog.releases.forEach(function (release) {
      grid.appendChild(renderRelease(release));
    });

    var note = document.createElement('p');
    note.className = 'ej-discography-note';
    note.textContent = t(
      'stammbaum.discography.coverNote',
      'Cover images are served from the Cover Art Archive (community uploads). Rights vary by release; this site does not host cover files locally.'
    );

    container.appendChild(head);
    container.appendChild(filtersEl);
    container.appendChild(countWrap);
    container.appendChild(grid);
    container.appendChild(note);
  }

  function init() {
    document.querySelectorAll('[data-discography]').forEach(function (el) {
      mountDiscography(el, el.getAttribute('data-discography'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
