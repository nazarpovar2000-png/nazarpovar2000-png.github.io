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
  var TABS = ['home', 'calendar', 'tasks', 'rewards', 'meals', 'photos', 'lists', 'anniv', 'bills', 'ncam', 'calls', 'more'];
  var TABN = { home: 'Home', calendar: 'Calendar', tasks: 'Tasks', rewards: 'Rewards', meals: 'Meals', photos: 'Photos', lists: 'Lists', anniv: 'Anniv.', bills: 'Bills', ncam: 'NezerCam', calls: 'Calls', more: 'More' };
  var COLLS = ['events', 'tasks', 'rewards', 'meals', 'photos', 'lists', 'anniv', 'notes', 'recipes', 'bills'];
  var S = {
    view: Q.view || 'home', sub: null, more: false,
    cfg: { people: DEF_PEOPLE.slice(), h24: false, dateFmt: 'MM/DD/YYYY', fab: true, weather: true, temp: '57', unit: 'F', hidePhotos: false, theme: 'light', font: 'medium', name: 'C-2', order: TABS.slice(0, 11), sleepFrom: '', sleepTo: '' },
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
    try { var tzz = Intl.DateTimeFormat().resolvedOptions().timeZone; if (tzz && S.cfg.tz !== tzz && h.created_by === (S.auth && S.auth.user ? S.auth.user.id : '')) { S.cfg.tz = tzz; setTimeout(saveCfg, 2000); } } catch (e) {}
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
  function defaultCfg() { return { people: DEF_PEOPLE.slice(), h24: false, dateFmt: 'MM/DD/YYYY', fab: true, weather: true, temp: '57', unit: 'F', hidePhotos: false, theme: 'light', font: 'medium', name: 'C-2', order: TABS.slice(0, 11), sleepFrom: '', sleepTo: '' }; }
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
    S.data.bills = [
      { id: 'b1', t: 'Rent', cat: 'housing', amount: 2150, freq: 'monthly', start: '2026-01-01', added: '2026-10-20', count: 0, autopay: false, remind: '3', paid: { '2026-11-01': { amt: 2150, at: Date.parse('2026-10-30') } }, at: 1 },
      { id: 'b2', t: 'Phone plan', cat: 'phone', amount: 255, freq: 'monthly', start: '2026-09-20', count: 6, autopay: true, remind: '1', paid: { '2026-09-20': { amt: 255, at: 1 }, '2026-10-20': { amt: 255, at: 2 } }, at: 2 },
      { id: 'b3', t: 'PSE Electric', cat: 'utilities', amount: 140, freq: 'monthly', start: '2026-06-09', added: '2026-10-20', count: 0, remind: '3', paid: {}, at: 3 },
      { id: 'b4', t: 'Car insurance', cat: 'insurance', amount: 920, freq: 'yearly', start: '2026-11-28', count: 0, remind: '7', paid: {}, at: 4 },
      { id: 'b5', t: 'Netflix', cat: 'subs', amount: 17.99, freq: 'monthly', start: '2026-03-15', added: '2026-10-01', remind: '', cancel: 'https://www.netflix.com/cancelplan', paid: {}, at: 5 },
      { id: 'b6', t: 'Truck loan', cat: 'loan', scope: 'business', payer: 'nazar', amount: 640, freq: 'monthly', start: '2026-02-05', count: 36, prepaid: 9, remind: '3', paid: { '2026-11-05': { amt: 640, at: Date.parse('2026-11-04'), src: 'gmail' } }, at: 6 }
    ];
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
    if (S.cfg.billsOnCal !== false) billsOn(d).forEach(function (o) { out.push({ id: o.b.id, t: '💵 ' + o.b.t + ' ' + money(bAmt(o.b, o.k)), ad: true, p: '', col: bPaid(o.b, o.k) ? '#22a06b' : '#e5484d', kind: 'bill', src: o.b }); });
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
    if (S.view === 'ncam' && !S.sub) h += '<a class="ico" href="https://nezercam.com/login" target="_blank" rel="noopener" title="Open NezerCam in a new window" style="color:inherit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg></a>';
    if (S.hid || DEMO) h += '<button class="ico micico" data-a="voice" title="Voice: tasks, ideas, diary">' + MIC + '</button>';
    if (myAccts().length) { var un = unreadTotal(); h += '<button class="ico mailico" data-a="sub" data-v="mail">' + TI.mail + (un ? '<b class="bdg">' + (un > 99 ? '99+' : un) + '</b>' : '') + '</button>'; }
    if (onHome) h += '<button class="ico" data-a="settings">' + I.gear + '</button>';
    h += '<span class="ico">' + I.wifi + '</span></div>';
    return h;
  }
  function tabbar() {
    var order = S.cfg.order && S.cfg.order.length ? S.cfg.order.slice() : TABS.slice(0, 11);
    if (order.indexOf('home') < 0) order.unshift('home');
    if (order.indexOf('ncam') < 0 && !S.cfg.hideNcam) order.push('ncam');
    if (order.indexOf('bills') < 0) { var ai = order.indexOf('anniv'); order.splice(ai >= 0 ? ai + 1 : order.length, 0, 'bills'); }
    if (order.indexOf('calls') < 0) order.push('calls');
    order = order.filter(function (t) { return TABS.indexOf(t) >= 0 && t !== 'more' && !(t === 'photos' && S.cfg.hidePhotos) && !(t === 'ncam' && S.cfg.hideNcam) && !(t === 'calls' && !isOwner()); });
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
    return '<div class="ti' + (done ? ' done' : '') + (S.fxId === t.id ? ' pulse' : '') + '" style="background:' + hexA(p.color, done ? .22 : .12) + '">' + (t.color && VCOL[t.color] ? '<span class="tcol" style="background:' + VCOL[t.color] + '"></span>' : '') + '<div class="tx" data-a="edtask" data-v="' + t.id + '"><b>' + (t.emoji ? t.emoji + ' ' : '') + esc(t.t) + '</b><small>' + (pr ? '<span style="color:' + pr + '">⚑ </span>' : '') + (t.ad || !t.time ? 'All day' : fmtTime(t.time)) + (t.rep ? ' · ' + t.rep : '') + '</small></div>' + (t.tm ? '<button class="tmr" data-a="tasktimer" data-v="' + t.tm + '">' + FI.clock + '</button>' : '') + (+t.stars ? '<span class="st">★' + (+t.stars) + '</span>' : '') + '<button class="ck" style="color:' + p.color + (done ? ';background:' + p.color : '') + '" data-a="tgtask" data-v="' + t.id + '|' + key(d) + '">' + (done ? '<span style="color:#fff;display:flex">' + I.check + '</span>' : '') + '</button></div>';
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
      h += '<div class="row"><span>Show bills in Calendar</span>' + tg(c.billsOnCal !== false, 'cfgtg2', 'billsOnCal') + '</div>';
      h += '<div class="row"><span>Hide NezerCam Tab</span>' + tg(c.hideNcam, 'cfgtg', 'hideNcam') + '</div>';
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
  TI.ncam = '<svg viewBox="0 0 32 32"><rect x="3" y="9" width="26" height="19" rx="4" fill="#1f3a6e"/><path d="M11 9l2-3.5h6L21 9" fill="#1f3a6e"/><circle cx="16" cy="18.5" r="6.2" fill="#7cc4f2"/><path d="M12.6 19.3L16 16l3.4 3.3v2.8h-6.8z" fill="#1f3a6e"/></svg>';
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
  function isOwner() { if (DEMO) return true; var me = myId(); return S.members.some(function (m) { return m.user_id === me && m.role === 'owner'; }); }
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

  /* ---------- NEZERCAM (embedded web app, kept alive between tabs) ---------- */
  var NCAM_URL = 'https://nezercam.com/login';
  var ncamEl = null;
  function renderNcam() {
    return hdr(false) + '<div class="body ncamslot"><div class="ncamload">Loading NezerCam…<br><a href="' + NCAM_URL + '" target="_blank" rel="noopener">Open in a new tab ↗</a></div></div>';
  }
  function placeNcam() {
    var slot = root.querySelector('.ncamslot'), on = !!slot;
    if (!on) { if (ncamEl) ncamEl.style.display = 'none'; return; }
    if (!ncamEl) {
      ncamEl = document.createElement('iframe');
      ncamEl.id = 'ncam'; ncamEl.src = NCAM_URL; ncamEl.setAttribute('allow', 'camera; microphone; geolocation; clipboard-write; fullscreen');
      ncamEl.onload = function () { ncamEl.classList.add('ready'); };
      document.body.appendChild(ncamEl);
    }
    var r = slot.getBoundingClientRect();
    ncamEl.style.cssText = 'display:block;position:fixed;left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px';
  }
  window.addEventListener('resize', function () { setTimeout(placeNcam, 50); });

  /* ---------- CALLS (Vapi AI agent, optional Twilio) ---------- */
  var CL = { items: null, busy: false, err: null, at: 0, cfg: null, open: null, audio: null, q: '' };
  TI.calls = '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="13" fill="#16a394"/><path d="M11.5 9.5c.6-.6 1.6-.5 2 .2l1.4 2.4c.3.6.2 1.3-.3 1.7l-1 .9c.9 1.9 2.2 3.3 4.1 4.2l.9-1c.4-.5 1.2-.6 1.7-.3l2.4 1.4c.7.4.8 1.4.2 2l-1.1 1.1c-.9.9-2.3 1.2-3.5.7-3.8-1.6-6.6-4.4-8.2-8.2-.5-1.2-.2-2.6.7-3.5z" fill="#fff"/></svg>';
  function clCall(action, b) { b = b || {}; b.action = action; b.household_id = S.hid; return sbFetch('/functions/v1/calls', { method: 'POST', json: b }); }
  function clLoad(force) {
    if (DEMO || !S.hid || CL.busy) return;
    if (!force && CL.items && Date.now() - CL.at < 60000) return;
    CL.busy = true; CL.err = null; render();
    clCall('list', { limit: 100 }).then(function (r) {
      CL.items = r.items || []; CL.at = Date.now(); CL.cfg = { vapi: r.vapi, twilio: r.twilio };
      if (r.errors && r.errors.length) CL.err = r.errors.join(' · ');
    }).catch(function (e) { CL.err = e.message === 'not_configured' ? 'nc' : e.message; if (!CL.items) CL.items = []; }).then(function () { CL.busy = false; S.fx = S.fx || 'n'; render(); });
  }
  function fmtPhone(n) { var d = String(n || '').replace(/\D/g, ''); if (d.length === 11 && d[0] === '1') d = d.slice(1); return d.length === 10 ? '(' + d.slice(0, 3) + ') ' + d.slice(3, 6) + '-' + d.slice(6) : (n || 'Unknown'); }
  function fmtDur(s) { s = +s || 0; return Math.floor(s / 60) + ':' + pad(s % 60); }
  function clWho(c) { var n = c.dir === 'in' ? c.fromRaw || c.from : c.toRaw || c.to; return { name: c.name || fmtPhone(n), num: fmtPhone(n), raw: n }; }
  function clDay(d) { var t = sod(now()); if (same(d, t)) return 'Today'; if (same(d, addD(t, -1))) return 'Yesterday'; return WDL[d.getDay()] + ', ' + MON[d.getMonth()] + ' ' + d.getDate(); }
  function missed(c) { return c.dir === 'in' && (c.status === 'no-answer' || c.status === 'busy' || c.status === 'canceled' || c.status === 'failed' || (!c.ai && !c.dur)); }
  function renderCalls() {
    var h = hdr(false);
    h += '<div class="tb"><input class="msearch" id="clq" type="search" placeholder="Search number, name or words" value="' + esc(CL.q) + '" style="max-width:none"><button class="pill" data-a="clreload" style="margin:0 0 0 .3rem">' + I.sync.replace('<svg', '<svg style="width:1rem;height:1rem;margin:0"') + '</button></div><div class="body"><div class="scroll mlist">';
    if (CL.items === null) { setTimeout(function () { clLoad(false); }, 0); h += '<div class="mload">Loading calls…</div>'; }
    else if (CL.err === 'nc') h += '<div style="height:75%;display:flex">' + empty('Calls are not connected yet.<br>Add your Vapi private key on the server<br>(Supabase secret <b>VAPI_API_KEY</b>).', 2).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    else {
      if (CL.err) h += '<div class="amsg" style="margin:.4rem 0 .6rem">' + esc(CL.err) + '</div>';
      var q = CL.q.toLowerCase(), qd = CL.q.replace(/\D/g, ''), last = '', n = 0;
      CL.items.forEach(function (c, i) {
        var w = clWho(c);
        if (q && !((w.name + ' ' + (c.summary || '') + ' ' + (c.transcript || '')).toLowerCase().indexOf(q) >= 0 || (qd.length > 2 && String(w.raw).replace(/\D/g, '').indexOf(qd) >= 0))) return;
        var d = c.start ? new Date(c.start) : null, day = d ? clDay(sod(d)) : '';
        if (day !== last) { h += '<div class="clday">' + day + '</div>'; last = day; }
        var mis = missed(c);
        h += '<div class="mrow clrow' + (mis ? ' miss' : '') + '" data-a="clopen" data-v="' + i + '" style="animation-delay:' + Math.min(n++, 12) * 20 + 'ms"><span class="cldir ' + (mis ? 'mis' : c.dir) + '">' + (mis ? '✕' : c.dir === 'in' ? '↙' : '↗') + '</span><div class="mt"><div class="m1"><b>' + esc(w.name) + '</b><em>' + (d ? fmtTime(pad(d.getHours()) + ':' + pad(d.getMinutes())) : '') + '</em></div><div class="m3">' + (c.ai ? '<span class="aitag">AI</span>' : '') + (c.name ? esc(w.num) + ' · ' : '') + (c.dur ? fmtDur(c.dur) : esc(c.status || '')) + ((c.recUrl || (c.rec && c.rec.length)) ? ' · ▶ recording' : '') + '</div>' + (c.summary ? '<div class="m3 clsum">' + esc(c.summary) + '</div>' : '') + '</div></div>';
      });
      if (!n) h += '<div style="height:60%;display:flex">' + empty(q ? 'Nothing found' : 'No calls yet', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    }
    return h + '<div style="height:3rem"></div></div></div>';
  }
  function clOpen(i) {
    var c = CL.items[+i]; if (!c) return;
    var w = clWho(c), d = c.start ? new Date(c.start) : null;
    var audio = c.vid && c.recUrl ? '<button class="abtn clplay" data-m="va:' + c.vid + '" style="max-width:16rem">▶ Play recording</button><div class="claud"></div>' : (c.rec && c.rec.length ? '<button class="abtn clplay" data-m="tw:' + c.rec[0].sid + '" style="max-width:16rem">▶ Play recording</button><div class="claud"></div>' : '<div class="muted" style="font-size:.9rem">No recording</div>');
    var tr = '';
    if (c.msgs && c.msgs.length) tr = c.msgs.map(function (m) { return '<div class="bub ' + m.who + '"><small>' + (m.who === 'ai' ? 'AI assistant' : 'Caller') + '</small>' + esc(m.text) + '</div>'; }).join('');
    else if (c.transcript) tr = '<div class="mtext">' + esc(c.transcript) + '</div>';
    else tr = '<div class="muted">No transcript</div>';
    openModal(dhead(esc(w.name)) + '<div class="db"><div class="clhead"><div><b>' + esc(w.num) + '</b><small>' + (c.dir === 'in' ? 'Incoming' : 'Outgoing') + (c.ai ? ' · answered by AI' : '') + (d ? ' · ' + esc(d.toLocaleString()) : '') + (c.dur ? ' · ' + fmtDur(c.dur) : '') + '</small></div><a class="pill" href="tel:' + esc(w.raw) + '" style="margin:0;text-decoration:none;color:#3a6cf0">Call back</a></div>'
      + '<div class="clsec">' + audio + '</div>'
      + (c.summary ? '<h5 class="clh">Summary</h5><div class="clsec">' + esc(c.summary) + '</div>' : '')
      + '<h5 class="clh">Transcript</h5><div class="clsec cltr">' + tr + '</div></div>', function (act) {
      if (act.indexOf('tw:') === 0 || act.indexOf('va:') === 0) {
        var isV = act.indexOf('va:') === 0;
        var btn = M.querySelector('.clplay'); if (btn) { btn.disabled = true; btn.textContent = 'Loading…'; }
        ensureFresh(false).then(function () {
          return fetch(SB_URL + '/functions/v1/calls', { method: 'POST', headers: { apikey: SB_KEY, Authorization: 'Bearer ' + S.auth.access_token, 'Content-Type': 'application/json' }, body: JSON.stringify(isV ? { action: 'vaudio', household_id: S.hid, id: act.slice(3) } : { action: 'audio', household_id: S.hid, sid: act.slice(3) }) });
        }).then(function (r) { if (!r.ok) throw new Error('Recording ' + r.status); return r.blob(); }).then(function (b) {
          if (CL.audio) URL.revokeObjectURL(CL.audio); CL.audio = URL.createObjectURL(b);
          var box = M.querySelector('.claud'); if (box) box.innerHTML = '<audio controls autoplay src="' + CL.audio + '"></audio>'; if (btn) btn.style.display = 'none';
        }).catch(function (e) { toast(e.message); if (btn) { btn.disabled = false; btn.textContent = '▶ Play recording'; } });
      }
      return false;
    }, { drawer: true, wide: true, nofocus: true });
  }

  /* ---------- MAIL CLEANUP ---------- */
  var CB = [['spam', 'Spam', 'Permanently deleted'], ['trash', 'Trash', 'Permanently deleted (empties Trash)'], ['promotions', 'Promotions', 'Ads and deals'], ['social', 'Social', 'Facebook, Instagram, LinkedIn…'], ['updates', 'Updates', 'Receipts, notices, statements'], ['forums', 'Forums', 'Mailing lists and groups'], ['large', 'Large old emails', 'Over 10 MB and older than 1 year']];
  function cleanDialog() {
    var M_ = mailState(), a = gAcct(M_.a); if (!a) return;
    var st = { days: 30, scan: null, sel: { spam: true, promotions: true, social: true }, busy: false, res: null };
    var au = (a.settings && a.settings.auto) || { on: false, days: 30, spam: true, promotions: true, social: true, updates: false, forums: true };
    function draw() {
      var c = st.scan && st.scan.counts, full = st.scan ? st.scan.full : !!(a.settings && a.settings.full);
      var h = dhead('Clean up mail') + '<div class="db"><p class="muted" style="margin:0 .2rem .8rem;line-height:1.45">' + esc(a.email) + (st.scan ? ' · ' + st.scan.total.toLocaleString() + ' messages total' : '') + '</p>';
      h += '<div class="f"><i>' + FI.clock + '</i><span>Older than</span><select name="cdays">' + [[7, '7 days'], [30, '30 days'], [90, '3 months'], [365, '1 year'], [0, 'Any age']].map(function (o) { return '<option value="' + o[0] + '"' + (o[0] === st.days ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>';
      h += '<div class="cbl">' + CB.map(function (b) {
        var n = c ? c[b[0]] : null, perm = b[0] === 'spam' || b[0] === 'trash', dis = perm && !full;
        return '<label class="cbi' + (dis ? ' dis' : '') + '"><input type="checkbox" data-cb="' + b[0] + '"' + (st.sel[b[0]] && !dis ? ' checked' : '') + (dis ? ' disabled' : '') + '><span class="cbx"></span><span class="cbt"><b>' + b[1] + '</b><small>' + (dis ? 'Reconnect Google (Settings → Google) to allow this' : b[2]) + '</small></span><em>' + (n === null ? (st.busy ? '…' : '') : (n >= 100000 ? '100k+' : (perm ? '' : '~') + n.toLocaleString())) + '</em></label>';
      }).join('') + '</div>';
      h += '<p class="muted" style="font-size:.8rem;line-height:1.45;margin:.4rem .2rem 1rem">Starred and Important emails are never touched. Promotions, Social, Updates, Forums and Large go to Trash — Gmail deletes them for good after 30 days (you can still restore them until then). Spam and Trash are deleted immediately and free space right away.</p>';
      if (st.res) h += '<div class="amsg" style="text-align:left;margin-bottom:.8rem">' + st.res + '</div>';
      h += '<button class="abtn" data-m="run"' + (st.busy ? ' disabled' : '') + '>' + (st.busy ? 'Working…' : 'Clean now') + '</button>';
      h += '<h5 class="clh" style="margin-top:1.4rem">Automatic cleanup (every night)</h5><div class="clsec"><div class="row" style="border:0"><span>Clean this account automatically</span><button type="button" class="tg' + (au.on ? ' on' : '') + '" data-m="auto:on"></button></div>'
        + (au.on ? ['spam', 'promotions', 'social', 'updates', 'forums'].map(function (k) { var b = CB.filter(function (x) { return x[0] === k; })[0]; return '<div class="row" style="min-height:2.4rem"><span>' + b[1] + (k === 'spam' && !full ? ' <small class="muted">(reconnect needed)</small>' : '') + '</span><button type="button" class="tg' + (au[k] ? ' on' : '') + '" data-m="auto:' + k + '"></button></div>'; }).join('') + '<div class="row" style="min-height:2.4rem;border:0"><span>Keep the last</span><select data-m-sel="adays">' + [[7, '7 days'], [30, '30 days'], [90, '3 months']].map(function (o) { return '<option value="' + o[0] + '"' + (o[0] === (+au.days || 30) ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>' + (a.settings && a.settings.autoLast ? '<small class="muted">Last run: ' + esc(new Date(a.settings.autoLast.at).toLocaleString()) + '</small>' : '') : '<small class="muted">Runs every night at about 3 AM. Only the main Inbox (Primary) will stay.</small>') + '</div>';
      h += '<p class="muted" style="font-size:.8rem;line-height:1.45;margin:.8rem .2rem">Tip: the Mail tab shows only <b>Important</b> (Primary) emails by default — ads, social and spam stay out of C2 Calendar.</p></div>';
      openModal(h, function (act) {
        if (act === 'run') { runClean(); return false; }
        if (act.indexOf('auto:') === 0) {
          var k = act.slice(5); au[k] = !au[k]; if (k === 'on' && au.on && au.days == null) au.days = 30;
          a.settings = a.settings || {}; a.settings.auto = au;
          gcall('auto_set', { account_id: a.id, auto: au }).then(function () { toast(au.on ? 'Automatic cleanup saved' : 'Automatic cleanup off'); }).catch(function (e) { toast(gErr(e)); });
          draw(); return false;
        }
        return false;
      }, { drawer: true, nofocus: true });
    }
    function scan() {
      st.busy = true; st.scan = null; draw();
      gcall('clean_scan', { account_id: a.id, days: st.days || 1 }).then(function (r) { st.scan = r; if (a.settings) a.settings.full = r.full; }).catch(function (e) { st.res = esc(gErr(e)); }).then(function () { st.busy = false; if (S.modalOpen) draw(); });
    }
    function runClean() {
      var list = []; CB.forEach(function (b) { var x = M.querySelector('[data-cb="' + b[0] + '"]'); if (x && x.checked) list.push(b[0]); });
      if (!list.length) { toast('Choose what to clean'); return; }
      var perm = list.filter(function (k) { return k === 'spam' || k === 'trash'; });
      var msg = 'Clean ' + list.map(function (k) { return CB.filter(function (b) { return b[0] === k; })[0][1]; }).join(', ') + ' in ' + a.email + '?' + (perm.length ? '\n\n' + perm.join(' and ') + ' will be deleted permanently — this cannot be undone.' : '\n\nThey go to Trash and can be restored for 30 days.');
      if (!confirmBox(msg)) return;
      st.busy = true; st.res = null; draw();
      gcall('clean_run', { account_id: a.id, buckets: list, days: st.days || 1 }).then(function (r) {
        var parts = [], more = false;
        Object.keys(r.res || {}).forEach(function (k) { var x = r.res[k]; if (x.more) more = true; parts.push(CB.filter(function (b) { return b[0] === k; })[0][1] + ': ' + (x.mode === 'needs_full' ? 'reconnect needed' : x.n.toLocaleString() + (x.mode === 'deleted' ? ' deleted' : ' moved to Trash'))); });
        st.res = '✓ ' + parts.join(' · ') + (more ? '<br>There is more — tap “Clean now” again.' : '');
        gUnread(); if (mailState().items) mailLoad(false);
      }).catch(function (e) { st.res = esc(gErr(e)); }).then(function () { st.busy = false; scan(); });
    }
    M._cleanHook = function (el) {
      if (el.name === 'cdays') { st.days = +el.value; scan(); return true; }
      if (el.getAttribute('data-m-sel') === 'adays') { au.days = +el.value; gcall('auto_set', { account_id: a.id, auto: au }).catch(function (e) { toast(gErr(e)); }); return true; }
      if (el.getAttribute('data-cb')) { st.sel[el.getAttribute('data-cb')] = el.checked; return true; }
      return false;
    };
    scan();
  }

  /* ---------- BILLS ---------- */
  TI.bills = '<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="3" fill="#22a06b"/><path d="M6 25l3.3 2.5L12.7 25l3.3 2.5 3.3-2.5 3.4 2.5L26 25v4H6z" fill="#1a8a5b"/><path d="M16 8v14M19.2 10.6c-.6-.9-1.8-1.4-3.2-1.4-1.9 0-3.1 1-3.1 2.4 0 3.3 6.4 1.7 6.4 5 0 1.5-1.4 2.5-3.3 2.5-1.5 0-2.8-.6-3.4-1.6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>';
  var BCAT = [['housing', 'Housing', '🏠'], ['utilities', 'Utilities', '💡'], ['phone', 'Phone & Internet', '📶'], ['car', 'Car', '🚗'], ['insurance', 'Insurance', '🛡️'], ['loan', 'Loan / Installment', '🏦'], ['card', 'Credit card', '💳'], ['subs', 'Subscription', '📺'], ['business', 'Business', '🧰'], ['taxes', 'Taxes', '🧾'], ['other', 'Other', '📄']];
  var BFREQ = [['monthly', 'Every month'], ['biweekly', 'Every 2 weeks'], ['weekly', 'Every week'], ['quarterly', 'Every 3 months'], ['yearly', 'Every year'], ['once', 'One time']];
  function bcat(id) { for (var i = 0; i < BCAT.length; i++) if (BCAT[i][0] === id) return BCAT[i]; return BCAT[BCAT.length - 1]; }
  function money(n) { n = +n || 0; return '$' + n.toFixed(n % 1 ? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function bStep(b, i) {
    var s = parseKey(b.start), d;
    if (b.freq === 'weekly') return addD(s, 7 * i);
    if (b.freq === 'biweekly') return addD(s, 14 * i);
    var m = b.freq === 'quarterly' ? 3 : b.freq === 'yearly' ? 12 : 1;
    d = new Date(s.getFullYear(), s.getMonth() + m * i, 1);
    var last = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    return new Date(d.getFullYear(), d.getMonth(), Math.min(s.getDate(), last));
  }
  function bTotalN(b) { return b.freq === 'once' ? 1 : (+b.count || 0); }
  function bOcc(b, from, to) {
    var out = [], n = bTotalN(b), i = 0, d;
    if (!b.start) return out;
    while (i < 2000) {
      if (n && i >= n) break;
      d = bStep(b, i);
      if (d > to) break;
      if (d >= from) out.push({ b: b, i: i, d: d, k: key(d) });
      i++;
      if (b.freq === 'once') break;
    }
    return out;
  }
  function bPaid(b, k) {
    if (b.paid && b.paid[k]) return b.paid[k];
    if (+b.prepaid > 0 && k <= key(bStep(b, +b.prepaid - 1))) return { amt: +b.amount, pre: true };
    if (b.added && k < b.added && !(+b.count > 0)) return { amt: +b.amount, pre: true };
    return null;
  }
  function bAmt(b, k) { var p = bPaid(b, k); return p && p.amt != null ? +p.amt : +b.amount || 0; }
  function bStats(b) {
    var n = bTotalN(b); if (!n) return null;
    var paidN = 0; for (var i = 0; i < n && i < 600; i++) if (bPaid(b, key(bStep(b, i)))) paidN++;
    var left = Math.max(0, n - paidN);
    return { n: n, paid: paidN, left: left, leftAmt: left * (+b.amount || 0), end: bStep(b, n - 1) };
  }
  function bNext(b) { var t = sod(now()), o = bOcc(b, addD(t, -400), addD(t, 800)); for (var i = 0; i < o.length; i++) if (!bPaid(b, o[i].k)) return o[i]; return null; }
  function bStatus(o) { var t = sod(now()), dd = Math.round((o.d - t) / 864e5); if (bPaid(o.b, o.k)) return 'paid'; if (dd < 0) return 'late'; if (dd <= 3) return 'soon'; return 'up'; }
  function billsOn(d) { var out = []; S.data.bills.forEach(function (b) { bOcc(b, d, d).forEach(function (o) { out.push(o); }); }); return out; }
  function bScopeOk(b) { var sc = S.billScope || 'all'; return sc === 'all' || (b.scope || 'personal') === sc; }
  function bShares(b, amt) {
    var out = {}, ppl = S.cfg.people;
    if (!b.payer || b.payer === 'split') { ppl.forEach(function (p) { out[p.id] = amt / ppl.length; }); }
    else out[b.payer] = amt;
    return out;
  }
  function billTopbar(title) {
    var modes = { month: 'This month', all: 'All bills', subs: 'Subscriptions', chart: 'Spending' }, sc = { all: 'Everything', personal: 'Personal', business: 'Business' };
    var h = '<div class="tb">' + (S.billView === 'month' || !S.billView ? navPill(title, 'bnav') : '') + '<button class="pill" data-a="bview">' + modes[S.billView || 'month'] + I.dn + '</button><span class="sp"></span><button class="pill" data-a="bscope">' + sc[S.billScope || 'all'] + I.dn + '</button>';
    h += '<button class="pill" data-a="bmore" style="margin-right:0">' + I.dots.replace('<svg', '<svg style="width:1rem;height:1rem;margin:0"') + '</button></div>';
    return h;
  }
  function renderSubs() {
    var xs = S.data.bills.filter(function (b) { return b.cat === 'subs' && bScopeOk(b); }), mo = 0;
    xs.forEach(function (b) { var a = +b.amount || 0; mo += b.freq === 'yearly' ? a / 12 : b.freq === 'quarterly' ? a / 3 : b.freq === 'weekly' ? a * 52 / 12 : b.freq === 'biweekly' ? a * 26 / 12 : b.freq === 'once' ? 0 : a; });
    var h = '<div class="bsum"><div><small>Per month</small><b>' + money(Math.round(mo * 100) / 100) + '</b></div><div><small>Per year</small><b>' + money(Math.round(mo * 12)) + '</b></div><div><small>Subscriptions</small><b>' + xs.length + '</b></div></div>';
    xs.sort(function (a, b) { return (+b.amount || 0) - (+a.amount || 0); }).forEach(function (b, i) {
      var t0 = sod(now()), nx = bOcc(b, t0, addD(t0, 400))[0], fq = BFREQ.filter(function (f) { return f[0] === b.freq; })[0];
      h += '<div class="brow" style="animation-delay:' + Math.min(i, 12) * 25 + 'ms"><span class="bic">📺</span><div class="bt" data-a="edbill" data-v="' + b.id + '"><b>' + esc(b.t) + '</b><small>' + (fq ? fq[1] : '') + (nx ? ' · renews ' + MON[nx.d.getMonth()] + ' ' + nx.d.getDate() : '') + '</small></div><b class="bamt">' + money(b.amount) + '</b>' + (b.cancel ? '<a class="bpay" style="color:#e5484d" href="' + esc(b.cancel) + '" target="_blank" rel="noopener">Cancel</a>' : '') + '</div>';
    });
    if (!xs.length) h += '<div style="height:55%;display:flex">' + empty('No subscriptions yet<br>Add a bill with category “Subscription”', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    return h + '<div style="height:6rem"></div>';
  }
  var CATC = { housing: '#3a6cf0', utilities: '#f5a524', phone: '#16a394', car: '#8b5cf6', insurance: '#0ea5e9', loan: '#e5484d', card: '#e04f9e', subs: '#f08a24', business: '#64748b', taxes: '#a16207', other: '#94a3b8' };
  function renderSpending() {
    var t = sod(now()), months = [], max = 1, byCat = {}, year = 0;
    for (var i = -8; i <= 3; i++) {
      var m0 = new Date(t.getFullYear(), t.getMonth() + i, 1), m1 = new Date(m0.getFullYear(), m0.getMonth() + 1, 0), cats = {}, tot = 0, fut = m0 > t;
      S.data.bills.forEach(function (b) { if (!bScopeOk(b)) return; bOcc(b, m0, m1).forEach(function (o) { var p = bPaid(b, o.k); if (!fut && !p) return; var v = bAmt(b, o.k); cats[b.cat] = (cats[b.cat] || 0) + v; tot += v; if (!fut && i > -12) { byCat[b.cat] = (byCat[b.cat] || 0) + v; year += v; } }); });
      if (tot > max) max = tot; months.push({ d: m0, cats: cats, tot: tot, fut: fut });
    }
    var h = '<div class="bsum"><div><small>Paid (last 9 months)</small><b>' + money(Math.round(year)) + '</b></div><div><small>Avg per month</small><b>' + money(Math.round(year / 9)) + '</b></div></div>';
    h += '<div class="chart">' + months.map(function (m) {
      var segs = Object.keys(m.cats).map(function (c) { return '<i style="height:' + (m.cats[c] / max * 100) + '%;background:' + CATC[c] + '" title="' + bcat(c)[1] + ' ' + money(m.cats[c]) + '"></i>'; }).join('');
      return '<div class="col' + (m.fut ? ' fut' : '') + (same(m.d, new Date(t.getFullYear(), t.getMonth(), 1)) ? ' cur' : '') + '"><em>' + (m.tot ? '$' + (m.tot >= 1000 ? (m.tot / 1000).toFixed(1) + 'k' : Math.round(m.tot)) : '') + '</em><div class="bars">' + segs + '</div><span>' + MON[m.d.getMonth()] + '</span></div>';
    }).join('') + '</div><p class="muted" style="font-size:.78rem;margin:.3rem .2rem 1rem">Past months: what you marked paid. Faded bars: what is scheduled.</p>';
    var cats = Object.keys(byCat).sort(function (a, b) { return byCat[b] - byCat[a]; });
    h += cats.map(function (c) { return '<div class="catrow"><i style="background:' + CATC[c] + '"></i><span>' + bcat(c)[2] + ' ' + bcat(c)[1] + '</span><span class="bar"><b style="width:' + (byCat[c] / byCat[cats[0]] * 100) + '%;background:' + CATC[c] + '"></b></span><em>' + money(Math.round(byCat[c])) + '</em></div>'; }).join('');
    return h + '<div style="height:6rem"></div>';
  }
  function exportBills() {
    function q(v) { v = v == null ? '' : String(v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
    var rows = [['Bill', 'Category', 'Personal/Business', 'Who pays', 'Amount', 'Repeats', 'Payments', 'First due', 'Autopay', 'Due date', 'Status', 'Paid amount', 'Paid on', 'Source']];
    var t = sod(now());
    S.data.bills.forEach(function (b) {
      var fq = BFREQ.filter(function (f) { return f[0] === b.freq; })[0], who = !b.payer || b.payer === 'split' ? 'Split' : P(b.payer).name;
      var base = [b.t, bcat(b.cat)[1], b.scope || 'personal', who, b.amount, fq ? fq[1] : b.freq, bTotalN(b) || 'no end', b.start, b.autopay ? 'yes' : 'no'];
      bOcc(b, addD(t, -730), addD(t, 365)).forEach(function (o) {
        var p = bPaid(b, o.k); if (!p && o.d > addD(t, 62)) return;
        rows.push(base.concat([o.k, p ? 'paid' : o.d < t ? 'overdue' : 'due', p ? (p.amt != null ? p.amt : b.amount) : '', p && p.at ? new Date(p.at).toISOString().slice(0, 10) : '', p && p.src ? p.src : '']));
      });
    });
    var csv = '﻿' + rows.map(function (r) { return r.map(q).join(','); }).join('\r\n');
    if (window.Android && Android.saveFile) { var pth = Android.saveFile('bills-' + key(t) + '.csv', csv); toast(pth ? 'Saved to ' + pth : 'Could not save file'); return; }
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8' }), url = URL.createObjectURL(blob), aEl = document.createElement('a');
    aEl.href = url; aEl.download = 'bills-' + key(t) + '.csv'; document.body.appendChild(aEl); aEl.click(); setTimeout(function () { URL.revokeObjectURL(url); aEl.remove(); }, 1000);
    toast('Downloaded bills-' + key(t) + '.csv');
  }
  function renderBills() {
    var a = S.billAnchor || new Date(sod(now()).getFullYear(), sod(now()).getMonth(), 1);
    var from = new Date(a.getFullYear(), a.getMonth(), 1), to = new Date(a.getFullYear(), a.getMonth() + 1, 0), t = sod(now());
    var occ = [], late = [];
    S.data.bills.forEach(function (b) {
      if (!bScopeOk(b)) return;
      bOcc(b, from, to).forEach(function (o) { occ.push(o); });
      if (same(from, new Date(t.getFullYear(), t.getMonth(), 1))) bOcc(b, addD(from, -400), addD(from, -1)).forEach(function (o) { if (!bPaid(b, o.k)) late.push(o); });
    });
    occ = late.concat(occ);
    occ.sort(function (x, y) { return x.d - y.d; });
    var due = 0, paid = 0, lateSum = 0, per = {};
    occ.forEach(function (o) { var v = bAmt(o.b, o.k); due += v; if (bPaid(o.b, o.k)) paid += v; else if (o.d < t) lateSum += v; var sh = bShares(o.b, v); Object.keys(sh).forEach(function (pid) { per[pid] = (per[pid] || 0) + sh[pid]; }); });
    var h = hdr(false) + billTopbar(MONL[a.getMonth()] + ' ' + a.getFullYear()) + '<div class="body"><div class="scroll" style="padding:0 1.2rem">';
    var mode = S.billView || 'month';
    if (myAccts().length) setTimeout(function () { gmCheck(false); }, 0);
    if (mode === 'all') return h + renderBillsAll() + '</div>' + fab('addbill') + '</div>';
    if (mode === 'subs') return h + renderSubs() + '</div>' + fab('addbill') + '</div>';
    if (mode === 'chart') return h + renderSpending() + '</div>' + fab('addbill') + '</div>';
    h += '<div class="bsum"><div><small>Due this month</small><b>' + money(due) + '</b></div><div><small>Paid</small><b class="g">' + money(paid) + '</b></div><div><small>Left</small><b' + (lateSum ? ' class="r"' : '') + '>' + money(due - paid) + '</b>' + (lateSum ? '<em>' + money(lateSum) + ' overdue</em>' : '') + '</div></div>';
    h += '<div class="bbar"><i style="width:' + (due ? Math.min(100, paid / due * 100) : 0) + '%"></i></div>';
    if (S.cfg.people.length > 1 && due) h += '<div class="bper">' + S.cfg.people.map(function (p) { return '<span><i class="av" style="background:' + p.color + '">' + esc(p.initial) + '</i>' + esc(p.name) + ' <b>' + money(Math.round((per[p.id] || 0) * 100) / 100) + '</b></span>'; }).join('') + '</div>';
    if (S.gmMatch) h += '<div class="amsg" style="margin:0 0 .6rem">' + S.gmMatch + '</div>';
    if (!occ.length) h += '<div style="height:55%;display:flex">' + empty(S.data.bills.length ? 'No bills due this month' : 'No bills yet<br>Tap + to add rent, phone, a loan…', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    occ.forEach(function (o, i) {
      var b = o.b, st = bStatus(o), c = bcat(b.cat), s = bStats(b), dd = Math.round((o.d - t) / 864e5);
      var when = st === 'paid' ? 'Paid' + (bPaid(b, o.k).at ? ' ' + MON[new Date(bPaid(b, o.k).at).getMonth()] + ' ' + new Date(bPaid(b, o.k).at).getDate() : '') : dd === 0 ? 'Due today' : dd === 1 ? 'Due tomorrow' : dd < 0 ? (-dd) + ' day' + (dd === -1 ? '' : 's') + ' late' : 'Due ' + MON[o.d.getMonth()] + ' ' + o.d.getDate();
      var pd = bPaid(b, o.k), who = !b.payer || b.payer === 'split' ? null : P(b.payer);
      h += '<div class="brow ' + st + (S.fxId === b.id + o.k ? ' pulse' : '') + '" style="animation-delay:' + Math.min(i, 12) * 25 + 'ms"><span class="bic">' + c[2] + '</span><div class="bt" data-a="edbill" data-v="' + b.id + '"><b>' + esc(b.t) + (b.autopay ? '<span class="ap">AUTO</span>' : '') + '</b><small>' + when + (s ? ' · ' + (o.i + 1) + ' of ' + s.n : '') + (pd && pd.src === 'gmail' ? ' · ✉ found in Gmail' : '') + (who ? ' · ' + esc(who.name) : '') + (b.scope === 'business' ? ' · 🧰' : '') + '</small>' + (s ? '<span class="bprog"><i style="width:' + (s.paid / s.n * 100) + '%"></i></span>' : '') + '</div><b class="bamt">' + money(bAmt(b, o.k)) + '</b>' + (b.url ? '<a class="bpay" href="' + esc(b.url) + '" target="_blank" rel="noopener">Pay</a>' : '') + '<button class="bck" data-a="bpay" data-v="' + b.id + '|' + o.k + '">' + (st === 'paid' ? I.check : '') + '</button></div>';
    });
    return h + '<div style="height:6rem"></div></div>' + fab('addbill') + '</div>';
  }
  function renderBillsAll() {
    var h = '', tot = 0, debt = 0;
    var xs = S.data.bills.filter(bScopeOk).sort(function (x, y) { var a = bNext(x), b = bNext(y); return (a ? a.d : 9e15) - (b ? b.d : 9e15); });
    xs.forEach(function (b) { if (b.freq === 'monthly' && !b.count) tot += +b.amount || 0; var s = bStats(b); if (s) debt += s.leftAmt; });
    h += '<div class="bsum"><div><small>Monthly recurring</small><b>' + money(tot) + '</b></div><div><small>Left on installments</small><b>' + money(debt) + '</b></div><div><small>Bills</small><b>' + xs.length + '</b></div></div>';
    xs.forEach(function (b, i) {
      var c = bcat(b.cat), nx = bNext(b), s = bStats(b), fq = BFREQ.filter(function (f) { return f[0] === b.freq; })[0];
      h += '<div class="brow" data-a="edbill" data-v="' + b.id + '" style="animation-delay:' + Math.min(i, 12) * 25 + 'ms"><span class="bic">' + c[2] + '</span><div class="bt"><b>' + esc(b.t) + (b.autopay ? '<span class="ap">AUTO</span>' : '') + '</b><small>' + (fq ? fq[1] : '') + (s ? ' · ' + s.paid + '/' + s.n + ' paid · ' + money(s.leftAmt) + ' left · ends ' + MON[s.end.getMonth()] + ' ' + s.end.getFullYear() : '') + (nx ? ' · next ' + MON[nx.d.getMonth()] + ' ' + nx.d.getDate() : (s ? ' · done ✓' : '')) + '</small>' + (s ? '<span class="bprog"><i style="width:' + (s.paid / s.n * 100) + '%"></i></span>' : '') + '</div><b class="bamt">' + money(b.amount) + '</b></div>';
    });
    if (!xs.length) h += '<div style="height:55%;display:flex">' + empty('No bills yet', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    return h + '<div style="height:6rem"></div>';
  }
  function billDialog(b) {
    var isNew = !b;
    b = b || { t: '', cat: 'utilities', amount: '', freq: 'monthly', start: key(sod(now())), count: 0, autopay: false, remind: 3, url: '', note: '', paid: {} };
    var limited = +b.count > 0;
    openModal(dhead(isNew ? 'Add Bill' : 'Edit Bill') + '<div class="db">' + fTitle(b.t, 'Name (e.g. Rent, PSE, Car loan)')
      + '<div class="f"><i>' + FI.star + '</i><span>Amount</span><span style="flex:none;color:#1d2433;margin-right:.2rem">$</span><input type="number" name="amount" step="0.01" min="0" value="' + esc(b.amount) + '" class="mini" style="width:7rem" placeholder="0.00"></div>'
      + fSel(FI.list, 'Category', 'cat', BCAT.map(function (c) { return [c[0], c[2] + ' ' + c[1]]; }), b.cat)
      + '<div class="f"><i>' + FI.cal + '</i><div class="col2"><small>' + (isNew ? 'First due date' : 'First due date (sets the day each time)') + '</small><input type="date" name="start" value="' + esc(b.start) + '"></div></div>'
      + fSel(FI.rep, 'Repeats', 'freq', BFREQ, b.freq)
      + '<div class="f"><i>' + FI.clock + '</i><span>Installments (fixed number of payments)</span><select name="cnt" class="mini" style="width:7.5rem">' + [0, 2, 3, 4, 6, 9, 10, 12, 18, 24, 36, 48, 60, 72].concat(limited && [2, 3, 4, 6, 9, 10, 12, 18, 24, 36, 48, 60, 72].indexOf(+b.count) < 0 ? [+b.count] : []).map(function (n) { return '<option value="' + n + '"' + (n === (+b.count || 0) ? ' selected' : '') + '>' + (n ? n + ' payments' : 'No end') + '</option>'; }).join('') + '</select></div>'
      + '<div class="f" id="bprepaid"' + (limited ? '' : ' style="display:none"') + '><i>' + FI.list + '</i><span>Already paid</span><select name="prepaid" class="mini" style="width:7.5rem">' + (function () { var o = ''; for (var i = 0; i < 72; i++) o += '<option value="' + i + '"' + (i === (+b.prepaid || 0) ? ' selected' : '') + '>' + i + ' payment' + (i === 1 ? '' : 's') + '</option>'; return o; })() + '</select></div>'
      + '<div class="bcalc" id="bcalc"></div>'
      + fSel(FI.list, 'Personal / Business', 'scope', [['personal', 'Personal'], ['business', 'Business (NEZER)']], b.scope || 'personal')
      + fSel(FI.user, 'Who pays', 'payer', [['split', 'Split equally']].concat(S.cfg.people.map(function (p) { return [p.id, esc(p.name)]; })), b.payer || 'split')
      + fTog(FI.check || FI.star, 'Autopay is on', 'autopay', b.autopay)
      + fSel(FI.bell, 'Remind me', 'remind', [['', 'Never'], ['0', 'On the due day'], ['1', '1 day before'], ['3', '3 days before'], ['5', '5 days before'], ['7', '1 week before']], b.remind == null ? '' : String(b.remind))
      + '<div class="f"><i>' + FI.list + '</i><input type="text" name="url" value="' + esc(b.url) + '" placeholder="Payment website (optional)" autocapitalize="off"></div>'
      + '<div class="f" id="bcancel"' + (b.cat === 'subs' ? '' : ' style="display:none"') + '><i>' + FI.list + '</i><input type="text" name="cancel" value="' + esc(b.cancel || '') + '" placeholder="Cancel subscription link (optional)" autocapitalize="off"></div>'
      + '<div class="f"><i>' + FI.smile + '</i><input type="text" name="gm" value="' + esc(b.gm || '') + '" placeholder="Gmail words to auto-detect payment (e.g. PSE, from:verizon)" autocapitalize="off"></div>'
      + fDesc(b.note, 'note', 'Notes (account #, how to pay…)')
      + (!isNew ? billHistory(b) : '') + '</div>' + dfoot(!isNew), function (act) {
      if (act === 'del') { if (!confirmBox('Delete "' + b.t + '" and its payment history?')) return false; del('bills', b.id); return true; }
      if (act.indexOf('unpay:') === 0) { var k = act.slice(6); if (b.paid) delete b.paid[k]; put('bills', b); billDialog(b); return false; }
      if (act !== 'ok') return false;
      var n = val('t'), amt = parseFloat(val('amount'));
      if (!n) { toast('Enter a name'); return false; } if (!(amt >= 0)) { toast('Enter the amount'); return false; }
      put('bills', { id: b.id, t: n, amount: Math.round(amt * 100) / 100, cat: val('cat'), start: val('start') || key(sod(now())), freq: val('freq'), count: val('freq') === 'once' ? 1 : +val('cnt') || 0, prepaid: +val('cnt') ? Math.min(+val('prepaid') || 0, +val('cnt') - 1) : 0, added: b.added || key(sod(now())), autopay: togOn('autopay'), remind: val('remind'), url: val('url'), cancel: val('cancel'), gm: val('gm'), scope: val('scope'), payer: val('payer'), note: val('note'), paid: b.paid || {}, at: b.at });
      return true;
    }, { drawer: true });
    billCalc();
  }
  function billHistory(b) {
    var ks = Object.keys(b.paid || {}).sort().reverse();
    if (!ks.length) return '';
    return '<h5 class="clh">Payment history</h5><div class="clsec" style="padding:.3rem .8rem">' + ks.slice(0, 24).map(function (k) { var p = b.paid[k], d = parseKey(k); return '<div class="row" style="min-height:2.4rem"><span>' + MON[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() + '</span><span class="v">' + money(p.amt != null ? p.amt : b.amount) + '</span><button class="pill" data-m="unpay:' + k + '" style="margin:0 0 0 .5rem;font-size:.75rem">Undo</button></div>'; }).join('') + '</div>';
  }
  function billCalc() {
    var box = document.getElementById('bcalc'); if (!box) return;
    var amt = parseFloat(val('amount')) || 0, n = +val('cnt') || 0, fq = val('freq'), st = val('start'), pp = document.getElementById('bprepaid');
    if (pp) pp.style.display = n && fq !== 'once' ? '' : 'none';
    if (!n || fq === 'once' || !st) { box.innerHTML = ''; return; }
    var end = bStep({ start: st, freq: fq }, n - 1);
    var pre = Math.min(+val('prepaid') || 0, n);
    box.innerHTML = n + ' × ' + money(amt) + ' = <b>' + money(amt * n) + '</b>' + (pre ? ' · <b>' + money(amt * (n - pre)) + '</b> left' : '') + ' · last payment ' + MON[end.getMonth()] + ' ' + end.getDate() + ', ' + end.getFullYear();
  }
  function payBill(v) {
    var p = v.split('|'), b = find('bills', p[0]), k = p[1]; if (!b) return;
    b.paid = b.paid || {};
    if (b.paid[k]) { delete b.paid[k]; S.fx = 'c'; S.fxId = b.id + k; put('bills', b); return; }
    var amt = prompt('Amount paid for ' + b.t + ' (' + MON[parseKey(k).getMonth()] + ' ' + parseKey(k).getDate() + ')', String(b.amount));
    if (amt === null) return;
    var v2 = parseFloat(String(amt).replace(/[$,]/g, '')); if (!(v2 >= 0)) v2 = +b.amount || 0;
    b.paid[k] = { amt: Math.round(v2 * 100) / 100, at: Date.now() };
    S.fx = 'c'; S.fxId = b.id + k; put('bills', b);
    var s = bStats(b); toast(s && s.left === 0 ? '🎉 ' + b.t + ' is fully paid off!' : 'Marked paid' + (s ? ' · ' + s.left + ' left' : ''));
  }

  /* ---------- PUSH + GMAIL PAYMENT DETECTION ---------- */
  function b64u(s) { var p = '='.repeat((4 - s.length % 4) % 4), b = atob((s + p).replace(/-/g, '+').replace(/_/g, '/')), a = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) a[i] = b.charCodeAt(i); return a; }
  function pushSupported() { return 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window && !IN_APP; }
  function isIOS() { return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1); }
  function standalone() { return (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true; }
  function pushState() {
    if (!('serviceWorker' in navigator)) return Promise.resolve(null);
    return navigator.serviceWorker.getRegistration().then(function (r) { return r && r.pushManager ? r.pushManager.getSubscription() : null; }).catch(function () { return null; });
  }
  function pushEnable() {
    var reg;
    return Notification.requestPermission().then(function (perm) {
      if (perm !== 'granted') throw new Error('Notifications are blocked — allow them in browser settings');
      return navigator.serviceWorker.register('sw.js');
    }).then(function (r) { reg = r; return navigator.serviceWorker.ready; }).then(function () {
      return sbFetch('/functions/v1/push', { method: 'POST', json: { action: 'vkey' } });
    }).then(function (k) {
      return reg.pushManager.getSubscription().then(function (s) { return s || reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64u(k.key) }); });
    }).then(function (sub) {
      var j = sub.toJSON();
      return sbFetch('/rest/v1/push_subs?on_conflict=endpoint', { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, json: { household_id: S.hid, endpoint: j.endpoint, p256dh: j.keys.p256dh, auth: j.keys.auth, ua: navigator.userAgent.slice(0, 200) } });
    });
  }
  function pushDisable() {
    return pushState().then(function (s) { if (!s) return; var ep = s.endpoint; return s.unsubscribe().then(function () { return sbFetch('/rest/v1/push_subs?endpoint=eq.' + encodeURIComponent(ep), { method: 'DELETE' }); }); });
  }
  function pushDialog() {
    if (!S.cfg.tz) { try { S.cfg.tz = Intl.DateTimeFormat().resolvedOptions().timeZone; saveCfg(); } catch (e) {} }
    pushState().then(function (sub) {
      var h = head('Phone notifications');
      if (IN_APP) h += '<p style="line-height:1.5">Turn notifications on from your phone — the tablet shows reminders on screen.</p>';
      else if (isIOS() && !standalone()) h += '<p style="line-height:1.55">On iPhone/iPad notifications work only from the Home Screen app:</p><ol class="steps"><li>Tap the <b>Share</b> button in Safari</li><li>Choose <b>Add to Home Screen</b> → Add</li><li>Open <b>C2 Calendar</b> from the Home Screen, sign in, and come back here</li></ol>';
      else if (!pushSupported()) h += '<p>This browser does not support push notifications.</p>';
      else h += '<p style="line-height:1.5">' + (sub ? '✅ This device gets bill reminders every morning at 9 AM (and a warning the day after a missed bill).' : 'Get bill reminders every morning at 9 AM, even when the app is closed.') + '</p>';
      var can = pushSupported() && !(isIOS() && !standalone());
      h += '<div class="btns">' + (can && sub ? '<button class="del" data-m="off">Turn off</button><button class="no" data-m="test">Send test</button>' : '') + (can && !sub ? '<button class="ok" data-m="on">Turn on</button>' : '<button class="ok" data-m="cancel">OK</button>') + '</div>';
      openModal(h, function (act) {
        if (act === 'on') { toast('Turning on…'); pushEnable().then(function () { toast('Notifications on'); pushDialog(); }).catch(function (e) { toast(e.message || 'Could not turn on'); }); return false; }
        if (act === 'off') { pushDisable().then(function () { toast('Notifications off'); pushDialog(); }); return false; }
        if (act === 'test') { sbFetch('/functions/v1/push', { method: 'POST', json: { action: 'test' } }).then(function (r) { toast('Sent to ' + r.sent + ' device' + (r.sent === 1 ? '' : 's')); }).catch(function (e) { toast(e.message); }); return false; }
        return true;
      });
    });
  }
  var GM = { at: 0, busy: false };
  function gmCheck(force) {
    if (DEMO || !S.hid || GM.busy || !myAccts().length) { if (force && !myAccts().length) toast('Connect Gmail first (Settings → Google)'); return; }
    if (!force && Date.now() - GM.at < 6 * 3600000) return;
    var t = sod(now()), items = [];
    S.data.bills.forEach(function (b) { if (!b.gm) return; bOcc(b, addD(t, -35), addD(t, 5)).forEach(function (o) { if (!bPaid(b, o.k)) items.push({ bid: b.id, k: o.k, q: b.gm, amt: b.amount, date: o.k }); }); });
    if (!items.length) { if (force) toast('Add “Gmail words” to your bills first'); GM.at = Date.now(); return; }
    GM.busy = true; if (force) toast('Checking Gmail…');
    gcall('bills_gmail', { household_id: S.hid, items: items }).then(function (r) {
      GM.at = Date.now(); var n = 0, names = [];
      (r.items || []).forEach(function (m) { var b = find('bills', m.bid); if (!b || bPaid(b, m.k)) return; b.paid = b.paid || {}; b.paid[m.k] = { amt: m.amt != null ? m.amt : +b.amount, at: m.date, src: 'gmail', subj: m.subj }; put('bills', b); n++; names.push(b.t); });
      S.gmMatch = n ? '✉ Found ' + n + ' payment' + (n > 1 ? 's' : '') + ' in Gmail: ' + esc(names.join(', ')) + ' — marked paid (tap the bill to undo).' : null;
      if (force && !n) toast('No new payment emails found');
      render();
    }).catch(function (e) { if (force) toast(gErr(e)); }).then(function () { GM.busy = false; });
  }

  /* ---------- MAIL ---------- */
  var MBOX = [['PRIMARY', 'Important'], ['UNREAD', 'Unread'], ['INBOX', 'All inbox'], ['STARRED', 'Starred'], ['SENT', 'Sent'], ['PROMO', 'Promotions'], ['SPAM', 'Spam'], ['ALL', 'All mail']];
  function myAccts() { return G.accts.filter(function (a) { return a.user_id === myId(); }); }
  function mailState() {
    if (!G.mail) G.mail = { a: '', box: 'PRIMARY', q: '', items: null, next: null, busy: false, err: null };
    var mine = myAccts();
    if (!G.mail.a || !mine.some(function (a) { return a.id === G.mail.a; })) { G.mail.a = mine.length ? mine[0].id : ''; G.mail.items = null; }
    return G.mail;
  }
  function mailLoad(more) {
    var M_ = mailState(); if (!M_.a || M_.busy) return;
    M_.busy = true; M_.err = null; if (!more) { M_.items = null; M_.next = null; } render();
    var box = M_.box === 'UNREAD' ? 'PRIMARY' : M_.box, q = (M_.box === 'UNREAD' ? 'is:unread ' : '') + M_.q;
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
    h += '<div class="tb"><button class="pill" data-a="macct">' + esc(a ? a.email : '') + (G.unread[M_.a] > 0 ? ' <b class="badge">' + G.unread[M_.a] + '</b>' : '') + I.dn + '</button><button class="pill" data-a="mbox">' + MBOX.filter(function (b) { return b[0] === M_.box; })[0][1] + I.dn + '</button><input class="msearch" id="mq" type="search" placeholder="Search mail" value="' + esc(M_.q) + '"><span class="sp"></span><button class="pill cleanbtn" data-a="mclean">🧹 Clean up</button><button class="pill" data-a="mreload" style="margin-right:.5rem">' + I.sync.replace('<svg', '<svg style="width:1rem;height:1rem;margin:0"') + '</button></div>';
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
      h = ({ calendar: renderCalendar, tasks: renderTasks, rewards: renderRewards, meals: renderMeals, photos: renderPhotos, lists: renderLists, anniv: renderAnniv, ncam: renderNcam, calls: renderCalls, bills: renderBills, mail: renderMail, notes: renderNotes, recipes: renderRecipes, timer: renderTimer, ideas: renderIdeas, diary: renderDiary }[v] || renderCalendar)();
      h += tabbar();
    }
    if (S.more) h += '<div class="shade dim" data-a="more"><div class="pop" data-a="noop"><h3>More</h3><button class="x" data-a="more">' + I.x + '</button><div class="its">' + (window.Android && Android.launch ? [['stock', 'E-calendar']] : []).concat([['mail', 'Mail'], ['ideas', 'Ideas'], ['diary', 'Diary'], ['notes', 'Notes'], ['recipes', 'Recipes'], ['timer', 'Timer'], ['sleep', 'Sleep'], ['settings', 'Settings']]).map(function (m) { var u = m[0] === 'mail' ? unreadTotal() : 0; return '<button class="it" data-a="sub" data-v="' + m[0] + '"><div>' + TI[m[0]] + (u ? '<b class="bdg">' + (u > 99 ? '99+' : u) + '</b>' : '') + '</div>' + m[1] + '</button>'; }).join('') + '</div><button class="eo" data-a="order">Edit order</button></div></div>';
    if (S.sleeping) { var d = now(); h += '<div class="sleep" data-a="wake"><b>' + (S.cfg.h24 ? pad(d.getHours()) : ((d.getHours() % 12) || 12)) + ':' + pad(d.getMinutes()) + '</b><span>' + WDL[d.getDay()] + ', ' + MONL[d.getMonth()] + ' ' + d.getDate() + '</span></div>'; }
    if (S.dbNote) h += '<div class="dbnote">' + esc(S.dbNote) + '</div>';
    else if (S.gNote && (v === 'calendar' || v === 'home')) h += '<div class="dbnote" data-a="settings">' + esc(S.gNote) + '</div>';
    if (G.accts.length && (v === 'calendar' || v === 'home' || v === 'tasks')) setTimeout(function () { gEvents(false); }, 0);
    if (h === lastHtml) { S.fx = null; return; }
    var sc = root.querySelector('.scroll'), st = sc ? sc.scrollTop : 0, keep = !S.fx || S.fx === 'd' || S.fx === 'p' || S.fx === 'c';
    root.innerHTML = h; lastHtml = h; S.fxId = null;
    var sc2 = root.querySelector('.scroll'); if (sc2 && st && keep) sc2.scrollTop = st;
    placeNcam();
    if (S.fx) { var cls = 'fx' + S.fx; S.fx = null; root.classList.remove('fxv', 'fxn', 'fxd', 'fxp', 'fxc'); void root.offsetWidth; root.classList.add(cls); clearTimeout(fxT); fxT = setTimeout(function () { root.classList.remove(cls); }, 500); }
  }

  /* ---------- modal ---------- */
  var M = document.getElementById('modal');
  var closeTok = 0;
  function openModal(html, onOk, opt) {
    opt = opt || {};
    var type = opt.drawer ? (opt.wide ? 'drawer wide' : 'drawer') : 'center';
    var still = S.modalOpen && M._type === type;
    closeTok++; M._onCancel = null;
    M.innerHTML = '<div class="dlg">' + html + '</div>'; M.className = 'on ' + type + (still ? ' still' : ''); M._type = type; S.modalOpen = true; M._ok = onOk;
    var f = M.querySelector('input[type=text],textarea'); if (f && !still && !opt.nofocus && !('ontouchstart' in window)) setTimeout(function () { f.focus(); }, 280);
  }
  function closeModal() {
    M._cleanHook = null; M._onCancel = null;
    if (VS) voiceClose();
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
      var base = { t: n, kind: kind, color: t.color || '', emoji: val('emoji'), date: togOn('hasdate') ? (val('date') || dk) : '', time: val('time'), ad: !togOn('timed'), tm: togOn('tm') ? (+val('tmin') || 15) : 0, rem: val('rem'), rep: repVal(), pri: val('pri'), stars: +val('stars') || 0, desc: val('desc') };
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
        if (act === 'cancel') { var oc = M._onCancel; closeModal(); render(); if (oc) oc(); return; }
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
    if (t.name === 'amount') billCalc();
    if (t.name === 'q' && S.rc) { S.rc.q = t.value; var l = M.querySelector('.rlist'), hh = M.querySelector('.rmain h5'); if (l) l.innerHTML = rcList(); if (hh) hh.textContent = t.value ? 'Search' : S.rc.cat; }
  });
  M.addEventListener('change', function (ev) { if (ev.target.name === 'cnt' || ev.target.name === 'freq' || ev.target.name === 'start' || ev.target.name === 'prepaid') billCalc(); if (ev.target.name === 'cat' && document.getElementById('bcancel')) document.getElementById('bcancel').style.display = ev.target.value === 'subs' ? '' : 'none'; if (M._cleanHook && S.modalOpen && M._cleanHook(ev.target)) return; if (ev.target.name === 'sync') { var ls = M.querySelectorAll('label.sc'); for (var z = 0; z < ls.length; z++) ls[z].className = 'sc' + (ls[z].querySelector('input').checked ? ' on' : ''); return; } if (ev.target.name === 'slot' && S.rc) { S.rc.slot = ev.target.value; mealDialog(); } });
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
    openev: function (v) { var p = v.split(':'), k = p[0], id = p.slice(1).join(':'); if (k === 'ev') evDialog(find('events', id)); else if (k === 'anniv') annivDialog(find('anniv', id)); else if (k === 'bill') { billDialog(find('bills', id)); } else if (k === 'g') { var gp = id.split('|'), gx = G.ev.filter(function (x) { return x.a === gp[0] && x.c === gp[1] && x.id === gp.slice(2).join('|'); })[0]; if (gx) evDialogG(gx); } },
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
    cfgtg2: function (k) { S.cfg[k] = S.cfg[k] === false; saveCfg(); },
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
    mclean: function () { cleanDialog(); },
    mmore: function () { mailLoad(true); },
    mopen: function (id) { mailView(id); },
    clopen: function (i) { clOpen(i); },
    addbill: function () { billDialog(null); },
    edbill: function (id) { billDialog(find('bills', id)); },
    bpay: function (v) { payBill(v); },
    bnav: function (v) { var a = S.billAnchor || new Date(sod(now()).getFullYear(), sod(now()).getMonth(), 1); S.billAnchor = new Date(a.getFullYear(), a.getMonth() + (+v), 1); S.fx = 'n'; render(); },
    billsall: function () { S.billView = S.billView === 'all' ? 'month' : 'all'; S.fx = 'n'; render(); },
    bview: function () { choose('Show', [['month', 'This month'], ['all', 'All bills'], ['subs', 'Subscriptions'], ['chart', 'Spending chart']], S.billView || 'month', function (m) { S.billView = m; S.fx = 'n'; }); },
    bscope: function () { choose('Bills', [['all', 'Everything'], ['personal', 'Personal'], ['business', 'Business (NEZER)']], S.billScope || 'all', function (m) { S.billScope = m; S.fx = 'n'; }); },
    bmore: function () { choose('Bills', [['gmail', '✉ Check Gmail for payments'], ['push', '🔔 Phone notifications'], ['csv', '⬇ Export to spreadsheet (CSV)']], null, function (o) { if (o === 'csv') exportBills(); else if (o === 'gmail') setTimeout(function () { gmCheck(true); }, 0); else if (o === 'push') setTimeout(pushDialog, 0); }); },
    clreload: function () { clLoad(true); },
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
  /* ================= VOICE CAPTURE · IDEAS · DIARY (end-to-end encrypted) ================= */
  var VCOL = { blue: '#3a6cf0', red: '#E5525C', green: '#16A394', yellow: '#F5B400' };
  var VCN = { blue: 'Work', red: 'Money', green: 'Home', yellow: 'Other' };
  var MIC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2.5" width="6" height="11.5" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/></svg>';
  TI.ideas = '<svg viewBox="0 0 32 32"><path d="M16 3a9 9 0 0 0-5 16.5V23h10v-3.5A9 9 0 0 0 16 3z" fill="#FFC21A"/><rect x="11.5" y="24.5" width="9" height="2.6" rx="1.3" fill="#8a94a6"/><rect x="13" y="28" width="6" height="2" rx="1" fill="#8a94a6"/><path d="M13 13.5l3 3 3-3" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  TI.diary = '<svg viewBox="0 0 32 32"><rect x="6" y="3" width="20" height="26" rx="3" fill="#8B5CF6"/><rect x="6" y="3" width="4" height="26" rx="2" fill="#6d3fe0"/><rect x="13" y="15" width="9" height="7.5" rx="1.6" fill="#fff"/><path d="M14.8 15v-2a2.7 2.7 0 0 1 5.4 0v2" fill="none" stroke="#fff" stroke-width="1.8"/></svg>';
  TABN.ideas = 'Ideas'; TABN.diary = 'Diary';
  if (COLLS.indexOf('ideas') < 0) { COLLS.push('ideas'); S.data.ideas = []; }
  function mePid() {
    var ps = S.cfg.people, em = (S.auth && S.auth.user && S.auth.user.email || '').toLowerCase().split('@')[0];
    if (S.cfg.mePid && S.cfg.mePid[myId()]) return S.cfg.mePid[myId()];
    for (var i = 0; i < ps.length; i++) if (em && em.indexOf(String(ps[i].name).toLowerCase()) >= 0) return ps[i].id;
    return ps[0] ? ps[0].id : 'me';
  }
  function ab2b64(buf) { var a = new Uint8Array(buf), s = '', i; for (i = 0; i < a.length; i += 0x8000) s += String.fromCharCode.apply(null, a.subarray(i, i + 0x8000)); return btoa(s); }
  function b642u8(b) { var s = atob(b), a = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a; }

  /* ---- recorder: raw PCM → 16 kHz mono WAV (works on old WebViews, every model accepts WAV) ---- */
  var VR = { rec: null };
  function recStart(onLevel) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return Promise.reject({ name: 'NoSupport' });
    return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } }).then(function (stream) {
      var C = window.AudioContext || window.webkitAudioContext, ctx = new C();
      var src = ctx.createMediaStreamSource(stream), proc = ctx.createScriptProcessor(4096, 1, 1), r = { stream: stream, ctx: ctx, src: src, proc: proc, bufs: [], n: 0, rate: ctx.sampleRate };
      proc.onaudioprocess = function (e) {
        var d = e.inputBuffer.getChannelData(0); r.bufs.push(new Float32Array(d)); r.n += d.length;
        var s = 0; for (var i = 0; i < d.length; i += 8) s += d[i] * d[i]; onLevel(Math.sqrt(s / (d.length / 8)));
      };
      src.connect(proc); proc.connect(ctx.destination);
      if (ctx.state === 'suspended' && ctx.resume) ctx.resume();
      VR.rec = r;
    });
  }
  function recStop(discard) {
    var r = VR.rec; VR.rec = null; if (!r) return null;
    try { r.proc.onaudioprocess = null; r.proc.disconnect(); r.src.disconnect(); } catch (e) {}
    try { r.stream.getTracks().forEach(function (t) { t.stop(); }); } catch (e) {}
    try { r.ctx.close(); } catch (e) {}
    if (discard) return null;
    var total = r.n, out = 16000, ratio = r.rate / out, len = Math.floor(total / ratio), all = new Float32Array(total), o = 0, i, j;
    r.bufs.forEach(function (b) { all.set(b, o); o += b.length; });
    var buf = new ArrayBuffer(44 + len * 2), dv = new DataView(buf), peak = 0;
    function ws(off, str) { for (var k = 0; k < str.length; k++) dv.setUint8(off + k, str.charCodeAt(k)); }
    ws(0, 'RIFF'); dv.setUint32(4, 36 + len * 2, true); ws(8, 'WAVE'); ws(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true);
    dv.setUint32(24, out, true); dv.setUint32(28, out * 2, true); dv.setUint16(32, 2, true); dv.setUint16(34, 16, true); ws(36, 'data'); dv.setUint32(40, len * 2, true);
    for (i = 0; i < len; i++) {
      var a = Math.floor(i * ratio), z = Math.min(total, Math.floor((i + 1) * ratio)), s = 0, c = 0;
      for (j = a; j < z; j++) { s += all[j]; c++; }
      var v = c ? s / c : 0; v = v > 1 ? 1 : v < -1 ? -1 : v; if (Math.abs(v) > peak) peak = Math.abs(v);
      dv.setInt16(44 + i * 2, v < 0 ? v * 0x8000 : v * 0x7fff, true);
    }
    return { b64: ab2b64(buf), secs: total / r.rate, peak: peak };
  }
  function micErr(e) {
    var n = e && e.name;
    if (n === 'NotAllowedError' || n === 'PermissionDeniedError' || n === 'SecurityError') return IN_APP ? 'Microphone access is blocked. Update the C2 app on the tablet (version 5 or newer).' : 'Microphone access is blocked. Allow the microphone for this site in your browser settings.';
    if (n === 'NotFoundError' || n === 'DevicesNotFoundError') return 'No microphone found on this device.';
    if (n === 'NoSupport') return 'This browser cannot record audio.';
    return 'Could not start the microphone' + (e && e.message ? ': ' + e.message : '') + '.';
  }

  /* ---- voice dialog ---- */
  var VS = null, vTick = null;
  var VTYPES = [['task', '✅ Task'], ['event', '📅 Event'], ['reminder', '⏰ Reminder'], ['list', '🛒 List'], ['idea', '💡 Idea'], ['diary', '🔒 Diary'], ['note', '📝 Note'], ['bill_paid', '💵 Bill paid']];
  var VMODES = [['auto', 'Auto'], ['task', 'Task'], ['idea', 'Idea'], ['diary', 'Diary 🔒']];
  function voiceOpen(mode, pid) {
    if (VR.rec) return;
    VS = { phase: 'rec', mode: mode || 'auto', pid: pid || '', t0: Date.now() };
    voiceRender();
    recStart(function (lv) { var b = document.getElementById('vlev'); if (b) b.style.transform = 'scale(' + (1 + Math.min(1, lv * 7) * .55).toFixed(3) + ')'; })
      .then(function () { if (!VS || VS.phase !== 'rec') { recStop(true); return; } VS.t0 = Date.now(); clearInterval(vTick); vTick = setInterval(voiceTick, 250); })
      .catch(function (e) { if (!VS) return; VS.phase = 'err'; VS.err = micErr(e); voiceRender(); });
  }
  function voiceTick() {
    if (!VS || VS.phase !== 'rec' || !VR.rec) { clearInterval(vTick); return; }
    var s = Math.floor((Date.now() - VS.t0) / 1000), e = document.getElementById('vtime');
    if (e) e.textContent = Math.floor(s / 60) + ':' + pad(s % 60) + ' / 1:30';
    if (s >= 90) voiceStop();
  }
  function voiceStop() {
    clearInterval(vTick);
    var w = recStop(false);
    if (!w || w.secs < 0.8) { VS.phase = 'err'; VS.err = 'Too short — speak a little longer.'; voiceRender(); return; }
    if (w.peak < 0.004) { VS.phase = 'err'; VS.err = IN_APP ? 'The tablet microphone gives no sound — this C-2 has no working built-in mic. Use the mic in C2 on your phone, or plug a USB / Bluetooth microphone into the tablet.' : 'I heard only silence. Check that the microphone is not covered and speak closer.'; voiceRender(); return; }
    VS.phase = 'think'; voiceRender();
    var n = now(), tz = ''; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone; } catch (e) {}
    sbFetch('/functions/v1/voice', { method: 'POST', json: {
      action: 'capture', household_id: S.hid, audio: w.b64, format: 'wav', mode: VS.mode, tz: tz || S.cfg.tz || '',
      now: key(n) + 'T' + pad(n.getHours()) + ':' + pad(n.getMinutes()), weekday: WDL[n.getDay()], me: VS.pid || mePid(),
      people: S.cfg.people.map(function (p) { return { id: p.id, name: p.name }; }), lists: listsCfg().map(function (l) { return { id: l.id, name: l.name }; }),
      bills: S.data.bills.map(function (b) { return { id: b.id, t: b.t }; })
    } }).then(function (r) {
      if (!VS) return;
      var items = (r && r.items) || [];
      if (VS.pid) items.forEach(function (it) { if (it.type === 'diary') it.p = VS.pid; });
      VS.res = { transcript: r.transcript || '', items: items }; VS.phase = items.length ? 'review' : 'err';
      if (!items.length) VS.err = 'Nothing recognized. Try again.';
      voiceRender();
    }).catch(function (e) { if (!VS) return; VS.phase = 'err'; VS.err = (e && e.status === 503) ? 'Voice is not set up yet (OpenRouter key missing).' : (e && e.message) || 'Network error'; voiceRender(); });
  }
  function voiceClose() { clearInterval(vTick); recStop(true); VS = null; }
  function vField(it, i) {
    var h = '', ty = it.type;
    h += '<input type="text" name="vti' + i + '" value="' + esc(it.title) + '" placeholder="Title">';
    if (ty === 'task' || ty === 'event' || ty === 'reminder') h += '<div class="vtw"><input type="date" name="vd' + i + '" value="' + esc(it.date || key(sod(now()))) + '"><input type="time" name="vh' + i + '" value="' + esc(it.time || '') + '"></div>';
    if (ty === 'list') h += '<div class="vtw"><select name="vl' + i + '">' + listsCfg().map(function (l) { return '<option value="' + l.id + '"' + (l.id === it.list ? ' selected' : '') + '>' + esc(l.name) + '</option>'; }).join('') + '</select></div><input type="text" name="vx' + i + '" value="' + esc((it.items && it.items.length ? it.items : [it.title]).join(', ')) + '" placeholder="Items, comma separated">';
    if (ty === 'idea' || ty === 'diary' || ty === 'note') h += '<textarea name="vtx' + i + '" placeholder="Text">' + esc(it.text || it.title) + '</textarea>';
    if (ty === 'task' || ty === 'idea') h += '<div class="vcols">' + ['', 'blue', 'red', 'green', 'yellow'].map(function (c) { return '<button type="button" data-m="vcol:' + i + ':' + c + '" class="' + ((it.color || '') === c ? 'on' : '') + '" style="background:' + (VCOL[c] || 'transparent') + '">' + (c ? '' : '∅') + '</button>'; }).join('') + '</div>';
    if (ty === 'bill_paid') h += '<div class="vtw"><select name="vb' + i + '"><option value="">— pick a bill —</option>' + S.data.bills.map(function (b) { return '<option value="' + b.id + '"' + (b.id === it.bill ? ' selected' : '') + '>' + esc(b.t) + '</option>'; }).join('') + '</select><input type="number" step="0.01" name="va' + i + '" value="' + (it.amount != null ? it.amount : '') + '" placeholder="Amount"></div>';
    h += '<select name="vp' + i + '" class="vpp">' + S.cfg.people.map(function (p) { return '<option value="' + p.id + '"' + (p.id === it.p ? ' selected' : '') + '>' + esc(p.name) + '</option>'; }).join('') + '</select>';
    return h;
  }
  function voiceRender() {
    if (!VS) return;
    var h = '';
    if (VS.phase === 'rec') {
      h = head(VS.mode === 'diary' ? '🔒 Diary — listening…' : 'Listening…')
        + '<div class="vmic"><span id="vlev" class="vring"></span><span class="vdot">' + MIC + '</span></div><div id="vtime" class="vtime">0:00 / 1:30</div>'
        + (VS.pid ? '' : '<div class="vmodes">' + VMODES.map(function (m) { return '<button type="button" data-m="vmode:' + m[0] + '" class="' + (VS.mode === m[0] ? 'on' : '') + '">' + m[1] + '</button>'; }).join('') + '</div>')
        + '<p class="vhint muted">' + (VS.mode === 'diary' ? 'Tell how your day went — it is saved only after your PIN.' : 'Say anything: “remind me tomorrow at 9 to call Mike”, “buy milk and bread”, “idea: discount for bathrooms”.') + '</p>'
        + '<div class="btns"><button class="no" data-m="cancel">Cancel</button><button class="ok" data-m="vstop">Done</button></div>';
    } else if (VS.phase === 'think') {
      h = head('Understanding…') + '<div class="vthink"><span></span><span></span><span></span></div><p class="vhint muted">Turning your voice into items…</p>';
    } else if (VS.phase === 'err') {
      h = head('Voice') + '<p class="verr">' + esc(VS.err) + '</p><div class="btns"><button class="no" data-m="cancel">Close</button><button class="ok" data-m="vagain">Try again</button></div>';
    } else {
      var its = VS.res.items;
      h = head('Got it — check and save') + (VS.res.transcript ? '<p class="vtr">“' + esc(VS.res.transcript) + '”</p>' : '')
        + '<div class="vits">' + its.map(function (it, i) {
          return '<div class="vit"><div class="vrow"><select name="vt' + i + '">' + VTYPES.map(function (t) { return '<option value="' + t[0] + '"' + (t[0] === it.type ? ' selected' : '') + '>' + t[1] + '</option>'; }).join('') + '</select><button type="button" class="vrm" data-m="vrm:' + i + '">' + I.x + '</button></div>' + vField(it, i) + '</div>';
        }).join('') + '</div>'
        + '<div class="btns"><button class="no" data-m="vagain">' + MIC.replace('<svg', '<svg style="width:1rem;height:1rem;vertical-align:-.15rem;margin-right:.3rem"') + 'Again</button><button class="ok" data-m="vsave">Save ' + (its.length > 1 ? 'all ' + its.length : '') + '</button></div>';
    }
    openModal(h, voiceAct, { nofocus: true });
    M._cleanHook = function (t) { var m = /^vt(\d+)$/.exec(t.name || ''); if (!m || !VS || !VS.res) return false; voiceCollect(); VS.res.items[+m[1]].type = t.value; voiceRender(); return true; };
  }
  function voiceCollect() {
    if (!VS || !VS.res) return;
    VS.res.items.forEach(function (it, i) {
      function g(n) { var e = M.querySelector('[name="' + n + i + '"]'); return e ? e.value.trim() : null; }
      var v;
      if ((v = g('vti')) !== null) it.title = v;
      if ((v = g('vd')) !== null) it.date = v;
      if ((v = g('vh')) !== null) it.time = v;
      if ((v = g('vl')) !== null) it.list = v;
      if ((v = g('vx')) !== null) it.items = v.split(/\s*[,;\n]\s*/).filter(Boolean);
      if ((v = g('vtx')) !== null) it.text = v;
      if ((v = g('vb')) !== null) it.bill = v;
      if ((v = g('va')) !== null) it.amount = v === '' ? null : +v;
      if ((v = g('vp')) !== null) it.p = v;
    });
  }
  function voiceAct(act) {
    var p = act.split(':');
    if (p[0] === 'vmode') { VS.mode = p[1]; var bs = M.querySelectorAll('.vmodes button'); for (var i = 0; i < bs.length; i++) bs[i].className = bs[i].getAttribute('data-m') === act ? 'on' : ''; return false; }
    if (act === 'vstop') { voiceStop(); return false; }
    if (act === 'vagain') { var md = VS.mode, pd = VS.pid; voiceClose(); voiceOpen(md, pd); return false; }
    if (p[0] === 'vrm') { voiceCollect(); VS.res.items.splice(+p[1], 1); if (!VS.res.items.length) { voiceClose(); return true; } voiceRender(); return false; }
    if (p[0] === 'vcol') { voiceCollect(); VS.res.items[+p[1]].color = p[2] || ''; voiceRender(); return false; }
    if (act === 'vsave') { voiceCollect(); var items = VS.res.items; voiceClose(); setTimeout(function () { voiceSave(items); }, 0); return true; }
    return false;
  }
  function hmPlus(hm, mins) { var p = (hm || '09:00').split(':'), t = (+p[0] * 60 + +p[1] + mins) % 1440; return pad(Math.floor(t / 60)) + ':' + pad(t % 60); }
  function voiceSave(items) {
    var n = 0, diary = [], today = key(sod(now()));
    items.forEach(function (it, k) {
      var pid = it.p || mePid(), t = it.title || (it.text || '').slice(0, 80);
      if (it.type === 'task') { put('tasks', { t: t, kind: 'chore', emoji: '', date: it.date || today, time: it.time || '09:00', ad: !it.time, p: pid, stars: 0, rem: it.time ? '0' : '', rep: '', pri: '', desc: it.text && it.text !== t ? it.text : '', color: it.color || '', done: false, via: 'voice', at: Date.now() + k }); n++; }
      else if (it.type === 'event' || it.type === 'reminder') { var tm = it.time || '09:00', d = it.date || today; put('events', { t: t, date: d, end: d, time: tm, etime: hmPlus(tm, it.type === 'reminder' ? 15 : 60), ad: it.type === 'event' && !it.time, ps: [pid], rem: it.type === 'reminder' ? '0' : '', ann: false, rep: '', desc: it.text && it.text !== t ? it.text : '', via: 'voice', at: Date.now() + k }); n++; }
      else if (it.type === 'list') { var L = it.list || (listsCfg()[0] || {}).id || 'grocery'; (it.items && it.items.length ? it.items : [t]).forEach(function (x, j) { put('lists', { t: x, list: L, at: Date.now() + k * 50 + j }); n++; }); }
      else if (it.type === 'idea') { put('ideas', { t: t, text: it.text || '', color: it.color || '', p: pid, at: Date.now() + k }); n++; }
      else if (it.type === 'note') { put('notes', { t: it.text || t, color: NCOL[S.data.notes.length % NCOL.length], at: Date.now() + k }); n++; }
      else if (it.type === 'bill_paid') {
        var b = it.bill && find('bills', it.bill), o = b && bNext(b);
        if (b && o) { b.paid = b.paid || {}; b.paid[o.k] = { amt: it.amount != null ? it.amount : +b.amount, at: Date.now(), src: 'voice' }; put('bills', b); n++; }
        else { put('notes', { t: 'Paid: ' + t + (it.amount != null ? ' ' + money(it.amount) : ''), color: NCOL[0], at: Date.now() + k }); n++; }
      }
      else if (it.type === 'diary') diary.push({ pid: pid, e: { id: uid(), kind: 'diary', t: t, text: it.text || t, date: it.date || today, at: Date.now() + k, via: 'voice' } });
    });
    if (n) toast('Saved ' + n + ' item' + (n > 1 ? 's' : ''));
    if (diary.length) vSaveQueued(diary);
  }

  /* ---- vault: per-profile diary, AES-GCM with a key that only the PIN (+ server half) unlocks ---- */
  var V = { st: null, keys: {}, plain: {}, rows: {}, act: Date.now(), inAt: 0, loading: false, since: null };
  var CS = window.crypto && window.crypto.subtle;
  var TE = window.TextEncoder ? new TextEncoder() : null, TD = window.TextDecoder ? new TextDecoder() : null;
  function rnd(n) { var a = new Uint8Array(n); window.crypto.getRandomValues(a); return a; }
  function rpc(name, args) { return sbFetch('/rest/v1/rpc/' + name, { method: 'POST', json: args }); }
  function kek(secret, salt) {
    return CS.importKey('raw', TE.encode(secret), 'PBKDF2', false, ['deriveKey']).then(function (k) {
      return CS.deriveKey({ name: 'PBKDF2', salt: b642u8(salt), iterations: 150000, hash: 'SHA-256' }, k, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
    });
  }
  function seal(k, bytes) { var iv = rnd(12); return CS.encrypt({ name: 'AES-GCM', iv: iv }, k, bytes).then(function (ct) { return { iv: ab2b64(iv), ct: ab2b64(ct) }; }); }
  function unseal(k, iv, ct) { return CS.decrypt({ name: 'AES-GCM', iv: b642u8(iv) }, k, b642u8(ct)); }
  function dkImport(raw) { return CS.importKey('raw', raw, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']); }
  function wrapStr(w) { return w.iv + '.' + w.ct; }
  function recCode() { var al = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', r = rnd(20), s = ''; for (var i = 0; i < 20; i++) { s += al[r[i] % 32]; if (i % 4 === 3 && i < 19) s += '-'; } return s; }
  function normCode(c) { return String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); }
  function vReady() { return !!(CS && TE && TD); }
  function vStatus() {
    if (DEMO || !S.hid) { V.st = V.st || {}; return Promise.resolve(); }
    return rpc('vault_status', { p_household: S.hid }).then(function (r) { V.st = r || {}; render(); }).catch(function () { V.st = V.st || {}; render(); });
  }
  function vLoad() {
    if (DEMO || !S.hid || V.loading) return Promise.resolve();
    V.loading = true; V.lastLoad = Date.now();
    var q = '/rest/v1/vault_items?select=pid,id,kind,iv,ct,deleted,updated_at&household_id=eq.' + S.hid + '&order=updated_at.asc&limit=2000' + (V.since ? '&updated_at=gt.' + encodeURIComponent(V.since) : '');
    return sbFetch(q).then(function (rows) {
      var touched = {};
      (rows || []).forEach(function (r) { V.rows[r.pid + '|' + r.id] = r; V.since = r.updated_at; touched[r.pid] = 1; });
      V.loadedOnce = true;
      return Promise.all(Object.keys(V.keys).filter(function (p) { return touched[p] || !V.plain[p] || !V.plain[p].length; }).map(vDecrypt));
    }).catch(function () {}).then(function () { V.loading = false; render(); });
  }
  function vDecrypt(pid) {
    var k = V.keys[pid]; if (!k) return Promise.resolve();
    var rows = Object.keys(V.rows).map(function (x) { return V.rows[x]; }).filter(function (r) { return r.pid === pid && !r.deleted && r.ct; });
    return Promise.all(rows.map(function (r) {
      return unseal(k, r.iv, r.ct).then(function (b) { var o = JSON.parse(TD.decode(b)); o.id = r.id; o.kind = r.kind; return o; }).catch(function () { return null; });
    })).then(function (xs) {
      if (!V.keys[pid]) return;
      var have = {}; xs.forEach(function (x) { if (x) have[x.id] = 1; });
      V.plain[pid] = xs.filter(Boolean).concat((V.plain[pid] || []).filter(function (x) { return !have[x.id] && !V.rows[pid + '|' + x.id]; }));
    });
  }
  function vUse(pid, raw) { return dkImport(raw).then(function (k) { V.keys[pid] = k; V.act = Date.now(); V.inAt = Date.now(); V.plain[pid] = V.plain[pid] || []; if (V.st && V.st[pid]) V.st[pid].locked_until = null; return vDecrypt(pid); }); }
  function vSetup(pid, pin) {
    var dk = rnd(32), code = recCode(), rs = ab2b64(rnd(16));
    return rpc('vault_init', { p_household: S.hid, p_pid: pid, p_pin: pin }).then(function (r) {
      return Promise.all([kek(pin + '|' + r.server_half, r.salt), kek(normCode(code), rs)]);
    }).then(function (ks) { return Promise.all([seal(ks[0], dk), seal(ks[1], dk)]); }).then(function (w) {
      return rpc('vault_finish', { p_household: S.hid, p_pid: pid, p_pin: pin, p_wrapped: wrapStr(w[0]), p_rec_code: normCode(code), p_rec_salt: rs, p_rec_wrapped: wrapStr(w[1]) });
    }).then(function () { V.st = V.st || {}; V.st[pid] = { set: true }; return vUse(pid, dk); }).then(function () { return code; });
  }
  function vFailMsg(r) {
    if (r.locked_until) { var m = Math.max(1, Math.ceil((new Date(r.locked_until).getTime() - Date.now()) / 60000)); return 'Too many wrong tries. Locked for ' + m + ' min.'; }
    if (r.unset) return 'No PIN yet.';
    return 'Wrong code' + (r.left != null ? ' — ' + r.left + ' tr' + (r.left === 1 ? 'y' : 'ies') + ' left' : '');
  }
  function vUnlock(pid, pin) {
    return rpc('vault_unlock', { p_household: S.hid, p_pid: pid, p_kind: 'pin', p_secret: pin }).then(function (r) {
      if (!r || !r.ok) { if (r && r.locked_until) { V.st[pid] = V.st[pid] || {}; V.st[pid].locked_until = r.locked_until; } throw new Error(vFailMsg(r || {})); }
      var w = r.wrapped.split('.');
      return kek(pin + '|' + r.server_half, r.salt).then(function (k) { return unseal(k, w[0], w[1]); }).then(function (raw) { return vUse(pid, raw); });
    });
  }
  function vRecover(pid, code, newPin) {
    var c = normCode(code), raw, srv;
    return rpc('vault_unlock', { p_household: S.hid, p_pid: pid, p_kind: 'rec', p_secret: c }).then(function (r) {
      if (!r || !r.ok) throw new Error(vFailMsg(r || {}));
      srv = r; var w = r.rec_wrapped.split('.');
      return kek(c, r.rec_salt).then(function (k) { return unseal(k, w[0], w[1]); });
    }).then(function (b) { raw = new Uint8Array(b); return kek(newPin + '|' + srv.server_half, srv.salt); })
      .then(function (k) { return seal(k, raw); })
      .then(function (w) { return rpc('vault_set_pin', { p_household: S.hid, p_pid: pid, p_kind: 'rec', p_secret: c, p_new_pin: newPin, p_wrapped: wrapStr(w) }); })
      .then(function (r) { if (!r || !r.ok) throw new Error(vFailMsg(r || {})); return vUse(pid, raw); });
  }
  function vChangePin(pid, oldPin, newPin) {
    var raw, srv;
    return rpc('vault_unlock', { p_household: S.hid, p_pid: pid, p_kind: 'pin', p_secret: oldPin }).then(function (r) {
      if (!r || !r.ok) throw new Error(vFailMsg(r || {}));
      srv = r; var w = r.wrapped.split('.');
      return kek(oldPin + '|' + r.server_half, r.salt).then(function (k) { return unseal(k, w[0], w[1]); });
    }).then(function (b) { raw = new Uint8Array(b); return kek(newPin + '|' + srv.server_half, srv.salt); })
      .then(function (k) { return seal(k, raw); })
      .then(function (w) { return rpc('vault_set_pin', { p_household: S.hid, p_pid: pid, p_kind: 'pin', p_secret: oldPin, p_new_pin: newPin, p_wrapped: wrapStr(w) }); })
      .then(function (r) { if (!r || !r.ok) throw new Error(vFailMsg(r || {})); });
  }
  function vPut(pid, e) {
    var k = V.keys[pid]; if (!k) return Promise.reject(new Error('locked'));
    if (!e.id) e.id = uid(); if (!e.at) e.at = Date.now();
    var kind = e.kind || 'diary', o = {}; Object.keys(e).forEach(function (x) { if (x !== 'id' && x !== 'kind') o[x] = e[x]; });
    var arr = V.plain[pid] = (V.plain[pid] || []).filter(function (x) { return x.id !== e.id; }); e.kind = kind; arr.push(e); render();
    if (DEMO) return Promise.resolve();
    return seal(k, TE.encode(JSON.stringify(o))).then(function (w) {
      return sbFetch('/rest/v1/vault_items?on_conflict=household_id,pid,id', { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=minimal' }, json: { household_id: S.hid, pid: pid, id: e.id, kind: kind, iv: w.iv, ct: w.ct, deleted: false } });
    }).catch(function () { toast('Diary entry not saved — check connection'); });
  }
  function vDel(pid, id) {
    V.plain[pid] = (V.plain[pid] || []).filter(function (x) { return x.id !== id; }); render();
    if (DEMO) return;
    sbFetch('/rest/v1/vault_items?household_id=eq.' + S.hid + '&pid=eq.' + encodeURIComponent(pid) + '&id=eq.' + encodeURIComponent(id), { method: 'PATCH', headers: { Prefer: 'return=minimal' }, json: { deleted: true, iv: '', ct: '' } }).catch(function () { toast('Not deleted — check connection'); });
  }
  function vLockAll() { if (!Object.keys(V.keys).length) return; V.keys = {}; V.plain = {}; S.dpin = ''; if (S.sub === 'diary') render(); }
  var vQueue = [];
  function vSaveQueued(list) {
    vQueue = vQueue.concat(list);
    (function next() {
      if (!vQueue.length) return;
      var pid = vQueue[0].pid;
      function flush() { var mine = vQueue.filter(function (x) { return x.pid === pid; }); vQueue = vQueue.filter(function (x) { return x.pid !== pid; }); mine.forEach(function (x) { vPut(pid, x.e); }); toast('Saved to ' + P(pid).name + '’s diary 🔒'); V.inAt = Date.now(); setTimeout(next, 300); }
      if (V.keys[pid]) { flush(); return; }
      var go3 = function () { pinDialog(pid, 'Save to ' + esc(P(pid).name) + '’s diary', flush, function () { vQueue = vQueue.filter(function (x) { return x.pid !== pid; }); toast('Diary entry discarded'); next(); }); };
      if (V.st === null) vStatus().then(go3); else go3();
    })();
  }
  function pinInput(name, ph) { return '<input type="password" inputmode="numeric" pattern="[0-9]*" autocomplete="off" maxlength="8" name="' + name + '" class="pinin" placeholder="' + (ph || '••••') + '">'; }
  /* modal PIN prompt (creates the PIN the first time) */
  function pinDialog(pid, title, onOpen, onCancel) {
    var st = V.st && V.st[pid];
    if (!vReady()) { toast('This browser cannot encrypt'); if (onCancel) onCancel(); return; }
    if (!st || !st.set) { setupDialog(pid, onOpen, onCancel); return; }
    openModal(head(title) + '<p class="muted" style="margin-bottom:.6rem">Enter ' + esc(P(pid).name) + '’s diary PIN.</p>' + pinInput('pin') + '<p class="verr" id="pinerr"></p><div class="btns"><button class="no" data-m="cancel">Cancel</button><button class="ok" data-m="ok">Unlock</button></div>', function (act) {
      if (act !== 'ok') return false;
      var pin = val('pin'), er = document.getElementById('pinerr'); if (!/^\d{4,8}$/.test(pin)) { er.textContent = 'PIN is 4–8 digits'; return false; }
      er.textContent = 'Checking…';
      vUnlock(pid, pin).then(function () { closeModal(); render(); if (onOpen) onOpen(); }).catch(function (e) { er.textContent = e.message; var i = M.querySelector('[name=pin]'); if (i) { i.value = ''; i.focus(); } });
      return false;
    });
    M._onCancel = onCancel || null;
  }
  function setupDialog(pid, onOpen, onCancel) {
    openModal(head('Create a diary PIN') + '<p class="muted" style="line-height:1.45;margin-bottom:.8rem">' + esc(P(pid).name) + '’s diary is encrypted on this device. Nobody — not family, not the server — can read it without this PIN. Use 4–8 digits.</p><label>New PIN</label>' + pinInput('p1') + '<label>Repeat PIN</label>' + pinInput('p2') + '<p class="verr" id="pinerr"></p><div class="btns"><button class="no" data-m="cancel">Cancel</button><button class="ok" data-m="ok">Create</button></div>', function (act) {
      if (act !== 'ok') return false;
      var a = val('p1'), b = val('p2'), er = document.getElementById('pinerr');
      if (!/^\d{4,8}$/.test(a)) { er.textContent = 'PIN must be 4–8 digits'; return false; }
      if (a !== b) { er.textContent = 'PINs do not match'; return false; }
      if (/^(\d)\1+$/.test(a) || '0123456789'.indexOf(a) >= 0 || '9876543210'.indexOf(a) >= 0) { er.textContent = 'Too easy to guess — pick another'; return false; }
      er.textContent = 'Creating…';
      vSetup(pid, a).then(function (code) { recDialog(code, onOpen); }).catch(function (e) { er.textContent = e.message || 'Failed'; });
      return false;
    });
    M._onCancel = onCancel || null;
  }
  function recDialog(code, after) {
    openModal('<h3>Write down your recovery code</h3><p class="muted" style="line-height:1.45">If you forget the PIN, this code is the only way to open the diary. Keep it on paper, not on this tablet.</p><div class="reccode">' + code + '</div><div class="btns"><button class="ok" data-m="ok">I wrote it down</button></div>', function (act) { if (act === 'ok') { setTimeout(function () { if (after) after(); }, 50); return true; } return false; });
  }
  function forgotDialog(pid) {
    openModal(head('Forgot PIN') + '<p class="muted" style="line-height:1.45;margin-bottom:.4rem">Enter the recovery code you wrote down when the diary was created, then choose a new PIN.</p><label>Recovery code</label><input type="text" name="rc" autocomplete="off" placeholder="XXXX-XXXX-XXXX-XXXX-XXXX" style="text-transform:uppercase;letter-spacing:.06em"><label>New PIN</label>' + pinInput('p1') + '<label>Repeat PIN</label>' + pinInput('p2') + '<p class="verr" id="pinerr"></p>'
      + (isOwner() ? '<button class="linkbtn danger" data-m="erase">Lost the code too? Erase this diary…</button>' : '')
      + '<div class="btns"><button class="no" data-m="cancel">Cancel</button><button class="ok" data-m="ok">Reset PIN</button></div>', function (act) {
      var er = document.getElementById('pinerr');
      if (act === 'erase') {
        if (!confirmBox('Erase ALL of ' + P(pid).name + '’s diary entries forever? This cannot be undone.') || !confirmBox('Really erase? The entries cannot be recovered.')) return false;
        rpc('vault_erase', { p_household: S.hid, p_pid: pid }).then(function () { V.st[pid] = { set: false }; Object.keys(V.rows).forEach(function (k) { if (k.indexOf(pid + '|') === 0) delete V.rows[k]; }); delete V.keys[pid]; delete V.plain[pid]; closeModal(); toast('Diary erased'); render(); }).catch(function (e) { er.textContent = e.message; });
        return false;
      }
      if (act !== 'ok') return false;
      var c = normCode(val('rc')), a = val('p1'), b = val('p2');
      if (c.length !== 20) { er.textContent = 'The code has 20 letters/digits'; return false; }
      if (!/^\d{4,8}$/.test(a)) { er.textContent = 'PIN must be 4–8 digits'; return false; }
      if (a !== b) { er.textContent = 'PINs do not match'; return false; }
      er.textContent = 'Checking…';
      vRecover(pid, c, a).then(function () { closeModal(); toast('New PIN set'); render(); }).catch(function (e) { er.textContent = e.message || 'Failed'; });
      return false;
    });
  }
  function changePinDialog(pid) {
    openModal(head('Change PIN') + '<label>Current PIN</label>' + pinInput('p0') + '<label>New PIN</label>' + pinInput('p1') + '<label>Repeat new PIN</label>' + pinInput('p2') + '<p class="verr" id="pinerr"></p><div class="btns"><button class="no" data-m="cancel">Cancel</button><button class="ok" data-m="ok">Change</button></div>', function (act) {
      if (act !== 'ok') return false;
      var o = val('p0'), a = val('p1'), b = val('p2'), er = document.getElementById('pinerr');
      if (!/^\d{4,8}$/.test(a)) { er.textContent = 'PIN must be 4–8 digits'; return false; }
      if (a !== b) { er.textContent = 'PINs do not match'; return false; }
      er.textContent = 'Saving…';
      vChangePin(pid, o, a).then(function () { closeModal(); toast('PIN changed'); }).catch(function (e) { er.textContent = e.message || 'Failed'; });
      return false;
    });
  }
  var MOODS = ['', '😀', '🙂', '😐', '😕', '😢', '😡', '😴'];
  function entryDialog(pid, e) {
    var isNew = !e; e = e || { kind: 'diary', t: '', text: '', date: key(sod(now())), mood: '' };
    openModal(dhead((isNew ? 'New entry' : 'Edit entry') + ' 🔒') + '<div class="db"><div class="f"><i>' + FI.cal + '</i><div class="col2"><small>Date</small><input type="date" name="date" value="' + esc(e.date || key(sod(now()))) + '"></div></div>' + fTitle(e.t, 'Title (optional)')
      + fSel(FI.smile, 'Mood', 'mood', MOODS.map(function (m) { return [m, m || 'None']; }), e.mood || '')
      + '<div class="f top"><i>' + FI.desc + '</i><textarea name="text" class="dtext" placeholder="Write freely…">' + esc(e.text || '') + '</textarea></div>'
      + '<p class="muted" style="font-size:.8rem;margin:.2rem .3rem 1rem">🔒 Encrypted on this device before it is saved.</p></div>' + dfoot(!isNew), function (act) {
      if (act === 'del') { if (!confirmBox('Delete this entry?')) return false; vDel(pid, e.id); return true; }
      if (act !== 'ok') return false;
      var tx = val('text'), t = val('t'); if (!tx && !t) { toast('Write something'); return false; }
      if (!V.keys[pid]) { toast('Diary locked — unlock again'); return true; }
      var o = JSON.parse(JSON.stringify(e)); o.t = t; o.text = tx; o.date = val('date') || o.date; o.mood = val('mood'); if (!isNew) o.edited = Date.now();
      vPut(pid, o); return true;
    }, { drawer: true });
  }

  /* ---- Diary page ---- */
  function renderDiary() {
    var pid = S.dpid || mePid(), st = V.st && V.st[pid], open = !!V.keys[pid], person = P(pid);
    if (V.st === null && !V.stLoading) { V.stLoading = true; setTimeout(function () { vStatus().then(function () { V.stLoading = false; }); }, 0); }
    if (open && !V.loading && !V.loadedOnce && !DEMO) setTimeout(vLoad, 0);
    var h = hdr(false) + '<div class="page-h"><h2>Diary</h2>' + (open ? '<button class="pill" data-a="dpinchg">Change PIN</button><button class="pill lockb" data-a="dlock">🔒 Lock</button>' : '') + '</div>';
    h += '<div class="dpp">' + S.cfg.people.map(function (p) { return '<button class="' + (p.id === pid ? 'on' : '') + '" data-a="dpick" data-v="' + p.id + '"><span class="av" style="background:' + p.color + '">' + esc(p.initial) + '</span>' + esc(p.name) + (V.keys[p.id] ? ' 🔓' : '') + '</button>'; }).join('') + '</div>';
    h += '<div class="body"><div class="scroll">';
    if (!vReady()) h += '<div class="dlk"><p>This browser cannot encrypt the diary.</p></div>';
    else if (V.st === null) h += '<div class="dlk"><p class="muted">Loading…</p></div>';
    else if (!open && (!st || !st.set)) {
      h += '<div class="dlk"><div class="dlico">' + TI.diary + '</div><h4>' + esc(person.name) + '’s private diary</h4><p class="muted">Encrypted with a PIN that only ' + esc(person.name) + ' knows. Family members see nothing.</p><button class="bigb" data-a="dsetup">Create PIN</button></div>';
    } else if (!open) {
      var pin = S.dpin || '', lk = st.locked_until && new Date(st.locked_until).getTime() > Date.now();
      h += '<div class="dlk"><div class="dlico">' + TI.diary + '</div><h4>' + esc(person.name) + '’s diary is locked</h4>'
        + '<div class="dots">' + [0, 1, 2, 3, 4, 5, 6, 7].slice(0, Math.max(4, pin.length)).map(function (x, i) { return '<i class="' + (i < pin.length ? 'on' : '') + '"></i>'; }).join('') + '</div>'
        + '<p class="verr">' + esc(S.dpinErr || (lk ? vFailMsg({ locked_until: st.locked_until }) : '')) + '</p>'
        + '<div class="pad">' + ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'bk', '0', 'ok'].map(function (k) { return '<button data-a="dkey" data-v="' + k + '" class="' + (k === 'ok' ? 'okk' : k === 'bk' ? 'bkk' : '') + '">' + (k === 'bk' ? '⌫' : k === 'ok' ? '✓' : k) + '</button>'; }).join('') + '</div>'
        + '<button class="linkbtn" data-a="dforgot">Forgot PIN?</button></div>';
    } else {
      var xs = (V.plain[pid] || []).slice().sort(function (a, b) { return (b.date || '').localeCompare(a.date || '') || b.at - a.at; });
      if (!xs.length) h += '<div style="height:70%;display:flex">' + empty('No entries yet. Tap + to write or speak.', 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
      else {
        var last = '';
        h += '<div class="dlist">' + xs.map(function (e) {
          var d = e.date ? parseKey(e.date) : new Date(e.at), sec = '';
          var mk = MONL[d.getMonth()] + ' ' + d.getFullYear(); if (mk !== last) { sec = '<h5>' + mk + '</h5>'; last = mk; }
          return sec + '<div class="dent" data-a="dedit" data-v="' + esc(e.id) + '"><div class="dd"><b>' + d.getDate() + '</b><small>' + WD[d.getDay()] + '</small></div><div class="dx">' + (e.kind === 'idea' ? '<span class="dk">💡 Idea</span>' : '') + (e.t ? '<b>' + (e.mood ? e.mood + ' ' : '') + esc(e.t) + '</b>' : (e.mood ? '<b>' + e.mood + '</b>' : '')) + '<p>' + esc((e.text || '').slice(0, 260)) + '</p>' + (e.via === 'voice' ? '<small>🎤 voice</small>' : '') + '</div></div>';
        }).join('') + '</div>';
      }
      h += '<div style="height:6rem"></div>';
    }
    h += '</div>' + (open ? fab('', [['dwrite', '✍️ Write'], ['dspeak', '🎤 Speak']]) : '') + '</div>';
    return h;
  }

  /* ---- Ideas page ---- */
  function ideaDialog(x) {
    x = x || { t: '', text: '', color: '', p: mePid() };
    openModal(dhead(x.id ? 'Edit idea' : 'New idea') + '<div class="db">' + fTitle(x.t, 'Idea') + fDesc(x.text, 'text', 'Details')
      + '<div class="f"><i>' + FI.flag + '</i><span>Color</span><div class="colors">' + ['', 'blue', 'red', 'green', 'yellow'].map(function (c) { return '<button type="button" data-col="' + c + '" class="' + ((x.color || '') === c ? 'on' : '') + '" style="background:' + (VCOL[c] || '#e4e8f0') + '" title="' + (VCN[c] || 'None') + '"></button>'; }).join('') + '</div></div>'
      + fProfile(x.p || mePid(), false, 'Whose idea') + fTog(FI.title, '🔒 Move to private diary', 'priv', false) + '</div>' + dfoot(!!x.id), function (act) {
      if (act === 'del') { del('ideas', x.id); return true; }
      if (act !== 'ok') return false;
      var t = val('t'); if (!t) { toast('Enter the idea'); return false; }
      var on = M.querySelector('.colors .on'), pid = pplVal()[0] || mePid();
      var o = { id: x.id, t: t, text: val('text'), color: on ? on.getAttribute('data-col') : '', p: pid, at: x.at };
      if (togOn('priv')) {
        var go2 = function () { vPut(pid, { kind: 'idea', t: o.t, text: o.text, date: key(sod(now())), at: Date.now() }); if (x.id) del('ideas', x.id); toast('Moved to ' + P(pid).name + '’s diary 🔒'); };
        if (V.keys[pid]) { go2(); return true; }
        setTimeout(function () { var g4 = function () { pinDialog(pid, 'Unlock ' + esc(P(pid).name) + '’s diary', go2); }; if (V.st === null) vStatus().then(g4); else g4(); }, 250); return true;
      }
      put('ideas', o); return true;
    }, { drawer: true });
  }
  function renderIdeas() {
    var f = S.ifil || 'all', xs = S.data.ideas.filter(function (x) { return f === 'all' || (x.color || '') === f; }).sort(function (a, b) { return b.at - a.at; });
    var h = hdr(false) + '<div class="page-h"><h2>Ideas</h2></div><div class="tb ifil">' + [['all', 'All']].concat(Object.keys(VCN).map(function (c) { return [c, VCN[c]]; })).map(function (c) { return '<button class="pill' + (f === c[0] ? ' on' : '') + '" data-a="ifil" data-v="' + c[0] + '">' + (VCOL[c[0]] ? '<i class="cdot" style="background:' + VCOL[c[0]] + '"></i>' : '') + c[1] + '</button>'; }).join('') + '</div><div class="body"><div class="scroll">';
    h += xs.length ? '<div class="igrid">' + xs.map(function (x) { var p = P(x.p); return '<div class="idea" data-a="edidea" data-v="' + x.id + '" style="border-top-color:' + (VCOL[x.color] || '#d5dbe7') + '"><b>' + esc(x.t) + '</b>' + (x.text && x.text !== x.t ? '<p>' + esc(x.text.slice(0, 220)) + '</p>' : '') + '<small><span class="av" style="background:' + p.color + '">' + esc(p.initial) + '</span>' + fmtDate(new Date(x.at)) + '</small></div>'; }).join('') + '</div>'
      : '<div style="height:80%;display:flex">' + empty(f === 'all' ? 'No ideas yet. Tap the mic and just say it.' : 'Nothing in ' + VCN[f], 1).replace('class="empty"', 'class="empty" style="flex:1"') + '</div>';
    return h + '</div>' + fab('', [['addidea', '✍️ Write'], ['videa', '🎤 Speak']]) + '</div>';
  }

  /* ---- actions ---- */
  A.voice = function () { if (!S.hid && !DEMO) return; voiceOpen(S.sub === 'diary' ? 'diary' : S.sub === 'ideas' ? 'idea' : 'auto', S.sub === 'diary' ? (S.dpid || mePid()) : ''); };
  A.videa = function () { voiceOpen('idea', ''); };
  A.addidea = function () { ideaDialog(null); };
  A.edidea = function (id) { ideaDialog(find('ideas', id)); };
  A.ifil = function (v) { S.ifil = v; S.fx = 'n'; };
  A.dpick = function (v) { S.dpid = v; S.dpin = ''; S.dpinErr = ''; S.fx = 'n'; };
  A.dsetup = function () { setupDialog(S.dpid || mePid(), function () { render(); }); };
  A.dforgot = function () { forgotDialog(S.dpid || mePid()); };
  A.dlock = function () { vLockAll(); toast('Diary locked'); };
  A.dpinchg = function () { changePinDialog(S.dpid || mePid()); };
  A.dwrite = function () { entryDialog(S.dpid || mePid(), null); };
  A.dspeak = function () { voiceOpen('diary', S.dpid || mePid()); };
  A.dedit = function (id) { var pid = S.dpid || mePid(); entryDialog(pid, (V.plain[pid] || []).filter(function (e) { return e.id === id; })[0]); };
  A.dkey = function (k) {
    var pid = S.dpid || mePid(); S.dpin = S.dpin || ''; S.dpinErr = '';
    if (k === 'bk') S.dpin = S.dpin.slice(0, -1);
    else if (k === 'ok') {
      if (S.dpin.length < 4) { S.dpinErr = 'PIN is 4–8 digits'; render(); return; }
      var pin = S.dpin; S.dpin = ''; S.dpinErr = 'Checking…'; render();
      vUnlock(pid, pin).then(function () { S.dpinErr = ''; S.fx = 'v'; vLoad(); render(); }).catch(function (e) { S.dpinErr = e.message; render(); });
      return;
    } else if (S.dpin.length < 8) S.dpin += k;
  };
  A.vtest = function (json) { VS = { phase: 'review', mode: 'auto', pid: '', res: JSON.parse(json) }; voiceRender(); };
  /* auto-lock: 2 min idle, 15 s after leaving the Diary, or when the screen turns off */
  function vTouch() { V.act = Date.now(); }
  root.addEventListener('touchstart', vTouch, true); root.addEventListener('mousedown', vTouch, true);
  M.addEventListener('touchstart', vTouch, true); M.addEventListener('mousedown', vTouch, true); M.addEventListener('keydown', vTouch, true);
  setInterval(function () {
    if (!Object.keys(V.keys).length) return;
    if (S.sub === 'diary') V.inAt = Date.now();
    if (Date.now() - V.act > 120000 || (S.sub !== 'diary' && Date.now() - V.inAt > 15000 && !vQueue.length)) { if (S.modalOpen && M.querySelector('.dtext')) closeModal(); vLockAll(); }
    else if (S.sub === 'diary' && !V.loading && Date.now() - (V.lastLoad || 0) > 15000) vLoad();
  }, 3000);
  document.addEventListener('visibilitychange', function () { if (document.hidden) { if (S.modalOpen && M.querySelector('.dtext')) closeModal(); vLockAll(); } });

  root.addEventListener('click', function (ev) {
    var t = ev.target;
    while (t && t !== root) {
      var a = t.getAttribute && t.getAttribute('data-a');
      if (a && A[a]) { ev.stopPropagation(); if (a !== 'dial' && S.dial) { S.dial = false; lastHtml = ''; } A[a](t.getAttribute('data-v')); if (a !== 'dial' && !S.dial) render(); return; }
      t = t.parentNode;
    }
  });
  root.addEventListener('keydown', function (ev) {
    if (ev.target.id === 'clq' && ev.key === 'Enter') { CL.q = ev.target.value.trim(); render(); return; }
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
    if (mins === 9 * 60) S.data.bills.forEach(function (b) {
      if (b.remind === '' || b.remind == null) return;
      var dd = addD(d, +b.remind || 0); bOcc(b, dd, dd).forEach(function (o) {
        if (bPaid(b, o.k)) return; var id = 'b' + b.id + o.k + key(d); if (S.fired[id]) return; S.fired[id] = 1;
        notify('Bill: ' + b.t + ' ' + money(b.amount) + (+b.remind ? ' due ' + MON[o.d.getMonth()] + ' ' + o.d.getDate() : ' due today') + (b.autopay ? ' (autopay)' : ''));
      });
    });
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
  setInterval(function () { if (!document.hidden) { gUnread(); gEvents(true); if (S.view === 'calls') clLoad(true); } }, 120000);
  document.addEventListener('visibilitychange', function () { if (!document.hidden) { sync(); resolvePhotos(); } });
  window.__c2 = { S: S, render: render, A: A, V: V, voiceOpen: voiceOpen };
})();
