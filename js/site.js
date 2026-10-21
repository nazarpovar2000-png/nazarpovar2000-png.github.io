// Shared header/footer + small behaviors for NEZER Repair & Remodeling
(function(){
  const PHONE='425-287-4342', TEL='tel:4252874342', EMAIL='nezer.remodeling@gmail.com';
  const page=document.body.dataset.page||'';
  const links=[['index','Home','index.html'],['about','About Us','about.html'],['services','Services','services.html'],['gallery','Gallery','gallery.html'],['blog','Blog','blog.html'],['service-area','Service Area','service-area.html'],['contact','Contact','contact.html']];

  const hdr=document.getElementById('site-header');
  if(hdr) hdr.outerHTML=`<header class="hdr"><div class="hdr-in">
    <a class="brand" href="index.html"><b>NEZER</b><i>REPAIR &amp; REMODELING</i></a>
    <nav class="nav" id="nav">${links.map(([k,l,h])=>`<a href="${h}"${k===page?' class="on"':''}>${l}</a>`).join('')}</nav>
    <div class="hdr-r">
      <a class="btn btn-teal" href="estimate.html"><span class="ms">request_quote</span><span class="t">Get a Free Estimate</span></a>
      <button class="burger" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')"><span class="ms">menu</span></button>
    </div></div></header>`;

  const ftr=document.getElementById('site-footer');
  if(ftr) ftr.outerHTML=`<footer class="ftr"><div class="wrap">
    <div class="ftr-in">
      <div style="flex:2 1 260px">
        <a class="brand" href="index.html"><b>NEZER</b><i>REPAIR &amp; REMODELING</i></a>
        <p style="font-size:14px;line-height:1.65;color:#8b96a2;max-width:320px;margin:16px 0 0">Skilled, dependable repair and remodeling work across Everett, Snohomish County, and King County.</p>
        <div class="soc"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">ig</a><a href="#" aria-label="Google">g</a></div>
      </div>
      <div class="col" style="flex:1 1 130px"><h4>Company</h4>${links.filter(l=>l[0]!=='estimate').map(([k,l,h])=>`<a href="${h}">${l}</a>`).join('')}</div>
      <div class="col" style="flex:1 1 150px"><h4>Popular Services</h4><a href="services/deck-building.html">Deck Building</a><a href="services/bathroom-remodeling.html">Bathroom Remodel</a><a href="services/flooring-installation.html">Flooring</a><a href="services/carpentry-work.html">Carpentry</a><a href="services/home-repairs.html">Home Repairs</a></div>
      <div class="col" style="flex:1.4 1 220px"><h4>Get in touch</h4>
        <a href="${TEL}" style="color:#e6eaee;font-weight:600"><span class="ms">call</span>${PHONE}</a>
        <a href="mailto:${EMAIL}" style="word-break:break-all"><span class="ms">mail</span>${EMAIL}</a>
        <span style="color:#9aa5b1"><span class="ms">schedule</span>Mon–Sat · 7:30am – 6:00pm</span>
      </div>
    </div>
    <div class="ftr-b"><span>© ${new Date().getFullYear()} NEZER Repair &amp; Remodeling · Licensed &amp; Insured</span><span>Serving within ~40 miles of Everett, WA</span></div>
  </div></footer>`;

  // Gallery filter
  document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('on',x===b));
    const c=b.dataset.cat;
    document.querySelectorAll('.gitem').forEach(g=>g.style.display=(c==='All'||g.dataset.cat===c)?'':'none');
  }));

  // Photo upload preview
  document.querySelectorAll('.drop input[type=file]').forEach(inp=>inp.addEventListener('change',()=>{
    const box=inp.closest('.field').querySelector('.thumbs'); box.innerHTML='';
    [...inp.files].slice(0,10).forEach(f=>{const i=new Image();i.src=URL.createObjectURL(f);box.appendChild(i);});
  }));

  // Forms: submit to our own backend, show thank-you on success
  document.querySelectorAll('form[data-ok]').forEach(f=>f.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=f.querySelector('button[type=submit]');
    const ok=document.getElementById(f.dataset.ok);
    if(btn){btn.disabled=true;btn.dataset.label=btn.innerHTML;btn.innerHTML='Sending…';}
    try{
      const res=await fetch(f.action,{method:'POST',body:new FormData(f)});
      const data=await res.json().catch(()=>({}));
      if(!res.ok||!data.ok) throw new Error(data.error||'Request failed');
      ok.textContent=f.dataset.thanks||ok.textContent;
      ok.classList.add('show'); f.reset();
      const box=f.querySelector('.thumbs'); if(box) box.innerHTML='';
    }catch(err){
      alert(err.message||'Something went wrong. Please call 425-287-4342.');
    }finally{
      if(btn){btn.disabled=false;btn.innerHTML=btn.dataset.label||btn.innerHTML;}
    }
  }));

})();

/* FAQ accordion */
document.addEventListener("click", function (e) {
  var h = e.target.closest(".faq-item h3");
  if (!h) return;
  var item = h.parentElement;
  var wasOpen = item.classList.contains("open");
  item.parentElement.querySelectorAll(".faq-item.open").forEach(function (o) {
    o.classList.remove("open");
  });
  if (!wasOpen) item.classList.add("open");
});
