const AMAZON_TAG = 'photoid03-20';
const CENTRAL_AD_ENGINE = 'https://tiketichap.com/api/amazon-ads';

function amazonSearch(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}

function getAmazonLink(asin) {
  if (!asin) return `https://www.amazon.com/?tag=${AMAZON_TAG}`;
  if (asin.startsWith('http')) return asin;
  // Direct ASIN to Amazon Buy Box
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}

function sendCentralAdTelemetry(payload) {
  try {
    const body = JSON.stringify(
      Object.assign(
        {
          site: 'photosplitstudio',
          associateTag: AMAZON_TAG,
          pageUrl: window.location.href,
        },
        payload
      )
    );
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        CENTRAL_AD_ENGINE,
        new Blob([body], { type: 'text/plain;charset=UTF-8' })
      );
    } else {
      fetch(CENTRAL_AD_ENGINE, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
        body,
        keepalive: true,
      }).catch(() => {});
    }
  } catch (e) {}
}

// 16 Verified High-Converting Direct ASIN Hardware Items
let AMAZON_PRODUCTS = [
  {
    id: 'ps-active-1',
    asin: 'B07DLFRV6W',
    title: 'Epson FastFoto FF-680W High-Speed Photo Scanner',
    desc: 'Feeds a stack of prints at 1 photo/sec. The gold standard for digitizing shoeboxes of family prints.',
    badge: 'Top Pick',
    rating: 4.5,
    reviews: '3,800+',
    price: '$599.99',
    prime: true,
    icon: '🗂️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-2',
    asin: 'B08GTYFC37',
    title: 'SanDisk 1TB Extreme Portable NVMe SSD USB-C',
    desc: '1050MB/s rugged shockproof storage for high-res photo archives, carousels, and 4K video.',
    badge: 'Fast Storage',
    rating: 4.6,
    reviews: '68,000+',
    price: '$109.99',
    prime: true,
    icon: '💾',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-3',
    asin: 'B07G5X1N1H',
    title: 'Canon CanoScan LiDE 400 4800dpi Flatbed Scanner',
    desc: 'Lay 4–6 photos on the glass, scan once at 600 DPI, and auto-split them in PhotoSplit Studio.',
    badge: 'Best Value',
    rating: 4.4,
    reviews: '7,400+',
    price: '$89.99',
    prime: true,
    icon: '🖨️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-4',
    asin: 'B084B3G59J',
    title: 'KODAK Slide N Scan Film & 35mm Slide Scanner',
    desc: 'Easily view and convert 35mm, 110, and 126 color and B&W negatives into digital JPEGs.',
    badge: 'Film Scanner',
    rating: 4.3,
    reviews: '11,200+',
    price: '$179.99',
    prime: true,
    icon: '🎞️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-5',
    asin: 'B08B3X7KG2',
    title: '12" LED Ring Light + 62" Tripod Stand for Phone',
    desc: 'Glare-free lighting & wireless Bluetooth remote for overhead prints, flat-lay scans, and Reels.',
    badge: 'Creator Pick',
    rating: 4.5,
    reviews: '29,000+',
    price: '$29.99',
    prime: true,
    icon: '💡',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-6',
    asin: 'B08L5P763T',
    title: 'Aura Carver 10.1" HD Wi-Fi Digital Picture Frame',
    desc: 'Instantly display your newly restored and split family photo albums on a living room wall or shelf.',
    badge: 'Gift Idea',
    rating: 4.8,
    reviews: '14,000+',
    price: '$149.00',
    prime: true,
    icon: '🖼️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-7',
    asin: 'B002OEBMRU',
    title: 'Acid-Free Archival Photo Storage Box Set',
    desc: 'Museum-quality acid-free boxes with tabbed index dividers to preserve original prints after scanning.',
    badge: 'Archival',
    rating: 4.7,
    reviews: '2,600+',
    price: '$18.99',
    prime: true,
    icon: '📦',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-8',
    asin: 'B0CPDNJ3Z6',
    title: 'Hollyland Lark M2 Wireless Lavalier Mic for Phone',
    desc: 'Ultra-compact button mic with noise cancellation for recording voiceover stories for photo albums.',
    badge: 'Pro Audio',
    rating: 4.6,
    reviews: '4,100+',
    price: '$139.00',
    prime: true,
    icon: '🎙️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-9',
    asin: 'B09R1T6X1B',
    title: 'Sensyne 60" Phone Tripod with Wireless Shutter',
    desc: 'Heavy-duty stable smartphone mount for digitizing vintage scrapbooks and recording Instagram carousels.',
    badge: 'Best Seller',
    rating: 4.6,
    reviews: '48,000+',
    price: '$21.99',
    prime: true,
    icon: '📱',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-10',
    asin: 'B00017LSPI',
    title: 'Pioneer 300-Pocket 4x6 Archival Photo Album',
    desc: 'Optically clear archival pockets with memo writing strips to organize newly printed photo sets.',
    badge: 'Album',
    rating: 4.7,
    reviews: '19,500+',
    price: '$14.99',
    prime: true,
    icon: '📖',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-11',
    asin: 'B00017LSPI',
    title: 'Giottos Medium Rocket Air Dust Blaster',
    desc: 'Natural rubber air blower that clears stubborn dust particles off scanner glass and negatives.',
    badge: 'Dust Cleaner',
    rating: 4.8,
    reviews: '16,200+',
    price: '$16.99',
    prime: true,
    icon: '💨',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-12',
    asin: 'B0874M3KW4',
    title: 'Anker USB-C Hub with SD & MicroSD Card Reader',
    desc: '10-in-1 multi-port adapter to transfer memory card scans to Mac, iPad, or Windows laptops.',
    badge: 'USB-C Hub',
    rating: 4.6,
    reviews: '12,800+',
    price: '$34.99',
    prime: true,
    icon: '🔌',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-13',
    asin: 'B07954L6BC',
    title: '100% White Cotton Archival Handling Gloves',
    desc: 'Soft cotton inspection gloves to handle glossy photos and film slides without leaving body oils.',
    badge: 'Handling',
    rating: 4.5,
    reviews: '8,400+',
    price: '$9.99',
    prime: true,
    icon: '🧤',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-14',
    asin: 'B0050R67U0',
    title: 'MagicFiber Microfiber Cleaning Cloths (6-Pack)',
    desc: 'Zero-lint optical microfiber cloths that leave flatbed scanner glass and lenses 100% streak-free.',
    badge: 'Scanner Care',
    rating: 4.7,
    reviews: '74,000+',
    price: '$8.99',
    prime: true,
    icon: '✨',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-15',
    asin: 'B0BDMQLC2Q',
    title: 'Canon SELPHY CP1500 Wireless 4x6 Photo Printer',
    desc: 'Dye-sublimation printer producing water-resistant, lab-quality 4x6 postcard prints and passport sheets.',
    badge: 'Printer',
    rating: 4.6,
    reviews: '5,300+',
    price: '$139.00',
    prime: true,
    icon: '🖨️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-16',
    asin: 'B08MDY8DTT',
    title: 'Ulanzi VL49 Rechargeable Mini RGB LED Video Light',
    desc: 'Magnetic pocket LED fill light with 2000mAh battery for copy-stand photo illumination.',
    badge: 'Lighting',
    rating: 4.6,
    reviews: '9,200+',
    price: '$29.95',
    prime: true,
    icon: '🔦',
    btnClass: 'btn-secondary'
  }
];

