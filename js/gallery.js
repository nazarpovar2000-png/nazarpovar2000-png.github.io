/* NEZER gallery v2 — project cards + full project viewer */
(function () {
  var cardsEl = document.getElementById("gal-cards");
  var gridEl = cardsEl;
  if (!cardsEl) return;

  var DATA = null;
  var viewer = null;

  function base() { return "images/gallery/projects/"; }

  // cache-busting for watermarked images (Cloudflare caches /images for 30 days)
  function img(f) { return base() + f + "?wm=3"; }
  function thumb(f) { return base() + f.replace(/\.jpg$/, "-t.webp"); }
  function big(f) { return base() + f.replace(/\.jpg$/, "-l.webp"); }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function cardHTML(p, i) {
    var n = p.before.length + p.after.length;
    return '<article class="pcard" data-i="' + i + '" data-cat="' + esc(p.cat) + '" tabindex="0" role="button" aria-label="Open project: ' + esc(p.title) + '">' +
      '<div class="pair">' +
        '<div class="ph"><span class="tag">BEFORE</span><img src="' + thumb(p.before[0]) + '" alt="' + esc(p.title) + ' before" loading="lazy" width="600" height="450"></div>' +
        '<div class="ph"><span class="tag a">AFTER</span><img src="' + thumb(p.after[0]) + '" alt="' + esc(p.title) + ' after" loading="lazy" width="600" height="450"></div>' +
      '</div>' +
      '<div class="cap"><b>' + esc(p.title) + '</b><span class="n">' + n + ' photos</span></div>' +
    '</article>';
  }

  function buildViewer() {
    var d = document.createElement("div");
    d.className = "pv";
    d.innerHTML =
      '<div class="pv-in">' +
        '<div class="pv-top"><div><h3 id="pv-title"></h3><div class="sub" id="pv-sub"></div></div>' +
          '<button class="pv-x" type="button" aria-label="Close">&times;</button></div>' +
        '<div class="pv-stage">' +
          '<button class="pv-nav pv-prev" type="button" aria-label="Previous">&lsaquo;</button>' +
          '<img class="pv-img" id="pv-img" alt="">' +
          '<button class="pv-nav pv-next" type="button" aria-label="Next">&rsaquo;</button>' +
        '</div>' +
        '<div class="pv-bot">' +
          '<div class="pv-mode"><button type="button" data-mode="all" class="on">All photos</button>' +
            '<button type="button" data-mode="before">Before</button>' +
            '<button type="button" data-mode="after">After</button></div>' +
          '<div class="pv-count" id="pv-count"></div>' +
          '<div class="pv-thumbs" id="pv-thumbs"></div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(d);
    return d;
  }

  var state = { proj: null, mode: "all", idx: 0, list: [] };

  function rebuildList() {
    var p = state.proj;
    if (state.mode === "before") state.list = p.before.slice();
    else if (state.mode === "after") state.list = p.after.slice();
    else state.list = p.before.concat(p.after);
    if (state.idx >= state.list.length) state.idx = 0;
  }

  function render() {
    var p = state.proj;
    if (!p || !viewer) return;
    rebuildList();
    var src = big(state.list[state.idx]);
    var img = viewer.querySelector("#pv-img");
    img.src = src;
    var isAfter = state.mode === "after" || (state.mode === "all" && state.idx >= p.before.length);
    img.alt = p.title + (isAfter ? " after" : " before");
    viewer.querySelector("#pv-title").textContent = p.title;
    viewer.querySelector("#pv-sub").textContent = p.cat + " \u00b7 " + (isAfter ? "after" : "before") +
      " \u00b7 " + (state.idx + 1) + " / " + state.list.length;
    viewer.querySelector("#pv-count").textContent = (isAfter ? "AFTER" : "BEFORE") + "  \u00b7  " + (state.idx + 1) + " of " + state.list.length;

    var th = viewer.querySelector("#pv-thumbs");
    th.innerHTML = state.list.map(function (f, i) {
      return '<img src="' + thumb(f) + '" data-i="' + i + '" class="' + (i === state.idx ? "on" : "") + '" alt="" loading="lazy">';
    }).join("");

    viewer.querySelectorAll(".pv-mode button").forEach(function (b) {
      b.classList.toggle("on", b.dataset.mode === state.mode);
    });
  }

  function open(i) {
    viewer = viewer || buildViewer();
    state.proj = DATA[i];
    state.mode = "all";
    state.idx = 0;
    viewer.classList.add("on");
    document.body.style.overflow = "hidden";
    render();
    if (!viewer._wired) { wire(); viewer._wired = true; }
  }

  function close() {
    if (!viewer) return;
    viewer.classList.remove("on");
    document.body.style.overflow = "";
  }

  function step(d) {
    var n = state.list.length;
    if (!n) return;
    state.idx = (state.idx + d + n) % n;
    render();
  }

  function wire() {
    viewer.querySelector(".pv-x").addEventListener("click", close);
    viewer.addEventListener("click", function (e) { if (e.target === viewer) close(); });
    viewer.querySelector(".pv-prev").addEventListener("click", function () { step(-1); });
    viewer.querySelector(".pv-next").addEventListener("click", function () { step(1); });
    viewer.querySelectorAll(".pv-mode button").forEach(function (b) {
      b.addEventListener("click", function () {
        state.mode = b.dataset.mode; state.idx = 0; render();
      });
    });
    viewer.querySelector("#pv-thumbs").addEventListener("click", function (e) {
      var t = e.target.closest("img[data-i]");
      if (t) { state.idx = +t.dataset.i; render(); }
    });
    document.addEventListener("keydown", function (e) {
      if (!viewer.classList.contains("on")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
    });
    // swipe
    var x0 = null;
    var stage = viewer.querySelector(".pv-stage");
    stage.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) step(dx > 0 ? -1 : 1);
      x0 = null;
    }, { passive: true });
  }

  function wireCards() {
    Array.prototype.forEach.call(cardsEl.querySelectorAll(".pcard"), function (el) {
      var i = +el.dataset.i;
      el.addEventListener("click", function () { open(i); });
      el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); } });
    });
  }

  function renderCards() {
    if (!gridEl) return;
    if (cardsEl.querySelector(".pcard")) { wireCards(); return; }
    var wide = DATA.filter(function (p) { return p.hero === "wide"; });
    var detail = DATA.filter(function (p) { return p.hero !== "wide"; });
    cardsEl.innerHTML = wide.map(function (p) { return cardHTML(p, DATA.indexOf(p)); }).join("") +
      (detail.length ? '<div style="grid-column:1/-1;text-align:center;margin:44px 0 6px"><span class="eyebrow">Details &amp; craftsmanship</span><h2 class="h2" style="margin-top:8px">Close-up on the work</h2><p style="color:#5b6570;max-width:620px;margin:10px auto 0">Detail shots from other projects — the same crew, the same standard. Tap any card to see every photo from that job.</p></div>' +
        detail.map(function (p) { return cardHTML(p, DATA.indexOf(p)); }).join("") : "");
    Array.prototype.forEach.call(cardsEl.querySelectorAll(".pcard"), function (el) {
      var i = +el.dataset.i;
      el.addEventListener("click", function () { open(i); });
      el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); } });
    });
  }

  // filters
  document.querySelectorAll(".filters button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".filters button").forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on");
      var c = b.dataset.cat;
      Array.prototype.forEach.call(cardsEl.querySelectorAll(".pcard"), function (el) {
        el.style.display = (c === "All" || el.dataset.cat === c) ? "" : "none";
      });
    });
  });

  fetch(base() + "cards.json").then(function (r) { return r.json(); }).then(function (d) {
    DATA = d; renderCards();
  }).catch(function (err) {
    console.error("gallery load failed", err);
    cardsEl.innerHTML = '<p style="color:#5b6570">Gallery is loading slowly — refresh the page.</p>';
  });
})();
