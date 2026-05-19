/* ═══════════════════════════════════════════════════════════
   main.js  —  Visit Davao del Norte
   External JavaScript for index.html
   Contains:
     1. Carousel animation re-trigger
     2. Destination data array
     3. Render destination cards
     4. Category filter buttons
     5. Modal open / close
════════════════════════════════════════════════════════════ */


/* ──────────────────────────────────────────────────────────
   1. CAROUSEL ANIMATION RE-TRIGGER
   Re-plays the fadeUp animations on each slide transition.
────────────────────────────────────────────────────────── */
const carousel = document.getElementById('heroCarousel');

carousel.addEventListener('slide.bs.carousel', function () {
  const items = carousel.querySelectorAll('.carousel-caption-custom > *');
  items.forEach(el => { el.style.animation = 'none'; el.offsetHeight; });
});

carousel.addEventListener('slid.bs.carousel', function () {
  const activeItem = carousel.querySelector('.carousel-item.active .carousel-caption-custom');
  if (!activeItem) return;
  const children = activeItem.querySelectorAll('*');
  const delays = ['.2s', '.45s', '.65s', '.82s', '1s'];
  children.forEach((el, i) => {
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = '';
    el.style.animationDelay = delays[i] || '1s';
  });
});


/* ──────────────────────────────────────────────────────────
   2. DESTINATION DATA ARRAY
   Each object contains all 7 modal fields:
     i.   fullDescription
     ii.  location / fullLocation
     iii. activities[]
     iv.  bestTime
     v.   fee
     vi.  hours
     vii. tips
────────────────────────────────────────────────────────── */
const destinations = [
  {
    icon: "bi-music-note-beamed",
    title: "Culture & Traditions",
    description: "Rich Lumad and Manobo heritage celebrated through vibrant festivals, indigenous weaving, tribal music, and traditional dance.",
    link: "festival.html",
    categories: ["historical"],
    badge: "Culture & Festivals",
    location: "Province-Wide, Davao del Norte",
    fullLocation: "Tagum City, Davao del Norte — festivals held province-wide",
    fullDescription: "Davao del Norte is home to a vibrant tapestry of indigenous and Filipino heritage. The Lumad and Manobo peoples have preserved their traditions through generations — from intricate handwoven textiles and beadwork to the hypnotic rhythms of the kulintang and the graceful movements of tribal dances. Major celebrations include the Musikahan sa Tagum, the Panagtagbo Festival, and the Araw ng Davao del Norte, drawing thousands of visitors each year.",
    activities: ["Festival watching", "Cultural shows", "Tribal dance performances", "Weaving demonstrations", "Museum visits", "Street parades"],
    bestTime: "March–August (festival season); Musikahan sa Tagum held in February",
    fee: "Free (most public festivals); some venues charge ₱50–₱150",
    hours: "Festival events typically run 8:00 AM – 10:00 PM",
    tips: "Book accommodations in Tagum City at least 2 weeks ahead during festival season. Wear comfortable shoes — street parades can involve long walks. Bring cash as most vendors don't accept cards."
  },
  {
    icon: "bi-water",
    title: "Beach & Islands",
    description: "The Island Garden City of Samal boasts over 118 white sand beaches and coral reefs teeming with marine life.",
    link: "samal.html",
    categories: ["beach", "island"],
    badge: "Beach & Islands",
    location: "Island Garden City of Samal",
    fullLocation: "Samal Island, Davao Gulf — ferry from Sasa Wharf, Davao City",
    fullDescription: "The Island Garden City of Samal is one of the Philippines' premier beach destinations, featuring over 118 identified white-sand beaches stretching across its 318 km² island area. The island is renowned for its world-class dive sites, vibrant coral gardens, and crystal-clear waters averaging 27°C year-round. From budget-friendly guesthouses to the legendary Pearl Farm Beach Resort, Samal offers a beach experience for every type of traveler.",
    activities: ["Swimming", "Snorkeling", "Scuba diving", "Island hopping", "Kayaking", "Beach volleyball", "Sunset watching", "Cave diving"],
    bestTime: "March–May (dry season); avoid typhoon months of August–October",
    fee: "Environmental fee: ₱50–₱100 per person; resort day rates: ₱200–₱800",
    hours: "Ferries operate 5:00 AM – 10:00 PM daily; resorts open 24 hours",
    tips: "Take the ferry from Sasa Wharf (₱10–₱25 fare, 5-minute crossing). Rent a habal-habal (motorcycle taxi) on the island to explore multiple beaches in one day. Always wear reef-safe sunscreen."
  },
  {
    icon: "bi-tree",
    title: "Nature & Adventure",
    description: "From Mt. Apo's slopes to cascading waterfalls in Kapalong and Talaingod — a true adventurer's playground.",
    link: "mountain.html",
    categories: ["mountain", "adventure"],
    badge: "Nature & Adventure",
    location: "Talaingod & Kapalong, Davao del Norte",
    fullLocation: "Mt. Apo National Park boundary, Kapalong, Talaingod — Davao del Norte",
    fullDescription: "Davao del Norte offers some of Mindanao's most spectacular outdoor adventures. Talaingod Municipality borders the Mt. Apo Natural Park — the domain of the Philippine Eagle and countless endemic species. The highlands of Kapalong hide pristine waterfalls and ancient forest trails perfect for trekking. River kayaking, spelunking in Kabyawan Cave, and wildlife spotting round out the adventure itinerary.",
    activities: ["Mountain trekking", "Waterfall hiking", "Caving / spelunking", "River kayaking", "Birdwatching", "Camping", "Rappelling"],
    bestTime: "November–April (dry season ideal for trekking); avoid June–October",
    fee: "Mt. Apo permit: ₱500–₱1,500; local guide fees: ₱500–₱1,000/day",
    hours: "Trailheads open 5:00 AM; guides required for remote areas",
    tips: "Always hire a licensed local guide — trails in Talaingod can be remote and unmarked. Bring waterproof gear, at least 2 liters of water per person, and insect repellent. Register at the PENRO office before any summit attempt."
  },
  {
    icon: "bi-egg-fried",
    title: "Food & Fruits",
    description: "As the Banana Capital of the Philippines, DavNor yields durian, mangosteen, pomelo, lanzones, and fresh Mindanaoan cuisine.",
    link: "food.html",
    categories: ["food"],
    badge: "Food & Fruits",
    location: "City of Panabo & Province-Wide",
    fullLocation: "Panabo City, Tagum City, and local markets province-wide",
    fullDescription: "Davao del Norte earns its title as the Banana Capital of the Philippines — Cavendish and Lakatan bananas grown here are exported worldwide. But the province's culinary treasures go far beyond bananas: durian in dozens of varieties, sweet mangosteen, giant pomelo, rambutan, and fresh-caught seafood from the Davao Gulf. Tagum City's night markets and Panabo's fruit stalls offer the freshest produce at unbeatable prices.",
    activities: ["Fruit market tours", "Farm visits", "Durian tasting", "Cooking classes", "Night market food crawls", "Banana plantation tours"],
    bestTime: "June–September (peak durian season); year-round for other fruits",
    fee: "Free (markets); farm tours: ₱100–₱300; cooking classes vary",
    hours: "Public markets: 5:00 AM – 6:00 PM; night markets: 6:00 PM – midnight",
    tips: "First-time durian visitors should try the 'Puyat' or 'Arancillo' variety — milder and creamier. Don't leave without buying tableya (cacao discs) from San Isidro as a pasalubong. Bring a cooler if transporting fruits."
  },
  {
    icon: "bi-binoculars",
    title: "Wildlife Tourism",
    description: "Spot the Philippine Eagle and endemic species in the forests of Talaingod and Kapalong — one of Mindanao's most biodiverse areas.",
    link: "wildlife.html",
    categories: ["wildlife", "adventure"],
    badge: "Wildlife",
    location: "Talaingod & Kapalong, Davao del Norte",
    fullLocation: "Talaingod Municipality and Kapalong forests, northern Davao del Norte",
    fullDescription: "The forests of Talaingod and Kapalong represent one of the last intact lowland-to-montane forest gradients in Mindanao. The area is critical habitat for the critically endangered Philippine Eagle, the Mindanao Bleeding-heart Pigeon, and dozens of endemic mammal species. Guided wildlife walks, bird watching tours, and overnight forest camps offer unparalleled encounters with Mindanao's extraordinary biodiversity.",
    activities: ["Birdwatching", "Wildlife photography", "Forest walks", "Night wildlife spotting", "Butterfly watching", "Ranger-guided eco-tours"],
    bestTime: "December–April (dry season, best visibility for birdwatching)",
    fee: "Eco-tour fees: ₱300–₱800; guide fees: ₱500–₱1,200/day",
    hours: "Dawn tours start 5:00 AM; pre-arrange with local guides",
    tips: "Join a guided tour through the local DENR or community-based ecotourism office. Bring binoculars (8×42 recommended) and a telephoto lens. Wear muted earth tones — bright colors startle wildlife. Maintain silence on trails."
  },
  {
    icon: "bi-gem",
    title: "Luxury Tourism",
    description: "Pearl Farm Beach Resort and world-class properties offer overwater villas, fine dining, and spa experiences rivaling Southeast Asia's best.",
    link: "luxury.html",
    categories: ["luxury", "island", "beach"],
    badge: "Luxury",
    location: "Island Garden City of Samal",
    fullLocation: "Samal Island, Davao Gulf — Pearl Farm and adjacent luxury properties",
    fullDescription: "Pearl Farm Beach Resort — once a thriving pearl farm in the 1950s — has transformed into one of the Philippines' most celebrated luxury island destinations. The resort features stunning Samal and Mandaya stilt houses built over the sea, a world-class spa, multiple fine dining venues, and a private beach. Beyond Pearl Farm, Samal Island hosts a growing number of boutique resorts and eco-luxury lodges catering to discerning travelers.",
    activities: ["Overwater villa stays", "Spa & wellness", "Fine dining", "Private beach access", "Sunset cruises", "Scuba diving packages", "Island excursions"],
    bestTime: "December–May (optimal weather, peak luxury season)",
    fee: "Pearl Farm rates: ₱8,000–₱35,000/night; day visit: ₱800–₱1,500",
    hours: "Resort facilities open 24 hours; restaurant service 6:00 AM – 10:00 PM",
    tips: "Book Pearl Farm at least 1–2 months ahead, especially for peak season (Holy Week, Christmas). The resort offers private speedboat transfers from Davao City. Request a room facing the sunrise for the best views."
  },
  {
    icon: "bi-droplet-fill",
    title: "Waterfalls",
    description: "Hagimit Falls on Samal Island and highland cascades throughout the province — crystal-clear pools in lush jungle settings.",
    link: "waterfalls.html",
    categories: ["waterfall", "adventure"],
    badge: "Waterfalls",
    location: "San Isidro & Island Garden City of Samal",
    fullLocation: "Hagimit Falls (Samal), Tagtugunan Falls & Sambulawan Falls (San Isidro)",
    fullDescription: "Davao del Norte is blessed with some of Mindanao's most photogenic waterfalls. Hagimit Falls on Samal Island cascades into a natural pool surrounded by forest — a 10-minute hike from the road. In San Isidro Municipality, the remote Tagtugunan Falls and multi-tiered Sambulawan Falls reward trekkers with breathtaking pool swimming and untouched jungle scenery. Each site offers a distinct experience, from easy family outings to full-day adventure treks.",
    activities: ["Swimming in natural pools", "Waterfall photography", "Trekking", "Picnicking", "Nature walks", "Cliff jumping (select sites)"],
    bestTime: "December–May (dry season, best water clarity); avoid rainy season flash floods",
    fee: "Hagimit Falls: ₱30–₱50; San Isidro waterfalls: ₱50–₱100 + guide fee",
    hours: "8:00 AM – 5:00 PM daily; never visit after heavy rain",
    tips: "Wear water shoes — rocks near falls are slippery. Always check the weather forecast before heading to remote falls in San Isidro. Bring waterproof bags for your electronics. A local guide is required for Tagtugunan and Sambulawan Falls."
  },
  {
    icon: "bi-tropical-storm",
    title: "Snorkeling",
    description: "The coral-rich Davao Gulf offers world-class snorkeling — vibrant reef fish, sea turtles, and spectacular marine biodiversity.",
    link: "snorkeling.html",
    categories: ["beach", "island", "adventure"],
    badge: "Snorkeling",
    location: "Island Garden City of Samal & Davao Gulf",
    fullLocation: "Samal Island, Talicud Island, Ligid Caves — Davao Gulf",
    fullDescription: "The waters surrounding Samal Island and the broader Davao Gulf form one of the Philippines' most biodiverse marine ecosystems. Vibrant coral gardens shelter hundreds of fish species, while sea turtles, reef sharks, and occasional whale sharks patrol the deeper channels. Ligid Caves offers advanced cave snorkeling, while the reefs around Isla Reta Beach in Talicud Island provide perfect shallow-water experiences for beginners.",
    activities: ["Reef snorkeling", "Cave snorkeling (Ligid Caves)", "Sea turtle spotting", "Fish feeding", "Underwater photography", "Night snorkeling"],
    bestTime: "March–June (calmest seas, best visibility up to 20m+)",
    fee: "Snorkeling gear rental: ₱150–₱300; boat hire: ₱500–₱1,500/trip",
    hours: "Best snorkeling: 8:00 AM – 3:00 PM; arrange boats early",
    tips: "Use only reef-safe sunscreen — regular chemical sunscreens bleach coral. Never stand on or touch the coral. Isla Reta Beach in Talicud Island is ideal for first-time snorkelers. Bring an underwater camera or rent a waterproof case."
  }
];


