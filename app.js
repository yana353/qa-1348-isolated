const destinations = [
  { name: 'United States', code: 'US', flag: '🇺🇸', price: '€4.99', color: 'blue' },
  { name: 'Europe', code: 'EU', flag: '🇪🇺', price: '€3.99', color: 'orange' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', price: '€5.99', color: 'pink' },
  { name: 'Thailand', code: 'TH', flag: '🇹🇭', price: '€4.49', color: 'green' },
  { name: 'Australia', code: 'AU', flag: 'AU', price: '€6.99', color: 'purple' },
];

const plans = [
  { type: 'Data', title: '10 GB', duration: '365 days', price: '9.99', color: 'mint' },
  { type: 'Data / Calls / Texts', title: '5 GB', duration: '30 days', price: '12.99', color: 'lavender' },
  { type: 'Data', title: '3 GB', duration: '15 days', price: '5.99', color: 'peach' },
];

const icons = {
  arrow: '<path d="M5 12h13m-6-6 6 6-6 6"/>',
  cart: '<path d="M3 4h2l1.7 9.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.5L20 7H6"/><circle cx="9" cy="19" r="1"/><circle cx="17" cy="19" r="1"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.2 5.1 3.2 8.5s-1 6.2-3.2 8.5c-2.2-2.3-3.2-5.1-3.2-8.5s1-6.2 3.2-8.5Z"/>',
  home: '<path d="m3.5 10 8.5-6.5 8.5 6.5v8.2a1.3 1.3 0 0 1-1.3 1.3H4.8a1.3 1.3 0 0 1-1.3-1.3V10Z"/><path d="M9.2 19.5v-5.8h5.6v5.8"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 4.2 4.2"/>',
  sim: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v4h6V3M9 17h6M9 11h6M9 14h2"/>',
  user: '<circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c.7-3.3 2.8-5 6.5-5s5.8 1.7 6.5 5"/>',
  spark: '<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM19 16l.6 2.4L22 19l-2.4.6L19 22l-.6-2.4L16 19l2.4-.6L19 16Z"/>',
};

function icon(name, className = '') {
  return `<svg class="icon ${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}

function logo() {
  return `<a class="brand" href="#home" aria-label="àlaCards home">
    <span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span>
    <span>àla<span>Cards</span></span>
  </a>`;
}

function destinationCard(destination) {
  return `<article class="destination-card destination-card--${destination.color}" data-destination="${destination.name.toLowerCase()}">
    <div class="destination-card__art"><span>${destination.flag}</span><small>${destination.code}</small></div>
    <div class="destination-card__details"><h3>${destination.name}</h3><p>From <strong>${destination.price}</strong></p></div>
    ${icon('chevron', 'destination-card__arrow')}
  </article>`;
}

function planCard(plan) {
  return `<article class="plan-card plan-card--${plan.color}">
    <div class="plan-card__top"><span>${plan.type}</span>${icon('sim')}</div>
    <div class="plan-card__data"><strong>${plan.title}</strong><span>${plan.duration}</span></div>
    <div class="plan-card__bottom"><span>eSIM plan</span><button class="buy-button" type="button" data-plan="${plan.title}" data-price="${plan.price}">Buy € ${plan.price}</button></div>
  </article>`;
}

function appTemplate() {
  return `<div class="app-shell" id="home">
    <header class="app-header">${logo()}<div class="header-actions">
      <button class="icon-button" type="button" aria-label="Open cart">${icon('cart')}</button>
      <button class="profile-button" type="button" aria-label="Open profile">AS</button>
    </div></header>

    <div class="app-content">
      <section class="welcome-section" aria-labelledby="welcome-title">
        <p class="eyebrow">Welcome back, Alex <span aria-hidden="true">✦</span></p>
        <h1 id="welcome-title">Where are you<br><em>going next?</em></h1>
        <p class="intro">Get connected in more than 190 destinations with an eSIM that fits your trip.</p>
      </section>

      <form class="search-box" id="destination-search">
        ${icon('search')}<label class="sr-only" for="search-input">Search your destination</label>
        <input id="search-input" type="search" placeholder="Enter your Trip Destination" autocomplete="off">
        <button type="submit" aria-label="Search destinations">${icon('arrow')}</button>
      </form>

      <section class="hero-card" aria-label="Travel data promotion">
        <div class="hero-card__copy"><span class="hero-tag">NEW · TRAVEL BETTER</span><h2>Stay connected,<br><span>wherever you go.</span></h2>
          <button class="light-button" type="button" data-scroll-to="plans">Explore offers ${icon('arrow')}</button>
        </div><div class="hero-card__orb hero-card__orb--one" aria-hidden="true"></div><div class="hero-card__orb hero-card__orb--two" aria-hidden="true"></div>
        <div class="hero-card__route" aria-hidden="true"><span></span><span></span><span></span><span></span></div><div class="hero-card__plane" aria-hidden="true">✈</div>
      </section>

      <section class="section-block" aria-labelledby="destinations-title">
        <div class="section-heading"><div><p class="section-kicker">DISCOVER THE WORLD</p><h2 id="destinations-title">Top 10 Destinations</h2></div><button class="text-button" type="button" data-scroll-to="destinations">See all ${icon('arrow')}</button></div>
        <div class="destination-list" id="destinations">${destinations.map(destinationCard).join('')}</div><p class="empty-state" id="empty-state" hidden>No destinations match your search.</p>
      </section>

      <section class="section-block plans-section" id="plans" aria-labelledby="plans-title">
        <div class="section-heading"><div><p class="section-kicker">FLEXIBLE FOR YOU</p><h2 id="plans-title">Popular data plans</h2></div></div>
        <div class="plan-tabs" role="tablist" aria-label="Plan types"><button class="plan-tab is-active" type="button" role="tab" aria-selected="true">Data</button><button class="plan-tab" type="button" role="tab" aria-selected="false">Data / Calls / Texts</button></div>
        <div class="plan-list">${plans.map(planCard).join('')}</div>
      </section>

      <section class="trust-banner" aria-label="eSIM compatibility information"><span class="trust-banner__icon">${icon('spark')}</span><div><strong>Ready for your next adventure?</strong><p>Check if your device supports eSIM before you travel.</p></div>${icon('chevron')}</section>
    </div>

    <nav class="bottom-nav" aria-label="Primary navigation"><a class="nav-item is-active" href="#home" data-nav="Home">${icon('home')}<span>Home</span></a><a class="nav-item" href="#cart" data-nav="Cart">${icon('cart')}<span>Cart</span></a><a class="nav-item" href="#esims" data-nav="eSIMs">${icon('sim')}<span>eSIMs</span></a><a class="nav-item" href="#profile" data-nav="My">${icon('user')}<span>My</span></a></nav>
  </div>`;
}

const root = document.querySelector('#app');
root.innerHTML = appTemplate();

const searchInput = document.querySelector('#search-input');
const destinationCards = [...document.querySelectorAll('.destination-card')];
const emptyState = document.querySelector('#empty-state');

function filterDestinations(value) {
  const query = value.trim().toLowerCase();
  let visibleCount = 0;
  destinationCards.forEach((card) => {
    const isVisible = !query || card.dataset.destination.includes(query);
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });
  emptyState.hidden = visibleCount > 0;
}

searchInput.addEventListener('input', (event) => filterDestinations(event.target.value));
document.querySelector('#destination-search').addEventListener('submit', (event) => {
  event.preventDefault();
  filterDestinations(searchInput.value);
  document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.querySelector(`#${button.dataset.scrollTo}`).scrollIntoView({ behavior: 'smooth' }));
});

document.querySelectorAll('.plan-tab').forEach((tab) => {
  tab.addEventListener('click', () => document.querySelectorAll('.plan-tab').forEach((item) => {
    item.classList.toggle('is-active', item === tab);
    item.setAttribute('aria-selected', item === tab ? 'true' : 'false');
  }));
});

document.querySelectorAll('.buy-button').forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Added ✓';
    button.classList.add('is-added');
    window.setTimeout(() => {
      button.textContent = `Buy € ${button.dataset.price}`;
      button.classList.remove('is-added');
    }, 1800);
  });
});

document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach((navItem) => navItem.classList.remove('is-active'));
  item.classList.add('is-active');
}));
