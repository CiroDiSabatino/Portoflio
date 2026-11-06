/*
 * Ciro Di Sabatino — portfolio refinement, 2026-11-06.
 * Replaces only Portfolio_Ciro_Mobile_Updated/script.js.
 * Keeps all existing galleries, covers, PDFs and project sections.
 * Restores the original editorial palette/typography and the two featured artworks.
 */
(() => {
  'use strict';

  // The historical site and the current site remain in their original GitHub paths.
  // Styling is intentionally bundled here so updating the portfolio requires one file.
  const restoredVisualStyle = `
:root {
  --bg:#101219; --bg-soft:#171a23; --card:#1b1e28;
  --line:#3a3d47; --text:#f1eee8; --muted:#aaaebc;
  --accent:#eb664d; --accent-soft:rgba(235,102,77,.14);
  --white-soft:#f0e4ce; --wrap:1180px;
}
html {scroll-padding-top:100px}
body {background:#101219; color:var(--text); font-family:Inter,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; -webkit-font-smoothing:antialiased; line-height:1.5}
::selection {background:#eb664d; color:#111}
.page-grain {opacity:.18; z-index:5; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.06'/%3E%3C/svg%3E")}
.topbar {z-index:1000; background:rgba(16,18,25,.92); border-bottom:1px solid #ffffff17; backdrop-filter:blur(18px)}
.topbar-inner {height:74px; padding:0; gap:18px}
.brand {gap:12px}
.brand-mark {font-size:22px; letter-spacing:-2px; font-weight:950; line-height:1}
.brand-dot {color:var(--accent)}
.brand-sub {font-size:9px; letter-spacing:2.1px; line-height:1.35; border-left:1px solid #ffffff50; padding-left:10px; font-weight:800; color:var(--text)}
.site-nav {gap:32px}
.site-nav a {font-size:13px; font-weight:650; color:var(--text)}
.site-nav a:hover {color:var(--accent)}
.site-nav .nav-contact {padding:11px 14px; border:1px solid #8e909a; border-radius:3px}
.eyebrow {display:block; margin:0 0 27px; color:#d9bb83; font:700 11px/1.5 ui-monospace,SFMono-Regular,Consolas,monospace; letter-spacing:2.2px}
.pulse {display:inline-block; width:7px; height:7px; margin-right:8px; box-shadow:0 0 0 5px #eb664d18}
.eyebrow-divider {padding:0 8px; color:#ffffff50; opacity:1}
.hero {grid-template-columns:1fr 1fr; min-height:640px; gap:50px; align-items:center; padding-top:48px; padding-bottom:88px}
.hero-copy {background:none; border:0; border-radius:0; box-shadow:none; padding:0; display:block}
.hero h1 {font-size:clamp(34px,4.25vw,63px); letter-spacing:-.06em; font-weight:950; line-height:1.04; margin:0 0 27px}
.hero h1 em {color:var(--accent)}
.hero h1 span {color:#f0e4ce}
.hero-intro {font-size:17px; color:#b7bac4; max-width:490px; line-height:1.75; margin:0 0 27px}
.hero-intro strong {color:#f1eee8; font-weight:650}
.hero-actions {gap:12px; margin-top:0}
.button {min-height:0; border:1px solid #6e7078; border-radius:3px; padding:15px 19px; gap:20px; justify-content:space-between; font-size:13px; font-weight:750; transition:background .2s,transform .2s}
.button:hover {transform:translateY(-2px)}
.button-primary {color:#17131a; background:var(--accent); border-color:var(--accent)}
.button-primary:hover {background:#fb806a}
.button-ghost {color:var(--text); background:transparent}
.button-ghost:hover {background:#242734}
.hero-footnote {display:flex; align-items:center; gap:16px; color:#7b808a; font:700 10px ui-monospace,monospace; letter-spacing:1.3px; margin-top:50px}
.footnote-rule {height:1px; width:70px; background:#777d83}
.hero-gallery {height:510px; position:relative; display:flex; align-items:center; min-height:0; padding:0; gap:0; grid-template-columns:none; background:none; border:0; border-radius:0; box-shadow:none; overflow:visible}
.hero-art {position:absolute; min-height:0; overflow:hidden; box-shadow:0 24px 70px #0007; border:1px solid #fff2; border-radius:0}
.hero-art img {width:100%; height:100%; object-fit:cover}
.hero-art-dark {width:68%; height:82%; left:0; top:7%; z-index:2; background:#343438; transform:rotate(-4deg)}
.hero-art-dark img {object-position:center}
.hero-art-light {width:62%; height:75%; right:0; bottom:2%; background:#ccae79; transform:rotate(5deg)}
.hero-art-light img {object-position:50% 50%}
.hero-art-label {position:absolute; bottom:0; left:0; right:0; display:block; padding:55px 16px 17px; background:linear-gradient(transparent,#090909c9); border:0; border-radius:0; font-size:15px; font-weight:900; letter-spacing:.5px; transform:translateZ(0)}
.hero-art-label small {display:block; color:#eee; font:700 9px ui-monospace,monospace; letter-spacing:1.5px; margin-top:4px}
.hero-corner-stamp {position:absolute; z-index:4; width:82px; height:82px; right:39%; top:1%; display:flex; align-items:center; justify-content:center; background:var(--accent); border-radius:50%; transform:rotate(-12deg); font-size:17px; line-height:.9; text-align:center; font-weight:900; color:#181820}
.hero-corner-stamp span {position:absolute; bottom:11px; right:15px; font-size:12px}
.work-section {background:#13151d; border-top:1px solid #ffffff20; padding:96px 0}
.section-top {display:flex; align-items:end; justify-content:space-between; gap:32px; margin-bottom:36px}
.section-title {font-size:clamp(38px,5vw,72px); line-height:1.02; font-weight:950; letter-spacing:-.06em}
.section-title em {color:var(--accent)}
.section-note {max-width:315px; margin:0 0 7px; font-size:14px; color:var(--muted); line-height:1.7}
.filter-bar {gap:5px; flex-wrap:nowrap; margin:0 0 30px; border-bottom:1px solid var(--line); overflow-x:auto; scrollbar-width:none}
.filter {border:0; border-bottom:2px solid transparent; background:transparent; border-radius:0; padding:13px 17px 14px; color:#979da9; font-size:13px; font-weight:750; white-space:nowrap}
.filter:first-child {padding-left:0}
.filter.active {color:#f0e4ce; background:none; border-bottom-color:var(--accent)}
.filter:hover {color:#f5ece3}
.filter span {font:700 10px ui-monospace,monospace; opacity:.55}
.project {background:#1b1e28; border-color:#ffffff18; box-shadow:none}
.project-category {color:#d9bb83}
.project-body p {color:#bac0cc}
.project-meta {color:#aaaebc}
.open-gallery {border-color:#6e7078}
.portfolio-downloads {padding:32px 0 0; margin-top:32px; border:0; border-top:1px solid var(--line); border-radius:0; background:none}
.portfolio-downloads p {font:700 11px ui-monospace,monospace; letter-spacing:1.4px; color:#aaa}
.about-section {background:#e8dfd0; color:#20222c; padding:100px 0}
.about-grid {grid-template-columns:1fr 1fr; gap:70px}
.about-heading-block,.about-copy {border:0; border-radius:0; background:none; padding:0}
.about-section .eyebrow {color:#9c4d36}
.about-section .section-title {font-size:clamp(38px,4.9vw,66px)}
.about-section .section-title em {color:#b04d3b}
.about-motto {font-size:13px; font-weight:900; letter-spacing:2px; margin-top:70px; border-top:2px solid #292d33; padding-top:20px; line-height:1.7}
.about-copy {padding-top:14px}
.about-lead {font-size:20px; line-height:1.55; color:#20222c}
.about-lead strong {color:#9c3e30}
.about-copy > p:nth-child(2) {font-size:15px; line-height:1.75; color:#555963}
.fact-group {display:block; margin-top:28px; border-top:1px solid #aaa39a}
.fact-group > div {display:grid; grid-template-columns:130px 1fr; gap:15px; border-bottom:1px solid #bcb5aa; padding:14px 0}
.fact-label {font:800 10px/1.5 ui-monospace,monospace; letter-spacing:1px; color:#745b50; margin-bottom:0}
.fact-text {font-size:13px; font-weight:650}
.inline-link {display:inline-flex; gap:12px; font-size:14px; font-weight:800; margin-top:25px; border-bottom:2px solid #b04d3b; padding-bottom:7px}
.contact-section {padding:104px 0 120px; background:radial-gradient(ellipse at 85% 88%,#58302755,transparent 42%),#14141b}
.contact-section .wrap {background:none; border:0; border-radius:0; padding:0}
.contact-title {font-size:clamp(48px,8vw,112px); line-height:.98; letter-spacing:-.07em; font-weight:950; margin:0 0 25px}
.contact-title em {color:var(--accent)}
.contact-section .wrap > p:not(.eyebrow) {font-size:16px; line-height:1.7; color:#bbbcc6; max-width:520px}
.contact-email {display:inline-block; margin:30px 0 35px; padding-bottom:12px; border-bottom:2px solid var(--accent); font-size:clamp(19px,3.3vw,40px); font-weight:800; letter-spacing:-.04em; overflow-wrap:anywhere}
.contact-email:hover {color:var(--accent)}
.social-links {display:flex; flex-wrap:wrap; gap:24px; margin-top:0}
.social-links a {border:0; border-radius:0; background:none; padding:0; min-height:0; color:#d0c6bd; font-size:13px; font-weight:750}
.social-links a:hover {color:var(--accent)}
.footer {background:#111218; border-top:1px solid #ffffff25; color:#7f8490; font:700 10px ui-monospace,monospace; letter-spacing:1px; padding:28px 0}
.footer .wrap {color:#7f8490; font-size:10px; gap:12px}
.footer a:hover {color:var(--accent)}
.mobile-bottom {z-index:950}
/* Fixed-height three-panel gallery: no jumping between tall and wide artwork. */
.lightbox {position:fixed; inset:0; width:100vw; max-width:100vw; height:100dvh; max-height:100dvh; border:0; padding:0; background:#0c0e14f4; color:var(--text); overflow:hidden}
.lightbox::backdrop {background:#000e; backdrop-filter:none}
.lightbox-shell {height:100%; width:100%; display:flex; flex-direction:column; overflow:hidden; border:0; border-radius:0; background:#101219; box-shadow:none}
.lightbox-toolbar {flex:0 0 auto; padding:15px clamp(14px,3vw,30px); background:#171921; border-bottom:1px solid #ffffff28}
.lightbox-stage {flex:1 1 0; min-height:0; width:100%; display:flex; align-items:center; justify-content:center; overflow:hidden; padding:12px clamp(12px,4vw,58px); touch-action:pan-y}
.gallery-viewport {width:min(100%,1200px); height:100%; min-height:0; overflow:hidden; touch-action:pan-y; user-select:none; -webkit-user-select:none; cursor:grab}
.gallery-viewport.dragging {cursor:grabbing}
.gallery-track {display:flex; width:300%; height:100%; transform:translate3d(-33.333333%,0,0); will-change:transform}
.gallery-slide {flex:0 0 33.333333%; width:33.333333%; height:100%; min-width:0; min-height:0; display:flex; align-items:center; justify-content:center; overflow:hidden}
.lightbox-stage .gallery-slide img {display:block; width:100%; height:100%; max-width:100%; max-height:100%; object-fit:contain; object-position:center center; user-select:none; -webkit-user-drag:none; pointer-events:none}
.gallery-nav {z-index:3; background:rgba(16,20,29,.78)}
.gallery-nav svg {stroke:var(--text)}
.lightbox-footer {flex:0 0 auto; border-top:1px solid #ffffff28; background:#171921}
.lightbox-dots button.active {background:var(--accent)}
.lightbox-close {color:var(--text)}
@media(max-width:920px) {
  .hero {grid-template-columns:1fr; gap:30px; padding-top:48px; padding-bottom:76px}
  .hero h1 {font-size:clamp(42px,7vw,72px)}
  .hero-intro {max-width:640px}
  .hero-gallery {height:380px; width:100%; max-width:630px; margin:auto}
  .hero-art-dark {width:58%; height:93%; top:2%}
  .hero-art-light {width:60%; height:80%; bottom:0}
  .hero-corner-stamp {right:46%}
  .about-grid {gap:35px}
  .about-lead {font-size:18px}
}
@media(max-width:720px) {
  .wrap {width:calc(100% - 38px)}
  .topbar-inner {height:65px}
  .brand-mark {font-size:20px}
  .brand-sub {font-size:8px; letter-spacing:1.5px}
  .site-nav {display:none}
  .hero {padding-top:44px; gap:31px; padding-bottom:64px; min-height:auto}
  .eyebrow {font-size:9px; letter-spacing:1.5px; margin-bottom:22px}
  .hero h1 {font-size:clamp(35px,10.3vw,64px); margin-bottom:19px}
  .hero-intro {font-size:15px; line-height:1.7}
  .hero-actions {gap:8px}
  .button {padding:14px; font-size:12px; gap:9px}
  .hero-footnote {margin-top:28px}
  .hero-gallery {height:315px}
  .hero-art-dark {width:63%; height:90%; top:5%}
  .hero-art-light {width:59%; height:77%; bottom:0}
  .hero-art-label {font-size:11px; padding:38px 10px 11px}
  .hero-art-label small {font-size:7px}
  .hero-corner-stamp {height:60px; width:60px; right:42%; top:0; font-size:13px}
  .work-section {padding:62px 0 70px}
  .section-top {display:block}
  .section-title {font-size:clamp(35px,10vw,54px)}
  .section-note {margin:17px 0 0; font-size:13px; max-width:95%}
  .filter-bar {margin-top:20px}
  .filter {padding:12px 13px; font-size:12px}
  .about-section {padding:68px 0}
  .about-grid {grid-template-columns:1fr; gap:38px}
  .about-motto {margin-top:25px; font-size:11px}
  .about-copy {padding:0}
  .about-lead {font-size:18px}
  .fact-group > div {grid-template-columns:100px 1fr; gap:10px}
  .fact-label {font-size:9px}
  .fact-text {font-size:12px}
  .contact-section {padding:72px 0 105px}
  .contact-title {font-size:clamp(45px,11.6vw,74px)}
  .contact-section .wrap > p:not(.eyebrow) {font-size:14px}
  .contact-email {font-size:clamp(18px,5.4vw,31px); margin:25px 0 29px}
  .footer {padding:24px 0 90px}
  .footer .wrap {flex-direction:column; align-items:start; gap:8px; font-size:9px}
  .mobile-bottom {position:fixed; left:0; right:0; bottom:0; border-radius:0; border-top:1px solid #fff2; background:#12141af2; padding:10px 15px calc(10px + env(safe-area-inset-bottom)); display:grid; grid-template-columns:1fr 1fr; gap:8px}
  .mobile-bottom a {border-radius:3px; background:#272a34}
  .mobile-bottom a:last-child {background:var(--accent); color:#141414}
  .lightbox {width:100vw; height:100dvh; max-width:100vw; max-height:100dvh}
  .lightbox-shell {width:100%; height:100%; border-radius:0}
  .lightbox-stage {flex:1 1 0; min-height:0; padding:12px 8px}
  .lightbox-stage .gallery-slide img {max-height:100%}
  .gallery-nav {display:none}
  .lightbox-toolbar {padding:14px}
  .lightbox-footer {flex-direction:column; align-items:flex-start; padding:12px 14px; gap:8px}
}
@media(max-width:370px) {
  .hero h1 {font-size:34px}
  .hero-gallery {height:270px}
  .hero-art-label {font-size:9px}
  .hero-intro {font-size:14px}
  .brand-sub {display:none}
  .section-title {font-size:35px}
}
@media(prefers-reduced-motion:reduce) {
  .button {transition:none}
  .gallery-track {transition:none !important}
}
`;
  const restoredStyleEl = document.createElement('style');
  restoredStyleEl.id = 'original-portfolio-style-refinement';
  restoredStyleEl.textContent = restoredVisualStyle;
  document.head.appendChild(restoredStyleEl);

  // Reuse the two ACTUAL images from the original portfolio (root assets).
  const darkHero = document.querySelector('.hero-art-dark img');
  const lightHero = document.querySelector('.hero-art-light img');
  if (darkHero) {
    darkHero.src = '../assets/hero_alioth.webp';
    darkHero.alt = 'Alioth character artwork from Negative Edge';
  }
  if (lightHero) {
    lightHero.src = '../assets/hero_fantasy.webp';
    lightHero.alt = 'Fantasy character artwork from The Order';
  }
  const heroGallery = document.querySelector('.hero-gallery');
  if (heroGallery && !heroGallery.querySelector('.hero-corner-stamp')) {
    const stamp = document.createElement('div');
    stamp.className = 'hero-corner-stamp';
    stamp.setAttribute('aria-hidden', 'true');
    stamp.innerHTML = '2D<br>ART<span>✳</span>';
    heroGallery.appendChild(stamp);
  }
  const heroCopy = document.querySelector('.hero-copy');
  if (heroCopy && !heroCopy.querySelector('.hero-footnote')) {
    const footnote = document.createElement('div');
    footnote.className = 'hero-footnote';
    footnote.innerHTML = '<span>SCROLL TO EXPLORE</span><span class="footnote-rule" aria-hidden="true"></span><span>01 / 04</span>';
    heroCopy.appendChild(footnote);
  }
  const brand = document.querySelector('.brand-mark');
  if (brand && !brand.querySelector('.brand-dot')) {
    const dot = document.createElement('span');
    dot.className = 'brand-dot';
    dot.textContent = '.';
    brand.appendChild(dot);
  }
  const contactNav = document.querySelector('.site-nav a[href="#contact"]');
  if (contactNav) contactNav.classList.add('nav-contact');

  // Proposed replacement: portfolio-focused rather than emphasizing academic background.
  const aboutHeading = document.getElementById('about-heading');
  if (aboutHeading) aboutHeading.innerHTML = 'ART WITH PURPOSE.<br><em>DESIGN FOR PLAY.</em>';

  const galleries = {
    order: { title: 'The Order', images: [
      ['assets/project_order_01.jpg','Character lineup and role overview'],
      ['assets/project_order_02.jpg','Faith Bearer concept page'],
      ['assets/project_order_03.jpg','Stars Reader concept page'],
      ['assets/project_order_04.jpg','The Sergeant concept page']
    ] },
    'ne-character': { title: 'Negative Edge — Character Design', images: [
      ['assets/project_ne_char_01.jpg','Alioth final concept'],
      ['assets/project_ne_char_02.jpg','Silhouette exploration'],
      ['assets/project_ne_char_03.jpg','Movement study'],
      ['assets/project_ne_char_04.jpg','Helmet development'],
      ['assets/project_ne_char_05.jpg','Weapon and backpack variations'],
      ['assets/project_ne_char_06.jpg','Turnaround and armor views'],
      ['assets/project_ne_char_07.jpg','Head, arm and backpack details']
    ] },
    'ne-ui': { title: 'Negative Edge — Game UI', images: [
      ['assets/project_ne_ui_01.jpg','Project overview and goals'],
      ['assets/project_ne_ui_02.jpg','Challenge and solution pages'],
      ['assets/project_ne_ui_03.jpg','More challenge / solution breakdown'],
      ['assets/project_ne_ui_04.jpg','HUD components and visual assets'],
      ['assets/project_ne_ui_05.jpg','Weapon animation sheet'],
      ['assets/project_ne_ui_06.jpg','Inventory study']
    ] },
    bigbro: { title: 'Big Bro App', images: [
      ['assets/project_bigbro_01.jpg','Project overview and goals'],
      ['assets/project_bigbro_02.jpg','Challenge, solution and palette'],
      ['assets/project_bigbro_03.jpg','Character customization and visual assets'],
      ['assets/project_bigbro_04.jpg','Mobile screens and flow'],
      ['assets/project_bigbro_05.jpg','UI components, badges and icons']
    ] },
    wave: { title: 'Wave', images: [
      ['assets/project_wave_01.jpg','Project overview and goals'],
      ['assets/project_wave_02.jpg','Challenge and solution'],
      ['assets/project_wave_03.jpg','Visual assets']
    ] },
    imt: { title: "It's My Turn", images: [
      ['assets/project_imt_01.jpg','Project overview and goals'],
      ['assets/project_imt_02.jpg','Challenge and solution'],
      ['assets/project_imt_03.jpg','Icons and visual assets'],
      ['assets/project_imt_04.jpg','Lettering and additional assets']
    ] }
  };

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const filterButtons = [...document.querySelectorAll('.filter')];
  const projectCards = [...document.querySelectorAll('.project')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(b => {
      const active = b === button;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach(card => card.classList.toggle('hidden', selected !== 'all' && card.dataset.kind !== selected));
  }));

  const lightbox = document.getElementById('lightbox');
  const stage = document.getElementById('lightbox-stage');
  const oldImage = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');
  const title = document.getElementById('lightbox-project');
  const dots = document.getElementById('lightbox-dots');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const closeBtn = document.getElementById('lightbox-close');
  if (!lightbox || !stage || !oldImage || !caption || !counter || !title || !dots || !prevBtn || !nextBtn || !closeBtn) return;

  const viewport = document.createElement('div');
  viewport.className = 'gallery-viewport';
  viewport.id = 'gallery-viewport';
  viewport.setAttribute('aria-label', 'Swipe through artwork');
  const track = document.createElement('div');
  track.className = 'gallery-track';
  const slideImages = [];
  for (let i = 0; i < 3; i += 1) {
    const slot = document.createElement('div');
    slot.className = 'gallery-slide';
    const img = document.createElement('img');
    img.draggable = false;
    img.decoding = 'async';
    slot.appendChild(img);
    track.appendChild(slot);
    slideImages.push(img);
  }
  viewport.appendChild(track);
  oldImage.replaceWith(viewport);
  dots.removeAttribute('aria-hidden');

  const centerPosition = '-33.333333%';
  const nextPosition = '-66.666666%';
  const prevPosition = '0%';
  const motionReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const durationMs = motionReduced ? 0 : 340;
  const ease = 'cubic-bezier(.22,.78,.24,1)';
  let currentGallery = null;
  let currentIndex = 0;
  let moving = false;
  let pendingIndex = null;
  let pointerId = null;
  let startX = 0;
  let startY = 0;
  let dragX = 0;

  function wrap(index, length) { return ((index % length) + length) % length; }
  function gallery() { return galleries[currentGallery]; }
  function snapCenter() {
    track.style.transition = 'none';
    track.style.transform = `translate3d(${centerPosition},0,0)`;
  }
  function renderDots() {
    const g = gallery();
    if (!g) return;
    dots.replaceChildren();
    g.images.forEach((_, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = i === currentIndex ? 'active' : '';
      button.setAttribute('aria-label', `Show page ${i + 1} of ${g.images.length}`);
      button.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
      button.addEventListener('click', () => goTo(i));
      dots.appendChild(button);
    });
  }
  function renderCurrent() {
    const g = gallery();
    if (!g) return;
    [-1, 0, 1].forEach((offset, slot) => {
      const item = g.images[wrap(currentIndex + offset, g.images.length)];
      slideImages[slot].src = item[0];
      slideImages[slot].alt = `${g.title} — ${item[1]}`;
    });
    const item = g.images[currentIndex];
    title.textContent = g.title;
    caption.textContent = item[1];
    counter.textContent = `${currentIndex + 1} / ${g.images.length}`;
    renderDots();
    snapCenter();
  }
  function finishMovement() {
    if (!moving) return;
    if (pendingIndex !== null) currentIndex = pendingIndex;
    pendingIndex = null;
    moving = false;
    viewport.classList.remove('dragging');
    renderCurrent();
  }
  track.addEventListener('transitionend', event => {
    if (event.target === track && event.propertyName === 'transform') finishMovement();
  });
  function transitionTo(targetPosition, targetIndex) {
    if (moving) return;
    moving = true;
    pendingIndex = targetIndex;
    if (durationMs === 0) {
      finishMovement();
      return;
    }
    track.style.transition = `transform ${durationMs}ms ${ease}`;
    // A one-frame separation ensures that the browser animates, even after a snap.
    requestAnimationFrame(() => { track.style.transform = `translate3d(${targetPosition},0,0)`; });
  }
  function move(direction) {
    const g = gallery();
    if (!g || g.images.length < 2 || moving) return;
    transitionTo(direction > 0 ? nextPosition : prevPosition,
      wrap(currentIndex + (direction > 0 ? 1 : -1), g.images.length));
  }
  function goTo(index) {
    const g = gallery();
    if (!g || moving || index === currentIndex) return;
    const len = g.images.length;
    if (index === wrap(currentIndex + 1, len)) move(1);
    else if (index === wrap(currentIndex - 1, len)) move(-1);
    else { currentIndex = index; renderCurrent(); }
  }
  function openGallery(key) {
    if (!galleries[key]) return;
    currentGallery = key;
    currentIndex = 0;
    moving = false;
    pendingIndex = null;
    renderCurrent();
    if (!lightbox.open) lightbox.showModal();
    document.body.style.overflow = 'hidden';
  }
  function closeGallery() {
    if (lightbox.open) lightbox.close();
    document.body.style.overflow = '';
    pointerId = null;
    viewport.classList.remove('dragging');
  }

  projectCards.forEach(card => {
    const key = card.dataset.gallery;
    card.querySelector('.project-cover')?.addEventListener('click', () => openGallery(key));
    card.querySelector('.open-gallery')?.addEventListener('click', () => openGallery(key));
  });
  prevBtn.addEventListener('click', () => move(-1));
  nextBtn.addEventListener('click', () => move(1));
  closeBtn.addEventListener('click', closeGallery);
  lightbox.addEventListener('close', () => {
    document.body.style.overflow = '';
    pointerId = null;
  });
  document.addEventListener('keydown', event => {
    if (!lightbox.open) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
    if (event.key === 'Escape') { event.preventDefault(); closeGallery(); }
  });

  viewport.addEventListener('pointerdown', event => {
    if (!lightbox.open || moving || (event.pointerType === 'mouse' && event.button !== 0)) return;
    pointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    dragX = 0;
    try { viewport.setPointerCapture?.(event.pointerId); } catch (_) { /* Synthetic or cancelled pointers do not require capture. */ }
    viewport.classList.add('dragging');
    track.style.transition = 'none';
  });
  viewport.addEventListener('pointermove', event => {
    if (event.pointerId !== pointerId || moving) return;
    const x = event.clientX - startX;
    const y = event.clientY - startY;
    if (Math.abs(y) > Math.abs(x) * 1.5 && Math.abs(y) > 10) return;
    dragX = Math.max(-viewport.clientWidth * .88, Math.min(viewport.clientWidth * .88, x));
    track.style.transform = `translate3d(calc(${centerPosition} + ${dragX}px),0,0)`;
  });
  function releasePointer(event, cancelled = false) {
    if (event.pointerId !== pointerId) return;
    const dx = cancelled ? 0 : event.clientX - startX;
    const dy = cancelled ? 0 : event.clientY - startY;
    const threshold = Math.max(42, Math.min(90, viewport.clientWidth * .14));
    pointerId = null;
    viewport.classList.remove('dragging');
    if (!cancelled && Math.abs(dx) >= threshold && Math.abs(dx) > Math.abs(dy) * 1.15) {
      move(dx < 0 ? 1 : -1);
    } else if (dragX !== 0) {
      transitionTo(centerPosition, currentIndex);
    }
    dragX = 0;
  }
  viewport.addEventListener('pointerup', event => releasePointer(event));
  viewport.addEventListener('pointercancel', event => releasePointer(event, true));
})();
