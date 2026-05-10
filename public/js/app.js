// ============ PRODUCT DATA ============
const PRODUCTS = [
  { id: 1, name: "Monstera Deliciosa", subtitle: "The Iconic Swiss Cheese", price: 85, badge: "New Arrival", badgeType: "new", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1WJPNZZt8_h5ozmQc_9W2XSVhijsLUZf6VxWOlpmHHTw2NL0tgaKFQpgUpgxMunBOOruc11MPsIQkXw1Brg70HaMwghgPDSsmHs81HftXsB-4MGOM53j34BUGZOtxXGEYRmUuD32t8KezOQmJ-fyZUM0TZxA3_Pw6SE818Vb0m_PVWhuUILL0AyrQ9FChVgizZByk1COmHGKd4wBr3obtJLZzbsFrzQUCb9_JuCYuEq3RzaLKqrSJLlq4-UbyP5gF3Vz--c4BZUZl", category: "tropical", light: "medium", care: "moderate", desc: "The Monstera Deliciosa is famous for its quirky natural leaf holes. These beauties grow quickly and can become a real statement piece." },
  { id: 2, name: "Calathea Orbifolia", subtitle: "Silver-Striped Elegance", price: 64, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASD-KCYuGDy73dvHMj-9eOOaUJG1gJVWLoNXIUIaZ3FJ49Oa2g8gl3zACTcpUX0yKJTXrNHP-DOHBcFLBx4tvtufcmd1T567YAZyyz44qWDZhofcm1QdWCLWuC4u0u2pVLy_ZLgJ5mGVvGmpJYEkPv03N9s_v-wSflTQSo5RTD1GoHVD2TKYeFXopsmfTvQxHFcx75cEPqVI4_6nVzwvrso9JFhmytERL0GFEnwvCmMd969LH79r72z9fBDUO8J9TrjzCsJAWhlypU", category: "tropical", light: "low", care: "expert", desc: "With its large, round leaves and silver-green stripes, the Calathea Orbifolia is a true showstopper that thrives in humidity." },
  { id: 3, name: "Olive Tree", subtitle: "Mediterranean Charm", price: 120, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU980XYl4GYiMtAKK9QPwCOBEgAuaeNbZY7c57Vu9mEqEDYz2zXVPHJrvJwZHiPlGsZfpm2mMtRcvx7DRywOTTOXhZ_MBgJNsAiMNG6ktitQUTKgFpgyUEF6-Bks3zazzRRUq5TKdhoCDJkZjdBXG7qlDEh_xSyz2jd4N-jpjw73A4yAFMLqYqkY56r63KR4R-0ASuT-ILedLsPZbA8l_qdRUZBvdT_SZILtZlyOS0s9S4pQuebYi5tIiuA39-uGsJ9jU4sVE6kqmh", category: "outdoor", light: "bright", care: "easy", desc: "Bring the Mediterranean to your home with this petite olive tree. Drought-tolerant and elegant." },
  { id: 4, name: "Snake Plant", subtitle: "Durable & Purifying", price: 42, badge: "Low Light", badgeType: "feature", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdJJvo5AsqO4PuUBBj4BVru9C20AeVNm_n5PIdDveGu3CQlRseegLB_iSQsKslfj6gWG0sL5T6i6IHhnvEipfqimoZGdTz47NSM6GxZ6dfLp6N4k6at8mtp7Uo3nd5aNBXy-vDBidALuJtRjeGqakLuUydW_Z4tHRyNHPahAnYBsMRPyUjbfCkb3U5mct1P6nYhQrRPw-mOm9rCjZowvCD048R_kJJ6UlLzr90-D0wjRpfFiDwEc9GQsgOzThzMli1JQKZ9Ow9YCty", category: "air-purifying", light: "low", care: "easy", desc: "Nearly indestructible. The Snake Plant purifies air and thrives on neglect—perfect for beginners." },
  { id: 5, name: "Fiddle Leaf Fig", subtitle: "Statement Maker", price: 95, badge: "Bestseller", badgeType: "new", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYo_2JEcEhEfy7E1aotMH0bdN6oYObOi9WOher0elOE6D9hMR_GGZpLbOnJXq4WtxTGyyQ7aGq7cKF5i_uT1yqcF-Z3TjkI9COzc721kjInADCcYvLOOSQGhgy8Izus0LuF9BaILTLVJID9ioyQQ4lXajIwRTcDJyepBakeE3HqFFCQnHSkC3_vGd0_Ir0hUkBBnYutslei04GzUd6kRNBv1WTvDFviHWrpbdQSd2vUv7mVI2z7r-gmvSdaQKZXakLsDuM0WQ2nMYX", category: "tropical", light: "bright", care: "moderate", desc: "The iconic Fiddle Leaf Fig with its large violin-shaped leaves is the darling of interior design." },
  { id: 6, name: "Peace Lily", subtitle: "Elegant & Purifying", price: 38, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGjlA5cvSKw4VJ5uXZ3F14l4-24a5TMkxKAWlUjoioFnHzPb5E5OkddDJhwFmRXgJ-5iNWEO4T-ZXLcu5wctHnlwcetS748ZONCKj75Ug6sBeY9KfDDQaf8gCItshCsTFQchTRtOX6Wbs8sdDZARzoNWw1dN3cYEABL14phFSyO6xV78JPqgE3oJQ4Q8KgeZTBrAUOEq9KHXNEWR_IxU5Hm0smMbyd5kHQwxauyJoQPPct9PjtEmMPkQjx5N31rCH7egs7ym5FLIQP", category: "air-purifying", light: "low", care: "easy", desc: "Graceful white blooms and lush leaves. A NASA-approved air purifier that thrives in low light." },
  { id: 7, name: "Pothos Marble Queen", subtitle: "Trailing Beauty", price: 28, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1xM4vUhhu0fH-Jm9G33lEvhrLY7oMCQgG_TkX_AsixMThy2InOF4Sa553fVKVGYoeTzawfdXfi-dQU42V33HYKgK5NtULmrhmdMEQZw9cLFiq4MIXL5I-TIbk1klDojZ84KRhJki6qCqeamKraHiDh7RzuPD4P-naeTr5L4ji9APZtFUe71OCFr1Qg6XRVq0D96tVKVGSNkSP_4K9sOzvQP1N3w9Zn4nXzXH5WqJvb0-a978d0A0ynrfzp5-Jr9-ZYn2Go97N8dqY", category: "trailing", light: "low", care: "easy", desc: "Stunning variegated trailing vine. Perfect for shelves or hanging baskets. Nearly unkillable." },
  { id: 8, name: "Aloe Vera", subtitle: "Healing Succulent", price: 22, badge: "Pet Friendly", badgeType: "feature", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD610GHh_E4VYZIMArZ7sBTOsOUxJ68PrMbwjMx0LmqvL-_zPxyfGMk89cHlTPzY_xO5pf64PqzpZONtozsc_x5sIPtrdOOI0XR1Jqlq0ZS3w4wQzTY0uLkRxFDT5YNneGuDIhgnfcsvpOEoJa5KQtF9qeZT1PtBcqE7d_pb3Y4HjKgsz1OWBjlrD4BhfnH1vNFpB9Kdy8UcaIjsYJKOylIeLpRWmb2vCkGnlWD5-x1_aUZQMMpmaQjTwK0RWEujVjz7KaQk2i3Cstm", category: "succulent", light: "bright", care: "easy", desc: "The ultimate low-maintenance plant. Soothing gel for skin, stunning geometric form for your space." },
];

// ============ CART ============
function getCart() { return JSON.parse(localStorage.getItem('verdant_cart') || '[]'); }
function saveCart(cart) { localStorage.setItem('verdant_cart', JSON.stringify(cart)); updateCartBadge(); }
function addToCart(productId, qty = 1) {
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty += qty; } else { cart.push({ id: productId, qty }); }
  saveCart(cart);
  const p = PRODUCTS.find(p => p.id === productId);
  showToast(`${p?.name || 'Item'} added to cart!`);
}
function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== productId));
}
function updateQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) { item.qty = Math.max(1, qty); saveCart(cart); }
}
function getCartTotal() {
  return getCart().reduce((sum, item) => {
    const p = PRODUCTS.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}
function getCartCount() { return getCart().reduce((s, i) => s + i.qty, 0); }
function updateCartBadge() {
  document.querySelectorAll('.cart-count').forEach(el => {
    const c = getCartCount();
    el.textContent = c;
    el.style.display = c > 0 ? 'flex' : 'none';
  });
}

// ============ TOAST ============
function showToast(msg) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-[100] flex flex-col gap-3';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'bg-primary-container text-on-primary px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 transform translate-x-full transition-transform duration-300';
  toast.innerHTML = `<span class="material-symbols-outlined text-secondary-fixed-dim">check_circle</span><span class="font-body-md">${msg}</span>`;
  container.appendChild(toast);
  requestAnimationFrame(() => { toast.style.transform = 'translateX(0)'; });
  setTimeout(() => { toast.style.transform = 'translateX(120%)'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ============ SEARCH OVERLAY ============
function openSearch() {
  let overlay = document.getElementById('search-overlay');
  if (overlay) { overlay.classList.remove('hidden'); overlay.querySelector('input')?.focus(); return; }
  overlay = document.createElement('div');
  overlay.id = 'search-overlay';
  overlay.className = 'fixed inset-0 z-[90] bg-black/60 flex items-start justify-center pt-24 px-4';
  overlay.innerHTML = `
    <div class="bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl p-6 space-y-4 animate-in">
      <div class="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
        <span class="material-symbols-outlined text-primary text-2xl">search</span>
        <input id="search-input" type="text" placeholder="Search plants..." class="w-full bg-transparent text-on-surface text-lg outline-none font-body-md placeholder:text-on-surface-variant/50" autofocus>
        <button onclick="closeSearch()" class="p-1 hover:bg-surface-container rounded-lg"><span class="material-symbols-outlined text-on-surface-variant">close</span></button>
      </div>
      <div id="search-results" class="max-h-80 overflow-y-auto space-y-2"></div>
    </div>`;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.body.appendChild(overlay);
  const input = overlay.querySelector('#search-input');
  input.focus();
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    const results = document.getElementById('search-results');
    if (!q) { results.innerHTML = '<p class="text-on-surface-variant font-body-md py-4 text-center">Start typing to search...</p>'; return; }
    const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.category.includes(q));
    if (!matches.length) { results.innerHTML = '<p class="text-on-surface-variant font-body-md py-4 text-center">No plants found.</p>'; return; }
    results.innerHTML = matches.map(p => `
      <a href="/product.html?id=${p.id}" class="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer">
        <img src="${p.img}" alt="${p.name}" class="w-14 h-14 rounded-lg object-cover">
        <div class="flex-1"><p class="font-bold text-primary">${p.name}</p><p class="text-on-surface-variant text-sm">${p.subtitle}</p></div>
        <span class="font-bold text-primary">$${p.price.toFixed(2)}</span>
      </a>`).join('');
  });
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { closeSearch(); document.removeEventListener('keydown', esc); } });
}
function closeSearch() { const o = document.getElementById('search-overlay'); if (o) o.classList.add('hidden'); }

// ============ MOBILE MENU ============
function toggleMobileMenu() {
  let menu = document.getElementById('mobile-menu');
  if (menu) { menu.classList.toggle('hidden'); return; }
  menu = document.createElement('div');
  menu.id = 'mobile-menu';
  menu.className = 'fixed inset-0 z-[80] bg-surface/95 nav-blur flex flex-col items-center justify-center gap-8';
  menu.innerHTML = `
    <button onclick="toggleMobileMenu()" class="absolute top-6 right-6 p-2"><span class="material-symbols-outlined text-primary text-3xl">close</span></button>
    <a href="/" class="font-headline-md text-headline-sm text-primary hover:opacity-70 transition-opacity">Home</a>
    <a href="/shop.html" class="font-headline-md text-headline-sm text-primary hover:opacity-70 transition-opacity">Shop All</a>
    <a href="/care-guides.html" class="font-headline-md text-headline-sm text-primary hover:opacity-70 transition-opacity">Care Guides</a>
    <a href="/collections.html" class="font-headline-md text-headline-sm text-primary hover:opacity-70 transition-opacity">Collections</a>
    <a href="/sustainability.html" class="font-headline-md text-headline-sm text-primary hover:opacity-70 transition-opacity">Sustainability</a>
    <a href="/cart.html" class="font-headline-md text-headline-sm text-primary hover:opacity-70 transition-opacity">Cart (<span class="cart-count">0</span>)</a>`;
  document.body.appendChild(menu);
  updateCartBadge();
}

// ============ NEWSLETTER ============
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  if (input && input.value) { showToast('Welcome to the Verdant community! 🌿'); input.value = ''; }
}

// ============ INIT ============
function initApp() {
  updateCartBadge();
  // Wire up add-to-cart buttons
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); addToCart(parseInt(btn.dataset.addCart)); });
  });
  // Wire up search buttons
  document.querySelectorAll('[data-search]').forEach(btn => btn.addEventListener('click', openSearch));
  // Wire up mobile menu
  document.querySelectorAll('[data-mobile-menu]').forEach(btn => btn.addEventListener('click', toggleMobileMenu));
  // Wire up newsletter forms
  document.querySelectorAll('[data-newsletter]').forEach(f => f.addEventListener('submit', handleNewsletter));
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); const t = document.querySelector(a.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth' });
  }));
}

document.addEventListener('DOMContentLoaded', initApp);
// Expose globals
window.addToCart = addToCart; window.removeFromCart = removeFromCart; window.updateQty = updateQty;
window.openSearch = openSearch; window.closeSearch = closeSearch; window.toggleMobileMenu = toggleMobileMenu;
window.PRODUCTS = PRODUCTS; window.getCart = getCart; window.saveCart = saveCart; window.getCartTotal = getCartTotal;
window.getCartCount = getCartCount; window.showToast = showToast; window.updateCartBadge = updateCartBadge;
