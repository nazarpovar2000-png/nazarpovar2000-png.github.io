(function () {
  var cv = null, cx = null, W = 0, H = 0, parts = [], rockets = [], rings = [], timers = [];
  var flash = 0, shakeT = 0, running = false, t0 = 0, raf = 0, txtEl = null;
  var COLS = ['#ff4d4d', '#ffb020', '#ffe14d', '#4dff88', '#4dd2ff', '#6b8cff', '#ff6bd6', '#ffffff'];

  function rnd(a, b) { return a + Math.random() * (b - a); }
  function pick() { return COLS[Math.floor(Math.random() * COLS.length)]; }

  function size() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function setup() {
    if (cv) return;
    cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;pointer-events:none;z-index:9999';
    document.body.appendChild(cv);
    cx = cv.getContext('2d');
    size();
    window.addEventListener('resize', size);
    var st = document.createElement('style');
    st.textContent = '@keyframes fxTxt{0%{opacity:0;transform:translate(-50%,-50%) scale(.4)}12%{opacity:1;transform:translate(-50%,-50%) scale(1.1)}22%{transform:translate(-50%,-50%) scale(1)}78%{opacity:1}100%{opacity:0}}'
      + '#fxtxt{position:fixed;left:50%;top:42%;z-index:10000;pointer-events:none;color:#fff;font:800 2.4rem/1.2 system-ui,sans-serif;text-align:center;text-shadow:0 0 18px rgba(255,200,80,.9),0 2px 6px rgba(0,0,0,.5);white-space:nowrap;opacity:0}';
    document.head.appendChild(st);
  }

  function add(ms, fn) {
    timers.push({ t: ms + (performance.now() - t0), fn: fn });
    timers.sort(function (a, b) { return a.t - b.t; });
  }

  function burst(x, y, n, sp, sz, col) {
    for (var i = 0; i < n; i++) {
      var a = Math.random() * Math.PI * 2, s = rnd(sp * 0.35, sp);
      parts.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1, dec: rnd(0.011, 0.02), r: rnd(sz * 0.6, sz), c: col || pick() });
    }
  }

  function rocket(x, big) {
    rockets.push({ x: x, y: H + 10, vy: -rnd(H * 0.028, H * 0.036), ty: rnd(H * 0.12, H * 0.42), c: pick(), big: !!big });
  }

  function ring(x, y, v, c) {
    rings.push({ x: x, y: y, r: 10, v: v, max: Math.max(W, H) * 0.9, c: c });
  }

  function frame(now) {
    var el = now - t0;
    while (timers.length && timers[0].t <= el) timers.shift().fn();
    cx.clearRect(0, 0, W, H);

    if (flash > 0) { cx.globalAlpha = flash; cx.fillStyle = '#fff8e6'; cx.fillRect(0, 0, W, H); flash = Math.max(0, flash - 0.035); }

    for (var r = rockets.length - 1; r >= 0; r--) {
      var k = rockets[r];
      k.y += k.vy; k.vy *= 0.995;
      parts.push({ x: k.x, y: k.y, vx: rnd(-0.4, 0.4), vy: rnd(0, 0.6), life: 0.7, dec: 0.05, r: 1.8, c: k.c });
      cx.globalAlpha = 1; cx.fillStyle = k.c; cx.beginPath(); cx.arc(k.x, k.y, 2.5, 0, 6.283); cx.fill();
      if (k.y <= k.ty) {
        if (k.big) { burst(k.x, k.y, 160, 13, 4.2, null); burst(k.x, k.y, 60, 7, 2.5, '#ffffff'); }
        else burst(k.x, k.y, 70, 6.5, 3, k.c);
        rockets.splice(r, 1);
      }
    }

    for (var q = rings.length - 1; q >= 0; q--) {
      var g = rings[q]; g.r += g.v;
      var a = Math.max(0, 1 - g.r / g.max);
      cx.globalAlpha = a * 0.8; cx.strokeStyle = g.c; cx.lineWidth = 6 * a + 1;
      cx.beginPath(); cx.arc(g.x, g.y, g.r, 0, 6.283); cx.stroke();
      if (g.r >= g.max) rings.splice(q, 1);
    }

    for (var i = parts.length - 1; i >= 0; i--) {
      var p = parts[i];
      p.vx *= 0.985; p.vy = p.vy * 0.985 + 0.06; p.x += p.vx; p.y += p.vy; p.life -= p.dec;
      if (p.life <= 0) { parts.splice(i, 1); continue; }
      cx.globalAlpha = Math.min(1, p.life); cx.fillStyle = p.c;
      cx.beginPath(); cx.arc(p.x, p.y, Math.max(0.6, p.r * p.life), 0, 6.283); cx.fill();
    }
    cx.globalAlpha = 1;

    var app = document.getElementById('app');
    if (shakeT > 0) {
      if (app) app.style.transform = 'translate(' + (rnd(-9, 9) * shakeT).toFixed(1) + 'px,' + (rnd(-9, 9) * shakeT).toFixed(1) + 'px)';
      shakeT = Math.max(0, shakeT - 0.04);
    } else if (app && app.style.transform) app.style.transform = '';

    if (timers.length || parts.length || rockets.length || rings.length || flash > 0 || shakeT > 0) {
      raf = requestAnimationFrame(frame);
    } else {
      running = false; cx.clearRect(0, 0, W, H);
    }
  }

  function start() {
    if (running) return;
    running = true; t0 = performance.now();
    raf = requestAnimationFrame(frame);
  }

  // Салют: несколько ракет по всему экрану
  function fireworks() {
    setup(); start();
    for (var i = 0; i < 4; i++) (function (i) { add(i * rnd(160, 300), function () { rocket(rnd(W * 0.15, W * 0.85), false); }); })(i);
  }

  // Большая бомба: когда все задания дня выполнены
  function bomb(msg) {
    setup(); start();
    add(0, function () {
      flash = 0.9; shakeT = 1;
      ring(W / 2, H / 2, 24, '#ffd27a');
      burst(W / 2, H / 2, 200, 18, 5, null);
      if (txtEl) txtEl.remove();
      txtEl = document.createElement('div'); txtEl.id = 'fxtxt';
      txtEl.style.animation = 'fxTxt 3.4s ease-out forwards';
      txtEl.textContent = msg || 'Все задания выполнены!';
      document.body.appendChild(txtEl);
    });
    add(350, function () { burst(W * 0.25, H * 0.3, 110, 12, 4, null); burst(W * 0.75, H * 0.28, 110, 12, 4, null); });
    add(750, function () { ring(W / 2, H / 2, 18, '#ff8a3d'); flash = 0.45; shakeT = 0.7; });
    add(1100, function () { burst(W * 0.5, H * 0.18, 130, 11, 4, null); });
    add(1500, function () { burst(W * 0.18, H * 0.55, 90, 10, 3.5, null); burst(W * 0.82, H * 0.5, 90, 10, 3.5, null); });
    add(3600, function () { if (txtEl) { txtEl.remove(); txtEl = null; } });
  }

  window.C2FX = { fireworks: fireworks, bomb: bomb };
})();