/* ──────────────────────────────────────────────────────────
   3. RENDER DESTINATION CARDS
   - Filters by category (or shows all)
   - Each card has "View Details" (modal) + "Explore" (link)
────────────────────────────────────────────────────────── */
function renderDestinationCards(filter = 'all') {
  const container = document.getElementById('destinationCards');
  if (!container) return;

  const filtered = (filter === 'all')
    ? destinations
    : destinations.filter(d => d.categories.includes(filter));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <i class="bi bi-search"></i>
        No destinations found for this category.<br>
        <small style="color:#aac4b2; margin-top:.4rem; display:block;">
          Try selecting a different filter above.
        </small>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(dest => {
    const realIdx = destinations.indexOf(dest);
    return `
      <div class="col-md-6 col-lg-3">
        <div class="info-card" style="display:flex; flex-direction:column; height:100%;">
          <div style="flex:1;">
            <div class="ic-icon"><i class="bi ${dest.icon}"></i></div>
            <h5>${dest.title}</h5>
            <p>${dest.description}</p>
          </div>
          <div style="display:flex; gap:.5rem; margin-top:1rem; flex-wrap:wrap;">
            <button
              onclick="openDestModal(${realIdx})"
              style="flex:1; min-width:100px; padding:.42rem .8rem; font-size:.75rem; font-weight:700;
                     letter-spacing:.05em; text-transform:uppercase; background:var(--green-deep);
                     color:#fff; border:none; border-radius:4px; cursor:pointer; transition:background .2s;"
              onmouseover="this.style.background='var(--green-mid)'"
              onmouseout="this.style.background='var(--green-deep)'">
              <i class="bi bi-info-circle me-1"></i>View Details
            </button>
            <a href="${dest.link}"
               style="flex:1; min-width:80px; padding:.42rem .8rem; font-size:.75rem; font-weight:700;
                      letter-spacing:.05em; text-transform:uppercase; color:var(--green-mid);
                      border:1.5px solid var(--green-mid); border-radius:4px; text-decoration:none;
                      display:inline-flex; align-items:center; justify-content:center; transition:all .2s;"
               onmouseover="this.style.background='var(--green-mid)';this.style.color='#fff'"
               onmouseout="this.style.background='transparent';this.style.color='var(--green-mid)'">
              Explore &rsaquo;
            </a>
          </div>
        </div>
      </div>`;
  }).join('');
}


