/* ═══════════════════════════════════════════════════════
   DESTINATIONS DATA ARRAY
   Each object has:
     name     – destination name (searchable)
     location – municipality or city (searchable)
     category – tourism category (searchable)
     desc     – short description shown on the card
     img      – image filename from the /img/ folder
     link     – page to navigate to
═══════════════════════════════════════════════════════ */
const BASE = "https://enrikkimiguel-debug.github.io/Visit-Davao-del-Norte/img/";

const destinations = [

  /* ── BEACHES ─────────────────────────────────────────── */
  {
    name:     "Canibad Beach",
    location: "Island Garden City of Samal",
    category: "Beach",
    desc:     "Secret cliff-side paradise on Samal Island — 195 steps down to crystal-clear turquoise waters and dramatic white sand.",
    img:      "canibad.webp",
    link:     "beach.html"
  },
  {
    name:     "Kaputian Beach Park Resort",
    location: "Island Garden City of Samal",
    category: "Beach",
    desc:     "Premier beachfront resort with a wide stretch of white sand and exceptionally clear waters perfect for swimming and water sports.",
    img:      "kaputian.jpg",
    link:     "beach.html"
  },
  {
    name:     "Banana Beach Resort",
    location: "City of Tagum",
    category: "Beach",
    desc:     "The world's only beach resort within a banana plantation — 4.5 km of flat seabed perfect for kayaking and skimboarding.",
    img:      "banana-beach.jpg",
    link:     "beach.html"
  },
  {
    name:     "Alorro Crystal Beach",
    location: "Island Garden City of Samal",
    category: "Beach",
    desc:     "Family-run paradise in Kaputian, Samal — famous for crystal-clear snorkeling waters and vibrant coral reefs just offshore.",
    img:      "alorro.jpg",
    link:     "beach.html"
  },
  {
    name:     "Pearl Farm Beach Resort",
    location: "Island Garden City of Samal",
    category: "Luxury",
    desc:     "Iconic 4-star stilted oceanfront villas over the Davao Gulf — pearl farming experiences, world-class spa, and fine dining.",
    img:      "pearl-farm-beach.webp",
    link:     "luxury.html"
  },

  /* ── WATERFALLS ──────────────────────────────────────── */
  {
    name:     "Hagimit Falls",
    location: "Island Garden City of Samal",
    category: "Waterfalls",
    desc:     "A captivating waterfall on Samal Island set within lush tropical forest — a perfect day-trip nature escape.",
    img:      "hagimit-falls.webp",
    link:     "waterfalls.html"
  },
  {
    name:     "Tagtugunan Falls",
    location: "San Isidro",
    category: "Waterfalls",
    desc:     "Deep jungle catchment pool with cascading falls — swim directly beneath the water for an unforgettable experience.",
    img:      "tugtugunan.webp",
    link:     "san-isidro.html"
  },
  {
    name:     "Sambulawan Falls",
    location: "San Isidro",
    category: "Waterfalls",
    desc:     "A magnificent three-tiered waterfall named after the Sambulawan tree — part of San Isidro's eco-tourism corridor.",
    img:      "sambulawan.webp",
    link:     "san-isidro.html"
  },
  {
    name:     "Tagbaobo Falls",
    location: "Island Garden City of Samal",
    category: "Waterfalls",
    desc:     "Also known as Magongawon Falls — a secluded hidden gem on Samal Island increasingly recognized by adventurous travelers.",
    img:      "tagbaobo-falls.webp",
    link:     "waterfalls.html"
  },
  {
    name:     "Aliwagwag Falls",
    location: "Province-wide",
    category: "Waterfalls",
    desc:     "84 distinct cascades and a 680-meter zip line — one of the most spectacular waterfall experiences in the Philippines.",
    img:      "aliwagwag-falls.webp",
    link:     "waterfalls.html"
  },

  /* ── NATURE & ADVENTURE ──────────────────────────────── */
  {
    name:     "Mount Apo",
    location: "Province-wide",
    category: "Nature & Adventure",
    desc:     "The highest peak in the Philippines at 2,954 m — a dormant stratovolcano and ASEAN Heritage Park for mountaineers.",
    img:      "mt-apo.jpg",
    link:     "mountain.html"
  },
  {
    name:     "Mount Talomo",
    location: "Province-wide",
    category: "Nature & Adventure",
    desc:     "Sentinel of Mt. Apo standing at 2,674 m — among the top 15 highest peaks in the Philippines with rich biodiversity.",
    img:      "mt-talomo.jpg",
    link:     "mountain.html"
  },
  {
    name:     "Kabyawan Cave",
    location: "San Isidro",
    category: "Nature & Adventure",
    desc:     "World-class spelunking destination in Dakudao — remarkable rock formations and guided underground exploration.",
    img:      "san-isidro-kabyawan-cave.jpg",
    link:     "san-isidro.html"
  },
  {
    name:     "Eden Nature Park",
    location: "Province-wide",
    category: "Wildlife",
    desc:     "A 100-hectare highland mountain resort with hiking trails, bird watching, botanical gardens, and panoramic views of Davao.",
    img:      "eden-nature-park.webp",
    link:     "wildlife.html"
  },

  /* ── SNORKELING & DIVING ─────────────────────────────── */
  {
    name:     "Ligid Caves",
    location: "Island Garden City of Samal",
    category: "Snorkeling & Diving",
    desc:     "Advanced cave dive site with caverns, tunnels, black corals, and occasional shark sightings — world-class underwater adventure.",
    img:      "ligid-cave.webp",
    link:     "snorkeling.html"
  },
  {
    name:     "Isla Reta Beach Resort",
    location: "Island Garden City of Samal",
    category: "Snorkeling & Diving",
    desc:     "Serene snorkeling paradise on Talicud Island — white sand, calm clear waters, and vibrant coral reefs for all skill levels.",
    img:      "isla-reta.webp",
    link:     "snorkeling.html"
  },
  {
    name:     "Carabao Dive Center",
    location: "Island Garden City of Samal",
    category: "Snorkeling & Diving",
    desc:     "Professional PADI-certified dive center with marine conservation advocacy and premium guided diving services on Samal Island.",
    img:      "carabao-dive-center.webp",
    link:     "snorkeling.html"
  },

  /* ── FESTIVALS ───────────────────────────────────────── */
  {
    name:     "Kadayawan Festival",
    location: "Province-wide",
    category: "Festivals",
    desc:     "Davao's grandest annual thanksgiving festival honoring its 11 ethnolinguistic tribes through street dancing, floral floats, and tribal performances.",
    img:      "kadayawan.webp",
    link:     "festival.html"
  },
  {
    name:     "Musikahan sa Tagum",
    location: "City of Tagum",
    category: "Festivals",
    desc:     "Annual music and arts celebration that earned Tagum City its title as 'Music Capital of the South' — growing stronger every year.",
    img:      "musikahan.webp",
    link:     "festival.html"
  },
  {
    name:     "Araw ng Davao",
    location: "Province-wide",
    category: "Festivals",
    desc:     "Month-long founding anniversary celebration of Davao City in March — cultural shows, trade fairs, and civic events throughout the month.",
    img:      "araw-ng-dabaw.webp",
    link:     "festival.html"
  },

  /* ── FOOD & FRUITS ───────────────────────────────────── */
  {
    name:     "Grilled Tuna Panga",
    location: "Province-wide",
    category: "Food & Fruits",
    desc:     "The iconic smoky jaw of yellowfin tuna — Davao's most celebrated dish, served with soy sauce and calamansi at restaurants and grills.",
    img:      "grilled-tuna-panga.webp",
    link:     "food.html"
  },
  {
    name:     "Durian",
    location: "Province-wide",
    category: "Food & Fruits",
    desc:     "The legendary King of Fruits — Davao produces the Philippines' finest durian varieties, available fresh at roadside stalls and markets.",
    img:      "durian-davao.webp",
    link:     "fruits.html"
  },
  {
    name:     "Mangosteen",
    location: "Province-wide",
    category: "Food & Fruits",
    desc:     "The Queen of Fruits — sweet, subtly tart, and exquisitely flavored. Davao's tropical climate produces mangosteen of exceptional quality.",
    img:      "mangosteen-fruit.webp",
    link:     "fruits.html"
  },
  {
    name:     "Tableya — San Isidro Cacao",
    location: "San Isidro",
    category: "Food & Fruits",
    desc:     "San Isidro's famous brown gold — hand-rolled cacao discs used in traditional Filipino hot chocolate and premium artisan chocolate production.",
    img:      "tableya.jpg",
    link:     "san-isidro.html"
  },

  /* ── WILDLIFE ────────────────────────────────────────── */
  {
    name:     "Davao Crocodile Park",
    location: "Province-wide",
    category: "Wildlife",
    desc:     "Premier wildlife attraction with crocodile collections, exotic bird aviaries, reptile exhibits, and thrilling live feeding shows.",
    img:      "davao-crocodile-park.webp",
    link:     "wildlife.html"
  },
  {
    name:     "Davao Butterfly House",
    location: "Province-wide",
    category: "Wildlife",
    desc:     "Enchanting garden sanctuary showcasing vibrant butterflies and rare exotic insects — an educational and beautiful family experience.",
    img:      "davao-butterfly-house.webp",
    link:     "wildlife.html"
  },
  {
    name:     "Malagos Garden Resort",
    location: "Province-wide",
    category: "Wildlife",
    desc:     "Award-winning eco-cultural destination — captivating bird shows, butterfly gardens, and the famous bean-to-bar chocolate experience.",
    img:      "malagos-garden-resort.webp",
    link:     "wildlife.html"
  },

  /* ── LUXURY ──────────────────────────────────────────── */
  {
    name:     "Dusit Thani Davao",
    location: "Province-wide",
    category: "Luxury",
    desc:     "Premier luxury hotel in Davao City's Buhangin district — combining world-renowned Thai hospitality with modern Filipino elegance.",
    img:      "dusit-davao.webp",
    link:     "luxury.html"
  },

  /* ── MUNICIPALITIES ──────────────────────────────────── */
  {
    name:     "Municipality of Asuncion",
    location: "Asuncion",
    category: "Municipality",
    desc:     "A progressive agricultural hub known for vast banana, rice, and coconut farms — and rich Manobo and Mandaya cultural heritage.",
    img:      "asuncion-area.png",
    link:     "asuncion.html"
  },
  {
    name:     "Municipality of Kapalong",
    location: "Kapalong",
    category: "Municipality",
    desc:     "Biodiversity-rich highlands with dense rainforests, endemic wildlife, Manobo-Mandaya culture, and exciting cave adventures.",
    img:      "kapalong-area.png",
    link:     "kapalong.html"
  },
  {
    name:     "Municipality of Talaingod",
    location: "Talaingod",
    category: "Municipality",
    desc:     "The last ecological frontier of Davao del Norte — pristine rainforests and the living heritage of the Ata-Manobo indigenous people.",
    img:      "talaingod-area.png",
    link:     "talaingod.html"
  },

  /* ── CITIES ──────────────────────────────────────────── */
  {
    name:     "Island Garden City of Samal",
    location: "Island Garden City of Samal",
    category: "City",
    desc:     "Mindanao's premier island destination — over 118 beach stretches, world-class dive sites, and iconic resort experiences on Samal Island.",
    img:      "samal-area.png",
    link:     "samal.html"
  },
  {
    name:     "City of Tagum",
    location: "City of Tagum",
    category: "City",
    desc:     "Capital of Davao del Norte and Music Capital of the South — vibrant culture, green parks, modern amenities, and warm community spirit.",
    img:      "tagum-area.png",
    link:     "tagum.html"
  },
  {
    name:     "City of Panabo",
    location: "City of Panabo",
    category: "City",
    desc:     "The Banana Capital of the Philippines — vast Cavendish plantations, a growing commercial scene, and a warm, hospitable community.",
    img:      "panabo-city-photo.png",
    link:     "panabo.html"
  }
];


