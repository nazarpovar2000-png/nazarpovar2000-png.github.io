/* C2 Calendar — e-calendar style web app. ES2017 only (old Android WebView): no ?. ?? or flex gap. */
(function () {
  'use strict';
  var Q = (function () { var o = {}; location.search.replace(/^\?/, '').split('&').forEach(function (kv) { if (!kv) return; var p = kv.split('='); o[decodeURIComponent(p[0])] = p.length > 1 ? decodeURIComponent(p[1]) : '1'; }); return o; })();
  var FIXED_NOW = Q.now ? new Date(Q.now) : null;
  function now() { return FIXED_NOW ? new Date(FIXED_NOW.getTime()) : new Date(); }

  /* ---------- icons ---------- */
  var I = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    l: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>',
    r: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>',
    dn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.6" fill="#FFB800"/><g stroke="#FFB800" stroke-width="2" stroke-linecap="round"><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.5 1.5M17.2 17.2l1.5 1.5M5.3 18.7l1.5-1.5M17.2 6.8l1.5-1.5"/></g></svg>',
    wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.6 16a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19.3" r="1.3" fill="currentColor" stroke="none"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8l2 .3.7 2.3 1.8 1 2.3-.6 1.4 1.5-.6 2.3 1 1.8 2.3.7v2l-2.3.7-1 1.8.6 2.3-1.4 1.5-2.3-.6-1.8 1-.7 2.3h-2l-.7-2.3-1.8-1-2.3.6-1.4-1.5.6-2.3-1-1.8-2.3-.7v-2l2.3-.7 1-1.8-.6-2.3 1.4-1.5 2.3.6 1.8-1 .7-2.3z" stroke-linejoin="round"/></svg>',
    sync: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 4v5h-5"/></svg>',
    swap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h15l-4-4M20 16H5l4 4"/></svg>',
    dots: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',
    lines: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M7 12h10M10 17h4"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 3l6 6-2 1-3 3 .5 5-1.5 1.5-4-4-5 5-1-1 5-5-4-4L7.5 9l5 .5 3-3z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="#FFB800"><path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg>',
    reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v5h5"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 15l6-6 6 6"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>',
    mountain: '<svg viewBox="0 0 200 120"><path d="M0 120V80l45-38 40 36 40-44 75 66v20z" fill="#5c74e0"/><path d="M0 92l45-38 40 36 40-44 75 66" fill="none" stroke="#7f95f2" stroke-width="10" stroke-linejoin="round"/></svg>'
  };
  function happy(kind) {
    var mouth = kind === 2 ? '<path d="M18 37c3 9 25 9 28 0z" fill="#7a3b12"/><path d="M22 41c5 4 15 4 20 0" fill="#ff6f91"/>' : '<path d="M21 38c4 6 18 6 22 0" fill="none" stroke="#7a3b12" stroke-width="3" stroke-linecap="round"/>';
    var eyes = kind === 2 ? '<path d="M17 25l7 3-7 3M47 25l-7 3 7 3" fill="none" stroke="#7a3b12" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' : '<path d="M17 28c2-4 7-4 9 0M38 28c2-4 7-4 9 0" fill="none" stroke="#7a3b12" stroke-width="3" stroke-linecap="round"/>';
    var hearts = kind === 2 ? '' : '<path d="M10 14c-3-3-8 1-4 5l5 4 4-5c3-4-2-7-5-4z" fill="#ff4f8b"/><path d="M53 40c-2-3-7-1-5 3l4 4 4-3c3-3 0-7-3-4z" fill="#ff4f8b"/>';
    var cheeks = '<ellipse cx="16" cy="35" rx="4" ry="2.5" fill="#ff9a8b" opacity=".7"/><ellipse cx="48" cy="35" rx="4" ry="2.5" fill="#ff9a8b" opacity=".7"/>';
    return '<svg viewBox="0 0 64 64"><defs><radialGradient id="hg' + kind + '" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#FFE36B"/><stop offset="1" stop-color="#FFB627"/></radialGradient></defs><circle cx="32" cy="32" r="24" fill="url(#hg' + kind + ')"/>' + cheeks + eyes + mouth + hearts + '</svg>';
  }
  function noSched() { return '<svg viewBox="0 0 64 64"><rect x="10" y="16" width="40" height="36" rx="7" fill="#b9c3f4"/><rect x="16" y="10" width="40" height="36" rx="7" fill="#d4dafb" opacity=".9"/><rect x="10" y="16" width="40" height="10" rx="5" fill="#9eabf0"/><g fill="#fff"><rect x="16" y="31" width="7" height="4" rx="2"/><rect x="26" y="31" width="7" height="4" rx="2"/><rect x="36" y="31" width="7" height="4" rx="2"/><rect x="16" y="39" width="7" height="4" rx="2"/><rect x="26" y="39" width="7" height="4" rx="2"/></g><path d="M18 12v8M42 12v8" stroke="#7d8de8" stroke-width="3" stroke-linecap="round"/></svg>'; }
  /* tab icons — own drawings, colored like the original's palette */
  var TI = {
    home: '<svg viewBox="0 0 32 32"><rect x="4" y="6" width="24" height="22" rx="5" fill="#3a6cf0"/><rect x="4" y="6" width="24" height="7" rx="3" fill="#2a55c9"/><path d="M11 3v6M21 3v6" stroke="#2a55c9" stroke-width="2.6" stroke-linecap="round"/><path d="M11 19.5l3.5 3.5 6.5-7" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    calendar: '<svg viewBox="0 0 32 32"><rect x="4" y="6" width="24" height="22" rx="4" fill="#ffe2c6"/><rect x="4" y="6" width="24" height="7" rx="3" fill="#ff9640"/><g fill="#ff9640"><rect x="8" y="16" width="4" height="3" rx="1"/><rect x="14" y="16" width="4" height="3" rx="1"/><rect x="20" y="16" width="4" height="3" rx="1"/><rect x="8" y="22" width="4" height="3" rx="1"/><rect x="14" y="22" width="4" height="3" rx="1"/></g></svg>',
    tasks: '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#5b7cf6"/><path d="M10.5 16.5l4 4 7-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    rewards: '<svg viewBox="0 0 32 32"><path d="M16 3.5l3.7 7.6 8.3 1.2-6 5.9 1.4 8.3L16 22.6l-7.4 3.9L10 18.2l-6-5.9 8.3-1.2z" fill="#ffc21a" stroke="#f0a400" stroke-width="1.2" stroke-linejoin="round"/></svg>',
    meals: '<svg viewBox="0 0 32 32"><path d="M9 4v9a3 3 0 0 0 6 0V4M12 4v24" fill="none" stroke="#ff7a45" stroke-width="2.6" stroke-linecap="round"/><path d="M22 28V4c-3 2-4 7-4 11h4" fill="#ffb08a" stroke="#ff7a45" stroke-width="2.2" stroke-linejoin="round"/></svg>',
    photos: '<svg viewBox="0 0 32 32"><rect x="4" y="6" width="24" height="20" rx="4" fill="#5a8cff"/><circle cx="11" cy="12.5" r="2.5" fill="#fff"/><path d="M4 23l7-7 5 5 4-4 8 8v1a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" fill="#c9d9ff"/></svg>',
    lists: '<svg viewBox="0 0 32 32"><rect x="6" y="5" width="20" height="23" rx="4" fill="#ffd54a"/><rect x="6" y="5" width="20" height="6" rx="3" fill="#f5b400"/><path d="M11 16h10M11 21h7" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></svg>',
    anniv: '<svg viewBox="0 0 32 32"><rect x="5" y="12" width="22" height="16" rx="3" fill="#ff6b7d"/><rect x="3" y="8" width="26" height="6" rx="2" fill="#ff8a98"/><path d="M16 8v20" stroke="#ffd3d9" stroke-width="3"/><path d="M16 8c-2-5-8-5-7-1 1 2 5 1 7 1zM16 8c2-5 8-5 7-1-1 2-5 1-7 1z" fill="#ff6b7d"/></svg>',
    more: '<svg viewBox="0 0 32 32" fill="#a3acbf"><rect x="5" y="5" width="9" height="9" rx="2.5"/><rect x="18" y="5" width="9" height="9" rx="2.5"/><rect x="5" y="18" width="9" height="9" rx="2.5"/><rect x="18" y="18" width="9" height="9" rx="2.5"/></svg>',
    notes: '<svg viewBox="0 0 32 32"><path d="M6 5h20v16l-7 7H6z" fill="#ffe08a"/><path d="M19 28v-7h7" fill="#f5c542"/><path d="M10 11h12M10 16h8" stroke="#c98f00" stroke-width="2" stroke-linecap="round"/></svg>',
    recipes: '<svg viewBox="0 0 32 32"><rect x="6" y="4" width="20" height="24" rx="3" fill="#ff7b8a"/><rect x="9" y="7" width="14" height="18" rx="2" fill="#fff"/><path d="M12 12h8M12 16h8M12 20h5" stroke="#ff7b8a" stroke-width="2" stroke-linecap="round"/></svg>',
    timer: '<svg viewBox="0 0 32 32"><circle cx="16" cy="18" r="11" fill="#ff6b5a"/><circle cx="16" cy="18" r="8" fill="#fff"/><path d="M16 18v-5M16 18l3 2" stroke="#ff6b5a" stroke-width="2.4" stroke-linecap="round"/><rect x="13" y="3" width="6" height="3" rx="1.5" fill="#ff6b5a"/></svg>',
    sleep: '<svg viewBox="0 0 32 32"><path d="M21 4a12 12 0 1 0 7 19A10 10 0 0 1 21 4z" fill="#5a6cf0"/></svg>',
    settings: '<svg viewBox="0 0 32 32"><path d="M16 3l3 .5 1 3 2.5 1.4 3-.8 2 2.2-.8 3 1.4 2.5 3 1v3l-3 1-1.4 2.5.8 3-2 2.2-3-.8L20 25.5l-1 3h-3l-1-3-2.5-1.4-3 .8-2-2.2.8-3L6.9 17l-3-1v-3l3-1 1.4-2.5-.8-3 2-2.2 3 .8L15 6.5z" fill="#3a8cf0"/><circle cx="16" cy="15" r="4.5" fill="#fff"/></svg>'
  };
  var SI = { general: TI.settings, calendar: TI.calendar, photos: TI.photos, tasks: TI.tasks, wifi: '<svg viewBox="0 0 32 32">' + '<g fill="none" stroke="#3a8cf0" stroke-width="3" stroke-linecap="round"><path d="M4 12a17 17 0 0 1 24 0M8 16.5a11 11 0 0 1 16 0M12 21a5 5 0 0 1 8 0"/></g><circle cx="16" cy="25" r="2" fill="#3a8cf0"/></svg>', notif: '<svg viewBox="0 0 32 32"><path d="M16 4a8 8 0 0 0-8 8v7l-3 4h22l-3-4v-7a8 8 0 0 0-8-8z" fill="#f5b400"/><circle cx="16" cy="26" r="3" fill="#f5b400"/></svg>', users: '<svg viewBox="0 0 32 32"><circle cx="12" cy="11" r="5" fill="#5b7cf6"/><path d="M3 26c0-5 4-8 9-8s9 3 9 8z" fill="#5b7cf6"/><circle cx="22" cy="12" r="4" fill="#9db0fb"/><path d="M19 19c5-1 10 2 10 7h-6c0-3-1-5-4-7z" fill="#9db0fb"/></svg>', help: '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#3a8cf0"/><path d="M12.5 12.5a3.5 3.5 0 1 1 5 3.2c-1 .5-1.5 1.3-1.5 2.3v.5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><circle cx="16" cy="22.5" r="1.6" fill="#fff"/></svg>', about: '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" fill="#3a8cf0"/><circle cx="16" cy="10.5" r="1.8" fill="#fff"/><path d="M16 15v8" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/></svg>' };

  /* ---------- helpers ---------- */
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var MONL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var WDL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function sod(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function addD(d, n) { return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function key(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function parseKey(k) { var p = String(k).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function same(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate(); }
  function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  function hexA(hex, a) { var h = hex.replace('#', ''); if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]; var n = parseInt(h, 16); return 'rgba(' + (n >> 16 & 255) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a + ')'; }
  function fmtTime(hm) {
    if (!hm) return '';
    var p = hm.split(':'), h = +p[0], m = p[1];
    if (S.cfg.h24) return pad(h) + ':' + m;
    var ap = h >= 12 ? 'PM' : 'AM'; h = h % 12; if (h === 0) h = 12;
    return pad(h) + ':' + m + ' ' + ap;
  }
  function fmtDate(d) {
    var f = S.cfg.dateFmt;
    if (f === 'DD/MM/YYYY') return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear();
    if (f === 'YYYY-MM-DD') return key(d);
    return pad(d.getMonth() + 1) + '/' + pad(d.getDate()) + '/' + d.getFullYear();
  }

  /* ---------- state ---------- */
  var DEF_PEOPLE = [
    { id: 'christina', name: 'Christina', color: '#E5525C', initial: 'C' },
    { id: 'nazar', name: 'Nazar', color: '#2F6BEA', initial: 'N' }
  ];
  var TABS = ['home', 'calendar', 'tasks', 'rewards', 'meals', 'photos', 'lists', 'anniv', 'more'];
  var TABN = { home: 'Home', calendar: 'Calendar', tasks: 'Tasks', rewards: 'Rewards', meals: 'Meals', photos: 'Photos', lists: 'Lists', anniv: 'Anniv.', more: 'More' };
  var COLLS = ['events', 'tasks', 'rewards', 'meals', 'photos', 'lists', 'anniv', 'notes', 'recipes'];
  var S = {
    view: Q.view || 'home', sub: null, more: false,
    cfg: { people: DEF_PEOPLE.slice(), h24: false, dateFmt: 'MM/DD/YYYY', fab: true, weather: true, temp: '57', unit: 'F', hidePhotos: false, theme: 'light', font: 'medium', name: 'C-2', order: TABS.slice(0, 8), sleepFrom: '', sleepTo: '' },
    data: {}, ext: [],
    sel: sod(now()), anchor: sod(now()), calMode: 'month', off: {},
    taskDay: sod(now()), homeTaskP: 0, homeList: 'grocery', photoIdx: 0,
    pFilter: 'all', setTab: 'general', mealAnchor: sod(now()), rwFilter: 'all',
    timer: { total: 300, left: 300, run: false, end: 0 }, sleeping: false, wakeUntil: 0,
    dbNote: null, auth: null, hid: null, hh: null, households: null, members: [], invites: [], urls: {}, authMode: 'in', authMsg: null
  };
  COLLS.forEach(function (c) { S.data[c] = []; });
  function P(id) { for (var i = 0; i < S.cfg.people.length; i++) if (S.cfg.people[i].id === id) return S.cfg.people[i]; return { id: id || '?', name: id || 'All', color: '#7b8496', initial: (id || '?').charAt(0).toUpperCase() }; }

  /* ---------- backend: Supabase (own tiny REST client — works on old WebViews) ---------- */
  var SB_URL = 'https://ulundfrpzhvuvdnnqkbo.supabase.co';
  var SB_KEY = 'sb_publishable_BXhGkJKZXl76xiwMrQ44Xw_dfQqw8rh';
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem('c2e.' + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { if (v == null) localStorage.removeItem('c2e.' + k); else localStorage.setItem('c2e.' + k, JSON.stringify(v)); } catch (e) {} }
  };
  var DEMO = !!Q.demo;
  function sbFetch(path, opt, noAuth) {
    opt = opt || {};
    var h = { apikey: SB_KEY };
    if (opt.json !== undefined) { h['Content-Type'] = 'application/json'; opt.body = JSON.stringify(opt.json); }
    if (opt.headers) Object.keys(opt.headers).forEach(function (k) { h[k] = opt.headers[k]; });
    function go() {
      if (!noAuth && S.auth) h.Authorization = 'Bearer ' + S.auth.access_token;
      return fetch(SB_URL + path, { method: opt.method || 'GET', headers: h, body: opt.body });
    }
    return ensureFresh(noAuth).then(go).then(function (r) {
      if (r.status === 401 && !noAuth && S.auth) return refresh(true).then(go);
      return r;
    }).then(function (r) {
      return r.text().then(function (t) {
        var j = null; try { j = t ? JSON.parse(t) : null; } catch (e) { j = t; }
        if (!r.ok) { var err = new Error((j && (j.msg || j.message || j.error_description || j.error)) || ('HTTP ' + r.status)); err.status = r.status; err.body = j; throw err; }
        return j;
      });
    });
  }
  function setAuth(a) {
    if (a && a.access_token) { if (!a.expires_at) a.expires_at = Math.floor(Date.now() / 1000) + (a.expires_in || 3600); S.auth = { access_token: a.access_token, refresh_token: a.refresh_token, expires_at: a.expires_at, user: a.user || (S.auth && S.auth.user) }; }
    else S.auth = null;
    LS.set('auth', S.auth);
  }
  var refreshing = null;
  function refresh(force) {
    if (!S.auth) return Promise.resolve();
    if (refreshing) return refreshing;
    refreshing = fetch(SB_URL + '/auth/v1/token?grant_type=refresh_token', { method: 'POST', headers: { apikey: SB_KEY, 'Content-Type': 'application/json' }, body: JSON.stringify({ refresh_token: S.auth.refresh_token }) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw j; setAuth(j); }); })
      .catch(function (e) { if (force || (e && e.error_code)) { signOutLocal('Session expired — please sign in again'); } })
      .then(function () { refreshing = null; });
    return refreshing;
  }
  function ensureFresh(noAuth) {
    if (noAuth || !S.auth) return Promise.resolve();
    if (S.auth.expires_at - Date.now() / 1000 < 120) return refresh(false);
    return Promise.resolve();
  }
  function signOutLocal(msg) {
    setAuth(null); S.hid = null; S.hh = null; S.households = []; S.members = []; S.invites = []; S.loaded = false; S.since = null;
    COLLS.forEach(function (c) { S.data[c] = []; }); S.urls = {};
    S.authMsg = msg || null; S.authMode = 'in'; lastHtml = ''; render();
  }
  function signIn(email, pw) {
    return sbFetch('/auth/v1/token?grant_type=password', { method: 'POST', json: { email: email, password: pw } }, true).then(function (j) { setAuth(j); return afterLogin(); });
  }
  function signUp(email, pw) {
    return sbFetch('/auth/v1/signup?redirect_to=' + encodeURIComponent(location.origin + location.pathname), { method: 'POST', json: { email: email, password: pw } }, true).then(function (j) {
      if (j && j.access_token) { setAuth(j); return afterLogin(); }
      S.authMode = 'in'; S.authMsg = 'Almost done! Open the confirmation email we sent to ' + email + ', then sign in here.'; render();
    });
  }
  function recover(email) {
    return sbFetch('/auth/v1/recover?redirect_to=' + encodeURIComponent(location.origin + location.pathname), { method: 'POST', json: { email: email } }, true).then(function () { S.authMode = 'in'; S.authMsg = 'Password reset link sent to ' + email + '.'; render(); });
  }
  function signOut() {
    sbFetch('/auth/v1/logout', { method: 'POST' }).catch(function () {});
    signOutLocal();
  }
  function afterLogin() {
    S.authMsg = null;
    return sbFetch('/rest/v1/rpc/accept_invites', { method: 'POST', json: {} }).catch(function () {}).then(loadHouseholds);
  }
  function loadHouseholds() {
    return sbFetch('/rest/v1/households?select=id,name,config,created_by&order=created_at').then(function (rows) {
      S.households = rows || [];
      var want = LS.get('hid', null), pick = null;
      S.households.forEach(function (h) { if (h.id === want) pick = h; });
      if (!pick) pick = S.households[0] || null;
      if (pick) openHousehold(pick); else { S.hid = null; S.hh = null; render(); }
    });
  }
  function openHousehold(h) {
    S.hid = h.id; S.hh = h; LS.set('hid', h.id);
    S.cfg = defaultCfg(); applyCfg(h.config || {});
    COLLS.forEach(function (c) { S.data[c] = []; }); S.since = null; S.loaded = false; S.urls = {};
    applyTheme(); render();
    loadMembers(); sync();
  }
  function loadMembers() {
    if (!S.hid) return;
    sbFetch('/rest/v1/household_members?select=user_id,role,email&household_id=eq.' + S.hid).then(function (r) { S.members = r || []; render(); }).catch(function () {});
    sbFetch('/rest/v1/invites?select=id,email&household_id=eq.' + S.hid).then(function (r) { S.invites = r || []; render(); }).catch(function () {});
  }
  var syncing = false;
  function sync() {
    if (DEMO || !S.auth || !S.hid || syncing) return Promise.resolve();
    syncing = true;
    var hid = S.hid, q = '/rest/v1/items?select=id,coll,data,deleted,updated_at&household_id=eq.' + hid + '&order=updated_at.asc&limit=1000';
    if (S.since) q += '&updated_at=gt.' + encodeURIComponent(S.since);
    return sbFetch(q).then(function (rows) {
      if (hid !== S.hid) return;
      (rows || []).forEach(function (r) {
        var arr = S.data[r.coll]; if (!arr) return;
        var i, idx = -1; for (i = 0; i < arr.length; i++) if (arr[i].id === r.id) idx = i;
        if (r.deleted) { if (idx >= 0) arr.splice(idx, 1); }
        else { var o = r.data || {}; o.id = r.id; if (idx >= 0) arr[idx] = o; else arr.push(o); }
        S.since = r.updated_at;
      });
      S.loaded = true; S.dbNote = null;
      if (rows && rows.length) { resolvePhotos(); render(); } else if (!S.loadedOnce) { S.loadedOnce = true; render(); }
      // pick up settings changes made on another device
      return sbFetch('/rest/v1/households?select=config,name&id=eq.' + hid).then(function (h) {
        if (h && h[0] && hid === S.hid && JSON.stringify(h[0].config) !== JSON.stringify(S.hh.config) && !S.cfgDirty) { S.hh.config = h[0].config; S.hh.name = h[0].name; S.cfg = defaultCfg(); applyCfg(h[0].config || {}); applyTheme(); render(); }
      });
    }).catch(function (e) { if (e && e.status !== 401) { S.dbNote = 'No connection — retrying…'; render(); } })
      .then(function () { syncing = false; });
  }
  function body(x) { var o = {}; Object.keys(x).forEach(function (k) { if (k !== 'id' && k !== 'src') o[k] = x[k]; }); return o; }
  function put(coll, obj) {
    if (!obj.id) obj.id = uid();
    if (!obj.at) obj.at = Date.now();
    var arr = S.data[coll], f = false;
    for (var i = 0; i < arr.length; i++) if (arr[i].id === obj.id) { arr[i] = obj; f = true; }
    if (!f) arr.push(obj);
    render();
    if (DEMO) return Promise.resolve();
    return sbFetch('/rest/v1/items?on_conflict=household_id,id', { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, json: { household_id: S.hid, id: obj.id, coll: coll, data: body(obj), deleted: false } })
      .catch(function () { toast('Not saved — check connection'); });
  }
  function del(coll, id) {
    var x = S.data[coll].filter(function (y) { return y.id === id; })[0];
    S.data[coll] = S.data[coll].filter(function (y) { return y.id !== id; });
    render();
    if (DEMO) return;
    sbFetch('/rest/v1/items?household_id=eq.' + S.hid + '&id=eq.' + encodeURIComponent(id), { method: 'PATCH', headers: { Prefer: 'return=minimal' }, json: { deleted: true, data: {} } }).catch(function () { toast('Not deleted — check connection'); });
    if (coll === 'photos' && x && x.path) sbFetch('/storage/v1/object/photos', { method: 'DELETE', json: { prefixes: [x.path] } }).catch(function () {});
  }
  var cfgTimer;
  function saveCfg() {
    applyTheme(); render();
    if (DEMO || !S.hid) return;
    S.cfgDirty = true; clearTimeout(cfgTimer);
    cfgTimer = setTimeout(function () {
      var c = JSON.parse(JSON.stringify(S.cfg));
      sbFetch('/rest/v1/households?id=eq.' + S.hid, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, json: { config: c } })
        .then(function () { S.hh.config = c; }).catch(function () { toast('Settings not saved'); }).then(function () { S.cfgDirty = false; });
    }, 400);
  }
  function defaultCfg() { return { people: DEF_PEOPLE.slice(), h24: false, dateFmt: 'MM/DD/YYYY', fab: true, weather: true, temp: '57', unit: 'F', hidePhotos: false, theme: 'light', font: 'medium', name: 'C-2', order: TABS.slice(0, 8), sleepFrom: '', sleepTo: '' }; }
  function applyCfg(o) { Object.keys(o).forEach(function (k) { S.cfg[k] = o[k]; }); if (!S.cfg.people || !S.cfg.people.length) S.cfg.people = DEF_PEOPLE.slice(); }
  /* photos live in Storage; items hold the path, we sign URLs in batches */
  function resolvePhotos() {
    if (DEMO) return;
    var need = S.data.photos.filter(function (p) { return p.path && !S.urls[p.path]; }).map(function (p) { return p.path; });
    if (!need.length) return;
    sbFetch('/storage/v1/object/sign/photos', { method: 'POST', json: { expiresIn: 60 * 60 * 24 * 7, paths: need } }).then(function (r) {
      (r || []).forEach(function (x) { if (x.signedURL && x.path) S.urls[x.path] = SB_URL + '/storage/v1' + x.signedURL; });
      render();
    }).catch(function () {});
  }
  function photoSrc(p) { return p.src || (p.path && S.urls[p.path]) || ''; }
  function uploadPhoto(blob, at) {
    if (DEMO) { var fr = new FileReader(); fr.onload = function () { put('photos', { src: fr.result, at: at }); }; fr.readAsDataURL(blob); return; }
    var id = uid(), path = S.hid + '/' + id + '.jpg';
    sbFetch('/storage/v1/object/photos/' + path, { method: 'POST', headers: { 'Content-Type': 'image/jpeg', 'x-upsert': 'true' }, body: blob })
      .then(function () { put('photos', { id: id, path: path, at: at }); resolvePhotos(); })
      .catch(function () { toast('Photo upload failed'); });
  }
  function invite(email) {
    email = email.trim().toLowerCase();
    return sbFetch('/rest/v1/invites', { method: 'POST', headers: { Prefer: 'return=minimal' }, json: { household_id: S.hid, email: email } }).then(loadMembers);
  }
  function createHousehold(name) {
    var c = defaultCfg();
    return sbFetch('/rest/v1/rpc/create_household', { method: 'POST', json: { p_name: name, p_config: c } }).then(loadHouseholds);
  }
  function handleAuthHash() {
    var hsh = location.hash.replace(/^#/, ''); if (hsh.indexOf('access_token=') < 0 && hsh.indexOf('error') < 0) return;
    var o = {}; hsh.split('&').forEach(function (kv) { var p = kv.split('='); o[p[0]] = decodeURIComponent((p[1] || '').replace(/\+/g, ' ')); });
    history.replaceState(null, '', location.pathname + location.search);
    if (o.error_description) { S.authMsg = o.error_description; return; }
    setAuth({ access_token: o.access_token, refresh_token: o.refresh_token, expires_in: +o.expires_in || 3600 });
    if (o.type === 'recovery') S.authMode = 'newpw';
  }
  function loadUser() { return sbFetch('/auth/v1/user').then(function (u) { if (S.auth) { S.auth.user = u; LS.set('auth', S.auth); } }); }
  function loadLocal() {
    if (DEMO) { seedDemo(); return; }
    S.auth = LS.get('auth', null);
    handleAuthHash();
  }
  function seedDemo() {
    var t = sod(now()), y = addD(t, -1);
    S.data.tasks = [
      { id: 't1', t: 'стирка', p: 'christina', date: key(y), ad: true, stars: 1, done: true, at: 1 },
      { id: 't2', t: 'розложити одежу', p: 'christina', date: key(y), ad: true, stars: 1, done: true, at: 2 },
      { id: 't3', t: 'сфоткати мелоди 7 мисяцив', p: 'christina', date: key(y), ad: true, stars: 1, done: true, at: 3 }
    ];
    S.data.anniv = [
      { id: 'a1', t: 'christmas Eve', date: '2026-12-24', yearly: true, pin: true, ps: ['nazar', 'christina'], at: 1 },
      { id: 'a2', t: 'Anniversary', date: '2026-11-26', yearly: true, ps: ['nazar', 'christina'], at: 2 },
      { id: 'a3', t: "Nazar's Birthday", date: '2027-02-24', yearly: true, ps: ['nazar', 'christina'], at: 3 },
      { id: 'a4', t: 'Melody 1st birthday', date: '2027-04-10', yearly: false, ps: ['nazar', 'christina'], at: 4 }
    ];
    S.data.events = [
      { id: 'e1', t: 'Free on-call', date: '2026-11-02', time: '10:00', ad: false, p: 'nazar', at: 1 },
      { id: 'e2', t: 'Free on-call', date: '2026-11-03', time: '15:00', ad: false, p: 'nazar', at: 2 }
    ];
    S.data.lists = [{ id: 'l1', list: 'grocery', t: 'Milk', at: 1 }, { id: 'l2', list: 'grocery', t: 'Bananas', at: 2 }];
  }

  /* ---------- derived data ---------- */
  function byAt(a, b) { return (a.at || 0) - (b.at || 0); }
  function eventsOn(d) {
    var k = key(d), out = [];
    S.data.events.forEach(function (e) { if (e.date === k) out.push({ id: e.id, t: e.t, ad: !!e.ad || !e.time, time: e.time, p: e.p, kind: 'ev', src: e }); });
    S.ext.forEach(function (e, i) {
      var s = new Date(e.s);
      if (e.ad) { var ee = new Date(e.e || e.s); if (sod(s) <= d && d < (e.e ? sod(ee) : addD(sod(s), 1))) out.push({ id: 'x' + i, t: e.t, ad: true, p: e.p, kind: 'ext' }); }
      else if (same(s, d)) out.push({ id: 'x' + i, t: e.t, ad: false, time: pad(s.getHours()) + ':' + pad(s.getMinutes()), p: e.p, kind: 'ext' });
    });
    S.data.anniv.forEach(function (a) {
      var ad = parseKey(a.date);
      if (a.yearly ? (ad.getMonth() === d.getMonth() && ad.getDate() === d.getDate() && d.getFullYear() >= ad.getFullYear()) : same(ad, d)) out.push({ id: a.id, t: a.t, ad: true, p: (a.ps && a.ps.length === 1) ? a.ps[0] : '', kind: 'anniv', src: a });
    });
    out = out.filter(function (e) { return !e.p || !S.off[e.p]; });
    out.sort(function (a, b) { if (a.ad !== b.ad) return a.ad ? -1 : 1; return (a.time || '') < (b.time || '') ? -1 : 1; });
    return out;
  }
  function tasksOn(d, pid) { var k = key(d); return S.data.tasks.filter(function (t) { return t.date === k && (!pid || t.p === pid); }).sort(byAt); }
  function starsOf(pid) {
    var earned = 0, spent = 0;
    S.data.tasks.forEach(function (t) { if (t.p === pid && t.done) earned += (+t.stars || 0); });
    S.data.rewards.forEach(function (r) { if (r.p === pid && r.claimed) spent += (+r.cost || 0); });
    return earned - spent;
  }
  function nextOcc(a) {
    var d = parseKey(a.date), t = sod(now());
    if (!a.yearly) return d;
    var n = new Date(t.getFullYear(), d.getMonth(), d.getDate());
    if (n < t) n = new Date(t.getFullYear() + 1, d.getMonth(), d.getDate());
    if (n < d) n = d;
    return n;
  }
  function daysLeft(a) { return Math.floor((nextOcc(a) - sod(now())) / 864e5); }

  /* ---------- layout / scaling ---------- */
  var root = document.getElementById('app');
  function fit() {
    var w = window.innerWidth, h = window.innerHeight;
    var r = Math.min(w / 50, h / 80);
    if (w > h) r = Math.min(h / 62, w / 50);
    var fs = { small: 0.92, medium: 1, large: 1.08 }[S.cfg.font] || 1;
    document.documentElement.style.fontSize = (r * fs) + 'px';
    root.style.width = w + 'px'; root.style.height = h + 'px';
  }
  function applyTheme() {
    var dark = S.cfg.theme === 'dark' || (S.cfg.theme === 'auto' && (now().getHours() >= 20 || now().getHours() < 7));
    root.className = dark ? 'dark' : '';
    fit();
  }

  /* ---------- header & chrome ---------- */
  function hdr(onHome) {
    var d = now();
    var hm = S.cfg.h24 ? pad(d.getHours()) + ':' + pad(d.getMinutes()) : fmtTime(pad(d.getHours()) + ':' + pad(d.getMinutes()));
    var h = '<div class="hdr' + (onHome ? ' onhome' : '') + '">';
    if (onHome) h += '<button class="back" data-a="go" data-v="calendar">' + I.back + '</button><span class="logo">' + TI.home + '</span>';
    h += '<span class="dt">' + MON[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + '<span class="sep"></span>' + hm + '</span>';
    if (!onHome && (S.view === 'calendar' || S.view === 'tasks')) h += '<button class="sync" data-a="sync">' + I.sync + '</button>';
    if (S.cfg.weather) h += '<span class="wx">' + I.sun + esc(S.cfg.temp) + '°' + esc(S.cfg.unit) + '</span>';
    h += '<span class="sp"></span>';
    if (onHome) h += '<button class="ico" data-a="settings">' + I.gear + '</button>';
    h += '<span class="ico">' + I.wifi + '</span></div>';
    return h;
  }
  function tabbar() {
    var order = S.cfg.order && S.cfg.order.length ? S.cfg.order.slice() : TABS.slice(0, 8);
    if (order.indexOf('home') < 0) order.unshift('home');
    order = order.filter(function (t) { return TABS.indexOf(t) >= 0 && t !== 'more' && !(t === 'photos' && S.cfg.hidePhotos); });
    order.push('more');
    var cur = S.sub ? 'more' : S.view;
    return '<div class="tabs">' + order.map(function (t) {
      return '<button class="tab' + (cur === t || (t === 'more' && S.more) ? ' on' : '') + '" data-a="' + (t === 'more' ? 'more' : 'go') + '" data-v="' + t + '">' + TI[t] + TABN[t] + '</button>';
    }).join('') + '</div>';
  }
  function fab(act) { return S.cfg.fab ? '<button class="fab" data-a="' + act + '">' + I.plus + '</button>' : ''; }
  function empty(text, kind, sm) { return '<div class="empty' + (sm ? ' sm' : '') + '">' + (kind === 's' ? noSched() : happy(kind || 1)) + '<div>' + text + '</div></div>'; }
  function navPill(label, act) { return '<span class="nav"><button data-a="' + act + '" data-v="-1">' + I.l + '</button><span>' + label + '</span><button data-a="' + act + '" data-v="1">' + I.r + '</button></span>'; }

  /* ---------- HOME ---------- */
  function miniCal() {
    var a = S.anchor, first = new Date(a.getFullYear(), a.getMonth(), 1), start = addD(first, -first.getDay()), t = sod(now());
    var h = '<div class="mini"><div class="mh"><svg class="ic" viewBox="0 0 32 32">' + TI.calendar.replace(/^<svg[^>]*>/, '').replace('</svg>', '') + '</svg><b>' + MON[a.getMonth()] + ', ' + a.getFullYear() + '</b>' + navPill('', 'mnav') + '</div><div class="mgrid">';
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(function (w) { h += '<div class="wd">' + w + '</div>'; });
    for (var i = 0; i < 42; i++) {
      var d = addD(start, i);
      if (i === 35 && d.getMonth() !== a.getMonth()) break;
      var c = 'd' + (d.getMonth() !== a.getMonth() ? ' out' : '') + (d.getDay() === 0 || d.getDay() === 6 ? ' we' : '') + (same(d, t) ? ' today' : '') + (same(d, S.sel) ? ' sel' : '');
      var dot = eventsOn(d).length || tasksOn(d).length ? '<i></i>' : '';
      h += '<div class="' + c + '" data-a="pick" data-v="' + key(d) + '"><span>' + d.getDate() + '</span>' + (same(d, S.sel) ? '' : dot) + '</div>';
    }
    return h + '</div></div>';
  }
  function evRow(e) {
    var p = P(e.p), col = e.p ? p.color : '#3a6cf0';
    return '<div class="ev" style="background:' + hexA(col, .1) + '" data-a="openev" data-v="' + e.kind + ':' + e.id + '"><span class="bar" style="background:' + col + '"></span><div><b>' + esc(e.t) + '</b><small>' + (e.ad ? 'All day' : fmtTime(e.time)) + (e.p ? ' · ' + esc(p.name) : '') + '</small></div></div>';
  }
  function taskRow(t) {
    var p = P(t.p);
    return '<div class="ti' + (t.done ? ' done' : '') + '" style="background:' + hexA(p.color, t.done ? .22 : .12) + '"><div class="tx" data-a="edtask" data-v="' + t.id + '"><b>' + esc(t.t) + '</b><small>' + (t.ad || !t.time ? 'All day' : fmtTime(t.time)) + '</small></div>' + (+t.stars ? '<span class="st">★' + (+t.stars) + '</span>' : '') + '<button class="ck" style="color:' + p.color + (t.done ? ';background:' + p.color : '') + '" data-a="tgtask" data-v="' + t.id + '">' + (t.done ? '<span style="color:#fff;display:flex">' + I.check + '</span>' : '') + '</button></div>';
  }
  function renderHome() {
    var evs = eventsOn(S.sel);
    var people = S.cfg.people, hp = people[S.homeTaskP % people.length] || people[0];
    var tks = tasksOn(S.sel, hp.id);
    var list = S.data.lists.filter(function (x) { return x.list === S.homeList; }).sort(byAt);
    var photos = S.data.photos.slice().sort(byAt);
    var ph = photos.length ? photos[S.photoIdx % photos.length] : null;
    var d = now(), hh = d.getHours(), mm = pad(d.getMinutes());
    var tdisp = S.cfg.h24 ? pad(hh) + ':' + mm : ((hh % 12) || 12) + ':' + mm;
    var h = '<div class="home"><div class="hbg"></div><div style="position:relative">' + hdr(true) + '</div><div class="hgrid"><div class="hrow top">';
    h += '<div class="hcolL hcard">' + miniCal() + '<div class="sched"><h4>' + MON[S.sel.getMonth()] + ' ' + S.sel.getDate() + ', ' + S.sel.getFullYear() + '</h4>' + (evs.length ? '<div class="lst">' + evs.map(evRow).join('') + '</div>' : empty('No schedule', 's', true).replace('class="empty sm"', 'class="empty sm" style="flex:1"')) + '</div></div>';
    h += '<div class="hcolR"><div class="hcard white" style="flex:1;display:flex;flex-direction:column;margin-bottom:1rem"><div class="wh"><svg class="ic" viewBox="0 0 32 32">' + TI.tasks.replace(/^<svg[^>]*>/, '').replace('</svg>', '') + '</svg><b>Tasks</b><button data-a="hp" class="av m" style="width:1.9rem;height:1.9rem;font-size:1rem;background:' + hp.color + ';border:2px solid #fff;box-shadow:0 0 0 2px ' + hexA(hp.color, .35) + '">' + esc(hp.initial) + '</button></div><div class="wbody">' + (tks.length ? tks.map(taskRow).join('') : empty('Nothing to do today', 1, true)) + '</div></div>';
    h += '<div class="hcard white" style="flex:1;display:flex;flex-direction:column"><div class="wh"><svg class="ic" viewBox="0 0 32 32">' + TI.lists.replace(/^<svg[^>]*>/, '').replace('</svg>', '') + '</svg><b>' + (S.homeList === 'grocery' ? 'Grocery List' : 'To-Do List') + '</b><button class="sw" data-a="hl">' + I.swap + '</button></div><div class="wbody">' + (list.length ? list.map(listRow).join('') : empty('No checklist to complete today', 1, true)) + '</div></div></div>';
    h += '</div><div class="hrow bot"><div class="photo" data-a="go" data-v="photos">' + (ph && photoSrc(ph) ? '<img src="' + photoSrc(ph) + '" alt="">' : '<div class="ph">' + I.mountain + '</div>') + '</div>';
    h += '<div class="clock"><div class="l1">' + WD[d.getDay()] + ', ' + MON[d.getMonth()] + ' ' + d.getDate() + (S.cfg.h24 ? '' : (hh >= 12 ? ' PM' : ' AM')) + '</div><div class="l2"><span class="t">' + tdisp + '</span>' + (S.cfg.weather ? '<div class="w"><span>' + I.sun + '</span>' + esc(S.cfg.temp) + '°' + esc(S.cfg.unit) + '</div>' : '') + '</div></div>';
    h += '</div></div></div>';
    return h;
  }

  /* ---------- CALENDAR ---------- */
  function renderCalendar() {
    var a = S.anchor, h = hdr(false);
    var label = S.calMode === 'month' ? MON[a.getMonth()] : (function () { var s = addD(a, -a.getDay()), e = addD(s, 6); return MON[s.getMonth()] + ' ' + s.getDate() + ' – ' + (s.getMonth() !== e.getMonth() ? MON[e.getMonth()] + ' ' : '') + e.getDate(); })();
    h += '<div class="tb"><button class="pill" data-a="calmode">' + (S.calMode === 'month' ? 'Month' : 'Week') + I.dn + '</button>' + navPill(label, 'cnav') + '<span class="sp"></span><button class="pill" data-a="filter" style="margin-right:0">Filter' + I.dn + '</button></div>';
    // per person counts for the visible period
    var s0, n;
    if (S.calMode === 'month') { s0 = new Date(a.getFullYear(), a.getMonth(), 1); n = new Date(a.getFullYear(), a.getMonth() + 1, 0).getDate(); }
    else { s0 = addD(a, -a.getDay()); n = 7; }
    var cnt = {}, past = {}, t = sod(now());
    for (var i = 0; i < n; i++) { var dd = addD(s0, i); S.data.events.filter(function (e) { return e.date === key(dd); }).forEach(function (e) { cnt[e.p] = (cnt[e.p] || 0) + 1; if (dd < t) past[e.p] = (past[e.p] || 0) + 1; }); }
    h += '<div class="chips">' + S.cfg.people.map(function (p) {
      return '<button class="chip' + (S.off[p.id] ? ' off' : '') + '" style="background:' + hexA(p.color, .16) + '" data-a="pchip" data-v="' + p.id + '"><span class="av" style="background:' + p.color + '">' + esc(p.initial) + '</span><span class="nm">' + esc(p.name) + '</span><em>' + (past[p.id] || 0) + '/' + (cnt[p.id] || 0) + '</em></button>';
    }).join('') + '</div>';
    h += '<div class="body">';
    if (S.calMode === 'month') {
      var first = new Date(a.getFullYear(), a.getMonth(), 1), start = addD(first, -first.getDay());
      var weeks = Math.ceil((first.getDay() + n) / 7);
      h += '<div class="mon"><div class="wds">' + WD.map(function (w) { return '<div>' + w + '</div>'; }).join('') + '</div><div class="rows">';
      for (var w = 0; w < weeks; w++) {
        h += '<div class="wk">';
        for (var k = 0; k < 7; k++) {
          var d = addD(start, w * 7 + k), evs = eventsOn(d), out = d.getMonth() !== a.getMonth();
          var lab = d.getDate() === 1 ? MON[d.getMonth()] + ' 1' : d.getDate();
          h += '<div class="c' + (out ? ' out' : '') + (same(d, t) ? ' today' : '') + '" data-a="day" data-v="' + key(d) + '"><div class="n"><span>' + lab + '</span></div>';
          evs.slice(0, 3).forEach(function (e) { var col = e.p ? P(e.p).color : '#3a6cf0'; h += '<div class="ep" style="background:' + hexA(col, .12) + ';border-color:' + col + '">' + esc(e.t) + '<small>' + (e.ad ? 'All day' : fmtTime(e.time)) + '</small></div>'; });
          if (evs.length > 3) h += '<div class="more1">+' + (evs.length - 3) + '</div>';
          h += '</div>';
        }
        h += '</div>';
      }
      h += '</div></div>';
    } else {
      var ws = addD(a, -a.getDay());
      h += '<div class="week">';
      for (var j = 0; j < 7; j++) {
        var wd = addD(ws, j), wevs = eventsOn(wd);
        h += '<div class="col' + (same(wd, t) ? ' today' : '') + '"><div class="h" data-a="day" data-v="' + key(wd) + '"><div>' + WD[j] + '</div><b>' + wd.getDate() + '</b></div><div class="bd">';
        wevs.forEach(function (e) { var col = e.p ? P(e.p).color : '#3a6cf0'; h += '<div class="ep" data-a="openev" data-v="' + e.kind + ':' + e.id + '" style="background:' + hexA(col, .12) + ';border-color:' + col + '">' + esc(e.t) + '<small>' + (e.ad ? 'All day' : fmtTime(e.time)) + '</small></div>'; });
        h += '</div></div>';
      }
      h += '</div>';
    }
    h += fab('addev') + '</div>';
    return h;
  }

  /* ---------- TASKS ---------- */
  function renderTasks() {
    var d = S.taskDay, h = hdr(false);
    h += '<div class="tb"><button class="pill" data-a="taskmore">More' + I.dn + '</button>' + navPill(WDL[d.getDay()] + ', ' + MONL[d.getMonth()] + ' ' + d.getDate(), 'tnav') + '</div><div class="body"><div class="pcols">';
    S.cfg.people.forEach(function (p) {
      var ts = tasksOn(d, p.id), done = ts.filter(function (x) { return x.done; }).length;
      h += '<div class="pcol"><div class="ph"><span class="av l" style="background:' + p.color + '">' + esc(p.initial) + '</span><b>' + esc(p.name) + '</b><span class="star">' + I.star + starsOf(p.id) + '</span></div>';
      h += '<div class="prog"><span class="b"><i style="width:' + (ts.length ? done / ts.length * 100 : 0) + '%;background:' + p.color + '"></i></span>' + done + '/' + ts.length + '</div>';
      h += '<div class="bd">' + (ts.length ? ts.map(taskRow).join('') : empty('Nothing to do today', p.id === (S.cfg.people[0] || {}).id ? 1 : 2)) + '</div></div>';
    });
    h += '</div>' + fab('addtask') + '</div>';
    return h;
  }

  /* ---------- REWARDS ---------- */
  function renderRewards() {
    var h = hdr(false);
    h += '<div class="tb"><span class="sp"></span><button class="pill" data-a="rwfilter">' + (S.rwFilter === 'all' ? 'All' : S.rwFilter === 'open' ? 'Open' : 'Redeemed') + I.dn + '</button><button class="pill" data-a="rwmore" style="margin-right:0">More' + I.dn + '</button></div><div class="body"><div class="pcols">';
    S.cfg.people.forEach(function (p, idx) {
      var bal = starsOf(p.id);
      var rs = S.data.rewards.filter(function (r) { return r.p === p.id && (S.rwFilter === 'all' || (S.rwFilter === 'open' ? !r.claimed : r.claimed)); }).sort(byAt);
      var goal = S.data.rewards.filter(function (r) { return r.p === p.id && !r.claimed; }).sort(function (a, b) { return a.cost - b.cost; })[0];
      var pct = goal ? Math.min(100, bal / goal.cost * 100) : 0;
      h += '<div class="pcol"><div class="ph"><span class="av l" style="background:' + p.color + '">' + esc(p.initial) + '</span><b>' + esc(p.name) + '</b></div>';
      h += '<div class="rbar" style="background:' + hexA(p.color, .14) + '"><i style="position:absolute;left:0;top:0;bottom:0;width:' + pct + '%;background:' + hexA(p.color, .3) + '"></i><span style="position:relative;display:flex;align-items:center"><span class="star" style="background:none">' + I.star + bal + (goal ? ' / ' + goal.cost : '') + '</span></span><span style="position:absolute;right:.6rem;opacity:.6">' + I.r.replace('<svg', '<svg style="width:.8rem;height:.8rem"') + '</span></div>';
      h += '<div class="bd">' + (rs.length ? rs.map(function (r) {
        return '<div class="rw"><div class="tx" data-a="edrw" data-v="' + r.id + '"><b>' + esc(r.t) + '</b><span class="star">' + I.star + r.cost + '</span></div>' + (r.claimed ? '<span class="muted" style="font-size:.8rem">Redeemed</span>' : '<button class="go" data-a="claim" data-v="' + r.id + '"' + (bal < r.cost ? ' disabled' : '') + '>Redeem</button>') + '</div>';
      }).join('') : empty('Ready for a new goal?<br>Create a reward in the app.', idx === 0 ? 1 : 2)) + '</div></div>';
    });
    h += '</div>' + fab('addrw') + '</div>';
    return h;
  }

  /* ---------- MEALS ---------- */
  var SLOTS = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  function renderMeals() {
    var a = S.mealAnchor, ws = addD(a, -a.getDay()), we = addD(ws, 6), t = sod(now()), h = hdr(false);
    h += '<div class="tb">' + navPill(MON[ws.getMonth()] + ' ' + ws.getDate() + ' – ' + MON[we.getMonth()] + ' ' + we.getDate(), 'mlnav') + '<span class="sp"></span><button class="pill" data-a="go" data-v="recipes" style="margin-right:0">Recipes' + I.r + '</button></div><div class="body"><div class="scroll" style="padding-top:.3rem">';
    for (var i = 0; i < 7; i++) {
      var d = addD(ws, i), k = key(d);
      h += '<div class="meal"><h5>' + WDL[d.getDay()] + ', ' + MON[d.getMonth()] + ' ' + d.getDate() + (same(d, t) ? '<em>Today</em>' : '') + '</h5>';
      SLOTS.forEach(function (s) {
        var ms = S.data.meals.filter(function (m) { return m.date === k && m.slot === s; }).sort(byAt);
        h += '<div class="sl" data-a="meal" data-v="' + k + '|' + s + '"><i>' + s + '</i>' + (ms.length ? '<span>' + ms.map(function (m) { return esc(m.t); }).join(', ') + '</span>' : '<span class="ad">+ Add</span>') + '</div>';
      });
      h += '</div>';
    }
    h += '<div style="height:5rem"></div></div>' + fab('addmeal') + '</div>';
    return h;
  }

  /* ---------- PHOTOS ---------- */
  function renderPhotos() {
    var h = '<div class="hdr" style="height:3.6rem"><span class="sp"></span><span class="ico">' + I.wifi + '</span></div>';
    h += '<div class="ptitle"><h2>Photos</h2><button class="pill" data-a="sort" style="border:0;background:none;padding:0 .4rem">' + I.lines.replace('<svg', '<svg style="width:1.3rem;height:1.3rem;margin:0"') + '</button><button class="pill">Photos/Videos' + I.dn + '</button><button class="dots" data-a="upload">' + I.dots + '</button></div><div class="body"><div class="scroll">';
    var ps = S.data.photos.slice().sort(function (a, b) { return S.photoSortAsc ? a.at - b.at : b.at - a.at; });
    if (!ps.length) h += '<div style="height:70%;display:flex">' + empty('No photos yet<br>Tap ⋮ to upload', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    else {
      h += '<div class="pgrid">';
      var lastG = null;
      ps.forEach(function (p) {
        var d = new Date(p.at), g = S.pFilter === 'year' ? String(d.getFullYear()) : S.pFilter === 'month' ? MONL[d.getMonth()] + ' ' + d.getFullYear() : S.pFilter === 'day' ? fmtDate(d) : null;
        if (g && g !== lastG) { h += '<div class="g">' + g + '</div>'; lastG = g; }
        h += '<div class="pt" data-a="photo" data-v="' + p.id + '">' + (photoSrc(p) ? '<img src="' + photoSrc(p) + '" alt="" loading="lazy">' : '') + '<span>' + fmtDate(d) + '</span></div>';
      });
      h += '</div>';
    }
    h += '</div><div class="seg">' + ['year', 'month', 'day', 'all'].map(function (f) { return '<button class="' + (S.pFilter === f ? 'on' : '') + '" data-a="pf" data-v="' + f + '">' + f.charAt(0).toUpperCase() + f.slice(1) + '</button>'; }).join('') + '</div></div>';
    return h;
  }

  /* ---------- LISTS ---------- */
  function listRow(x) { return '<div class="li' + (x.done ? ' done' : '') + '"><button class="ck" data-a="tgl" data-v="' + x.id + '">' + (x.done ? I.check : '') + '</button><span data-a="edl" data-v="' + x.id + '">' + esc(x.t) + '</span><button class="x" data-a="dell" data-v="' + x.id + '">' + I.x + '</button></div>'; }
  function renderLists() {
    var h = hdr(false) + '<div class="tb"><span class="sp"></span><button class="pill" data-a="listmore" style="margin-right:0">More' + I.dn + '</button></div><div class="body"><div class="lcols">';
    [['grocery', 'Grocery List', 'G', '#3a6cf0', 1], ['todo', 'To-Do List', 'T', '#E5525C', 2]].forEach(function (L) {
      var xs = S.data.lists.filter(function (x) { return x.list === L[0]; }).sort(byAt);
      var open = xs.filter(function (x) { return !x.done; }).length;
      h += '<div class="pcol"><div class="lh"><span class="av m" style="background:' + L[3] + '">' + L[2] + '</span><b>' + L[1] + '</b><em>' + open + '</em><button class="plus" style="background:' + L[3] + '" data-a="addl" data-v="' + L[0] + '">' + I.plus + '</button></div><div class="bd">' + (xs.length ? xs.map(listRow).join('') : empty('No checklist to complete today', L[4])) + '</div></div>';
    });
    h += '</div>' + fab('addl') + '</div>';
    return h;
  }

  /* ---------- ANNIVERSARY ---------- */
  function renderAnniv() {
    var h = hdr(false) + '<div class="body"><div class="scroll"><div class="atitle"><h2>Anniversary</h2><p>Record countdowns and memories, then show them in calendar lists.</p></div><div class="agrid">';
    var xs = S.data.anniv.slice().sort(function (a, b) { if (!!a.pin !== !!b.pin) return a.pin ? -1 : 1; return daysLeft(a) - daysLeft(b); });
    xs.forEach(function (a) {
      var n = daysLeft(a), d = nextOcc(a);
      h += '<div class="ac" data-a="edan" data-v="' + a.id + '"><h5>' + esc(a.t) + '</h5>' + (a.pin ? '<span class="pin">' + I.pin + '</span>' : '') + '<div class="big">' + (n === 0 ? '<b>Today</b>' : '<b>' + n + '</b><span>Days Left</span>') + '</div><div class="dt">' + fmtDate(d) + '</div><div>' + (a.ps || []).map(function (pid) { var p = P(pid); return '<span class="av s" style="background:' + p.color + '">' + esc(p.initial) + '</span>'; }).join('') + '</div></div>';
    });
    h += '</div>' + (xs.length ? '' : '<div style="height:20rem;display:flex">' + empty('No countdowns yet', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>') + '</div>' + fab('addan') + '</div>';
    return h;
  }

  /* ---------- NOTES / RECIPES / TIMER / SETTINGS ---------- */
  var NCOL = ['#fff3a8', '#ffd6e0', '#cdeffd', '#d7f5d0', '#e7dcff', '#ffe2c2'];
  function renderNotes() {
    var xs = S.data.notes.slice().sort(function (a, b) { return b.at - a.at; });
    var h = hdr(false) + '<div class="page-h"><h2>Notes</h2></div><div class="body"><div class="scroll">';
    h += xs.length ? '<div class="ngrid">' + xs.map(function (n) { return '<div class="note" style="background:' + (n.color || NCOL[0]) + '" data-a="ednote" data-v="' + n.id + '">' + esc(n.t) + '<small>' + fmtDate(new Date(n.at)) + '</small></div>'; }).join('') + '</div>' : '<div style="height:80%;display:flex">' + empty('No notes yet', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    return h + '</div>' + fab('addnote') + '</div>';
  }
  function renderRecipes() {
    var xs = S.data.recipes.slice().sort(byAt);
    var h = hdr(false) + '<div class="page-h"><h2>Recipes</h2></div><div class="body"><div class="scroll">';
    h += xs.length ? xs.map(function (r) { return '<div class="rc" data-a="viewrc" data-v="' + r.id + '"><b>' + esc(r.t) + '</b><small>' + esc((r.ing || '').split('\n').join(' · ')) + '</small></div>'; }).join('') : '<div style="height:80%;display:flex">' + empty('No recipes yet', 2).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    return h + '</div>' + fab('addrc') + '</div>';
  }
  function tLeft() { var T = S.timer; return T.run ? Math.max(0, Math.round((T.end - Date.now()) / 1000)) : T.left; }
  function renderTimer() {
    var T = S.timer, l = tLeft(), C = 2 * Math.PI * 46, frac = T.total ? l / T.total : 0;
    var h = hdr(false) + '<div class="page-h"><h2>Timer</h2></div><div class="body"><div class="timer"><div class="ring"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="none" stroke="var(--line)" stroke-width="4"/><circle id="tring" cx="50" cy="50" r="46" fill="none" stroke="var(--acc)" stroke-width="4" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - frac)) + '"/></svg><span class="tt" id="tt">' + pad(Math.floor(l / 60)) + ':' + pad(l % 60) + '</span></div>';
    h += '<div class="pre">' + [1, 3, 5, 10, 15, 20, 30, 60].map(function (m) { return '<button data-a="tset" data-v="' + m + '">' + m + ' min</button>'; }).join('') + '</div>';
    h += '<div class="ctl"><button data-a="treset">' + I.reset + '</button><button class="p" data-a="tgo">' + (T.run ? I.pause : I.play) + '</button><button data-a="tadd">+1</button></div></div></div>';
    return h;
  }
  function tg(on, act, v) { return '<button class="tg' + (on ? ' on' : '') + '" data-a="' + act + '" data-v="' + (v || '') + '"></button>'; }
  function rad(cur, val, act, label) { return '<button class="rad' + (cur === val ? ' on' : '') + '" data-a="' + act + '" data-v="' + val + '"><i></i>' + (label || val) + '</button>'; }
  function renderSettings() {
    var c = S.cfg, side = [['general', 'General'], ['calendar', 'Calendar'], ['photos', 'Photos'], ['tasks', 'Tasks'], ['wifi', 'Wi-Fi'], ['notif', 'Notification'], ['users', 'User Mgmt'], ['help', 'Help'], ['about', 'About']];
    var h = '<div class="hdr" style="height:3.6rem;background:var(--card2);border-bottom:1px solid var(--line)"><button class="back" style="background:rgba(58,108,240,.1);color:var(--acc)" data-a="go" data-v="home">' + I.back + '</button><span class="sp"></span><b style="font-weight:500;font-size:1.15rem">Settings</b><span class="sp"></span><span style="width:3.2rem"></span></div><div class="body"><div class="set"><div class="side">';
    h += side.map(function (s) { return '<button class="' + (S.setTab === s[0] ? 'on' : '') + '" data-a="stab" data-v="' + s[0] + '">' + SI[s[0]] + s[1] + '</button>'; }).join('') + '</div><div class="main">';
    var T = S.setTab;
    if (T === 'general') {
      h += '<h3>General</h3>';
      h += '<div class="row"><span>Floating Action Button (FAB)</span>' + tg(c.fab, 'cfgtg', 'fab') + '</div>';
      h += '<div class="row"><span>Use 24-hour format</span>' + tg(c.h24, 'cfgtg', 'h24') + '</div>';
      h += '<div class="row"><span>Change Calendar Name</span><input type="text" data-c="name" value="' + esc(c.name) + '"></div>';
      h += '<div class="row"><span>Date format</span><select data-c="dateFmt">' + ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'].map(function (f) { return '<option' + (c.dateFmt === f ? ' selected' : '') + '>' + f + '</option>'; }).join('') + '</select></div>';
      h += '<h3>Show</h3>';
      h += '<div class="row"><span>Font Size</span>' + rad(c.font, 'small', 'cfgfont', 'Small') + rad(c.font, 'medium', 'cfgfont', 'Medium') + rad(c.font, 'large', 'cfgfont', 'Large') + '</div>';
      h += '<div class="row"><span>Show weather information</span>' + tg(c.weather, 'cfgtg', 'weather') + '</div>';
      if (c.weather) h += '<div class="row"><span>Temperature (manual until weather sync)</span><input type="text" data-c="temp" value="' + esc(c.temp) + '" style="width:4rem;margin-right:.4rem"><select data-c="unit"><option' + (c.unit === 'F' ? ' selected' : '') + '>F</option><option' + (c.unit === 'C' ? ' selected' : '') + '>C</option></select></div>';
      h += '<div class="row"><span>Hide Photos Tab</span>' + tg(c.hidePhotos, 'cfgtg', 'hidePhotos') + '</div>';
      h += '<div class="row" data-a="order"><span>Module Order</span>' + I.r.replace('<svg', '<svg style="width:1rem;height:1rem;opacity:.5"') + '</div>';
      h += '<div class="row"><span>Theme Mode</span><select data-c="theme">' + [['light', 'Light'], ['dark', 'Dark'], ['auto', 'Auto']].map(function (o) { return '<option value="' + o[0] + '"' + (c.theme === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>';
      h += '<div class="row"><span>Sleep</span><input type="time" data-c="sleepFrom" value="' + esc(c.sleepFrom) + '" style="border:1px solid var(--line);border-radius:.5rem;padding:.3rem;background:var(--card2)"><span class="v" style="margin:0 .4rem">–</span><input type="time" data-c="sleepTo" value="' + esc(c.sleepTo) + '" style="border:1px solid var(--line);border-radius:.5rem;padding:.3rem;background:var(--card2)"></div>';
    } else if (T === 'users') {
      h += '<h3>User Management</h3>';
      c.people.forEach(function (p, i) { h += '<div class="row" data-a="edp" data-v="' + i + '"><span style="display:flex;align-items:center"><span class="av m" style="background:' + p.color + ';margin-right:.8rem">' + esc(p.initial) + '</span>' + esc(p.name) + '</span>' + I.edit.replace('<svg', '<svg style="width:1.1rem;height:1.1rem;opacity:.5"') + '</div>'; });
      h += '<div class="row" data-a="edp" data-v="new"><span style="color:var(--acc)">+ Add member</span></div>';
      if (!DEMO) {
        var me = S.auth && S.auth.user ? S.auth.user : {}, owner = S.members.some(function (m) { return m.user_id === me.id && m.role === 'owner'; });
        h += '<h3>Family access</h3><div class="row"><span>Family</span><span class="v">' + esc(S.hh ? S.hh.name : '') + '</span>' + (owner ? '<button class="pill" data-a="renfam" style="margin:0 0 0 .6rem">Rename</button>' : '') + '<button class="pill" data-a="switchfam" style="margin:0 0 0 .6rem">Switch</button></div>';
        S.members.forEach(function (m) { h += '<div class="row"><span>' + esc(m.email || 'member') + (m.user_id === me.id ? ' <span class="v">(you)</span>' : '') + '</span><span class="v">' + (m.role === 'owner' ? 'Owner' : 'Member') + '</span>' + ((owner && m.user_id !== me.id) || (m.user_id === me.id && !owner) ? '<button class="pill" data-a="kick" data-v="' + m.user_id + '" style="margin:0 0 0 .6rem;color:#d33">' + (m.user_id === me.id ? 'Leave' : 'Remove') + '</button>' : '') + '</div>'; });
        S.invites.forEach(function (iv) { h += '<div class="row"><span>' + esc(iv.email) + '</span><span class="v">Invited</span><button class="pill" data-a="uninvite" data-v="' + iv.id + '" style="margin:0 0 0 .6rem">Cancel</button></div>'; });
        h += '<div class="row" data-a="invite"><span style="color:var(--acc)">+ Invite by email</span></div>';
        h += '<h3>Account</h3><div class="row"><span>Signed in as</span><span class="v">' + esc(me.email || '') + '</span></div><div class="row" data-a="signout"><span style="color:#d33">Sign out</span></div>';
      }
    } else if (T === 'about') {
      h += '<h3>About</h3><div class="row"><span>Calendar name</span><span class="v">' + esc(c.name) + '</span></div><div class="row"><span>App</span><span class="v">C2 Calendar · web 1.0</span></div><div class="row"><span>Sync</span><span class="v">' + (DEMO ? 'demo (not saved)' : esc(S.hh ? S.hh.name : '')) + '</span></div>';
    } else if (T === 'calendar') {
      h += '<h3>Calendar</h3><div class="row"><span>Events from Google Calendar (synced)</span><span class="v">' + S.ext.length + '</span></div><div class="row"><span>Local events</span><span class="v">' + S.data.events.length + '</span></div><div class="row"><span>Default view</span>' + rad(S.calMode, 'month', 'calset', 'Month') + rad(S.calMode, 'week', 'calset', 'Week') + '</div>';
    } else if (T === 'photos') {
      h += '<h3>Photos</h3><div class="row"><span>Photos</span><span class="v">' + S.data.photos.length + '</span></div><div class="row" data-a="upload"><span style="color:var(--acc)">Upload photos</span></div>';
    } else if (T === 'tasks') {
      h += '<h3>Tasks</h3>' + S.cfg.people.map(function (p) { return '<div class="row"><span>' + esc(p.name) + ' — stars</span><span class="v">' + starsOf(p.id) + '</span></div>'; }).join('');
    } else {
      h += '<h3>' + side.filter(function (s) { return s[0] === T; })[0][1] + '</h3><div class="row"><span class="muted">Managed by the device. Not available in the web version.</span></div>';
    }
    h += '</div></div></div>';
    return h;
  }

  /* ---------- AUTH / ONBOARDING ---------- */
  function authShell(inner) {
    return '<div class="home"><div class="hbg"></div><div class="auth"><div class="acard"><div class="alogo">' + TI.home + '</div><h1>C2 Calendar</h1>' + inner + '</div></div></div>';
  }
  function renderAuth() {
    var m = S.authMode, h = '';
    if (S.authMsg) h += '<div class="amsg">' + esc(S.authMsg) + '</div>';
    if (m === 'newpw') {
      h += '<p class="asub">Choose a new password</p><input id="au-pw" type="password" placeholder="New password (min 6)" autocomplete="new-password"><button class="abtn" data-a="authgo">Save password</button>';
      return authShell(h);
    }
    h += '<p class="asub">' + (m === 'up' ? 'Create your account' : m === 'reset' ? 'Reset your password' : 'Sign in to your family calendar') + '</p>';
    h += '<input id="au-email" type="email" placeholder="Email" autocomplete="email" value="' + esc(S.authEmail || '') + '">';
    if (m !== 'reset') h += '<input id="au-pw" type="password" placeholder="Password' + (m === 'up' ? ' (min 6)' : '') + '" autocomplete="' + (m === 'up' ? 'new-password' : 'current-password') + '">';
    h += '<button class="abtn" data-a="authgo">' + (m === 'up' ? 'Create account' : m === 'reset' ? 'Send reset link' : 'Sign in') + '</button>';
    h += '<div class="alinks">';
    if (m === 'in') h += '<button data-a="authmode" data-v="reset">Forgot password?</button><button data-a="authmode" data-v="up">Create account</button>';
    else h += '<button data-a="authmode" data-v="in">← Back to sign in</button>';
    h += '</div>';
    return authShell(h);
  }
  function renderOnboard() {
    if (S.households === null) return authShell('<p class="asub">Loading your calendar…</p>' + (S.dbNote ? '<div class="amsg">' + esc(S.dbNote) + '</div>' : '') + '<div class="alinks"><button data-a="signout">Sign out</button></div>');
    var em = S.auth && S.auth.user ? S.auth.user.email : '';
    return authShell('<p class="asub">Welcome' + (em ? ', ' + esc(em) : '') + '!<br>Create your family calendar. To join someone else\'s, ask them to invite this email and sign in again.</p><input id="au-fam" type="text" placeholder="Family name" value="My family"><button class="abtn" data-a="mkfam">Create family calendar</button><div class="alinks"><button data-a="recheck">I was invited — check again</button><button data-a="signout">Sign out</button></div>');
  }
  function authVal(id) { var e = document.getElementById(id); return e ? e.value.trim() : ''; }
  var busy = false;
  function runAuth(p) {
    if (busy) return; busy = true;
    var b = root.querySelector('.abtn'); if (b) { b.disabled = true; b.textContent = '…'; }
    p.catch(function (e) {
      var msg = e && e.message ? e.message : 'Something went wrong';
      if (/invalid login/i.test(msg)) msg = 'Wrong email or password';
      if (/not confirmed/i.test(msg)) msg = 'Please confirm your email first (check your inbox)';
      S.authMsg = msg; lastHtml = ''; render();
    }).then(function () { busy = false; if (b) b.disabled = false; lastHtml = ''; render(); });
  }

  /* ---------- render ---------- */
  var lastHtml = '';
  function render() {
    if (S.modalOpen && S.holdRender) return;
    var v = S.sub || S.view, h;
    if (!DEMO && (!S.auth || S.authMode === 'newpw')) h = renderAuth();
    else if (!DEMO && !S.hid) h = renderOnboard();
    else if (v === 'home') h = renderHome();
    else if (v === 'settings') h = renderSettings();
    else {
      h = ({ calendar: renderCalendar, tasks: renderTasks, rewards: renderRewards, meals: renderMeals, photos: renderPhotos, lists: renderLists, anniv: renderAnniv, notes: renderNotes, recipes: renderRecipes, timer: renderTimer }[v] || renderCalendar)();
      h += tabbar();
    }
    if (S.more) h += '<div class="shade" data-a="more"></div><div class="pop"><h3>More</h3><button class="x" data-a="more">' + I.x + '</button><div class="its">' + [['notes', 'Notes'], ['recipes', 'Recipes'], ['timer', 'Timer'], ['sleep', 'Sleep'], ['settings', 'Settings']].map(function (m) { return '<button class="it" data-a="sub" data-v="' + m[0] + '"><div>' + TI[m[0]] + '</div>' + m[1] + '</button>'; }).join('') + '</div><button class="eo" data-a="order">Edit order</button></div>';
    if (S.sleeping) { var d = now(); h += '<div class="sleep" data-a="wake"><b>' + (S.cfg.h24 ? pad(d.getHours()) : ((d.getHours() % 12) || 12)) + ':' + pad(d.getMinutes()) + '</b><span>' + WDL[d.getDay()] + ', ' + MONL[d.getMonth()] + ' ' + d.getDate() + '</span></div>'; }
    if (S.dbNote) h += '<div class="dbnote">' + esc(S.dbNote) + '</div>';
    if (h === lastHtml) return;
    var sc = root.querySelector('.scroll'), st = sc ? sc.scrollTop : 0;
    root.innerHTML = h; lastHtml = h;
    var sc2 = root.querySelector('.scroll'); if (sc2 && st) sc2.scrollTop = st;
  }

  /* ---------- modal ---------- */
  var M = document.getElementById('modal');
  function openModal(html, onOk) {
    M.innerHTML = '<div class="dlg">' + html + '</div>'; M.className = 'on'; S.modalOpen = true; M._ok = onOk;
    var f = M.querySelector('input[type=text],textarea'); if (f && !('ontouchstart' in window)) setTimeout(function () { f.focus(); }, 30);
  }
  function closeModal() { M.className = ''; M.innerHTML = ''; S.modalOpen = false; }
  function val(n) { var e = M.querySelector('[name="' + n + '"]'); return e ? e.value.trim() : ''; }
  function pplPicker(sel, multi) {
    return '<div class="ppl" data-multi="' + (multi ? 1 : 0) + '">' + S.cfg.people.map(function (p) { var on = multi ? sel.indexOf(p.id) >= 0 : sel === p.id; return '<button type="button" class="' + (on ? 'on' : '') + '" data-pp="' + p.id + '"><span class="av" style="background:' + p.color + '">' + esc(p.initial) + '</span>' + esc(p.name) + '</button>'; }).join('') + '</div>';
  }
  function pplVal() { var on = M.querySelectorAll('.ppl button.on'), r = []; for (var i = 0; i < on.length; i++) r.push(on[i].getAttribute('data-pp')); return r; }
  function btns(delAct) { return '<div class="btns">' + (delAct ? '<button class="del" data-m="del">Delete</button>' : '') + '<button class="no" data-m="cancel">Cancel</button><button class="ok" data-m="ok">Save</button></div>'; }
  function head(t) { return '<h3>' + t + '</h3><button class="x" data-m="cancel">' + I.x + '</button>'; }
  function adTog(on) { return '<div class="chk"><button type="button" class="tg' + (on ? ' on' : '') + '" data-tg="ad"></button>All day</div>'; }
  function isAd() { var t = M.querySelector('[data-tg=ad]'); return t ? t.className.indexOf(' on') > 0 : false; }

  function evDialog(e, date) {
    e = e || { t: '', date: date || key(S.sel), ad: true, time: '09:00', p: (S.cfg.people[1] || S.cfg.people[0]).id };
    openModal(head(e.id ? 'Edit event' : 'New event') + '<label>Title</label><input type="text" name="t" value="' + esc(e.t) + '"><div class="two"><div><label>Date</label><input type="date" name="date" value="' + e.date + '"></div><div><label>Time</label><input type="time" name="time" value="' + esc(e.time || '09:00') + '"></div></div>' + adTog(e.ad) + '<label>Member</label>' + pplPicker(e.p, false) + btns(!!e.id), function (act) {
      if (act === 'del') { del('events', e.id); return true; }
      var t = val('t'); if (!t) { toast('Enter a title'); return false; }
      put('events', { id: e.id, t: t, date: val('date') || key(S.sel), time: val('time'), ad: isAd(), p: pplVal()[0] || '', at: e.at });
      return true;
    });
  }
  function taskDialog(t) {
    t = t || { t: '', date: key(S.view === 'home' ? S.sel : S.taskDay), ad: true, time: '09:00', p: S.cfg.people[0].id, stars: 1 };
    openModal(head(t.id ? 'Edit task' : 'New task') + '<label>Task</label><input type="text" name="t" value="' + esc(t.t) + '"><div class="two"><div><label>Date</label><input type="date" name="date" value="' + t.date + '"></div><div><label>Time</label><input type="time" name="time" value="' + esc(t.time || '09:00') + '"></div></div>' + adTog(t.ad) + '<label>Stars</label><input type="number" name="stars" min="0" max="20" value="' + (+t.stars || 0) + '"><label>Member</label>' + pplPicker(t.p, false) + btns(!!t.id), function (act) {
      if (act === 'del') { del('tasks', t.id); return true; }
      var n = val('t'); if (!n) { toast('Enter a task'); return false; }
      put('tasks', { id: t.id, t: n, date: val('date') || key(S.taskDay), time: val('time'), ad: isAd(), stars: +val('stars') || 0, p: pplVal()[0] || S.cfg.people[0].id, done: !!t.done, at: t.at });
      return true;
    });
  }
  function rwDialog(r) {
    r = r || { t: '', cost: 10, p: S.cfg.people[0].id };
    openModal(head(r.id ? 'Edit reward' : 'New reward') + '<label>Reward</label><input type="text" name="t" value="' + esc(r.t) + '"><label>Stars needed</label><input type="number" name="cost" min="1" value="' + r.cost + '"><label>Member</label>' + pplPicker(r.p, false) + btns(!!r.id), function (act) {
      if (act === 'del') { del('rewards', r.id); return true; }
      var n = val('t'); if (!n) { toast('Enter a reward'); return false; }
      put('rewards', { id: r.id, t: n, cost: Math.max(1, +val('cost') || 1), p: pplVal()[0] || S.cfg.people[0].id, claimed: !!r.claimed, at: r.at });
      return true;
    });
  }
  function mealDialog(k, slot) {
    var ms = S.data.meals.filter(function (m) { return m.date === k && m.slot === slot; }).sort(byAt);
    var rec = S.data.recipes.map(function (r) { return '<option value="' + esc(r.t) + '">'; }).join('');
    openModal(head(slot + ' · ' + MON[parseKey(k).getMonth()] + ' ' + parseKey(k).getDate()) + ms.map(function (m) { return '<div class="opt"><span>' + esc(m.t) + '</span><button data-m="rm:' + m.id + '">' + I.x + '</button></div>'; }).join('') + '<label>Add dish</label><input type="text" name="t" list="rcl"><datalist id="rcl">' + rec + '</datalist><label>Meal</label><select name="slot">' + SLOTS.map(function (s) { return '<option' + (s === slot ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select><label>Date</label><input type="date" name="date" value="' + k + '">' + btns(false), function (act) {
      if (act.indexOf('rm:') === 0) { del('meals', act.slice(3)); mealDialog(k, slot); return false; }
      var n = val('t'); if (!n) return true;
      put('meals', { t: n, slot: val('slot') || slot, date: val('date') || k });
      return true;
    });
  }
  function listDialog(x, list) {
    x = x || { t: '', list: list || 'grocery' };
    openModal(head(x.id ? 'Edit item' : 'Add item') + '<label>Item</label><input type="text" name="t" value="' + esc(x.t) + '"><label>List</label><select name="list"><option value="grocery"' + (x.list === 'grocery' ? ' selected' : '') + '>Grocery List</option><option value="todo"' + (x.list === 'todo' ? ' selected' : '') + '>To-Do List</option></select>' + btns(!!x.id), function (act) {
      if (act === 'del') { del('lists', x.id); return true; }
      var n = val('t'); if (!n) { toast('Enter an item'); return false; }
      put('lists', { id: x.id, t: n, list: val('list'), done: !!x.done, at: x.at });
      if (!x.id) { listDialog(null, val('list')); return false; }
      return true;
    });
  }
  function annivDialog(a) {
    a = a || { t: '', date: key(addD(sod(now()), 30)), yearly: true, pin: false, ps: S.cfg.people.map(function (p) { return p.id; }) };
    openModal(head(a.id ? 'Edit countdown' : 'New countdown') + '<label>Title</label><input type="text" name="t" value="' + esc(a.t) + '"><label>Date</label><input type="date" name="date" value="' + a.date + '"><div class="chk"><button type="button" class="tg' + (a.yearly ? ' on' : '') + '" data-tg="yearly"></button>Repeat every year</div><div class="chk"><button type="button" class="tg' + (a.pin ? ' on' : '') + '" data-tg="pin"></button>Pin to top</div><label>Members</label>' + pplPicker(a.ps || [], true) + btns(!!a.id), function (act) {
      if (act === 'del') { del('anniv', a.id); return true; }
      var n = val('t'); if (!n) { toast('Enter a title'); return false; }
      put('anniv', { id: a.id, t: n, date: val('date') || a.date, yearly: M.querySelector('[data-tg=yearly]').className.indexOf(' on') > 0, pin: M.querySelector('[data-tg=pin]').className.indexOf(' on') > 0, ps: pplVal(), at: a.at });
      return true;
    });
  }
  function noteDialog(n) {
    n = n || { t: '', color: NCOL[S.data.notes.length % NCOL.length] };
    openModal(head(n.id ? 'Edit note' : 'New note') + '<textarea name="t">' + esc(n.t) + '</textarea><label>Color</label><div class="colors">' + NCOL.map(function (c) { return '<button type="button" data-col="' + c + '" class="' + (c === n.color ? 'on' : '') + '" style="background:' + c + '"></button>'; }).join('') + '</div>' + btns(!!n.id), function (act) {
      if (act === 'del') { del('notes', n.id); return true; }
      var t = val('t'); if (!t) { toast('Write something'); return false; }
      var on = M.querySelector('.colors .on');
      put('notes', { id: n.id, t: t, color: on ? on.getAttribute('data-col') : n.color, at: n.id ? n.at : Date.now() });
      return true;
    });
  }
  function recipeDialog(r) {
    r = r || { t: '', ing: '', steps: '' };
    openModal(head(r.id ? 'Edit recipe' : 'New recipe') + '<label>Name</label><input type="text" name="t" value="' + esc(r.t) + '"><label>Ingredients (one per line)</label><textarea name="ing">' + esc(r.ing) + '</textarea><label>Steps</label><textarea name="steps">' + esc(r.steps) + '</textarea>' + btns(!!r.id), function (act) {
      if (act === 'del') { del('recipes', r.id); return true; }
      var t = val('t'); if (!t) { toast('Enter a name'); return false; }
      put('recipes', { id: r.id, t: t, ing: val('ing'), steps: val('steps'), at: r.at });
      return true;
    });
  }
  function viewRecipe(r) {
    openModal(head(esc(r.t)) + '<label>Ingredients</label><div style="white-space:pre-wrap;line-height:1.5">' + esc(r.ing || '—') + '</div><label>Steps</label><div style="white-space:pre-wrap;line-height:1.5">' + esc(r.steps || '—') + '</div><div class="btns"><button class="no" data-m="cancel">Close</button><button class="ok" data-m="ok">Edit</button></div>', function (act) { if (act === 'ok') { recipeDialog(r); return false; } return true; });
  }
  function dayDialog(k) {
    var d = parseKey(k), evs = eventsOn(d);
    openModal(head(WDL[d.getDay()] + ', ' + MONL[d.getMonth()] + ' ' + d.getDate()) + (evs.length ? evs.map(evRow).join('') : '<div class="muted" style="padding:1rem 0">No schedule</div>') + '<div class="btns"><button class="no" data-m="cancel">Close</button><button class="ok" data-m="ok">+ Add event</button></div>', function (act) { if (act === 'ok') { evDialog(null, k); return false; } return true; });
  }
  function choose(title, opts, cur, cb) {
    openModal(head(title) + opts.map(function (o) { return '<div class="opt" data-m="pick:' + o[0] + '"><span>' + o[1] + '</span>' + (o[0] === cur ? '<span style="color:#3a6cf0;width:1.2rem;display:flex">' + I.check + '</span>' : '') + '</div>'; }).join(''), function (act) { if (act.indexOf('pick:') === 0) { cb(act.slice(5)); return true; } return true; });
  }
  function orderDialog() {
    var ord = (S.cfg.order && S.cfg.order.length ? S.cfg.order : TABS.slice(0, 8)).filter(function (t) { return t !== 'home' && t !== 'more'; });
    TABS.forEach(function (t) { if (t !== 'home' && t !== 'more' && ord.indexOf(t) < 0) ord.push(t); });
    function draw() {
      openModal(head('Module Order') + ord.map(function (t, i) { return '<div class="opt"><span style="display:flex;align-items:center"><span style="width:1.6rem;height:1.6rem;display:inline-flex;margin-right:.7rem">' + TI[t] + '</span>' + TABN[t] + '</span><button data-m="up:' + i + '"' + (i === 0 ? ' style="opacity:.2"' : '') + '>' + I.up + '</button><button data-m="dn:' + i + '"' + (i === ord.length - 1 ? ' style="opacity:.2"' : '') + '>' + I.dn + '</button></div>'; }).join('') + btns(false), function (act) {
        var m = act.split(':'), i = +m[1];
        if (m[0] === 'up' && i > 0) { ord.splice(i - 1, 0, ord.splice(i, 1)[0]); draw(); return false; }
        if (m[0] === 'dn' && i < ord.length - 1) { ord.splice(i + 1, 0, ord.splice(i, 1)[0]); draw(); return false; }
        if (act === 'ok') { S.cfg.order = ['home'].concat(ord); saveCfg(); return true; }
        return act === 'cancel';
      });
    }
    draw();
  }
  var PCOL = ['#E5525C', '#2F6BEA', '#16A394', '#F08A24', '#8B5CF6', '#E04F9E', '#5B6B82'];
  function personDialog(i) {
    var p = i === 'new' ? { id: '', name: '', color: PCOL[S.cfg.people.length % PCOL.length], initial: '' } : S.cfg.people[+i];
    openModal(head(i === 'new' ? 'Add member' : 'Edit member') + '<label>Name</label><input type="text" name="name" value="' + esc(p.name) + '"><label>Color</label><div class="colors">' + PCOL.map(function (c) { return '<button type="button" data-col="' + c + '" class="' + (c === p.color ? 'on' : '') + '" style="background:' + c + '"></button>'; }).join('') + '</div>' + btns(i !== 'new' && S.cfg.people.length > 1), function (act) {
      if (act === 'del') { S.cfg.people.splice(+i, 1); saveCfg(); return true; }
      var n = val('name'); if (!n) { toast('Enter a name'); return false; }
      var on = M.querySelector('.colors .on'), col = on ? on.getAttribute('data-col') : p.color;
      if (i === 'new') S.cfg.people.push({ id: n.toLowerCase().replace(/[^a-z0-9а-яіїє]+/gi, '') + '-' + uid().slice(-3), name: n, color: col, initial: n.charAt(0).toUpperCase() });
      else { p.name = n; p.color = col; p.initial = n.charAt(0).toUpperCase(); }
      saveCfg(); return true;
    });
  }
  function photoDialog(p) {
    openModal('<button class="x" data-m="cancel">' + I.x + '</button><h3>' + fmtDate(new Date(p.at)) + '</h3><img src="' + photoSrc(p) + '" style="width:100%;border-radius:.8rem;display:block"><div class="btns"><button class="del" data-m="del">Delete</button><button class="no" data-m="cancel">Close</button></div>', function (act) { if (act === 'del') { del('photos', p.id); } return true; });
  }
  function confirmBox(t) { try { return window.confirm(t); } catch (e) { return true; } }
  function inviteDialog() {
    openModal(head('Invite to family') + '<label>Email</label><input type="text" name="email" placeholder="name@example.com" autocapitalize="off"><p style="font-size:.85rem;color:#6b7487;margin-top:.8rem;line-height:1.4">They sign up (or sign in) at this page with this email and join your family calendar automatically.</p>' + btns(false), function (act) {
      var em = val('email').toLowerCase(); if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { toast('Enter a valid email'); return false; }
      invite(em).then(function () { toast('Invited ' + em); }).catch(function (e) { toast(/duplicate/i.test(e.message) ? 'Already invited' : 'Invite failed'); });
      return true;
    });
  }
  M.addEventListener('click', function (ev) {
    var t = ev.target;
    while (t && t !== M) {
      if (t.hasAttribute('data-pp')) { var box = t.parentNode; if (box.getAttribute('data-multi') !== '1') { var bs = box.querySelectorAll('button'); for (var i = 0; i < bs.length; i++) bs[i].className = ''; t.className = 'on'; } else t.className = t.className === 'on' ? '' : 'on'; return; }
      if (t.hasAttribute('data-tg')) { t.className = t.className.indexOf(' on') > 0 ? 'tg' : 'tg on'; return; }
      if (t.hasAttribute('data-col')) { var cs = t.parentNode.querySelectorAll('button'); for (var j = 0; j < cs.length; j++) cs[j].className = ''; t.className = 'on'; return; }
      if (t.hasAttribute('data-m')) {
        var act = t.getAttribute('data-m');
        if (act === 'cancel') { closeModal(); render(); return; }
        var ok = M._ok ? M._ok(act) : true;
        if (ok) { closeModal(); render(); }
        return;
      }
      if (t.className === 'dlg') return;
      t = t.parentNode;
    }
    if (ev.target === M) { closeModal(); render(); }
  });
  M.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' && ev.target.tagName === 'INPUT' && M._ok) { if (M._ok('ok')) { closeModal(); render(); } } });

  /* ---------- photos upload ---------- */
  var fileIn = document.getElementById('file');
  fileIn.addEventListener('change', function () {
    var fs = Array.prototype.slice.call(fileIn.files || []); fileIn.value = '';
    if (!fs.length) return;
    toast('Uploading ' + fs.length + '…');
    fs.forEach(function (f, i) {
      var img = new Image(), url = URL.createObjectURL(f);
      img.onload = function () {
        var max = 1600, w = img.width, h = img.height, k = Math.min(1, max / Math.max(w, h));
        var c = document.createElement('canvas'); c.width = Math.round(w * k); c.height = Math.round(h * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        var at = (f.lastModified || Date.now()) + i;
        if (c.toBlob) c.toBlob(function (b) { uploadPhoto(b, at); }, 'image/jpeg', 0.8);
        else { var bin = atob(c.toDataURL('image/jpeg', 0.8).split(',')[1]), u8 = new Uint8Array(bin.length); for (var z = 0; z < bin.length; z++) u8[z] = bin.charCodeAt(z); uploadPhoto(new Blob([u8], { type: 'image/jpeg' }), at); }
      };
      img.onerror = function () { toast('Can\'t read ' + f.name); };
      img.src = url;
    });
  });

  /* ---------- actions ---------- */
  function find(coll, id) { return S.data[coll].filter(function (x) { return x.id === id; })[0]; }
  function go(v) { S.view = v; S.sub = null; S.more = false; if (v === 'calendar') S.anchor = new Date(S.sel.getFullYear(), S.sel.getMonth(), S.calMode === 'month' ? 1 : S.sel.getDate()); render(); }
  var A = {
    go: function (v) { if (v === 'recipes') { S.sub = 'recipes'; render(); return; } go(v); },
    more: function () { S.more = !S.more; render(); },
    sub: function (v) { S.more = false; if (v === 'sleep') { S.sleeping = true; S.wakeUntil = 0; render(); return; } S.sub = v; if (v === 'settings') S.view = S.view; render(); },
    settings: function () { S.sub = 'settings'; render(); },
    wake: function () { S.sleeping = false; S.wakeUntil = Date.now() + 60000; render(); },
    sync: function () { sync().then(function () { toast('Synced'); }); loadMembers(); },
    mnav: function (v) { S.anchor = new Date(S.anchor.getFullYear(), S.anchor.getMonth() + (+v), 1); render(); },
    pick: function (v) { S.sel = parseKey(v); if (S.sel.getMonth() !== S.anchor.getMonth()) S.anchor = new Date(S.sel.getFullYear(), S.sel.getMonth(), 1); render(); },
    hp: function () { S.homeTaskP = (S.homeTaskP + 1) % S.cfg.people.length; render(); },
    hl: function () { S.homeList = S.homeList === 'grocery' ? 'todo' : 'grocery'; render(); },
    calmode: function () { choose('View', [['month', 'Month'], ['week', 'Week']], S.calMode, function (m) { S.calMode = m; S.anchor = m === 'month' ? new Date(S.anchor.getFullYear(), S.anchor.getMonth(), 1) : (S.anchor.getMonth() === S.sel.getMonth() ? S.sel : S.anchor); render(); }); },
    calset: function (m) { S.calMode = m; render(); },
    cnav: function (v) { S.anchor = S.calMode === 'month' ? new Date(S.anchor.getFullYear(), S.anchor.getMonth() + (+v), 1) : addD(S.anchor, 7 * (+v)); render(); },
    filter: function () { choose('Filter', [['all', 'Show everyone']].concat(S.cfg.people.map(function (p) { return [p.id, 'Only ' + esc(p.name)]; })), null, function (id) { S.off = {}; if (id !== 'all') S.cfg.people.forEach(function (p) { if (p.id !== id) S.off[p.id] = true; }); render(); }); },
    pchip: function (id) { S.off[id] = !S.off[id]; render(); },
    day: function (k) { S.sel = parseKey(k); dayDialog(k); },
    openev: function (v) { var p = v.split(':'), k = p[0], id = p.slice(1).join(':'); if (k === 'ev') evDialog(find('events', id)); else if (k === 'anniv') annivDialog(find('anniv', id)); else toast('Synced from Google Calendar — edit it there'); },
    addev: function () { evDialog(null, key(S.sel)); },
    tnav: function (v) { S.taskDay = addD(S.taskDay, +v); render(); },
    taskmore: function () { choose('Tasks', [['today', 'Go to today'], ['clear', 'Clear completed (this day)']], null, function (o) { if (o === 'today') S.taskDay = sod(now()); else tasksOn(S.taskDay).forEach(function (t) { if (t.done) del('tasks', t.id); }); render(); }); },
    tgtask: function (id) { var t = find('tasks', id); if (t) { t.done = !t.done; put('tasks', t); } },
    edtask: function (id) { taskDialog(find('tasks', id)); },
    addtask: function () { taskDialog(null); },
    rwfilter: function () { choose('Show', [['all', 'All'], ['open', 'Open'], ['done', 'Redeemed']], S.rwFilter, function (f) { S.rwFilter = f; render(); }); },
    rwmore: function () { A.addrw(); },
    addrw: function () { rwDialog(null); },
    edrw: function (id) { rwDialog(find('rewards', id)); },
    claim: function (id) { var r = find('rewards', id); if (r && starsOf(r.p) >= r.cost) { r.claimed = true; put('rewards', r); toast('Reward redeemed!'); } },
    mlnav: function (v) { S.mealAnchor = addD(S.mealAnchor, 7 * (+v)); render(); },
    meal: function (v) { var p = v.split('|'); mealDialog(p[0], p[1]); },
    addmeal: function () { mealDialog(key(sod(now())), 'Dinner'); },
    pf: function (f) { S.pFilter = f; render(); },
    sort: function () { S.photoSortAsc = !S.photoSortAsc; render(); },
    upload: function () { fileIn.click(); },
    photo: function (id) { photoDialog(find('photos', id)); },
    addl: function (v) { listDialog(null, v || 'grocery'); },
    edl: function (id) { listDialog(find('lists', id)); },
    tgl: function (id) { var x = find('lists', id); if (x) { x.done = !x.done; put('lists', x); } },
    dell: function (id) { del('lists', id); },
    listmore: function () { choose('Lists', [['clear', 'Clear checked items']], null, function () { S.data.lists.filter(function (x) { return x.done; }).forEach(function (x) { del('lists', x.id); }); }); },
    addan: function () { annivDialog(null); },
    edan: function (id) { annivDialog(find('anniv', id)); },
    addnote: function () { noteDialog(null); },
    ednote: function (id) { noteDialog(find('notes', id)); },
    addrc: function () { recipeDialog(null); },
    viewrc: function (id) { viewRecipe(find('recipes', id)); },
    tset: function (m) { S.timer = { total: m * 60, left: m * 60, run: false, end: 0 }; render(); },
    tgo: function () { var T = S.timer; if (T.run) { T.left = tLeft(); T.run = false; } else { if (T.left <= 0) T.left = T.total; T.end = Date.now() + T.left * 1000; T.run = true; } render(); },
    treset: function () { S.timer.run = false; S.timer.left = S.timer.total; render(); },
    tadd: function () { var T = S.timer; if (T.run) T.end += 60000; else T.left += 60; T.total += 60; render(); },
    stab: function (v) { S.setTab = v; render(); },
    cfgtg: function (k) { S.cfg[k] = !S.cfg[k]; saveCfg(); },
    cfgfont: function (v) { S.cfg.font = v; saveCfg(); },
    order: function () { S.more = false; render(); orderDialog(); },
    edp: function (i) { personDialog(i); },
    authmode: function (m) { S.authEmail = authVal('au-email') || S.authEmail; S.authMode = m; S.authMsg = null; lastHtml = ''; render(); },
    authgo: function () {
      var em = authVal('au-email').toLowerCase(), pw = (document.getElementById('au-pw') || {}).value || '';
      S.authEmail = em;
      if (S.authMode === 'newpw') { if (pw.length < 6) { S.authMsg = 'Password must be at least 6 characters'; lastHtml = ''; render(); return; } runAuth(sbFetch('/auth/v1/user', { method: 'PUT', json: { password: pw } }).then(function () { S.authMode = 'in'; toast('Password updated'); return loadUser().then(afterLogin); })); return; }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) { S.authMsg = 'Enter a valid email'; lastHtml = ''; render(); return; }
      if (S.authMode === 'reset') { runAuth(recover(em)); return; }
      if (pw.length < 6) { S.authMsg = 'Password must be at least 6 characters'; lastHtml = ''; render(); return; }
      runAuth(S.authMode === 'up' ? signUp(em, pw) : signIn(em, pw));
    },
    mkfam: function () { runAuth(createHousehold(authVal('au-fam') || 'My family')); },
    recheck: function () { S.households = null; render(); runAuth(afterLogin()); },
    signout: function () { signOut(); },
    invite: function () { inviteDialog(); },
    uninvite: function (id) { sbFetch('/rest/v1/invites?id=eq.' + id, { method: 'DELETE' }).then(loadMembers).catch(function () { toast('Failed'); }); },
    kick: function (uidv) { if (!confirmBox('Remove this person from the family?')) return; sbFetch('/rest/v1/household_members?household_id=eq.' + S.hid + '&user_id=eq.' + uidv, { method: 'DELETE' }).then(function () { if (S.auth && S.auth.user && uidv === S.auth.user.id) loadHouseholds(); else loadMembers(); }).catch(function () { toast('Failed'); }); },
    switchfam: function () { choose('Family', (S.households || []).map(function (h) { return [h.id, esc(h.name)]; }).concat([['new', '+ Create another family']]), S.hid, function (id) { if (id === 'new') { S.hid = null; render(); return; } (S.households || []).forEach(function (h) { if (h.id === id) openHousehold(h); }); }); },
    renfam: function () { var n = prompt('Family name', S.hh ? S.hh.name : ''); if (!n) return; sbFetch('/rest/v1/households?id=eq.' + S.hid, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, json: { name: n } }).then(function () { S.hh.name = n; render(); }).catch(function () { toast('Failed'); }); }
  };
  root.addEventListener('click', function (ev) {
    var t = ev.target;
    while (t && t !== root) {
      var a = t.getAttribute && t.getAttribute('data-a');
      if (a && A[a]) { ev.stopPropagation(); A[a](t.getAttribute('data-v')); return; }
      t = t.parentNode;
    }
  });
  root.addEventListener('keydown', function (ev) {
    if (ev.key !== 'Enter' || !ev.target.id) return;
    if (ev.target.id === 'au-fam') A.mkfam(); else if (ev.target.id.indexOf('au-') === 0) A.authgo();
  });
  root.addEventListener('change', function (ev) {
    var k = ev.target.getAttribute && ev.target.getAttribute('data-c');
    if (k) { S.cfg[k] = ev.target.value; saveCfg(); }
  });

  /* ---------- toast & beep ---------- */
  var toastT;
  function toast(m) { var e = document.getElementById('toast'); e.textContent = m; e.style.display = 'block'; clearTimeout(toastT); toastT = setTimeout(function () { e.style.display = 'none'; }, 2200); }
  function beep() {
    try { var C = window.AudioContext || window.webkitAudioContext, ctx = new C(); [0, .5, 1].forEach(function (s) { var o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.value = 880; o.connect(g); g.connect(ctx.destination); g.gain.setValueAtTime(.25, ctx.currentTime + s); g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + s + .4); o.start(ctx.currentTime + s); o.stop(ctx.currentTime + s + .4); }); } catch (e) {}
  }

  /* ---------- ticks ---------- */
  function inSleep() {
    var a = S.cfg.sleepFrom, b = S.cfg.sleepTo; if (!a || !b) return false;
    var d = now(), m = d.getHours() * 60 + d.getMinutes(), x = +a.split(':')[0] * 60 + +a.split(':')[1], y = +b.split(':')[0] * 60 + +b.split(':')[1];
    return x < y ? (m >= x && m < y) : (m >= x || m < y);
  }
  var lastMin = -1, photoTick = 0;
  setInterval(function () {
    var T = S.timer;
    if (T.run) {
      var l = tLeft();
      if (l <= 0) { T.run = false; T.left = 0; beep(); toast('Time is up!'); render(); }
      else if ((S.sub === 'timer')) { var e = document.getElementById('tt'), r = document.getElementById('tring'); if (e) e.textContent = pad(Math.floor(l / 60)) + ':' + pad(l % 60); if (r) { var C = 2 * Math.PI * 46; r.setAttribute('stroke-dashoffset', C * (1 - l / T.total)); } }
    }
    var m = now().getMinutes();
    if (m !== lastMin) {
      lastMin = m;
      if (!S.sleeping && inSleep() && Date.now() > S.wakeUntil) S.sleeping = true;
      if (S.sleeping && !inSleep() && S.wakeUntil === 0 && S.cfg.sleepFrom) S.sleeping = false;
      if (!S.modalOpen) render();
    }
    if (++photoTick % 15 === 0 && S.data.photos.length > 1 && (S.sub || S.view) === 'home' && !S.modalOpen) { S.photoIdx++; render(); }
  }, 1000);

  /* ---------- boot ---------- */
  window.addEventListener('resize', fit);
  loadLocal();
  if (Q.sub) S.sub = Q.sub;
  if (Q.more) S.more = true;
  if (Q.mode) S.calMode = Q.mode;
  applyTheme();
  render();
  if (S.auth && !DEMO) { loadUser().catch(function () {}); afterLogin().catch(function (e) { if (!S.auth) return; S.dbNote = 'No connection — retrying…'; S.households = S.households || null; render(); setTimeout(function () { if (S.auth && !S.hid) afterLogin().catch(function () {}); }, 8000); }); }
  setInterval(function () { if (!document.hidden) sync(); }, 15000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) { sync(); resolvePhotos(); } });
  window.__c2 = { S: S, render: render, A: A };
})();