/* ──────────────────────────────────────────────────────────
   4. CATEGORY FILTER BUTTONS
   Clicking a button removes .active from all, adds it to
   the clicked one, then re-renders with the new filter.
────────────────────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderDestinationCards(this.dataset.filter);
  });
});


/* ──────────────────────────────────────────────────────────
   5. MODAL — OPEN
   Populates all 7 modal fields from the destinations array
   then shows the modal by adding the .open class.
────────────────────────────────────────────────────────── */
function openDestModal(index) {
  const d = destinations[index];
  if (!d) return;

  // Header
  document.getElementById('modalIcon').className           = `bi ${d.icon}`;
  document.getElementById('modalTitle').textContent        = d.title;
  document.getElementById('modalLocation').textContent     = d.location;
  document.getElementById('modalBadge').textContent        = d.badge;

  // i. Full description
  document.getElementById('modalDescription').textContent  = d.fullDescription;

  // ii. Location (full)
  document.getElementById('modalFullLocation').textContent = d.fullLocation;

  // iii. Activities
  document.getElementById('modalActivities').innerHTML =
    d.activities.map(a => `<li>${a}</li>`).join('');

  // iv. Best time to visit
  document.getElementById('modalBestTime').textContent = d.bestTime;

  // v. Entrance fee
  document.getElementById('modalFee').textContent = d.fee;

  // vi. Opening hours
  document.getElementById('modalHours').textContent = d.hours;

  // vii. Travel tips
  document.getElementById('modalTips').textContent = d.tips;

  // Visit page button
  document.getElementById('modalExploreBtn').href = d.link;

  // Show modal
  document.getElementById('destModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}


/* ──────────────────────────────────────────────────────────
   5. MODAL — CLOSE
   Three ways to close: X button, Close button, backdrop
   click, or pressing the Escape key.
────────────────────────────────────────────────────────── */
function closeDestModal() {
  document.getElementById('destModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('destModalClose').addEventListener('click', closeDestModal);
document.getElementById('destModalCloseBtn').addEventListener('click', closeDestModal);
document.getElementById('destModal').addEventListener('click', function (e) {
  if (e.target === this) closeDestModal();
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeDestModal();
});


/* ──────────────────────────────────────────────────────────
   INITIAL RENDER — show all cards on page load
────────────────────────────────────────────────────────── */
renderDestinationCards('all');