/* ═══════════════════════════════════════════════════════
   SEARCH ENGINE
═══════════════════════════════════════════════════════ */
let activeQuery   = "";
let activeLocation= "";
let activeCategory= "";

function normalize(str) {
  return (str || "").toLowerCase().trim();
}

function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

function runSearch() {
  const nameQ  = normalize(document.getElementById('inputName').value);
  const locQ   = normalize(document.getElementById('inputLocation').value);
  const catQ   = normalize(document.getElementById('inputCategory').value);
  const sortQ  = document.getElementById('sortSelect').value;

  activeQuery    = nameQ;
  activeLocation = locQ;
  activeCategory = catQ;

  let results = destinations.filter(d => {
    const matchName = !nameQ    || normalize(d.name).includes(nameQ)
                                || normalize(d.desc).includes(nameQ);
    const matchLoc  = !locQ    || normalize(d.location).includes(locQ);
    const matchCat  = !catQ    || normalize(d.category).includes(catQ);
    return matchName && matchLoc && matchCat;
  });

  // Sort
  if (sortQ === 'az')  results.sort((a,b) => a.name.localeCompare(b.name));
  if (sortQ === 'za')  results.sort((a,b) => b.name.localeCompare(a.name));
  if (sortQ === 'cat') results.sort((a,b) => a.category.localeCompare(b.category));
  if (sortQ === 'loc') results.sort((a,b) => a.location.localeCompare(b.location));

  renderResults(results, nameQ);
}