(function dedupeProducts() {
  const seen = new Set();
  AMAZON_PRODUCTS = AMAZON_PRODUCTS.filter(p => {
    if (seen.has(p.asin)) return false;
    seen.add(p.asin);
    return true;
  });
})();

function getContextualProducts() {
  let products = [...AMAZON_PRODUCTS];
  const url = window.location.href.toLowerCase();
  let boostKeyword = '';

  if (url.includes('convert') || url.includes('transcribe')) boostKeyword = 'storage';
  else if (url.includes('crop') || url.includes('resize') || url.includes('passport')) boostKeyword = 'printer';
  else if (url.includes('carousel') || url.includes('instagram')) boostKeyword = 'creator';
  else if (url.includes('app')) boostKeyword = 'scanner';
  else if (url.includes('blog')) boostKeyword = 'archival';

  if (boostKeyword) {
    products.sort((a, b) => {
      const aMatch = (a.title + ' ' + a.desc + ' ' + a.badge).toLowerCase().includes(boostKeyword);
      const bMatch = (b.title + ' ' + b.desc + ' ' + b.badge).toLowerCase().includes(boostKeyword);
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });
  }

  return products;
}

AMAZON_PRODUCTS = getContextualProducts();

function productVisual(product, fontSize) {
  return `<span aria-hidden="true" style="font-size:${fontSize}; line-height:1;">${product.icon || '📷'}</span>`;
}

