  // ─── FILTER ──────────────────────────────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.gallery-item');
  const countEl    = document.getElementById('visibleCount');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      let count = 0;
      items.forEach(item => {
        const show = filter === 'all' || item.dataset.cat === filter;
        item.style.display = show ? '' : 'none';
        if (show) count++;
      });
      countEl.textContent = count;
    });
  });

  // ─── LIGHTBOX ─────────────────────────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lbImg');
  const lbTag    = document.getElementById('lbTag');
  const lbTitle  = document.getElementById('lbTitle');
  const lbDesc   = document.getElementById('lbDesc');
  const lbCounter= document.getElementById('lbCounter');

  let currentIndex = 0;
  let visibleItems = [];

  function getVisible() {
    return [...items].filter(i => i.style.display !== 'none');
  }

  function openLightbox(index) {
    visibleItems = getVisible();
    currentIndex = index;
    showLightboxItem();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function showLightboxItem() {
    const item = visibleItems[currentIndex];
    if (!item) return;
    const img = item.querySelector('img');
    lbImg.src   = img.src;
    lbImg.alt   = img.alt;
    lbTag.textContent   = item.dataset.cat || '';
    lbTitle.textContent = item.dataset.title || '';
    lbDesc.textContent  = item.dataset.desc  || '';
    lbCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach((item, globalIdx) => {
    item.addEventListener('click', () => {
      visibleItems = getVisible();
      const idx = visibleItems.indexOf(item);
      if (idx !== -1) openLightbox(idx);
    });
  });

  document.getElementById('lbClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.getElementById('lbPrev').addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    showLightboxItem();
  });

  document.getElementById('lbNext').addEventListener('click', e => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % visibleItems.length;
    showLightboxItem();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'ArrowLeft')  { currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length; showLightboxItem(); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % visibleItems.length; showLightboxItem(); }
    if (e.key === 'Escape')     closeLightbox();
  });