function renderResults(results, query) {
  const grid    = document.getElementById('resultsGrid');
  const noRes   = document.getElementById('noResults');
  const countEl = document.getElementById('countNum');

  countEl.textContent = results.length;

  if (results.length === 0) {
    grid.innerHTML = '';
    noRes.style.display = 'block';
    return;
  }

  noRes.style.display = 'none';

  grid.innerHTML = results.map(d => `
    <div class="col-sm-6 col-lg-4">
      <div class="dest-card">
        <div class="dest-card-img">
          <img src="${BASE}${d.img}" alt="${d.name}" loading="lazy"
               onerror="this.src='${BASE}davnor-tourism-header.jpg'" />
          <span class="cat-badge">${d.category}</span>
        </div>
        <div class="dest-card-body">
          <div class="location">
            <i class="bi bi-geo-alt-fill"></i>
            ${highlight(d.location, activeLocation)}
          </div>
          <h5>${highlight(d.name, query)}</h5>
          <p>${highlight(d.desc, query)}</p>
          <a href="${d.link}" class="btn-visit">Visit Page &rsaquo;</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Show all on load
function showAll() {
  renderResults(destinations, "");
  document.getElementById('countNum').textContent = destinations.length;
}

// ─── EVENT LISTENERS ─────────────────────────────────────
document.getElementById('btnSearch').addEventListener('click', runSearch);

// Live search on name input
document.getElementById('inputName').addEventListener('input', runSearch);

// Run on enter key
document.getElementById('inputName').addEventListener('keydown', e => {
  if (e.key === 'Enter') runSearch();
});

// Re-run when dropdowns change
document.getElementById('inputLocation').addEventListener('change', runSearch);
document.getElementById('inputCategory').addEventListener('change', runSearch);
document.getElementById('sortSelect').addEventListener('change', runSearch);

// Clear all filters
document.getElementById('btnClear').addEventListener('click', () => {
  document.getElementById('inputName').value     = '';
  document.getElementById('inputLocation').value = '';
  document.getElementById('inputCategory').value = '';
  document.getElementById('sortSelect').value    = 'default';
  showAll();
});

// Quick tags
document.querySelectorAll('.qtag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.getElementById('inputName').value     = tag.dataset.name || '';
    document.getElementById('inputCategory').value = tag.dataset.cat  || '';
    document.getElementById('inputLocation').value = '';
    runSearch();
    // Smooth scroll to results
    document.querySelector('.results-section').scrollIntoView({ behavior: 'smooth' });
  });
});

// Show all destinations on page load
showAll();