function renderRatingStars(rating, reviews) {
  const r = rating || 4.6;
  const rev = reviews || '1,000+';
  return `
    <div style="display:inline-flex; align-items:center; gap:4px; margin:4px 0 8px; font-size:0.75rem;">
      <span style="color:#f59e0b; font-size:0.85rem; letter-spacing:1px;">★★★★★</span>
      <span style="font-weight:700; color:var(--text-primary);">${r}</span>
      <span style="color:var(--text-secondary);">(${rev})</span>
      <span style="background:#232f3e; color:#ff9900; font-size:0.62rem; font-weight:800; padding:1px 5px; border-radius:3px; margin-left:3px; font-style:italic;">prime</span>
    </div>
  `;
}

function trackAdClick(asin, slot, productId) {
  if (typeof gtag === 'function') {
    gtag('event', 'ad_click', { event_category: 'AmazonAds', event_label: asin, ad_slot: slot });
  }
  sendCentralAdTelemetry({
    type: 'click',
    slot: slot || 'widget',
    productId: productId || 'ps-active-1',
    asin: asin
  });
  try {
    let clicks = JSON.parse(localStorage.getItem('photosplit_ad_clicks') || '{}');
    if (!clicks[slot]) clicks[slot] = 0;
    clicks[slot]++;
    localStorage.setItem('photosplit_ad_clicks', JSON.stringify(clicks));
  } catch (e) {}
}

