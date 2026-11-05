(() => {
  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('.project');
  filters.forEach(button => button.addEventListener('click', () => {
    const choice = button.dataset.filter;
    filters.forEach(b => {const active = b === button; b.classList.toggle('active', active); b.setAttribute('aria-pressed', String(active));});
    projects.forEach(p => {p.hidden = choice !== 'all' && p.dataset.kind !== choice;});
  }));
  const tiles = [...document.querySelectorAll('[data-image]')];
  const dialog = document.getElementById('lightbox');
  const image = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  let activeIndex = -1;
  function display(i) {
    activeIndex = (i + tiles.length) % tiles.length;
    const tile = tiles[activeIndex];
    image.src = tile.dataset.image;
    image.alt = tile.dataset.caption || 'Portfolio artwork';
    caption.textContent = tile.dataset.caption || 'Artwork detail';
    document.getElementById('lightbox-prev').disabled = tiles.length < 2;
    document.getElementById('lightbox-next').disabled = tiles.length < 2;
  }
  tiles.forEach((tile, i) => tile.addEventListener('click', () => { display(i); if (!dialog.open) dialog.showModal(); }));
  document.getElementById('lightbox-close').addEventListener('click', () => dialog.close());
  document.getElementById('lightbox-prev').addEventListener('click', () => display(activeIndex - 1));
  document.getElementById('lightbox-next').addEventListener('click', () => display(activeIndex + 1));
  dialog.addEventListener('click', (e) => {if (e.target === dialog) dialog.close();});
  window.addEventListener('keydown', e => {if(!dialog.open)return; if(e.key === 'ArrowRight') display(activeIndex+1);if(e.key === 'ArrowLeft') display(activeIndex-1);});
  let touchStart = null;
  dialog.addEventListener('touchstart',e => {touchStart = e.touches[0]?.clientX ?? null;},{passive:true});
  dialog.addEventListener('touchend',e => {if(touchStart===null)return;const delta=(e.changedTouches[0]?.clientX??touchStart)-touchStart;if(Math.abs(delta)>65)display(activeIndex+(delta<0?1:-1));touchStart=null;},{passive:true});
  document.getElementById('year').textContent = String(new Date().getFullYear());
})();
