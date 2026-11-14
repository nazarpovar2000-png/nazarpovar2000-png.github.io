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
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke-linecap="round"/></svg>',
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
  var DEF_LISTS = [{ id: 'grocery', name: 'Grocery List', color: '#3a6cf0' }, { id: 'todo', name: 'To-Do List', color: '#E5525C' }];
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
    COLLS.forEach(function (c) { S.data[c] = []; }); S.urls = {}; G.accts = []; G.ev = []; G.unread = {}; G.mail = null;
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
    loadMembers(); sync(); G.accts = []; G.ev = []; G.cals = {}; G.unread = {}; G.mail = null; loadGAccts();
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
    gHandleHash();
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
  function occurs(x, d) {
    if (!x.date) return true;
    var s = parseKey(x.date), e = x.end ? parseKey(x.end) : s; if (e < s) e = s;
    if (!x.rep) return d >= s && d <= e;
    if (d < s) return false;
    var span = Math.round((e - s) / 864e5);
    for (var i = 0; i <= span && i < 60; i++) {
      var c = addD(d, -i); if (c < s) break;
      if (x.rep === 'daily') return true;
      if (x.rep === 'weekly' && c.getDay() === s.getDay()) return true;
      if (x.rep === 'monthly' && c.getDate() === s.getDate()) return true;
      if (x.rep === 'yearly' && c.getDate() === s.getDate() && c.getMonth() === s.getMonth()) return true;
    }
    return false;
  }
  function psOf(x) { return x.ps && x.ps.length ? x.ps : (x.p ? [x.p] : []); }
  function eventsOn(d) {
    var out = [];
    S.data.events.forEach(function (e) {
      if (!occurs(e, d)) return;
      var ps = psOf(e), vis = ps.filter(function (p) { return !S.off[p]; });
      if (ps.length && !vis.length) return;
      out.push({ id: e.id, t: e.t, ad: !!e.ad || !e.time, time: e.time, p: vis[0] || '', kind: 'ev', src: e });
    });
    S.ext.forEach(function (e, i) {
      var s = new Date(e.s);
      if (e.ad) { var ee = new Date(e.e || e.s); if (sod(s) <= d && d < (e.e ? sod(ee) : addD(sod(s), 1))) out.push({ id: 'x' + i, t: e.t, ad: true, p: e.p, kind: 'ext' }); }
      else if (same(s, d)) out.push({ id: 'x' + i, t: e.t, ad: false, time: pad(s.getHours()) + ':' + pad(s.getMinutes()), p: e.p, kind: 'ext' });
    });
    S.data.anniv.forEach(function (a) {
      var ad = parseKey(a.date);
      if (a.yearly ? (ad.getMonth() === d.getMonth() && ad.getDate() === d.getDate() && d.getFullYear() >= ad.getFullYear()) : same(ad, d)) out.push({ id: a.id, t: a.t, ad: true, p: (a.ps && a.ps.length === 1) ? a.ps[0] : '', kind: 'anniv', src: a });
    });
    out = out.concat(gEventsOn(d));
    out = out.filter(function (e) { return !e.p || !S.off[e.p]; });
    out.sort(function (a, b) { if (a.ad !== b.ad) return a.ad ? -1 : 1; return (a.time || '') < (b.time || '') ? -1 : 1; });
    return out;
  }
  function isDone(t, d) { return t.rep ? !!(t.dd && t.dd[key(d)]) : !!t.done; }
  function tasksOn(d, pid) { return S.data.tasks.filter(function (t) { return (!pid || t.p === pid) && occurs(t, d); }).sort(byAt); }
  function starsOf(pid) {
    var earned = 0, spent = 0;
    S.data.tasks.forEach(function (t) { if (t.p !== pid) return; var n = t.rep ? Object.keys(t.dd || {}).length : (t.done ? 1 : 0); earned += n * (+t.stars || 0); });
    S.data.rewards.forEach(function (r) { if (r.p === pid && r.claimed) spent += (+r.cost || 0); });
    return earned - spent;
  }
  function listsCfg() { return S.cfg.lists && S.cfg.lists.length ? S.cfg.lists : DEF_LISTS; }
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
    else if (w < 640) r = Math.min(w / 31, h / 52);
    var fs = { small: 0.92, medium: 1, large: 1.08 }[S.cfg.font] || 1;
    document.documentElement.style.fontSize = (r * fs) + 'px';
    root.style.width = w + 'px'; root.style.height = h + 'px';
    if (w < 640 && w <= h) root.classList.add('narrow'); else root.classList.remove('narrow');
  }
  function applyTheme() {
    var dark = S.cfg.theme === 'dark' || (S.cfg.theme === 'auto' && (now().getHours() >= 20 || now().getHours() < 7));
    root.classList.toggle('dark', !!dark);
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
    if (myAccts().length) { var un = unreadTotal(); h += '<button class="ico mailico" data-a="sub" data-v="mail">' + TI.mail + (un ? '<b class="bdg">' + (un > 99 ? '99+' : un) + '</b>' : '') + '</button>'; }
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
  var DIAL_ET = [['addev', 'Event'], ['addtask', 'Task']];
  function fab(act, dial) {
    if (!S.cfg.fab) return '';
    if (!dial) return '<button class="fab" data-a="' + act + '">' + I.plus + '</button>';
    var h = '';
    if (S.dial) h += '<div class="shade" data-a="dial"></div><div class="dial">' + dial.map(function (d, i) { return '<button data-a="' + d[0] + '" data-v="' + (d[2] || '') + '" style="animation-delay:' + ((dial.length - 1 - i) * 45) + 'ms">' + d[1] + '</button>'; }).join('') + '</div>';
    return h + '<button class="fab' + (S.dial ? ' open' : '') + '" data-a="dial">' + I.plus + '</button>';
  }
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
    var p = P(e.p), col = e.col || (e.p ? p.color : '#3a6cf0');
    return '<div class="ev" style="background:' + hexA(col, .1) + '" data-a="openev" data-v="' + e.kind + ':' + e.id + '"><span class="bar" style="background:' + col + '"></span><div><b>' + esc(e.t) + '</b><small>' + (e.ad ? 'All day' : fmtTime(e.time)) + (e.p ? ' · ' + esc(p.name) : '') + '</small></div></div>';
  }
  function taskRow(t, d) {
    d = d || S.taskDay;
    var p = P(t.p), done = isDone(t, d), pr = { high: '#e5484d', medium: '#f5a524', low: '#3a6cf0' }[t.pri];
    return '<div class="ti' + (done ? ' done' : '') + (S.fxId === t.id ? ' pulse' : '') + '" style="background:' + hexA(p.color, done ? .22 : .12) + '"><div class="tx" data-a="edtask" data-v="' + t.id + '"><b>' + (t.emoji ? t.emoji + ' ' : '') + esc(t.t) + '</b><small>' + (pr ? '<span style="color:' + pr + '">⚑ </span>' : '') + (t.ad || !t.time ? 'All day' : fmtTime(t.time)) + (t.rep ? ' · ' + t.rep : '') + '</small></div>' + (t.tm ? '<button class="tmr" data-a="tasktimer" data-v="' + t.tm + '">' + FI.clock + '</button>' : '') + (+t.stars ? '<span class="st">★' + (+t.stars) + '</span>' : '') + '<button class="ck" style="color:' + p.color + (done ? ';background:' + p.color : '') + '" data-a="tgtask" data-v="' + t.id + '|' + key(d) + '">' + (done ? '<span style="color:#fff;display:flex">' + I.check + '</span>' : '') + '</button></div>';
  }
  function renderHome() {
    var evs = eventsOn(S.sel);
    var people = S.cfg.people, hp = people[S.homeTaskP % people.length] || people[0];
    var tks = tasksOn(S.sel, hp.id);
    var HL = listsCfg(), hl = HL[(S.homeListI || 0) % HL.length]; var list = S.data.lists.filter(function (x) { return x.list === hl.id; }).sort(byAt);
    var photos = S.data.photos.slice().sort(byAt);
    var ph = photos.length ? photos[S.photoIdx % photos.length] : null;
    var d = now(), hh = d.getHours(), mm = pad(d.getMinutes());
    var tdisp = S.cfg.h24 ? pad(hh) + ':' + mm : ((hh % 12) || 12) + ':' + mm;
    var h = '<div class="home"><div class="hbg"></div><div style="position:relative">' + hdr(true) + '</div><div class="hgrid"><div class="hrow top">';
    h += '<div class="hcolL hcard">' + miniCal() + '<div class="sched"><h4>' + MON[S.sel.getMonth()] + ' ' + S.sel.getDate() + ', ' + S.sel.getFullYear() + '</h4>' + (evs.length ? '<div class="lst">' + evs.map(evRow).join('') + '</div>' : empty('No schedule', 's', true).replace('class="empty sm"', 'class="empty sm" style="flex:1"')) + '</div></div>';
    h += '<div class="hcolR"><div class="hcard white" style="flex:1;display:flex;flex-direction:column;margin-bottom:1rem"><div class="wh"><svg class="ic" viewBox="0 0 32 32">' + TI.tasks.replace(/^<svg[^>]*>/, '').replace('</svg>', '') + '</svg><b>Tasks</b><button data-a="hp" class="av m" style="width:1.9rem;height:1.9rem;font-size:1rem;background:' + hp.color + ';border:2px solid #fff;box-shadow:0 0 0 2px ' + hexA(hp.color, .35) + '">' + esc(hp.initial) + '</button></div><div class="wbody">' + (tks.length ? tks.map(function (t) { return taskRow(t, S.sel); }).join('') : empty('Nothing to do today', 1, true)) + '</div></div>';
    h += '<div class="hcard white" style="flex:1;display:flex;flex-direction:column"><div class="wh"><svg class="ic" viewBox="0 0 32 32">' + TI.lists.replace(/^<svg[^>]*>/, '').replace('</svg>', '') + '</svg><b>' + esc(hl.name) + '</b><button class="sw" data-a="hl">' + I.swap + '</button></div><div class="wbody">' + (list.length ? list.map(listRow).join('') : empty('No checklist to complete today', 1, true)) + '</div></div></div>';
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
    for (var i = 0; i < n; i++) { var dd = addD(s0, i); S.data.events.filter(function (e) { return occurs(e, dd); }).forEach(function (e) { psOf(e).forEach(function (pp) { cnt[pp] = (cnt[pp] || 0) + 1; if (dd < t) past[pp] = (past[pp] || 0) + 1; }); }); }
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
          evs.slice(0, 3).forEach(function (e) { var col = e.col || (e.p ? P(e.p).color : '#3a6cf0'); h += '<div class="ep" style="background:' + hexA(col, .12) + ';border-color:' + col + '">' + esc(e.t) + '<small>' + (e.ad ? 'All day' : fmtTime(e.time)) + '</small></div>'; });
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
        wevs.forEach(function (e) { var col = e.col || (e.p ? P(e.p).color : '#3a6cf0'); h += '<div class="ep" data-a="openev" data-v="' + e.kind + ':' + e.id + '" style="background:' + hexA(col, .12) + ';border-color:' + col + '">' + esc(e.t) + '<small>' + (e.ad ? 'All day' : fmtTime(e.time)) + '</small></div>'; });
        h += '</div></div>';
      }
      h += '</div>';
    }
    h += fab('', DIAL_ET) + '</div>';
    return h;
  }

  /* ---------- TASKS ---------- */
  function renderTasks() {
    var d = S.taskDay, h = hdr(false);
    h += '<div class="tb"><button class="pill" data-a="taskmore">More' + I.dn + '</button>' + navPill(WDL[d.getDay()] + ', ' + MONL[d.getMonth()] + ' ' + d.getDate(), 'tnav') + '</div><div class="body"><div class="pcols">';
    S.cfg.people.forEach(function (p) {
      var ts = tasksOn(d, p.id), done = ts.filter(function (x) { return isDone(x, d); }).length;
      h += '<div class="pcol"><div class="ph"><span class="av l" style="background:' + p.color + '">' + esc(p.initial) + '</span><b>' + esc(p.name) + '</b><span class="star">' + I.star + starsOf(p.id) + '</span></div>';
      h += '<div class="prog"><span class="b"><i style="width:' + (ts.length ? done / ts.length * 100 : 0) + '%;background:' + p.color + '"></i></span>' + done + '/' + ts.length + '</div>';
      h += '<div class="bd">' + (ts.length ? ts.map(function (t) { return taskRow(t, d); }).join('') : empty('Nothing to do today', p.id === (S.cfg.people[0] || {}).id ? 1 : 2)) + '</div></div>';
    });
    h += '</div>' + fab('', DIAL_ET) + '</div>';
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
      h += '<div class="pcol" style="background:' + hexA(p.color, .1) + '"><div class="ph"><span class="av l" style="background:' + p.color + '">' + esc(p.initial) + '</span><b>' + esc(p.name) + '</b></div>';
      h += '<div class="rbar" style="background:' + hexA(p.color, .2) + '"><i style="position:absolute;left:0;top:0;bottom:0;width:' + pct + '%;background:' + hexA(p.color, .35) + ';transition:width .4s"></i><span style="position:relative;display:flex;align-items:center"><span class="star" style="background:none">' + I.star + bal + (goal ? ' / ' + goal.cost : '') + '</span></span><span style="position:absolute;right:.6rem;opacity:.6">' + I.r.replace('<svg', '<svg style="width:.8rem;height:.8rem"') + '</span></div>';
      h += '<div class="bd">' + (rs.length ? rs.map(function (r) {
        return '<div class="rw"><div class="tx" data-a="edrw" data-v="' + r.id + '"><b>' + esc(r.t) + '</b><span class="star">' + I.star + r.cost + '</span></div>' + (r.claimed ? '<span class="muted" style="font-size:.8rem">Redeemed</span>' : '<button class="go" data-a="claim" data-v="' + r.id + '"' + (bal < r.cost ? ' disabled' : '') + '>Redeem</button>') + '</div>';
      }).join('') : empty('Ready for a new goal?<br>Create a reward in the app.', idx === 0 ? 1 : 2)) + '</div></div>';
    });
    h += '</div></div>';
    return h;
  }

  /* ---------- MEALS ---------- */
  var SLOTS = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  var SLOTC = { Breakfast: '#fae0d8', Lunch: '#d9f3ea', Dinner: '#f7e1fa', Snack: '#fde0e4' };
  var CATS = ['Custom', 'Breakfast & Brunch', 'Main Courses', 'Side Dishes', 'Pasta & Rice', 'Soups & Stews', 'Desserts & Drinks'];
  var DISHES = {
    'Breakfast & Brunch': [['🥞', 'Pancakes'], ['🍳', 'Omelet'], ['🥣', 'Oatmeal'], ['🥑', 'Avocado Toast'], ['🧇', 'Waffles'], ['🥐', 'Croissant'], ['🥯', 'Bagel'], ['🍓', 'Yogurt & Berries'], ['🥓', 'Bacon & Eggs']],
    'Main Courses': [['🍗', 'Roast Chicken'], ['🥩', 'Steak'], ['🍔', 'Burgers'], ['🌮', 'Tacos'], ['🐟', 'Baked Salmon'], ['🍕', 'Pizza'], ['🍖', 'BBQ Ribs'], ['🥡', 'Takeout'], ['🌯', 'Burrito']],
    'Side Dishes': [['🥗', 'Green Salad'], ['🍟', 'Fries'], ['🥔', 'Mashed Potatoes'], ['🌽', 'Corn'], ['🥦', 'Steamed Veggies'], ['🍞', 'Garlic Bread']],
    'Pasta & Rice': [['🍝', 'Spaghetti'], ['🧀', 'Mac & Cheese'], ['🍚', 'Fried Rice'], ['🍜', 'Ramen'], ['🥘', 'Risotto'], ['🍛', 'Curry & Rice']],
    'Soups & Stews': [['🍲', 'Borscht'], ['🥣', 'Chicken Soup'], ['🍅', 'Tomato Soup'], ['🥘', 'Beef Stew'], ['🌶️', 'Chili']],
    'Desserts & Drinks': [['🍰', 'Cake'], ['🍪', 'Cookies'], ['🍦', 'Ice Cream'], ['🥤', 'Smoothie'], ['☕', 'Coffee'], ['🍎', 'Fruit']]
  };
  function renderMeals() {
    var a = S.mealAnchor, ws = addD(a, -a.getDay()), we = addD(ws, 6), t = sod(now()), h = hdr(false);
    var day = S.mealMode === 'day', slots = S.mealCat && S.mealCat !== 'all' ? [S.mealCat] : SLOTS;
    var label = day ? MON[a.getMonth()] + ' ' + pad(a.getDate()) : MON[ws.getMonth()] + ' ' + pad(ws.getDate()) + '-' + (we.getMonth() !== ws.getMonth() ? MON[we.getMonth()] + ' ' : '') + pad(we.getDate());
    h += '<div class="tb"><button class="pill" data-a="mealcat">' + (slots.length === 1 ? slots[0] : 'Categories') + I.dn + '</button><button class="pill" data-a="mealmode">' + (day ? 'Day' : 'Week') + I.dn + '</button>' + navPill(label, 'mlnav') + '</div>';
    h += '<div class="body"><div class="mg" style="grid-template-columns:4.4rem repeat(' + slots.length + ',1fr);grid-template-rows:2rem repeat(' + (day ? 1 : 7) + ',1fr)"><div></div>' + slots.map(function (s) { return '<div class="mh">' + s + '</div>'; }).join('');
    for (var i = 0; i < (day ? 1 : 7); i++) {
      var d = day ? a : addD(ws, i), k = key(d);
      h += '<div class="md' + (same(d, t) ? ' today' : '') + '"><span>' + WD[d.getDay()] + '</span><b>' + pad(d.getDate()) + '</b></div>';
      slots.forEach(function (s) {
        var ms = S.data.meals.filter(function (m) { return m.date === k && m.slot === s; }).sort(byAt);
        h += '<div class="mc" style="background:' + SLOTC[s] + '" data-a="meal" data-v="' + k + '|' + s + '">' + ms.map(function (m) { return '<span>' + (m.emoji ? m.emoji + ' ' : '') + esc(m.t) + '</span>'; }).join('') + '</div>';
      });
    }
    h += '</div>' + (S.cfg.fab ? '<button class="fab" data-a="bag">' + I.bag + '</button>' : '') + '</div>';
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
  function listRow(x) {
    var subs = (x.subs || []).map(function (sb, i) { return '<div class="sb' + (sb.done ? ' done' : '') + '" data-a="tgsub" data-v="' + x.id + '|' + i + '"><i>' + (sb.done ? I.check : '') + '</i>' + esc(sb.t) + '</div>'; }).join('');
    return '<div class="li' + (x.done ? ' done' : '') + (S.fxId === x.id ? ' pulse' : '') + '"><div class="lr"><button class="ck" data-a="tgl" data-v="' + x.id + '">' + (x.done ? I.check : '') + '</button><span data-a="edl" data-v="' + x.id + '">' + esc(x.t) + (x.content ? '<small>' + esc(x.content) + '</small>' : '') + (x.date ? '<small>' + fmtDate(parseKey(x.date)) + '</small>' : '') + '</span>' + (x.ps || []).map(function (pid) { var p = P(pid); return '<span class="av s" style="background:' + p.color + '">' + esc(p.initial) + '</span>'; }).join('') + '<button class="x" data-a="dell" data-v="' + x.id + '">' + I.x + '</button></div>' + subs + '</div>';
  }
  function renderLists() {
    var Ls = listsCfg();
    var h = hdr(false) + '<div class="tb"><span class="sp"></span><button class="pill" data-a="listmore" style="margin-right:0">More' + I.dn + '</button></div><div class="body"><div class="lcols' + (Ls.length > 2 ? ' many' : '') + '">';
    Ls.forEach(function (L, i) {
      var xs = S.data.lists.filter(function (x) { return x.list === L.id; }).sort(byAt);
      var open = xs.filter(function (x) { return !x.done; }).length;
      h += '<div class="pcol" style="background:' + hexA(L.color, .1) + '"><div class="lh"><span class="av m" style="background:' + L.color + '">' + esc(L.name.charAt(0).toUpperCase()) + '</span><b>' + esc(L.name) + '</b><em>' + open + '</em><button class="plus" style="background:' + L.color + '" data-a="addl" data-v="' + L.id + '">' + I.plus + '</button></div><div class="bd">' + (xs.length ? xs.map(listRow).join('') : empty('No checklist to complete today', i % 2 ? 2 : 1)) + '</div></div>';
    });
    h += '</div>' + fab('addl') + '</div>';
    return h;
  }

  /* ---------- ANNIVERSARY ---------- */
  function renderAnniv() {
    var h = hdr(false) + '<div class="body"><div class="scroll"><div class="atitle"><h2>Anniversary</h2><p>Record countdowns and memories, then show them in calendar lists.</p></div><div class="agrid">';
    var xs = S.data.anniv.map(function (a) { return { a: a, act: 'edan' }; });
    S.data.events.forEach(function (e) { if (e.ann) xs.push({ a: { id: e.id, t: e.t, date: e.date, yearly: e.rep === 'yearly', ps: psOf(e) }, act: 'edev' }); });
    xs.sort(function (x, y) { if (!!x.a.pin !== !!y.a.pin) return x.a.pin ? -1 : 1; return daysLeft(x.a) - daysLeft(y.a); });
    xs.forEach(function (x, i) {
      var a = x.a, n = daysLeft(a), d = nextOcc(a);
      h += '<div class="ac" style="animation-delay:' + (i * 40) + 'ms" data-a="' + x.act + '" data-v="' + a.id + '"><h5>' + esc(a.t) + '</h5>' + (a.pin ? '<span class="pin">' + I.pin + '</span>' : '') + '<div class="big">' + (n === 0 ? '<b>Today</b>' : n < 0 ? '<b>' + (-n) + '</b><span>Days Since</span>' : '<b>' + n + '</b><span>Days Left</span>') + '</div><div class="dt">' + fmtDate(d) + '</div><div>' + (a.ps || []).map(function (pid) { var p = P(pid); return '<span class="av s" style="background:' + p.color + '">' + esc(p.initial) + '</span>'; }).join('') + '</div></div>';
    });
    h += '</div>' + (xs.length ? '' : '<div style="height:20rem;display:flex">' + empty('No countdowns yet', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>') + '</div>' + fab('', [['addan', 'Countdown', 'countdown'], ['addan', 'Anniversary', 'anniversary'], ['addan', 'Birthday', 'birthday'], ['addan', 'Holiday', 'holiday']]) + '</div>';
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
    var c = S.cfg, side = [['general', 'General'], ['calendar', 'Calendar'], ['google', 'Google'], ['photos', 'Photos'], ['tasks', 'Tasks'], ['wifi', 'Wi-Fi'], ['notif', 'Notification'], ['users', 'User Mgmt'], ['help', 'Help'], ['about', 'About']];
    var h = '<div class="hdr" style="height:3.6rem;background:var(--card2);border-bottom:1px solid var(--line)"><button class="back" style="background:rgba(58,108,240,.1);color:var(--acc)" data-a="go" data-v="home">' + I.back + '</button><span class="sp"></span><b style="font-weight:500;font-size:1.15rem">Settings</b><span class="sp"></span><span style="width:3.2rem"></span></div><div class="body"><div class="set"><div class="side">';
    h += side.map(function (s) { return '<button class="' + (S.setTab === s[0] ? 'on' : '') + '" data-a="stab" data-v="' + s[0] + '">' + SI[s[0]] + s[1] + '</button>'; }).join('') + '</div><div class="main">';
    var T = S.setTab;
    if (T === 'general') {
      h += '<h3>General</h3>';
      if (window.Android && Android.launch) h += '<div class="row" data-a="sub" data-v="stock"><span style="color:var(--acc)">Open original E-calendar</span>' + I.r.replace('<svg', '<svg style="width:1rem;height:1rem;opacity:.5"') + '</div>';
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
    } else if (T === 'google') {
      h += DEMO ? '<h3>Google</h3><div class="row"><span class="muted">Not available in demo</span></div>' : renderGoogleSettings();
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

  /* ---------- GOOGLE: accounts, calendars, Gmail ---------- */
  var G = { accts: [], cals: {}, ev: [], evKey: '', evAt: 0, evBusy: false, unread: {}, mail: null };
  var GCAL = '<svg viewBox="0 0 32 32"><rect x="4" y="4" width="24" height="24" rx="4" fill="#fff" stroke="#dadce0"/><path d="M4 9h24" stroke="#4285f4" stroke-width="5"/><text x="16" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="#4285f4" font-family="Arial">31</text></svg>';
  TI.stock = '<svg viewBox="0 0 32 32"><rect x="4" y="6" width="24" height="22" rx="5" fill="#8e9cf1"/><rect x="4" y="6" width="24" height="7" rx="3" fill="#5a6cf0"/><path d="M11 3v6M21 3v6" stroke="#5a6cf0" stroke-width="2.6" stroke-linecap="round"/><path d="M20 18h-8m3-3l-3 3 3 3" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  TI.mail = '<svg viewBox="0 0 32 32"><rect x="3" y="7" width="26" height="19" rx="3.5" fill="#ea4335"/><path d="M4.5 9l11.5 9 11.5-9" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round"/></svg>';
  SI.google = GCAL;
  function gcall(action, body) {
    body = body || {}; body.action = action;
    return sbFetch('/functions/v1/google-oauth', { method: 'POST', json: body });
  }
  function gErr(e) {
    var m = (e && e.message) || 'Google error';
    if (m.indexOf('reconnect:') === 0) { var p = m.split(':'); return 'Reconnect ' + p[1] + ' in Settings → Google'; }
    if (/GOOGLE_CLIENT_SECRET/.test(m)) return 'Google is not set up yet';
    return m;
  }
  function myId() { return S.auth && S.auth.user ? S.auth.user.id : ''; }
  function loadGAccts() {
    if (DEMO || !S.hid) return Promise.resolve();
    return sbFetch('/rest/v1/google_accounts?select=id,user_id,email,settings&household_id=eq.' + S.hid + '&order=created_at').then(function (r) {
      G.accts = r || []; G.evKey = ''; render(); gEvents(true); gUnread();
    }).catch(function () {});
  }
  function gAcct(id) { for (var i = 0; i < G.accts.length; i++) if (G.accts[i].id === id) return G.accts[i]; return null; }
  function gCalCfg(a, cid) { var c = a && a.settings && a.settings.cals; return c && c[cid] ? c[cid] : null; }
  function gSaveSettings(a) {
    return sbFetch('/rest/v1/google_accounts?id=eq.' + a.id, { method: 'PATCH', headers: { Prefer: 'return=minimal' }, json: { settings: a.settings } })
      .then(function () { G.evKey = ''; gEvents(true); }).catch(function () { toast('Not saved'); });
  }
  /* events: fetch a window around what is on screen */
  function gWindow() {
    var a = S.view === 'tasks' ? S.taskDay : (S.view === 'home' ? S.sel : S.anchor);
    var s = addD(new Date(a.getFullYear(), a.getMonth(), 1), -7), e = addD(new Date(a.getFullYear(), a.getMonth() + 1, 1), 14);
    return [s, e];
  }
  function gEvents(force) {
    if (DEMO || !S.hid || !G.accts.length || G.evBusy) return;
    var w = gWindow(), k = key(w[0]) + key(w[1]);
    if (!force && k === G.evKey && Date.now() - G.evAt < 120000) return;
    var any = G.accts.some(function (a) { var c = a.settings && a.settings.cals; return c && Object.keys(c).some(function (x) { return c[x].on; }); });
    if (!any) { G.ev = []; G.evKey = k; render(); return; }
    G.evBusy = true;
    gcall('events', { household_id: S.hid, timeMin: w[0].toISOString(), timeMax: w[1].toISOString() }).then(function (r) {
      G.ev = (r.items || []).map(function (x) {
        x.sd = x.ad ? parseKey(x.s) : new Date(x.s); x.ed = x.ad ? parseKey(x.e) : new Date(x.e);
        return x;
      });
      G.evKey = k; G.evAt = Date.now();
      if (r.errors && r.errors.length) S.gNote = gErr({ message: r.errors[0].msg }) + ' (' + r.errors[0].account + ')'; else S.gNote = null;
      render();
    }).catch(function (e) { S.gNote = gErr(e); render(); }).then(function () { G.evBusy = false; });
  }
  function gEventsOn(d) {
    var out = [], d2 = addD(d, 1);
    G.ev.forEach(function (x) {
      var hit = x.ad ? (x.sd <= d && d < x.ed) : (x.sd < d2 && x.ed > d) || same(x.sd, d);
      if (!hit) return;
      var a = gAcct(x.a), cc = gCalCfg(a, x.c) || {};
      if (cc.p && S.off[cc.p]) return;
      var sd = x.sd, time = x.ad ? '' : (same(sd, d) ? pad(sd.getHours()) + ':' + pad(sd.getMinutes()) : '00:00');
      out.push({ id: x.a + '|' + x.c + '|' + x.id, t: x.t, ad: x.ad, time: time, p: cc.p || '', col: cc.p ? '' : (cc.color || '#4285f4'), kind: 'g', src: x });
    });
    return out;
  }
  function gWritable() {
    var out = [];
    G.accts.forEach(function (a) {
      var c = (a.settings && a.settings.cals) || {};
      Object.keys(c).forEach(function (cid) { if (c[cid].on && c[cid].w) out.push({ a: a.id, c: cid, name: c[cid].name || cid, email: a.email, color: c[cid].color }); });
    });
    return out;
  }
  function isoLocal(dk, hm) {
    var d = parseKey(dk), p = (hm || '00:00').split(':'); d.setHours(+p[0], +p[1], 0, 0);
    var off = -d.getTimezoneOffset(), sg = off >= 0 ? '+' : '-'; off = Math.abs(off);
    return dk + 'T' + pad(+p[0]) + ':' + pad(+p[1]) + ':00' + sg + pad(Math.floor(off / 60)) + ':' + pad(off % 60);
  }
  function tz() { try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) { return 'UTC'; } }
  function gSaveEvent(target, gid, f) {
    var ev = { t: f.t, desc: f.desc, ad: f.ad, rem: f.rem, tz: tz() };
    if (f.ad) { ev.s = f.date; ev.e = key(addD(parseKey(f.end), 1)); }
    else { ev.s = isoLocal(f.date, f.time); ev.e = isoLocal(f.end, f.etime || f.time); if (ev.e <= ev.s) ev.e = isoLocal(f.end, pad((+f.time.split(':')[0] + 1) % 24) + ':' + f.time.split(':')[1]); }
    if (f.rep && !gid) ev.rrule = 'FREQ=' + f.rep.toUpperCase();
    toast('Saving to Google…');
    return gcall('ev_save', { account_id: target.a, cal: target.c, id: gid || undefined, event: ev }).then(function () { toast('Saved to Google Calendar'); gEvents(true); }).catch(function (e) { toast(gErr(e)); });
  }
  function gDelEvent(x) {
    gcall('ev_delete', { account_id: x.a, cal: x.c, id: x.id }).then(function () { toast('Deleted'); gEvents(true); }).catch(function (e) { toast(gErr(e)); });
    G.ev = G.ev.filter(function (y) { return y !== x; }); render();
  }
  var IN_APP = /C2Launcher/.test(navigator.userAgent);
  function gStart() {
    if (IN_APP) { openModal(head('Connect Google') + '<p style="line-height:1.5">Google does not allow signing in inside this tablet app.</p><p style="line-height:1.5;margin-top:.6rem">Open <b>nazarpovar2000-png.github.io/c2-calendar</b> on your phone or computer, sign in with the same account and connect Google there (Settings → Google). The calendars will appear here automatically.</p><div class="btns"><button class="ok" data-m="cancel">OK</button></div>'); return; }
    toast('Opening Google…');
    gcall('start', { household_id: S.hid, return_to: location.origin + location.pathname }).then(function (r) { location.href = r.url; }).catch(function (e) { toast(gErr(e)); });
  }
  function gHandleHash() {
    var m = location.hash.match(/^#google=(.*)$/); if (!m) return false;
    var v = decodeURIComponent(m[1]); history.replaceState(null, '', location.pathname + location.search);
    var p = v.split(':');
    S.sub = 'settings'; S.setTab = 'google';
    if (p[0] === 'ok') S.gFlash = 'Connected ' + p[1];
    else if (p[0] === 'partial') S.gFlash = 'Connected ' + p[1] + ', but some permissions were not granted (' + p[2] + '). Connect again and tick every box.';
    else S.gFlash = 'Google: ' + p.slice(1).join(':');
    return true;
  }
  function gUnread() {
    if (DEMO || !S.hid || !G.accts.some(function (a) { return a.user_id === myId(); })) { G.unread = {}; return; }
    gcall('mail_unread', { household_id: S.hid }).then(function (r) { var u = {}; (r.items || []).forEach(function (x) { u[x.a] = x.error ? -1 : x.unread; }); G.unread = u; render(); }).catch(function () {});
  }
  function unreadTotal() { var n = 0; Object.keys(G.unread).forEach(function (k) { if (G.unread[k] > 0) n += G.unread[k]; }); return n; }
  function gLoadCals(a) {
    G.cals[a.id] = 'loading'; render();
    gcall('calendars', { account_id: a.id }).then(function (r) {
      G.cals[a.id] = r.items || [];
      if (a.user_id === myId() && !(a.settings && a.settings.cals)) {
        a.settings = a.settings || {}; a.settings.cals = {};
        (r.items || []).forEach(function (c) { if (c.primary) a.settings.cals[c.id] = { on: true, name: c.name, color: c.color, w: c.role === 'owner' || c.role === 'writer', p: '' }; });
        gSaveSettings(a);
      }
      render();
    }).catch(function (e) { G.cals[a.id] = { err: gErr(e) }; render(); });
  }
  function renderGoogleSettings() {
    var me = myId(), h = '<h3>Google accounts</h3>';
    if (S.gFlash) h += '<div class="amsg" style="margin:0 0 .8rem;text-align:left">' + esc(S.gFlash) + '</div>';
    if (!G.accts.length) h += '<p class="muted" style="margin:.4rem 0 1rem;line-height:1.5">Connect one or more Google accounts to show their calendars here and read Gmail. Each family member connects their own.</p>';
    G.accts.forEach(function (a) {
      var mine = a.user_id === me, mem = S.members.filter(function (m) { return m.user_id === a.user_id; })[0];
      h += '<div class="gacct"><div class="gh"><span class="gi">' + GCAL + '</span><div class="gt"><b>' + esc(a.email) + '</b><small>' + (mine ? 'Your account' : 'Connected by ' + esc(mem ? mem.email : 'family member')) + (G.unread[a.id] > 0 ? ' · ' + G.unread[a.id] + ' unread' : '') + '</small></div>' + (mine ? '<button class="pill" data-a="gdisc" data-v="' + a.id + '" style="color:#d33;margin:0">Disconnect</button>' : '') + '</div>';
      var cl = G.cals[a.id];
      if (!cl) { gLoadCals(a); cl = 'loading'; }
      if (cl === 'loading') h += '<div class="row"><span class="muted">Loading calendars…</span></div>';
      else if (cl.err) h += '<div class="row"><span style="color:#d33">' + esc(cl.err) + '</span>' + (mine ? '<button class="pill" data-a="gconnect" style="margin:0">Reconnect</button>' : '') + '</div>';
      else cl.forEach(function (c) {
        var cc = gCalCfg(a, c.id) || {};
        h += '<div class="row gc"><span><i class="dot" style="background:' + esc(c.color || '#4285f4') + '"></i>' + esc(c.name) + (c.primary ? ' <span class="v">(main)</span>' : '') + '</span>'
          + (mine ? '<select data-gp="' + a.id + '|' + esc(c.id) + '"' + (cc.on ? '' : ' disabled') + '><option value="">Calendar color</option>' + S.cfg.people.map(function (p) { return '<option value="' + p.id + '"' + (cc.p === p.id ? ' selected' : '') + '>' + esc(p.name) + '</option>'; }).join('') + '</select>' + tg(!!cc.on, 'gcal', a.id + '|' + c.id) : '<span class="v">' + (cc.on ? 'Shown' : 'Hidden') + '</span>') + '</div>';
      });
      h += '</div>';
    });
    h += '<button class="abtn" data-a="gconnect" style="max-width:22rem;margin-top:.6rem">+ Connect Google account</button>';
    h += '<p class="muted" style="margin-top:.9rem;font-size:.82rem;line-height:1.5">' + (IN_APP ? 'On this tablet: connect Google from your phone, it will show up here. ' : '') + 'Google will warn that the app is not verified — tap “Advanced” → “Go to C2 Calendar”. The app is private to your family.</p>';
    return h;
  }

  /* ---------- MAIL ---------- */
  var MBOX = [['INBOX', 'Inbox'], ['UNREAD', 'Unread'], ['STARRED', 'Starred'], ['SENT', 'Sent'], ['ALL', 'All mail']];
  function myAccts() { return G.accts.filter(function (a) { return a.user_id === myId(); }); }
  function mailState() {
    if (!G.mail) G.mail = { a: '', box: 'INBOX', q: '', items: null, next: null, busy: false, err: null };
    var mine = myAccts();
    if (!G.mail.a || !mine.some(function (a) { return a.id === G.mail.a; })) { G.mail.a = mine.length ? mine[0].id : ''; G.mail.items = null; }
    return G.mail;
  }
  function mailLoad(more) {
    var M_ = mailState(); if (!M_.a || M_.busy) return;
    M_.busy = true; M_.err = null; if (!more) { M_.items = null; M_.next = null; } render();
    var box = M_.box === 'UNREAD' ? 'INBOX' : M_.box, q = (M_.box === 'UNREAD' ? 'is:unread ' : '') + M_.q;
    gcall('mail_list', { account_id: M_.a, box: box, q: q.trim(), page: more ? M_.next : undefined }).then(function (r) {
      M_.items = (more && M_.items ? M_.items : []).concat(r.items || []); M_.next = r.next;
    }).catch(function (e) { M_.err = gErr(e); if (!M_.items) M_.items = []; }).then(function () { M_.busy = false; S.fx = more ? null : 'n'; render(); });
  }
  function fromName(f) { var m = String(f || '').match(/^\s*"?([^"<]*?)"?\s*<([^>]+)>/); return m ? (m[1] || m[2]) : String(f || ''); }
  function fromAddr(f) { var m = String(f || '').match(/<([^>]+)>/); return m ? m[1] : String(f || '').trim(); }
  function mailTime(ms) { var d = new Date(ms), t = now(); if (same(d, t)) return fmtTime(pad(d.getHours()) + ':' + pad(d.getMinutes())); if (d.getFullYear() === t.getFullYear()) return MON[d.getMonth()] + ' ' + d.getDate(); return fmtDate(d); }
  function renderMail() {
    var h = hdr(false), mine = myAccts();
    if (!mine.length) {
      return h + '<div class="page-h"><h2>Mail</h2></div><div class="body"><div style="height:80%;display:flex">' + empty('Connect your Gmail in Settings → Google<br><button class="abtn" data-a="gconnect" style="margin:1rem auto 0;max-width:18rem">Connect Google account</button>', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div></div>';
    }
    var M_ = mailState(), a = gAcct(M_.a);
    if (M_.items === null && !M_.busy) setTimeout(function () { mailLoad(false); }, 0);
    h += '<div class="tb"><button class="pill" data-a="macct">' + esc(a ? a.email : '') + (G.unread[M_.a] > 0 ? ' <b class="badge">' + G.unread[M_.a] + '</b>' : '') + I.dn + '</button><button class="pill" data-a="mbox">' + MBOX.filter(function (b) { return b[0] === M_.box; })[0][1] + I.dn + '</button><input class="msearch" id="mq" type="search" placeholder="Search mail" value="' + esc(M_.q) + '"><span class="sp"></span><button class="pill" data-a="mreload" style="margin-right:.5rem">' + I.sync.replace('<svg', '<svg style="width:1rem;height:1rem;margin:0"') + '</button></div>';
    h += '<div class="body"><div class="scroll mlist">';
    if (M_.err) h += '<div class="amsg" style="margin:.5rem 1.4rem">' + esc(M_.err) + '</div>';
    if (M_.items === null) h += '<div class="mload">Loading…</div>';
    else if (!M_.items.length && !M_.err) h += '<div style="height:70%;display:flex">' + empty('No messages', 2).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    else {
      h += M_.items.map(function (m, i) {
        return '<div class="mrow' + (m.unread ? ' unread' : '') + '" data-a="mopen" data-v="' + m.id + '" style="animation-delay:' + Math.min(i, 12) * 20 + 'ms"><span class="av m" style="background:' + avColor(fromAddr(m.from)) + '">' + esc((fromName(m.from).charAt(0) || '?').toUpperCase()) + '</span><div class="mt"><div class="m1"><b>' + esc(fromName(m.from)) + '</b><em>' + mailTime(m.date) + '</em></div><div class="m2">' + (m.star ? '<span class="stx">★</span>' : '') + esc(m.subj || '(no subject)') + '</div><div class="m3">' + esc(decodeEnt(m.snip)) + '</div></div></div>';
      }).join('');
      if (M_.next) h += '<button class="mmore" data-a="mmore">' + (M_.busy ? 'Loading…' : 'Load more') + '</button>';
    }
    h += '<div style="height:6rem"></div></div>' + (S.cfg.fab ? '<button class="fab" data-a="mcompose">' + I.edit + '</button>' : '') + '</div>';
    return h;
  }
  function decodeEnt(s) { return String(s || '').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'); }
  var AVC = ['#3a6cf0', '#E5525C', '#16A394', '#F08A24', '#8B5CF6', '#E04F9E', '#0ea5e9', '#64748b'];
  function avColor(s) { var n = 0; for (var i = 0; i < s.length; i++) n = (n * 31 + s.charCodeAt(i)) % 997; return AVC[n % AVC.length]; }
  function mailView(id) {
    var M_ = mailState(), it = (M_.items || []).filter(function (m) { return m.id === id; })[0];
    openModal(dhead(esc(it ? (it.subj || '(no subject)') : 'Message')) + '<div class="db"><div class="mload">Loading…</div></div>', function () { return false; }, { drawer: true, wide: true, nofocus: true });
    gcall('mail_get', { account_id: M_.a, id: id }).then(function (m) {
      if (!S.modalOpen) return;
      if (it && it.unread) { it.unread = false; if (G.unread[M_.a] > 0) G.unread[M_.a]--; render(); }
      G.cur = m;
      var body = m.html ? '<iframe class="mframe" sandbox="allow-popups allow-popups-to-escape-sandbox" referrerpolicy="no-referrer"></iframe>' : '<div class="mtext">' + esc(m.text || '').replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>') + '</div>';
      openModal(dhead(esc(m.subj || '(no subject)')) + '<div class="mhead"><span class="av m" style="background:' + avColor(fromAddr(m.from)) + '">' + esc((fromName(m.from).charAt(0) || '?').toUpperCase()) + '</span><div><b>' + esc(fromName(m.from)) + '</b> <small>&lt;' + esc(fromAddr(m.from)) + '&gt;</small><small>to ' + esc(m.to) + (m.cc ? ', cc ' + esc(m.cc) : '') + ' · ' + esc(new Date(m.date).toLocaleString()) + '</small></div></div>'
        + '<div class="mact"><button data-m="reply">↩ Reply</button><button data-m="replyall">↩↩ Reply all</button><button data-m="fwd">→ Forward</button><span class="sp"></span><button data-m="star">' + (it && it.star ? '★' : '☆') + '</button><button data-m="unread">Mark unread</button><button data-m="archive">Archive</button><button data-m="trash" style="color:#d33">Delete</button></div>'
        + '<div class="db mbody">' + body + (m.atts.length ? '<div class="matts">' + m.atts.map(function (x) { return '<span>📎 ' + esc(x.name) + '</span>'; }).join('') + '<small>Open in Gmail to download attachments</small></div>' : '') + '</div>', function (act) {
        var M2 = mailState();
        if (act === 'reply' || act === 'replyall' || act === 'fwd') { mailCompose(act, m); return false; }
        var req = act === 'trash' ? { trash: true } : act === 'archive' ? { remove: ['INBOX'] } : act === 'unread' ? { add: ['UNREAD'] } : act === 'star' ? (it && it.star ? { remove: ['STARRED'] } : { add: ['STARRED'] }) : null;
        if (!req) return false;
        req.account_id = M2.a; req.id = m.id;
        gcall('mail_modify', req).then(function () { toast(act === 'trash' ? 'Moved to Trash' : act === 'archive' ? 'Archived' : 'Done'); gUnread(); }).catch(function (e) { toast(gErr(e)); });
        if (act === 'star') { if (it) it.star = !it.star; render(); return true; }
        if (act === 'unread') { if (it) it.unread = true; render(); return true; }
        M2.items = (M2.items || []).filter(function (x) { return x.id !== m.id; }); render();
        return true;
      }, { drawer: true, wide: true, nofocus: true });
      var fr = M.querySelector('.mframe');
      if (fr) {
        var css = '<base target="_blank"><style>body{font:15px/1.5 -apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#1d2433;margin:0;padding:4px;word-wrap:break-word}img{max-width:100%;height:auto}table{max-width:100%}</style>';
        fr.srcdoc = css + m.html;
        fr.onload = function () { try { fr.style.height = Math.max(300, fr.contentDocument.body.scrollHeight + 30) + 'px'; } catch (e) { fr.style.height = '70vh'; } };
      }
    }).catch(function (e) { toast(gErr(e)); closeModal(); });
  }
  function quote(m) {
    return '\n\n\nOn ' + new Date(m.date).toLocaleString() + ', ' + m.from + ' wrote:\n' + (m.text || String(m.html || '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n').replace(/<[^>]+>/g, '')).replace(/\n{3,}/g, '\n\n').trim().split('\n').map(function (l) { return '> ' + decodeEnt(l); }).join('\n');
  }
  function mailCompose(kind, m) {
    var M_ = mailState(), mine = myAccts(), a = gAcct(M_.a);
    var to = '', cc = '', subj = '', bodyTxt = '';
    if (m) {
      var re = /^re:/i.test(m.subj) ? m.subj : 'Re: ' + m.subj, fw = /^fwd?:/i.test(m.subj) ? m.subj : 'Fwd: ' + m.subj;
      if (kind === 'fwd') { subj = fw; bodyTxt = '\n\n---------- Forwarded message ----------\nFrom: ' + m.from + '\nDate: ' + new Date(m.date).toLocaleString() + '\nSubject: ' + m.subj + '\nTo: ' + m.to + '\n\n' + (m.text || String(m.html || '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/p>/gi, '\n').replace(/<[^>]+>/g, '')).trim(); }
      else {
        subj = re; to = m.replyTo || m.from; bodyTxt = quote(m);
        if (kind === 'replyall') {
          var self = a ? a.email.toLowerCase() : '';
          cc = (m.to + (m.cc ? ',' + m.cc : '')).split(',').map(function (x) { return x.trim(); }).filter(function (x) { return x && fromAddr(x).toLowerCase() !== self && fromAddr(x).toLowerCase() !== fromAddr(to).toLowerCase(); }).join(', ');
        }
      }
    }
    openModal('<div class="dh"><button class="bk" data-m="cancel">' + I.back + '</button><h3>' + (kind === 'new' ? 'New message' : kind === 'fwd' ? 'Forward' : 'Reply') + '</h3><button class="sendbtn" data-m="send">Send</button></div><div class="db">'
      + '<div class="f"><i>' + FI.user + '</i><span style="flex:none;margin-right:.6rem">From</span><select name="from" style="flex:1;max-width:none;text-align:left">' + mine.map(function (x) { return '<option value="' + x.id + '"' + (x.id === M_.a ? ' selected' : '') + '>' + esc(x.email) + '</option>'; }).join('') + '</select></div>'
      + '<div class="f"><span style="flex:none;width:2.4rem">To</span><input type="text" name="to" value="' + esc(to) + '" autocapitalize="off"></div>'
      + '<div class="f"><span style="flex:none;width:2.4rem">Cc</span><input type="text" name="cc" value="' + esc(cc) + '" autocapitalize="off"></div>'
      + '<div class="f"><span style="flex:none;width:4rem">Subject</span><input type="text" name="subject" value="' + esc(subj) + '"></div>'
      + '<div class="f top" style="align-items:stretch"><textarea name="body" class="mbodyin">' + esc(bodyTxt) + '</textarea></div></div>', function (act) {
      if (act !== 'send') return false;
      var toV = val('to'); if (!toV) { toast('Add a recipient'); return false; }
      var b = { account_id: val('from'), to: toV, cc: val('cc'), subject: val('subject'), body: (M.querySelector('[name=body]') || {}).value || '' };
      if (m && kind !== 'fwd') { b.threadId = m.th; b.inReplyTo = m.msgid; b.references = m.refs; }
      var btn = M.querySelector('.sendbtn'); if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      gcall('mail_send', b).then(function () { closeModal(); toast('Sent'); if (mailState().box === 'SENT') mailLoad(false); }).catch(function (e) { toast(gErr(e)); if (btn) { btn.disabled = false; btn.textContent = 'Send'; } });
      return false;
    }, { drawer: true, wide: true });
    var f = M.querySelector(kind === 'new' ? '[name=to]' : '[name=body]'); if (f && !('ontouchstart' in window)) setTimeout(function () { f.focus(); if (f.setSelectionRange) f.setSelectionRange(0, 0); }, 300);
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
  var lastHtml = '', fxT;
  function render() {
    if (S.modalOpen && S.holdRender) return;
    var v = S.sub || S.view, h;
    if (!DEMO && (!S.auth || S.authMode === 'newpw')) h = renderAuth();
    else if (!DEMO && !S.hid) h = renderOnboard();
    else if (v === 'home') h = renderHome();
    else if (v === 'settings') h = renderSettings();
    else {
      h = ({ calendar: renderCalendar, tasks: renderTasks, rewards: renderRewards, meals: renderMeals, photos: renderPhotos, lists: renderLists, anniv: renderAnniv, mail: renderMail, notes: renderNotes, recipes: renderRecipes, timer: renderTimer }[v] || renderCalendar)();
      h += tabbar();
    }
    if (S.more) h += '<div class="shade dim" data-a="more"><div class="pop" data-a="noop"><h3>More</h3><button class="x" data-a="more">' + I.x + '</button><div class="its">' + (window.Android && Android.launch ? [['stock', 'E-calendar']] : []).concat([['mail', 'Mail'], ['notes', 'Notes'], ['recipes', 'Recipes'], ['timer', 'Timer'], ['sleep', 'Sleep'], ['settings', 'Settings']]).map(function (m) { var u = m[0] === 'mail' ? unreadTotal() : 0; return '<button class="it" data-a="sub" data-v="' + m[0] + '"><div>' + TI[m[0]] + (u ? '<b class="bdg">' + (u > 99 ? '99+' : u) + '</b>' : '') + '</div>' + m[1] + '</button>'; }).join('') + '</div><button class="eo" data-a="order">Edit order</button></div></div>';
    if (S.sleeping) { var d = now(); h += '<div class="sleep" data-a="wake"><b>' + (S.cfg.h24 ? pad(d.getHours()) : ((d.getHours() % 12) || 12)) + ':' + pad(d.getMinutes()) + '</b><span>' + WDL[d.getDay()] + ', ' + MONL[d.getMonth()] + ' ' + d.getDate() + '</span></div>'; }
    if (S.dbNote) h += '<div class="dbnote">' + esc(S.dbNote) + '</div>';
    else if (S.gNote && (v === 'calendar' || v === 'home')) h += '<div class="dbnote" data-a="settings">' + esc(S.gNote) + '</div>';
    if (G.accts.length && (v === 'calendar' || v === 'home' || v === 'tasks')) setTimeout(function () { gEvents(false); }, 0);
    if (h === lastHtml) { S.fx = null; return; }
    var sc = root.querySelector('.scroll'), st = sc ? sc.scrollTop : 0, keep = !S.fx || S.fx === 'd' || S.fx === 'p' || S.fx === 'c';
    root.innerHTML = h; lastHtml = h; S.fxId = null;
    var sc2 = root.querySelector('.scroll'); if (sc2 && st && keep) sc2.scrollTop = st;
    if (S.fx) { var cls = 'fx' + S.fx; S.fx = null; root.classList.remove('fxv', 'fxn', 'fxd', 'fxp', 'fxc'); void root.offsetWidth; root.classList.add(cls); clearTimeout(fxT); fxT = setTimeout(function () { root.classList.remove(cls); }, 500); }
  }

  /* ---------- modal ---------- */
  var M = document.getElementById('modal');
  var closeTok = 0;
  function openModal(html, onOk, opt) {
    opt = opt || {};
    var type = opt.drawer ? (opt.wide ? 'drawer wide' : 'drawer') : 'center';
    var still = S.modalOpen && M._type === type;
    closeTok++;
    M.innerHTML = '<div class="dlg">' + html + '</div>'; M.className = 'on ' + type + (still ? ' still' : ''); M._type = type; S.modalOpen = true; M._ok = onOk;
    var f = M.querySelector('input[type=text],textarea'); if (f && !still && !opt.nofocus && !('ontouchstart' in window)) setTimeout(function () { f.focus(); }, 280);
  }
  function closeModal() {
    if (!S.modalOpen) return;
    S.modalOpen = false; M._ok = null; var tok = ++closeTok; M.classList.add('out');
    setTimeout(function () { if (tok === closeTok && !S.modalOpen) { M.className = ''; M.innerHTML = ''; } }, 210);
  }
  function val(n) { var e = M.querySelector('[name="' + n + '"]'); return e ? e.value.trim() : ''; }
  function pplPicker(sel, multi) {
    return '<div class="ppl" data-multi="' + (multi ? 1 : 0) + '">' + S.cfg.people.map(function (p) { var on = multi ? sel.indexOf(p.id) >= 0 : sel === p.id; return '<button type="button" class="' + (on ? 'on' : '') + '" data-pp="' + p.id + '"><span class="av" style="background:' + p.color + '">' + esc(p.initial) + '</span>' + esc(p.name) + '</button>'; }).join('') + '</div>';
  }
  function pplVal() { var on = M.querySelectorAll('.ppl button.on'), r = []; for (var i = 0; i < on.length; i++) r.push(on[i].getAttribute('data-pp')); return r; }
  function btns(delAct) { return '<div class="btns">' + (delAct ? '<button class="del" data-m="del">Delete</button>' : '') + '<button class="no" data-m="cancel">Cancel</button><button class="ok" data-m="ok">Save</button></div>'; }
  function head(t) { return '<h3>' + t + '</h3><button class="x" data-m="cancel">' + I.x + '</button>'; }
  /* drawer form pieces (right-side panel like the device) */
  var FI = {
    title: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h12M4 12h7M14 12v7M11 12h8"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke-linecap="round"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="7"/><path d="M12 9v4l2.5 2M5 4L2.5 6.5M19 4l2.5 2.5"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="5" width="16" height="15" rx="3"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>',
    rep: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a6 6 0 0 1 6-6h9l-3-3M20 12a6 6 0 0 1-6 6H5l3 3"/></svg>',
    desc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>',
    smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="8"/><path d="M9 14c1.5 2 4.500 2 6 0M9 10h.01M15 10h.01"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3v18h2v-7h10l-2.500-4L18 6H8V3z"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.200" stroke-linecap="round"><path d="M9 7h11M9 12h11M9 17h11M4.500 7h.01M4.500 12h.01M4.500 17h.01"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.500l2.600 5.400 5.900.8-4.300 4.100 1 5.900L12 17l-5.200 2.700 1-5.900-4.300-4.100 5.900-.8z"/></svg>'
  };
  function dhead(t) { return '<div class="dh"><button class="bk" data-m="cancel">' + I.back + '</button><h3>' + t + '</h3></div>'; }
  function dfoot(del) { return '<div class="df">' + (del ? '<button class="del" data-m="del">Delete</button>' : '') + '<button class="ok" data-m="ok">Save</button></div>'; }
  function fTitle(v, ph) { v = v || ''; return '<div class="f ft"><i>' + FI.title + '</i><input type="text" name="t" maxlength="300" placeholder="' + (ph || 'Title') + '" value="' + esc(v) + '"><em class="cnt">' + v.length + '/300</em></div>'; }
  function fTog(ic, label, name, on, extra) { return '<div class="f"><i>' + ic + '</i><span>' + label + '</span>' + (extra || '') + '<button type="button" class="tg' + (on ? ' on' : '') + '" data-tg="' + name + '"></button></div>'; }
  function togOn(name) { var t = M.querySelector('[data-tg="' + name + '"]'); return !!t && t.className.indexOf(' on') > 0; }
  function fSel(ic, label, name, opts, cur) { return '<div class="f"><i>' + ic + '</i><span>' + label + '</span><select name="' + name + '">' + opts.map(function (o) { return '<option value="' + o[0] + '"' + (String(o[0]) === String(cur) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>'; }
  function fProfile(sel, multi, label) { return '<div class="f col"><div class="fl"><i>' + FI.user + '</i><span><b class="req">*</b> ' + (label || 'Profile') + '</span></div>' + pplPicker(sel, multi) + '</div>'; }
  function fDesc(v, name, ph) { return '<div class="f top"><i>' + FI.desc + '</i><textarea name="' + (name || 'desc') + '" placeholder="' + (ph || 'Description') + '">' + esc(v || '') + '</textarea></div>'; }
  var REM = [['', 'None'], ['0', 'On time'], ['5', '5 minutes before'], ['15', '15 minutes before'], ['30', '30 minutes before'], ['60', '1 hour before'], ['1440', '1 day before']];
  var REP = [['daily', 'Daily'], ['weekly', 'Weekly'], ['monthly', 'Monthly'], ['yearly', 'Yearly']];
  function fRepeat(rep) { return '<div class="f"><i>' + FI.rep + '</i><span>Repeat</span><select name="rep" class="repsel' + (rep ? ' show' : '') + '">' + REP.map(function (o) { return '<option value="' + o[0] + '"' + (o[0] === (rep || 'weekly') ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select><button type="button" class="tg' + (rep ? ' on' : '') + '" data-tg="rep"></button></div>'; }
  function repVal() { return togOn('rep') ? (val('rep') || 'weekly') : ''; }
  function askNotify(rem) { try { if (rem !== '' && window.Notification && Notification.permission === 'default') Notification.requestPermission(); } catch (e) {} }

  function syncPicker(sel, lock) {
    var ws = gWritable(); if (!ws.length && !lock) return '';
    var opts = lock ? [lock] : [{ a: '', c: '', name: 'None' }].concat(ws);
    return '<div class="f col"><div class="fl"><span>Pick a Synced calendar</span></div>' + opts.map(function (o) {
      var v = o.a ? o.a + '|' + o.c : '', on = v === (sel || '');
      return '<label class="sc' + (on ? ' on' : '') + '"><input type="radio" name="sync" value="' + esc(v) + '"' + (on ? ' checked' : '') + (lock ? ' disabled' : '') + '>' + (o.a ? '<span class="gi">' + GCAL + '</span><span class="sn"><b>' + esc(o.name) + '</b><small>' + esc(o.email) + '</small></span>' : '<span class="sn"><b>None</b><small>Only in C2 Calendar</small></span>') + '<i></i></label>';
    }).join('') + '</div>';
  }
  function syncVal() { var r = M.querySelector('input[name=sync]:checked'); return r ? r.value : ''; }
  function evForm(e, hm, hm2) {
    return fTitle(e.t)
      + '<div class="two"><div class="f col"><small>Start</small><input type="date" name="date" value="' + e.date + '"></div><div class="f tm"><input type="time" name="time" value="' + esc(e.time || hm) + '"></div></div>'
      + '<div class="two"><div class="f col"><small>End</small><input type="date" name="end" value="' + (e.end || e.date) + '"></div><div class="f tm"><input type="time" name="etime" value="' + esc(e.etime || e.time || hm2) + '"></div></div>'
      + '<div class="plain"><span>All day</span><button type="button" class="tg' + (e.ad ? ' on' : '') + '" data-tg="ad"></button></div>';
  }
  function evDialog(e, date) {
    var n = now(), hm = pad(n.getHours()) + ':' + pad(n.getMinutes()), hm2 = pad((n.getHours() + 1) % 24) + ':' + pad(n.getMinutes()), dk = date || key(S.sel);
    var isNew = !e;
    e = e || { t: '', date: dk, end: dk, time: hm, etime: hm2, ad: false, ps: [], rem: '0', rep: '', desc: '' };
    openModal(dhead(e.id ? 'Edit Event' : 'Add Event') + '<div class="db">' + evForm(e, hm, hm2)
      + fProfile(psOf(e), true) + fSel(FI.bell, 'Reminder', 'rem', REM, e.rem == null ? '' : e.rem) + (isNew ? syncPicker('') : '') + fTog(FI.cal, 'Anniversary', 'ann', e.ann) + fRepeat(e.rep) + fDesc(e.desc) + '</div>' + dfoot(!!e.id), function (act) {
      if (act === 'del') { del('events', e.id); return true; }
      if (act !== 'ok') return false;
      var t = val('t'), ps = pplVal(), sv = isNew ? syncVal() : '';
      if (!t) { toast('Enter a title'); return false; } if (!ps.length && !sv) { toast('Select a profile'); return false; }
      var d1 = val('date') || dk, d2 = val('end') || d1; if (d2 < d1) d2 = d1;
      var f = { id: e.id, t: t, date: d1, end: d2, time: val('time'), etime: val('etime'), ad: togOn('ad'), ps: ps, rem: val('rem'), ann: togOn('ann'), rep: repVal(), desc: val('desc'), at: e.at };
      askNotify(f.rem);
      if (sv) { var sp = sv.split('|'); gSaveEvent({ a: sp[0], c: sp.slice(1).join('|') }, null, f); return true; }
      put('events', f);
      return true;
    }, { drawer: true });
  }
  function evDialogG(x) {
    var a = gAcct(x.a), cc = gCalCfg(a, x.c) || {}, sd = x.sd, ed = x.ed;
    var e = { t: x.t, date: key(sd), end: key(x.ad ? addD(ed, -1) : ed), time: x.ad ? '09:00' : pad(sd.getHours()) + ':' + pad(sd.getMinutes()), etime: x.ad ? '10:00' : pad(ed.getHours()) + ':' + pad(ed.getMinutes()), ad: x.ad, desc: x.desc };
    var lock = { a: x.a, c: x.c, name: cc.name || x.c, email: a ? a.email : '' };
    var canEdit = !!cc.w;
    openModal(dhead(canEdit ? 'Edit Event' : 'Event') + '<div class="db">' + evForm(e, e.time, e.etime)
      + (x.loc ? '<div class="f"><i>' + FI.list + '</i><span>' + esc(x.loc) + '</span></div>' : '')
      + syncPicker(x.a + '|' + x.c, lock) + fDesc(e.desc)
      + (x.rec ? '<p class="muted" style="font-size:.82rem;margin:.2rem .2rem .8rem">Repeating event — changes apply to this day only.</p>' : '')
      + (x.link ? '<a class="glink" href="' + esc(x.link) + '" target="_blank" rel="noopener">Open in Google Calendar ↗</a>' : '') + '</div>' + (canEdit ? dfoot(true) : ''), function (act) {
      if (act === 'del') { if (!confirmBox('Delete this event from Google Calendar?')) return false; gDelEvent(x); return true; }
      if (act !== 'ok') return false;
      var t = val('t'); if (!t) { toast('Enter a title'); return false; }
      var d1 = val('date'), d2 = val('end') || d1; if (d2 < d1) d2 = d1;
      gSaveEvent({ a: x.a, c: x.c }, x.id, { t: t, date: d1, end: d2, time: val('time'), etime: val('etime'), ad: togOn('ad'), desc: val('desc') });
      return true;
    }, { drawer: true });
  }
  var EMOJI = ['', '🧹', '🧺', '🍽️', '🛏️', '🗑️', '🐶', '🪴', '📚', '🛒', '🚿', '🦷', '🏃', '💊', '🎹', '🧸', '🚗', '💻', '📞', '🔧', '✏️', '⭐'];
  function taskDialog(t) {
    var isNew = !t;
    t = t || { kind: 'chore', t: '', date: key(S.view === 'tasks' ? S.taskDay : S.sel), ad: true, time: '09:00', ps: [], stars: 1, rem: '', rep: '', pri: '', desc: '' };
    var hasDate = isNew ? true : !!t.date, dk = t.date || key(sod(now()));
    openModal(dhead(isNew ? 'Add Task' : 'Edit Task') + '<div class="seg2"><button type="button" data-kind="chore" class="' + (t.kind !== 'routine' ? 'on' : '') + '">Chore</button><button type="button" data-kind="routine" class="' + (t.kind === 'routine' ? 'on' : '') + '">Routine</button></div><div class="db">' + fTitle(t.t)
      + fSel(FI.smile, 'Emoji', 'emoji', EMOJI.map(function (x) { return [x, x || 'None']; }), t.emoji || '')
      + '<div class="f"><i>' + FI.cal + '</i><div class="col2"><small>Date</small><input type="date" name="date" value="' + dk + '"></div><button type="button" class="tg' + (hasDate ? ' on' : '') + '" data-tg="hasdate"></button></div>'
      + '<div class="f"><i>' + FI.clock + '</i><div class="col2"><small>Time (off = all day)</small><input type="time" name="time" value="' + esc(t.time || '09:00') + '"></div><button type="button" class="tg' + (t.ad === false ? ' on' : '') + '" data-tg="timed"></button></div>'
      + fProfile(isNew ? [] : t.p, isNew)
      + fTog(FI.clock, 'Add a timer on device', 'tm', !!t.tm, '<select name="tmin" class="mini">' + [5, 10, 15, 20, 30, 45, 60].map(function (m) { return '<option value="' + m + '"' + (m === (+t.tm || 15) ? ' selected' : '') + '>' + m + ' min</option>'; }).join('') + '</select>')
      + fSel(FI.bell, 'Reminder', 'rem', REM, t.rem == null ? '' : t.rem) + fRepeat(t.rep)
      + fSel(FI.flag, 'Priority', 'pri', [['', 'No priority'], ['high', 'High'], ['medium', 'Medium'], ['low', 'Low']], t.pri || '')
      + '<div class="f"><i>' + FI.star + '</i><span>Stars</span><input type="number" name="stars" min="0" max="20" value="' + (+t.stars || 0) + '" class="mini"></div>'
      + fDesc(t.desc) + '</div>' + dfoot(!isNew), function (act) {
      if (act === 'del') { del('tasks', t.id); return true; }
      if (act !== 'ok') return false;
      var n = val('t'), ps = pplVal(); if (!n) { toast('Enter a title'); return false; } if (!ps.length) { toast('Select a profile'); return false; }
      var kindB = M.querySelector('.seg2 .on'), kind = kindB ? kindB.getAttribute('data-kind') : 'chore';
      askNotify(val('rem'));
      var base = { t: n, kind: kind, emoji: val('emoji'), date: togOn('hasdate') ? (val('date') || dk) : '', time: val('time'), ad: !togOn('timed'), tm: togOn('tm') ? (+val('tmin') || 15) : 0, rem: val('rem'), rep: repVal(), pri: val('pri'), stars: +val('stars') || 0, desc: val('desc') };
      if (!base.date) base.rep = '';
      ps.forEach(function (pid, i) {
        var o = JSON.parse(JSON.stringify(base)); o.p = pid;
        if (!isNew && i === 0) { o.id = t.id; o.at = t.at; o.done = !!t.done; if (t.dd) o.dd = t.dd; } else { o.done = false; o.at = Date.now() + i; }
        put('tasks', o);
      });
      return true;
    }, { drawer: true });
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
  /* meals: "Select Recipes" drawer */
  function rcItems() {
    var rc = S.rc, q = (rc.q || '').toLowerCase(), out = [];
    function add(em, name) { if (!q || name.toLowerCase().indexOf(q) >= 0) out.push([em, name]); }
    if (q || rc.cat === 'Custom') S.data.recipes.slice().sort(byAt).forEach(function (r) { add(r.emoji || '🍽️', r.t); });
    Object.keys(DISHES).forEach(function (c) { if (q || rc.cat === c) DISHES[c].forEach(function (d) { add(d[0], d[1]); }); });
    return out;
  }
  function rcList() {
    var it = rcItems();
    if (!it.length) return '<div class="muted" style="padding:1.5rem .5rem;line-height:1.5">' + (S.rc.q ? 'Nothing found' : 'No custom recipes yet.<br>Tap “+ Add” to create one.') + '</div>';
    return it.map(function (d) { return '<div class="rci"><span class="em">' + d[0] + '</span><b>' + esc(d[1]) + '</b><button data-m="add:' + esc(d[0] + '|' + d[1]) + '">' + I.plus + '</button></div>'; }).join('');
  }
  function mealDialog(k, slot) {
    if (k) S.rc = { k: k, slot: slot, cat: (S.rc && S.rc.cat) || 'Breakfast & Brunch', q: '' };
    var rc = S.rc, d = parseKey(rc.k);
    var ms = S.data.meals.filter(function (m) { return m.date === rc.k && m.slot === rc.slot; }).sort(byAt);
    openModal(dhead('Select Recipes')
      + '<div class="rtb"><span class="nav"><button data-m="day:-1">' + I.l + '</button><span>' + MONL[d.getMonth()] + ' ' + d.getDate() + '</span><button data-m="day:1">' + I.r + '</button></span><select name="slot" class="pillsel">' + SLOTS.map(function (s) { return '<option' + (s === rc.slot ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select><button class="pill" data-m="newrc">+ Add</button></div>'
      + (ms.length ? '<div class="planned">' + ms.map(function (m) { return '<span>' + (m.emoji ? m.emoji + ' ' : '') + esc(m.t) + '<button data-m="rm:' + m.id + '">' + I.x + '</button></span>'; }).join('') + '</div>' : '')
      + '<div class="rcols"><div class="rside"><input type="text" name="q" placeholder="Search" value="' + esc(rc.q) + '">' + CATS.map(function (c, i) { return '<button data-m="cat:' + i + '" class="' + (c === rc.cat && !rc.q ? 'on' : '') + '">' + c + '</button>'; }).join('') + '</div><div class="rmain"><h5>' + (rc.q ? 'Search' : rc.cat) + '</h5><div class="rlist">' + rcList() + '</div></div></div>', function (act) {
      var p = act.split(':'), a = p[0], v = p.slice(1).join(':');
      if (a === 'day') { rc.k = key(addD(parseKey(rc.k), +v)); mealDialog(); }
      else if (a === 'cat') { rc.cat = CATS[+v]; rc.q = ''; mealDialog(); }
      else if (a === 'rm') { del('meals', v); mealDialog(); }
      else if (a === 'add') { var x = v.split('|'); put('meals', { t: x.slice(1).join('|'), emoji: x[0], slot: rc.slot, date: rc.k }); toast('Added to ' + rc.slot); mealDialog(); }
      else if (a === 'newrc') { recipeDialog(null); }
      return false;
    }, { drawer: true, wide: true, nofocus: true });
  }
  function listDialog(x, list) {
    var Ls = listsCfg();
    x = x || { t: '', content: '', list: list || Ls[0].id, date: '', ps: [], subs: [] };
    var subs = (x.subs || []).slice();
    openModal('<div class="dh"><button class="bk" data-m="cancel">' + I.back + '</button><h3>' + (x.id ? 'Edit' : 'Add') + '</h3><button class="topsave" data-m="ok">Save</button></div><div class="db">' + fTitle(x.t)
      + fDesc(x.content, 'content', 'Content')
      + fSel(FI.list, '<b class="req">*</b>Lists', 'list', Ls.map(function (L) { return [L.id, esc(L.name)]; }), x.list)
      + '<div class="f"><i>' + FI.cal + '</i><div class="col2"><small>Date</small><input type="date" name="date" value="' + (x.date || key(sod(now()))) + '"></div><button type="button" class="tg' + (x.date ? ' on' : '') + '" data-tg="hasdate"></button></div>'
      + '<div class="f col"><div class="fl"><i>' + FI.user + '</i><span>Please select members</span></div>' + pplPicker(x.ps || [], true) + '</div>'
      + '<div class="f col"><div class="fl"><i>' + FI.list + '</i><span>Subtask</span></div><div class="subs">' + subs.map(function (s) { return '<input type="text" class="sub" value="' + esc(s.t) + '"' + (s.done ? ' data-done="1"' : '') + '>'; }).join('') + '</div><button type="button" class="addsub" data-m="addsub">Add</button></div>'
      + '</div>' + (x.id ? dfoot(true).replace('<button class="ok" data-m="ok">Save</button>', '') : ''), function (act) {
      if (act === 'del') { del('lists', x.id); return true; }
      if (act === 'addsub') { var box = M.querySelector('.subs'), inp = document.createElement('input'); inp.type = 'text'; inp.className = 'sub'; inp.placeholder = 'Subtask'; box.appendChild(inp); inp.focus(); return false; }
      if (act !== 'ok') return false;
      var n = val('t'); if (!n) { toast('Enter a title'); return false; }
      var ss = [], ins = M.querySelectorAll('.subs input'); for (var i = 0; i < ins.length; i++) if (ins[i].value.trim()) ss.push({ t: ins[i].value.trim(), done: !!ins[i].getAttribute('data-done') });
      put('lists', { id: x.id, t: n, content: val('content'), list: val('list'), date: togOn('hasdate') ? val('date') : '', ps: pplVal(), subs: ss, done: !!x.done, at: x.at });
      return true;
    }, { drawer: true });
  }
  var ANT = { countdown: 'Countdown', anniversary: 'Anniversary', birthday: 'Birthday', holiday: 'Holiday' };
  function annivDialog(a, type) {
    type = (a && a.type) || type || 'anniversary';
    a = a || { t: '', date: key(addD(sod(now()), 30)), yearly: type !== 'countdown', pin: false, ps: S.cfg.people.map(function (p) { return p.id; }) };
    openModal(dhead((a.id ? 'Edit ' : 'Add ') + ANT[type]) + '<div class="db">' + fTitle(a.t)
      + fSel(FI.list, 'Type', 'type', Object.keys(ANT).map(function (k) { return [k, ANT[k]]; }), type)
      + '<div class="f"><i>' + FI.cal + '</i><div class="col2"><small>Date</small><input type="date" name="date" value="' + a.date + '"></div></div>'
      + fTog(FI.rep, 'Repeat every year', 'yearly', a.yearly) + fTog('<span style="display:flex;width:100%;height:100%">' + I.pin + '</span>', 'Pin to top', 'pin', a.pin)
      + fProfile(a.ps || [], true, 'Members') + '</div>' + dfoot(!!a.id), function (act) {
      if (act === 'del') { del('anniv', a.id); return true; }
      if (act !== 'ok') return false;
      var n = val('t'); if (!n) { toast('Enter a title'); return false; }
      put('anniv', { id: a.id, t: n, type: val('type'), date: val('date') || a.date, yearly: togOn('yearly'), pin: togOn('pin'), ps: pplVal(), at: a.at });
      return true;
    }, { drawer: true });
  }
  function newListDialog() {
    var cols = ['#3a6cf0', '#E5525C', '#16A394', '#F08A24', '#8B5CF6', '#E04F9E'];
    openModal(head('New list') + '<label>Name</label><input type="text" name="name"><label>Color</label><div class="colors">' + cols.map(function (c, i) { return '<button type="button" data-col="' + c + '" class="' + (i === listsCfg().length % cols.length ? 'on' : '') + '" style="background:' + c + '"></button>'; }).join('') + '</div>' + btns(false), function (act) {
      if (act !== 'ok') return false;
      var n = val('name'); if (!n) { toast('Enter a name'); return false; }
      var on = M.querySelector('.colors .on');
      S.cfg.lists = listsCfg().concat([{ id: 'l' + uid(), name: n, color: on ? on.getAttribute('data-col') : cols[0] }]); saveCfg();
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
      if (S.view === 'meals' && !S.sub && S.rc) { S.rc.cat = 'Custom'; closeModal(); mealDialog(); return false; }
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
    openModal(head(title) + opts.map(function (o) { return '<div class="opt" data-m="pick:' + o[0] + '"><span>' + o[1] + '</span>' + (o[0] === cur ? '<span style="color:#3a6cf0;width:1.2rem;display:flex">' + I.check + '</span>' : '') + '</div>'; }).join(''), function (act) { if (act.indexOf('pick:') === 0) { closeModal(); cb(act.slice(5)); render(); return false; } return true; });
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
      if (t.hasAttribute('data-a') && A[t.getAttribute('data-a')]) { A[t.getAttribute('data-a')](t.getAttribute('data-v')); return; }
      if (t.hasAttribute('data-pp')) { var box = t.parentNode; if (box.getAttribute('data-multi') !== '1') { var bs = box.querySelectorAll('button'); for (var i = 0; i < bs.length; i++) bs[i].className = ''; t.className = 'on'; } else t.className = t.className === 'on' ? '' : 'on'; return; }
      if (t.hasAttribute('data-tg')) { t.className = t.className.indexOf(' on') > 0 ? 'tg' : 'tg on'; var rs = t.parentNode.querySelector('.repsel'); if (rs) rs.className = 'repsel' + (t.className.indexOf(' on') > 0 ? ' show' : ''); return; }
      if (t.hasAttribute('data-kind')) { var ks = t.parentNode.querySelectorAll('button'); for (var q = 0; q < ks.length; q++) ks[q].className = ''; t.className = 'on'; if (t.getAttribute('data-kind') === 'routine') { var rt = M.querySelector('[data-tg=rep]'), rsel = M.querySelector('.repsel'); if (rt && rt.className.indexOf(' on') < 0) { rt.className = 'tg on'; rsel.className = 'repsel show'; rsel.value = 'daily'; } } return; }
      if (t.hasAttribute('data-col')) { var cs = t.parentNode.querySelectorAll('button'); for (var j = 0; j < cs.length; j++) cs[j].className = ''; t.className = 'on'; return; }
      if (t.hasAttribute('data-m')) {
        var act = t.getAttribute('data-m');
        if (act === 'cancel') { closeModal(); render(); return; }
        var ok = M._ok ? M._ok(act) : true;
        if (ok) { closeModal(); render(); }
        return;
      }
      if (t.className === 'dlg') return;
      if (!t.parentNode) return;
      t = t.parentNode;
    }
    if (ev.target === M) { closeModal(); render(); }
  });
  M.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.name === 't') { var c = M.querySelector('.cnt'); if (c) c.textContent = t.value.length + '/300'; }
    if (t.name === 'q' && S.rc) { S.rc.q = t.value; var l = M.querySelector('.rlist'), hh = M.querySelector('.rmain h5'); if (l) l.innerHTML = rcList(); if (hh) hh.textContent = t.value ? 'Search' : S.rc.cat; }
  });
  M.addEventListener('change', function (ev) { if (ev.target.name === 'sync') { var ls = M.querySelectorAll('label.sc'); for (var z = 0; z < ls.length; z++) ls[z].className = 'sc' + (ls[z].querySelector('input').checked ? ' on' : ''); return; } if (ev.target.name === 'slot' && S.rc) { S.rc.slot = ev.target.value; mealDialog(); } });
  M.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' && ev.target.tagName === 'INPUT' && ev.target.name !== 'q' && M._ok) { if (M._ok('ok')) { closeModal(); render(); } } });

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
  function go(v) { S.fx = 'v'; S.view = v; S.sub = null; S.more = false; if (v === 'calendar') S.anchor = new Date(S.sel.getFullYear(), S.sel.getMonth(), S.calMode === 'month' ? 1 : S.sel.getDate()); render(); }
  var A = {
    go: function (v) { if (v === 'recipes') { S.sub = 'recipes'; render(); return; } go(v); },
    more: function () { S.more = !S.more; S.fx = 'p'; render(); },
    noop: function () {},
    dial: function () { S.dial = !S.dial; S.fx = 'd'; render(); },
    edev: function (id) { evDialog(find('events', id)); },
    sub: function (v) { if (v === 'stock') { S.more = false; render(); try { Android.launch('com.fujia.calendar', 'com.fujia.calendar.ui.DeviceMainActivity'); } catch (e) { toast('E-calendar not available'); } return; } S.more = false; if (v === 'sleep') { S.sleeping = true; S.wakeUntil = 0; render(); return; } S.sub = v; S.fx = 'v'; render(); },
    settings: function () { S.sub = 'settings'; S.fx = 'v'; render(); },
    wake: function () { S.sleeping = false; S.wakeUntil = Date.now() + 60000; render(); },
    sync: function () { sync().then(function () { toast('Synced'); }); loadMembers(); },
    mnav: function (v) { S.fx = 'n'; S.anchor = new Date(S.anchor.getFullYear(), S.anchor.getMonth() + (+v), 1); render(); },
    pick: function (v) { S.sel = parseKey(v); if (S.sel.getMonth() !== S.anchor.getMonth()) S.anchor = new Date(S.sel.getFullYear(), S.sel.getMonth(), 1); render(); },
    hp: function () { S.homeTaskP = (S.homeTaskP + 1) % S.cfg.people.length; render(); },
    hl: function () { S.homeListI = ((S.homeListI || 0) + 1) % listsCfg().length; S.fx = 'n'; render(); },
    calmode: function () { choose('View', [['month', 'Month'], ['week', 'Week']], S.calMode, function (m) { S.calMode = m; S.anchor = m === 'month' ? new Date(S.anchor.getFullYear(), S.anchor.getMonth(), 1) : (S.anchor.getMonth() === S.sel.getMonth() ? S.sel : S.anchor); render(); }); },
    calset: function (m) { S.calMode = m; render(); },
    cnav: function (v) { S.fx = 'n'; S.anchor = S.calMode === 'month' ? new Date(S.anchor.getFullYear(), S.anchor.getMonth() + (+v), 1) : addD(S.anchor, 7 * (+v)); render(); },
    filter: function () { choose('Filter', [['all', 'Show everyone']].concat(S.cfg.people.map(function (p) { return [p.id, 'Only ' + esc(p.name)]; })), null, function (id) { S.off = {}; if (id !== 'all') S.cfg.people.forEach(function (p) { if (p.id !== id) S.off[p.id] = true; }); render(); }); },
    pchip: function (id) { S.off[id] = !S.off[id]; render(); },
    day: function (k) { S.sel = parseKey(k); dayDialog(k); },
    openev: function (v) { var p = v.split(':'), k = p[0], id = p.slice(1).join(':'); if (k === 'ev') evDialog(find('events', id)); else if (k === 'anniv') annivDialog(find('anniv', id)); else if (k === 'g') { var gp = id.split('|'), gx = G.ev.filter(function (x) { return x.a === gp[0] && x.c === gp[1] && x.id === gp.slice(2).join('|'); })[0]; if (gx) evDialogG(gx); } },
    addev: function () { evDialog(null, key(S.sel)); },
    tnav: function (v) { S.fx = 'n'; S.taskDay = addD(S.taskDay, +v); render(); },
    taskmore: function () { choose('Tasks', [['today', 'Go to today'], ['clear', 'Clear completed (this day)']], null, function (o) { if (o === 'today') S.taskDay = sod(now()); else tasksOn(S.taskDay).forEach(function (t) { if (t.done) del('tasks', t.id); }); render(); }); },
    tgtask: function (v) {
      var p = v.split('|'), t = find('tasks', p[0]); if (!t) return;
      if (t.rep) { t.dd = t.dd || {}; if (t.dd[p[1]]) delete t.dd[p[1]]; else t.dd[p[1]] = 1; } else t.done = !t.done;
      S.fxId = t.id; S.fx = 'c'; put('tasks', t);
    },
    tasktimer: function (m) { m = +m || 15; S.timer = { total: m * 60, left: m * 60, run: true, end: Date.now() + m * 60000 }; S.sub = 'timer'; S.fx = 'v'; render(); },
    tgsub: function (v) { var p = v.split('|'), x = find('lists', p[0]); if (x && x.subs && x.subs[+p[1]]) { x.subs[+p[1]].done = !x.subs[+p[1]].done; put('lists', x); } },
    edtask: function (id) { taskDialog(find('tasks', id)); },
    addtask: function () { taskDialog(null); },
    rwfilter: function () { choose('Show', [['all', 'All'], ['open', 'Open'], ['done', 'Redeemed']], S.rwFilter, function (f) { S.rwFilter = f; render(); }); },
    rwmore: function () { choose('Rewards', [['add', 'Create a reward']], null, function () { setTimeout(function () { rwDialog(null); }, 0); }); },
    addrw: function () { rwDialog(null); },
    edrw: function (id) { rwDialog(find('rewards', id)); },
    claim: function (id) { var r = find('rewards', id); if (r && starsOf(r.p) >= r.cost) { r.claimed = true; put('rewards', r); toast('Reward redeemed!'); } },
    mlnav: function (v) { S.fx = 'n'; S.mealAnchor = addD(S.mealAnchor, (S.mealMode === 'day' ? 1 : 7) * (+v)); render(); },
    mealcat: function () { choose('Categories', [['all', 'All']].concat(SLOTS.map(function (x) { return [x, x]; })), S.mealCat || 'all', function (c) { S.mealCat = c; S.fx = 'n'; }); },
    mealmode: function () { choose('View', [['week', 'Week'], ['day', 'Day']], S.mealMode || 'week', function (m) { S.mealMode = m; S.fx = 'n'; }); },
    bag: function () {
      var a = S.mealAnchor, ws = addD(a, -a.getDay()), keys = {}, i, have = {}, n = 0, gid = listsCfg()[0].id;
      for (i = 0; i < 7; i++) keys[key(addD(ws, i))] = 1;
      S.data.lists.forEach(function (x) { if (x.list === gid && !x.done) have[x.t.toLowerCase()] = 1; });
      S.data.meals.forEach(function (m) {
        if (!keys[m.date]) return;
        var r = S.data.recipes.filter(function (q) { return q.t === m.t; })[0];
        var items = r && r.ing ? r.ing.split('\n') : [m.t];
        items.forEach(function (it) { it = it.trim(); if (!it || have[it.toLowerCase()]) return; have[it.toLowerCase()] = 1; put('lists', { t: it, list: gid, at: Date.now() + n }); n++; });
      });
      toast(n ? 'Added ' + n + ' item' + (n > 1 ? 's' : '') + ' to ' + listsCfg()[0].name : 'Nothing new to add this week');
    },
    meal: function (v) { var p = v.split('|'); mealDialog(p[0], p[1]); },
    pf: function (f) { S.pFilter = f; render(); },
    sort: function () { S.photoSortAsc = !S.photoSortAsc; render(); },
    upload: function () { fileIn.click(); },
    photo: function (id) { photoDialog(find('photos', id)); },
    addl: function (v) { listDialog(null, v || listsCfg()[0].id); },
    edl: function (id) { listDialog(find('lists', id)); },
    tgl: function (id) { var x = find('lists', id); if (x) { x.done = !x.done; S.fxId = id; S.fx = 'c'; put('lists', x); } },
    dell: function (id) { del('lists', id); },
    listmore: function () {
      var opts = [['new', 'New list'], ['clear', 'Clear checked items']]; if (listsCfg().length > 1) opts.push(['del', 'Delete a list…']);
      choose('Lists', opts, null, function (o) {
        if (o === 'new') setTimeout(newListDialog, 0);
        else if (o === 'clear') S.data.lists.filter(function (x) { return x.done; }).forEach(function (x) { del('lists', x.id); });
        else setTimeout(function () { choose('Delete which list?', listsCfg().map(function (L) { return [L.id, esc(L.name)]; }), null, function (id) { if (!confirmBox('Delete this list and its items?')) return; S.data.lists.filter(function (x) { return x.list === id; }).forEach(function (x) { del('lists', x.id); }); S.cfg.lists = listsCfg().filter(function (L) { return L.id !== id; }); saveCfg(); }); }, 0);
      });
    },
    addan: function (v) { annivDialog(null, v || 'anniversary'); },
    edan: function (id) { annivDialog(find('anniv', id)); },
    addnote: function () { noteDialog(null); },
    ednote: function (id) { noteDialog(find('notes', id)); },
    addrc: function () { recipeDialog(null); },
    viewrc: function (id) { viewRecipe(find('recipes', id)); },
    tset: function (m) { S.timer = { total: m * 60, left: m * 60, run: false, end: 0 }; render(); },
    tgo: function () { var T = S.timer; if (T.run) { T.left = tLeft(); T.run = false; } else { if (T.left <= 0) T.left = T.total; T.end = Date.now() + T.left * 1000; T.run = true; } render(); },
    treset: function () { S.timer.run = false; S.timer.left = S.timer.total; render(); },
    tadd: function () { var T = S.timer; if (T.run) T.end += 60000; else T.left += 60; T.total += 60; render(); },
    stab: function (v) { S.setTab = v; S.gFlash = null; if (v === 'google') { G.cals = {}; loadGAccts(); } render(); },
    cfgtg: function (k) { S.cfg[k] = !S.cfg[k]; saveCfg(); },
    cfgfont: function (v) { S.cfg.font = v; saveCfg(); },
    order: function () { S.more = false; render(); orderDialog(); },
    edp: function (i) { personDialog(i); },
    gconnect: function () { gStart(); },
    gdisc: function (id) { var a = gAcct(id); if (!a || !confirmBox('Disconnect ' + a.email + '? Its calendars and mail will disappear from C2 Calendar.')) return; gcall('disconnect', { account_id: id }).then(function () { toast('Disconnected'); loadGAccts(); }).catch(function (e) { toast(gErr(e)); }); },
    gcal: function (v) {
      var p = v.split('|'), a = gAcct(p[0]), cid = p.slice(1).join('|'), cl = G.cals[p[0]], c = (cl && cl.filter ? cl.filter(function (x) { return x.id === cid; })[0] : null) || {};
      if (!a) return; a.settings = a.settings || {}; a.settings.cals = a.settings.cals || {};
      var cur = a.settings.cals[cid] || { p: '' };
      cur.on = !cur.on; cur.name = c.name || cur.name; cur.color = c.color || cur.color; cur.w = c.role === 'owner' || c.role === 'writer';
      a.settings.cals[cid] = cur; render(); gSaveSettings(a);
    },
    macct: function () { choose('Account', myAccts().map(function (a) { return [a.id, esc(a.email) + (G.unread[a.id] > 0 ? ' (' + G.unread[a.id] + ')' : '')]; }), mailState().a, function (id) { mailState().a = id; mailLoad(false); }); },
    mbox: function () { choose('Folder', MBOX, mailState().box, function (b) { mailState().box = b; mailLoad(false); }); },
    mreload: function () { mailLoad(false); gUnread(); },
    mmore: function () { mailLoad(true); },
    mopen: function (id) { mailView(id); },
    mcompose: function () { mailCompose('new'); },
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
      if (a && A[a]) { ev.stopPropagation(); if (a !== 'dial' && S.dial) { S.dial = false; lastHtml = ''; } A[a](t.getAttribute('data-v')); if (a !== 'dial' && !S.dial) render(); return; }
      t = t.parentNode;
    }
  });
  root.addEventListener('keydown', function (ev) {
    if (ev.key === 'Enter' && ev.target.id === 'mq') { mailState().q = ev.target.value.trim(); mailLoad(false); return; }
    if (ev.key !== 'Enter' || !ev.target.id) return;
    if (ev.target.id === 'au-fam') A.mkfam(); else if (ev.target.id.indexOf('au-') === 0) A.authgo();
  });
  root.addEventListener('change', function (ev) {
    var gp = ev.target.getAttribute && ev.target.getAttribute('data-gp');
    if (gp) { var gq = gp.split('|'), ga = gAcct(gq[0]), gc = gq.slice(1).join('|'); if (ga && ga.settings && ga.settings.cals && ga.settings.cals[gc]) { ga.settings.cals[gc].p = ev.target.value; render(); gSaveSettings(ga); } return; }
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
  S.fired = {};
  function notify(msg) { toast(msg); beep(); try { if (window.Notification && Notification.permission === 'granted') new Notification('C2 Calendar', { body: msg }); } catch (e) {} }
  function checkReminders() {
    if (!S.hid && !DEMO) return;
    var n = now(), d = sod(n), mins = n.getHours() * 60 + n.getMinutes();
    function chk(x, label, isTask) {
      if (x.rem === '' || x.rem == null || x.ad || !x.time) return;
      var m = +x.time.split(':')[0] * 60 + +x.time.split(':')[1] - (+x.rem), target = d;
      while (m < 0) { m += 1440; target = addD(target, 1); }
      if (m !== mins || !x.date || !occurs(x, target) || (isTask && isDone(x, target))) return;
      var id = x.id + key(d) + m; if (S.fired[id]) return; S.fired[id] = 1;
      notify(label + ': ' + x.t + ' — ' + fmtTime(x.time));
    }
    S.data.events.forEach(function (e) { chk(e, 'Event', false); });
    S.data.tasks.forEach(function (t) { chk(t, 'Task', true); });
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
      lastMin = m; checkReminders();
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
  setInterval(function () { if (!document.hidden) { gUnread(); gEvents(true); } }, 120000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) { sync(); resolvePhotos(); } });
  window.__c2 = { S: S, render: render, A: A };
})();
