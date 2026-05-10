// Shared navbar HTML
function getNavbar(active = '') {
  const links = [
    { href: '/shop.html', label: 'Shop All' },
    { href: '/care-guides.html', label: 'Care Guides' },
    { href: '/collections.html', label: 'Collections' },
    { href: '/sustainability.html', label: 'Sustainability' },
  ];
  return `<nav class="fixed top-0 w-full z-50 bg-surface/90 nav-blur border-b border-outline-variant/30 shadow-sm">
    <div class="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
      <div class="flex-1"><a class="font-headline-md text-[32px] font-semibold leading-[1.3] text-primary italic" href="/">Verdant Botanical</a></div>
      <div class="hidden md:flex flex-1 justify-center items-center gap-8">
        ${links.map(l => `<a class="${active === l.label ? 'text-primary font-semibold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary transition-colors'} font-['Inter'] text-[16px]" href="${l.href}">${l.label}</a>`).join('')}
      </div>
      <div class="flex-1 flex justify-end items-center gap-4">
        <button data-search class="p-2 hover:bg-surface-container-low rounded-lg transition-all"><span class="material-symbols-outlined text-primary">search</span></button>
        <a href="/cart.html" class="p-2 hover:bg-surface-container-low rounded-lg transition-all relative">
          <span class="material-symbols-outlined text-primary">shopping_cart</span>
          <span class="cart-count absolute -top-0.5 -right-0.5 w-5 h-5 bg-error text-white text-xs rounded-full flex items-center justify-center font-bold" style="display:none">0</span>
        </a>
        <button data-search class="hidden p-2 hover:bg-surface-container-low rounded-lg transition-all"><span class="material-symbols-outlined text-primary">person</span></button>
        <button data-mobile-menu class="md:hidden p-2 hover:bg-surface-container-low rounded-lg transition-all"><span class="material-symbols-outlined text-primary">menu</span></button>
      </div>
    </div>
  </nav>`;
}

// Shared footer HTML
function getFooter() {
  return `<footer class="w-full bg-[#1a3026]">
    <div class="max-w-[1280px] mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div class="space-y-6">
        <a class="font-['Noto_Serif'] text-[24px] font-semibold text-white italic" href="/">Verdant Botanical</a>
        <p class="font-['Inter'] text-[16px] text-[#354c40] leading-relaxed opacity-80">© 2024 Verdant Botanical. Hand-reared greenery for the modern home. Sustainable farming, plastic-free delivery.</p>
      </div>
      <div>
        <h4 class="font-['Inter'] text-[14px] font-semibold tracking-[0.05em] text-white uppercase mb-6">Company</h4>
        <ul class="space-y-4">
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/about.html">About Our Farm</a></li>
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/sustainability.html">Sustainability</a></li>
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/shop.html">Wholesale</a></li>
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-['Inter'] text-[14px] font-semibold tracking-[0.05em] text-white uppercase mb-6">Support</h4>
        <ul class="space-y-4">
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/shipping.html">Shipping & Returns</a></li>
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/care-guides.html">Plant Care Tips</a></li>
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/faq.html">FAQ</a></li>
          <li><a class="text-[#354c40] hover:text-white transition-colors font-['Inter'] text-[16px] opacity-80" href="/privacy.html">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h4 class="font-['Inter'] text-[14px] font-semibold tracking-[0.05em] text-white uppercase mb-6">Newsletter</h4>
        <p class="font-['Inter'] text-[16px] text-[#354c40] mb-6 opacity-80">Join our botanical community for rare drops and care tips.</p>
        <form data-newsletter class="flex gap-2">
          <input class="bg-[#051b12] border border-[#354c40]/30 rounded-lg text-white placeholder:text-[#354c40]/50 w-full px-4 py-2 focus:ring-1 focus:ring-white transition-all" placeholder="Email Address" type="email">
          <button type="submit" class="bg-white text-[#051b12] px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"><span class="material-symbols-outlined">arrow_forward</span></button>
        </form>
      </div>
    </div>
  </footer>`;
}

// Page shell: call from each page to inject nav + footer
function initPage(activePage = '') {
  // Insert navbar
  const navEl = document.getElementById('navbar');
  if (navEl) navEl.outerHTML = getNavbar(activePage);
  // Insert footer
  const footEl = document.getElementById('footer');
  if (footEl) footEl.outerHTML = getFooter();
}

window.initPage = initPage;
window.getNavbar = getNavbar;
window.getFooter = getFooter;
