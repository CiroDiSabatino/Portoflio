const galleries = {
  "order": {
    title: "The Order",
    images: [
      { src: "assets/project_order_01.jpg", caption: "Character lineup and role overview" },
      { src: "assets/project_order_02.jpg", caption: "Faith Bearer concept page" },
      { src: "assets/project_order_03.jpg", caption: "Stars Reader concept page" },
      { src: "assets/project_order_04.jpg", caption: "The Sergeant concept page" }
    ]
  },
  "ne-character": {
    title: "Negative Edge — Character Design",
    images: [
      { src: "assets/project_ne_char_01.jpg", caption: "Alioth final concept" },
      { src: "assets/project_ne_char_02.jpg", caption: "Silhouette exploration" },
      { src: "assets/project_ne_char_03.jpg", caption: "Movement study" },
      { src: "assets/project_ne_char_04.jpg", caption: "Helmet development" },
      { src: "assets/project_ne_char_05.jpg", caption: "Weapon and backpack variations" },
      { src: "assets/project_ne_char_06.jpg", caption: "Turnaround and armor views" },
      { src: "assets/project_ne_char_07.jpg", caption: "Head, arm and backpack details" }
    ]
  },
  "ne-ui": {
    title: "Negative Edge — Game UI",
    images: [
      { src: "assets/project_ne_ui_01.jpg", caption: "Project overview and goals" },
      { src: "assets/project_ne_ui_02.jpg", caption: "Challenge and solution pages" },
      { src: "assets/project_ne_ui_03.jpg", caption: "More challenge / solution breakdown" },
      { src: "assets/project_ne_ui_04.jpg", caption: "HUD components and visual assets" },
      { src: "assets/project_ne_ui_05.jpg", caption: "Weapon animation sheet" },
      { src: "assets/project_ne_ui_06.jpg", caption: "Inventory study" }
    ]
  },
  "bigbro": {
    title: "Big Bro App",
    images: [
      { src: "assets/project_bigbro_01.jpg", caption: "Project overview and goals" },
      { src: "assets/project_bigbro_02.jpg", caption: "Challenge, solution and palette" },
      { src: "assets/project_bigbro_03.jpg", caption: "Character customization and visual assets" },
      { src: "assets/project_bigbro_04.jpg", caption: "Mobile screens and flow" },
      { src: "assets/project_bigbro_05.jpg", caption: "UI components, badges and icons" }
    ]
  },
  "wave": {
    title: "Wave",
    images: [
      { src: "assets/project_wave_01.jpg", caption: "Project overview and goals" },
      { src: "assets/project_wave_02.jpg", caption: "Challenge and solution" },
      { src: "assets/project_wave_03.jpg", caption: "Visual assets" }
    ]
  },
  "imt": {
    title: "It's My Turn",
    images: [
      { src: "assets/project_imt_01.jpg", caption: "Project overview and goals" },
      { src: "assets/project_imt_02.jpg", caption: "Challenge and solution" },
      { src: "assets/project_imt_03.jpg", caption: "Icons and visual assets" },
      { src: "assets/project_imt_04.jpg", caption: "Lettering and additional assets" }
    ]
  }
};

const projectGrid = document.getElementById('project-grid');
const filterButtons = [...document.querySelectorAll('.filter')];
const projectCards = [...document.querySelectorAll('.project')];
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;
    filterButtons.forEach(btn => {
      const active = btn === button;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach(card => {
      const show = selected === 'all' || card.dataset.kind === selected;
      card.classList.toggle('hidden', !show);
    });
  });
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxProject = document.getElementById('lightbox-project');
const lightboxDots = document.getElementById('lightbox-dots');
const prevButton = document.getElementById('lightbox-prev');
const nextButton = document.getElementById('lightbox-next');
const closeButton = document.getElementById('lightbox-close');
const lightboxStage = document.getElementById('lightbox-stage');

let currentGalleryKey = null;
let currentIndex = 0;
let startX = null;
let startY = null;
let isPointerDown = false;

function renderDots(total, activeIndex) {
  lightboxDots.innerHTML = '';
  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = i === activeIndex ? 'active' : '';
    dot.setAttribute('aria-label', `Go to artwork ${i + 1}`);
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateLightbox();
    });
    lightboxDots.appendChild(dot);
  }
}

function updateLightbox() {
  const gallery = galleries[currentGalleryKey];
  if (!gallery) return;
  const item = gallery.images[currentIndex];
  lightboxImage.src = item.src;
  lightboxImage.alt = `${gallery.title} — ${item.caption}`;
  lightboxCaption.textContent = item.caption;
  lightboxProject.textContent = gallery.title;
  lightboxCounter.textContent = `${currentIndex + 1} / ${gallery.images.length}`;
  renderDots(gallery.images.length, currentIndex);
}

function openGallery(galleryKey) {
  currentGalleryKey = galleryKey;
  currentIndex = 0;
  updateLightbox();
  lightbox.showModal();
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  lightbox.close();
  document.body.style.overflow = '';
}

function showPrevious() {
  const gallery = galleries[currentGalleryKey];
  if (!gallery) return;
  currentIndex = (currentIndex - 1 + gallery.images.length) % gallery.images.length;
  updateLightbox();
}

function showNext() {
  const gallery = galleries[currentGalleryKey];
  if (!gallery) return;
  currentIndex = (currentIndex + 1) % gallery.images.length;
  updateLightbox();
}

projectCards.forEach(card => {
  const key = card.dataset.gallery;
  const trigger = card.querySelector('.project-cover');
  const button = card.querySelector('.open-gallery');
  trigger.addEventListener('click', () => openGallery(key));
  button.addEventListener('click', () => openGallery(key));
});

prevButton.addEventListener('click', showPrevious);
nextButton.addEventListener('click', showNext);
closeButton.addEventListener('click', closeGallery);

lightbox.addEventListener('click', (event) => {
  const rect = lightbox.getBoundingClientRect();
  const isOutside = event.clientY < rect.top || event.clientY > rect.bottom || event.clientX < rect.left || event.clientX > rect.right;
  if (isOutside) closeGallery();
});

lightbox.addEventListener('close', () => {
  document.body.style.overflow = '';
});

document.addEventListener('keydown', (event) => {
  if (!lightbox.open) return;
  if (event.key === 'ArrowLeft') showPrevious();
  if (event.key === 'ArrowRight') showNext();
  if (event.key === 'Escape') closeGallery();
});

function onPointerStart(clientX, clientY) {
  startX = clientX;
  startY = clientY;
  isPointerDown = true;
}

function onPointerEnd(clientX, clientY) {
  if (!isPointerDown || startX === null || startY === null) return;
  const dx = clientX - startX;
  const dy = clientY - startY;
  const threshold = 48;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > threshold) {
    if (dx < 0) showNext();
    if (dx > 0) showPrevious();
  }
  startX = null;
  startY = null;
  isPointerDown = false;
}

lightboxStage.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  onPointerStart(touch.clientX, touch.clientY);
}, { passive: true });
lightboxStage.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];
  onPointerEnd(touch.clientX, touch.clientY);
}, { passive: true });
lightboxStage.addEventListener('mousedown', (event) => {
  onPointerStart(event.clientX, event.clientY);
});
window.addEventListener('mouseup', (event) => {
  onPointerEnd(event.clientX, event.clientY);
});