function renderSidebarWidgets() {
  const container = document.getElementById('amazon-widget-sidebar');
  if (!container) return;

  const products = AMAZON_PRODUCTS.slice(4, 6);
  let html = '<div class="ad-sidebar-sticky">';

  products.forEach(product => {
    const link = getAmazonLink(product.asin);
    const btnText = 'Check Price on Amazon →';
    const badgeBg = product.badge === 'Top Pick' ? 'var(--accent-grad)' : 'var(--bg-surface-2)';
    const badgeColor = product.badge === 'Top Pick' ? '#fff' : 'var(--text-primary)';
    const badgeBorder = product.badge === 'Top Pick' ? 'none' : '1px solid var(--border-strong)';
    const badgeShadow = product.badge === 'Top Pick' ? '0 4px 12px var(--accent-glow)' : 'none';

    html += `
      <div style="margin-bottom: 24px; position: relative;">
        <div style="position: absolute; top: -10px; left: 16px; background: ${badgeBg}; color: ${badgeColor}; border: ${badgeBorder}; padding: 4px 12px; border-radius: 99px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; z-index: 10; box-shadow: ${badgeShadow};">${product.badge}</div>
        <div class="glass-ad-panel" style="padding: 24px 16px 16px; border: 1px solid var(--border-strong); border-radius: var(--radius-lg); text-align: center; background: var(--bg-surface); box-shadow: var(--shadow-sm);">
          <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${product.asin}', 'sidebar', '${product.id || ''}')" style="display:block; text-decoration:none; color:inherit; outline:none;">
            <div style="background: white; border-radius: var(--radius-md); padding: 12px; margin-bottom: 12px; display:flex; justify-content:center; align-items:center; min-height:100px;">
              ${productVisual(product, "3.2rem")}
            </div>
            <h4 style="font-weight: 800; font-size: 0.96rem; margin: 0 0 4px; color: var(--text-primary); line-height:1.3;">${product.title}</h4>
            ${renderRatingStars(product.rating, product.reviews)}
            <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.4;">${product.desc}</p>
            <span class="btn ${product.btnClass}" style="display: flex; justify-content: center; width: 100%; border-radius: 99px; font-weight: 700; padding: 10px; font-size:0.85rem;">
              ${btnText}
            </span>
          </a>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

function renderTopBanner() {
  const container = document.getElementById('amazon-widget-top');
  if (!container) return;

  const products = AMAZON_PRODUCTS.slice(0, 4);
  let html = `
    <div class="ad-container ad-banner-top" style="display:flex; flex-direction:column; align-items:center; justify-content:center; padding: 24px; margin-bottom: 24px; position: relative;">
      <span style="background:var(--bg-surface-2); border: 1px solid var(--border-strong); color:var(--text-primary); padding: 4px 16px; border-radius: 99px; font-size: 0.75rem; text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em; margin-bottom: 20px; box-shadow: var(--shadow-sm);">Featured Scanning & Creator Gear (Amazon)</span>
      <div style="display:flex; gap: 20px; align-items:stretch; justify-content:center; flex-wrap:wrap; width: 100%; max-width: 1200px;">
  `;

  products.forEach(product => {
    const link = getAmazonLink(product.asin);
    const btnText = 'Check Price →';

    html += `
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${product.asin}', 'top', '${product.id || ''}')" style="flex: 1; min-width: 250px; display:flex; align-items:center; text-decoration:none; color:inherit; background:var(--bg-surface); padding: 16px; border-radius: var(--radius-lg); border: 1px solid var(--border-strong); gap: 14px; box-shadow: var(--shadow-sm); outline:none; position:relative;">
        <div style="background: white; border-radius: var(--radius-sm); padding: 8px; flex-shrink: 0; width: 72px; height: 72px; display:flex; justify-content:center; align-items:center;">
          ${productVisual(product, "2.2rem")}
        </div>
        <div style="text-align:left; flex: 1;">
          <div style="font-size:0.7rem; font-weight:800; text-transform:uppercase; color:var(--accent); letter-spacing:0.05em; margin-bottom:2px;">${product.badge}</div>
          <h4 style="font-weight:800; font-size: 0.92rem; margin: 0 0 2px; color: var(--text-primary); line-height:1.25;">${product.title}</h4>
          ${renderRatingStars(product.rating, product.reviews)}
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 0 0 10px; line-height: 1.3;">${product.desc}</p>
          <span class="btn ${product.btnClass} btn-sm" style="font-size:0.75rem; padding:6px 14px; border-radius: 99px; width: fit-content; font-weight:700;">${btnText}</span>
        </div>
      </a>
    `;
  });

  html += `
      </div>
    </div>
  `;
  container.innerHTML = html;
}

function renderBottomBanner() {
  const container = document.getElementById('amazon-widget-bottom');
  if (!container) return;

  const products = AMAZON_PRODUCTS.slice(6, 9);

  let html = `
    <div class="ad-container ad-banner-bottom ad-wrap-bottom glass-ad-panel" id="sticky-bottom-banner" style="margin: 0; border-radius: 0; text-align: center; box-shadow: 0 -8px 32px rgba(0,0,0,0.4); background: var(--bg-surface); padding: 14px 0; border-top: 1px solid var(--border-strong); display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap; margin-top: 2rem; position: relative;">
      <span class="ad-label" style="font-size: 0.65rem; position:absolute; top: -20px; background: var(--bg-surface-2); border: 1px solid var(--border-strong); border-bottom: none; color: var(--text-primary); padding: 4px 12px; border-radius: 8px 8px 0 0; right: 24px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">Recommended Photo & Creator Gear</span>
  `;

  products.forEach(product => {
    const link = getAmazonLink(product.asin);

    html += `
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${product.asin}', 'bottom', '${product.id || ''}')" style="display:flex; align-items:center; text-decoration:none; color:inherit; gap: 12px; background: var(--bg-surface-2); padding: 8px 16px; border-radius: 99px; border: 1px solid var(--border-strong);">
        <div style="background: white; border-radius: 50%; padding: 4px; width: 40px; height: 40px; display:flex; justify-content:center; align-items:center;">
          ${productVisual(product, "1.4rem")}
        </div>
        <div style="text-align:left;">
          <p style="font-weight:700; font-size: 0.85em; margin: 0;">${product.title}</p>
          <div style="display:flex; align-items:center; gap:4px; font-size:0.7em; color:var(--text-secondary);">
            <span style="color:#f59e0b;">★★★★★</span>
            <span>${product.rating || '4.6'}</span> · <span>${product.badge}</span>
          </div>
        </div>
        <span class="btn ${product.btnClass} btn-sm" style="font-size:0.75em; padding:4px 12px; border-radius:99px; margin-left: 6px; font-weight:700;">Check Price →</span>
      </a>
    `;
  });

  html += `
      <button onclick="document.getElementById('sticky-bottom-banner').style.display='none'; document.body.style.paddingBottom='0';" style="position:absolute; right: 24px; top: 12px; background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:1.5rem;">&times;</button>
    </div>
  `;
  container.innerHTML = html;
}

function renderInlineBanner() {
  const container = document.getElementById('amazon-widget-inline');
  if (!container) return;
  const products = AMAZON_PRODUCTS.slice(9, 11);
  let html = `<div class="ad-container ad-banner-inline" style="display:flex; flex-wrap:wrap; gap:16px; margin:24px 0;">`;
  products.forEach(p => {
    const link = getAmazonLink(p.asin);
    html += `
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${p.asin}', 'inline', '${p.id || ''}')" style="flex:1; min-width:250px; display:flex; align-items:center; gap:14px; background:var(--bg-surface); padding:14px; border-radius:var(--radius-lg); border:1px solid var(--border-strong); box-shadow:var(--shadow-sm); text-decoration:none; color:inherit;">
        ${productVisual(p, "2.5rem")}
        <div>
          <span style="font-size:0.7rem; font-weight:800; text-transform:uppercase; color:var(--accent);">${p.badge}</span>
          <h4 style="margin:2px 0 2px; font-size:0.92rem; font-weight:800; color:var(--text-primary); line-height:1.25;">${p.title}</h4>
          ${renderRatingStars(p.rating, p.reviews)}
          <p style="margin:0 0 8px; font-size:0.78rem; color:var(--text-secondary); line-height:1.3;">${p.desc}</p>
          <span class="btn ${p.btnClass} btn-sm" style="font-size:0.75rem; padding:5px 12px; font-weight:700;">Check Price on Amazon →</span>
        </div>
      </a>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function renderGridWidget() {
  const container = document.getElementById('amazon-widget-grid');
  if (!container) return;
  const products = AMAZON_PRODUCTS.slice(11, 15);
  let html = `<div class="ad-container ad-widget-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:16px; margin:24px 0;">`;
  products.forEach(p => {
    const link = getAmazonLink(p.asin);
    const btnText = 'Check Price on Amazon →';
    html += `
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${p.asin}', 'grid', '${p.id || ''}')" style="display:flex; flex-direction:column; align-items:center; background:var(--bg-surface); padding:16px; border-radius:var(--radius-lg); border:1px solid var(--border-strong); box-shadow:var(--shadow-sm); text-decoration:none; color:inherit; text-align:center;">
        <span style="font-size:0.7rem; font-weight:800; text-transform:uppercase; color:var(--accent); margin-bottom:4px;">${p.badge}</span>
        ${productVisual(p, "2.6rem")}
        <h4 style="margin:8px 0 2px; font-size:0.88rem; font-weight:700; color:var(--text-primary); line-height:1.3;">${p.title}</h4>
        ${renderRatingStars(p.rating, p.reviews)}
        <p style="margin:0 0 12px; font-size:0.76rem; color:var(--text-secondary); line-height:1.35;">${p.desc}</p>
        <span class="btn ${p.btnClass} btn-sm" style="font-size:0.75rem; padding:6px 14px; margin-top:auto; font-weight:700; border-radius:99px;">${btnText}</span>
      </a>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

// ── The Post-Export Download Reward Modal ──────────────────────────────────────
window.showPostExportAdModal = function() {
  let modal = document.getElementById('ps-export-reward-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'ps-export-reward-modal';
    modal.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:99999; max-width:380px; background:var(--bg-surface, #1e1e2d); border:1px solid var(--border-strong, #333); border-radius:16px; box-shadow:0 12px 40px rgba(0,0,0,0.5); padding:18px; color:var(--text-primary, #fff); animation:slideUp 0.3s ease;';

    const p = AMAZON_PRODUCTS[4] || AMAZON_PRODUCTS[0]; // Ring light or scanner
    const link = getAmazonLink(p.asin);

    modal.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:10px;">
        <span style="font-size:0.72rem; font-weight:800; text-transform:uppercase; color:#10b981; letter-spacing:0.05em;">✓ Export Complete!</span>
        <button onclick="document.getElementById('ps-export-reward-modal').remove()" style="background:none; border:none; color:#888; font-size:1.3rem; cursor:pointer; line-height:1;">&times;</button>
      </div>
      <p style="font-size:0.85rem; margin:0 0 10px; line-height:1.4;">
        <strong>Creating more social content or digitizing family prints?</strong> Here's our community's top-rated hardware:
      </p>
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${p.asin}', 'post-export', '${p.id || ''}')" style="display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.06); padding:10px; border-radius:10px; text-decoration:none; color:inherit; border:1px solid rgba(255,255,255,0.1);">
        <span style="font-size:2rem;">${p.icon || '💡'}</span>
        <div style="flex:1;">
          <div style="font-size:0.85rem; font-weight:700; line-height:1.2;">${p.title}</div>
          <div style="font-size:0.75rem; color:#f59e0b; margin-top:2px;">★★★★★ 4.6 (29k+ reviews)</div>
        </div>
      </a>
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${p.asin}', 'post-export', '${p.id || ''}')" class="btn btn-primary" style="display:block; text-align:center; margin-top:12px; padding:8px; border-radius:99px; font-size:0.82rem; font-weight:700; text-decoration:none;">
        Check Deal on Amazon →
      </a>
    `;
    document.body.appendChild(modal);
  } else {
    modal.style.display = 'block';
  }
};

window.addEventListener('photosplit:downloaded', () => {
  setTimeout(() => {
    window.showPostExportAdModal();
  }, 1200);
});

function syncDynamicProductsFromCentralEngine() {
  fetch(`${CENTRAL_AD_ENGINE}?action=serve&site=photosplitstudio&limit=6`)
    .then(r => r.json())
    .then(data => {
      if (!data || !data.allowed || !Array.isArray(data.products) || !data.products.length) return;
      const dynamicItems = data.products.map(p => ({
        id: p.id,
        asin: p.asin || p.productUrl || amazonSearch(p.searchQuery || p.title),
        title: p.title,
        desc: p.description,
        badge: p.badge || 'Top Pick',
        rating: p.rating || 4.6,
        reviews: '2,500+',
        icon: '✨',
        btnClass: 'btn-secondary'
      }));
      AMAZON_PRODUCTS = [...dynamicItems, ...AMAZON_PRODUCTS];
      renderSidebarWidgets();
      renderTopBanner();
      renderInlineBanner();
      renderGridWidget();
    })
    .catch(() => {});
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('#site-header .main-nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/') || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  sendCentralAdTelemetry({ type: 'pageview' });
  renderSidebarWidgets();
  renderTopBanner();
  renderInlineBanner();
  renderGridWidget();
  syncDynamicProductsFromCentralEngine();

  // Delegated click listener capturing any Amazon link across the site (including blog guides and tips)
  document.addEventListener('click', (e) => {
    const a = e.target && e.target.closest ? e.target.closest('a[href*="amazon."]') : null;
    if (!a) return;
    const asinMatch = (a.href || '').match(/\/dp\/([A-Z0-9]{10})/i);
    const asin = asinMatch ? asinMatch[1] : (a.getAttribute('data-amz-asin') || '');
    const slot = a.getAttribute('data-amz-slot') || (a.closest('article, .blog-post, .guide-content') ? 'blog-inline' : 'page-link');
    const productId = a.getAttribute('data-amz-product-id') || 'ps-active-1';

    trackAdClick(asin, slot, productId);
  }, true);

  setTimeout(() => {
    renderBottomBanner();
  }, 6000);
});
