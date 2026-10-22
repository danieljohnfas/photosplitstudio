const AMAZON_TAG = 'photoid03-20';
const CENTRAL_AD_ENGINE = 'https://tiketichap.com/api/amazon-ads';

function amazonSearch(query) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
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

// Photo-digitising & Content Creator gear on Amazon (16 curated items so all 5 widget slots are always populated).
let AMAZON_PRODUCTS = [
  {
    id: 'ps-active-1',
    asin: amazonSearch('Epson FastFoto FF-680W wireless high speed photo scanner'),
    title: 'Epson FastFoto FF-680W High-Speed Scanner',
    desc: 'Feeds a whole stack of prints at 1 photo/sec. The fastest way to digitize a shoebox of photos.',
    badge: 'Top Pick',
    icon: '🗂️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-2',
    asin: amazonSearch('SanDisk 1TB Extreme Portable SSD USB-C'),
    title: 'SanDisk 1TB Extreme Portable NVMe SSD',
    desc: '1050MB/s shockproof USB-C backup drive for your high-res scans, carousels, and 4K Reels.',
    badge: 'Storage',
    icon: '💾',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-3',
    asin: amazonSearch('Canon CanoScan LiDE 400 Slim Flatbed Photo Scanner'),
    title: 'Canon CanoScan LiDE 400 4800dpi Flatbed',
    desc: 'Lay 4–6 prints on the glass, scan once at 600 DPI, and auto-split them in PhotoSplit Studio.',
    badge: 'Scanner',
    icon: '🖨️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-4',
    asin: amazonSearch('Kodak Slide N Scan Film and Slide Digital Scanner'),
    title: 'KODAK Slide N Scan 35mm Film & Negative Scanner',
    desc: 'Turn vintage 35mm color & B&W negatives and slides into crisp digital JPEG files.',
    badge: 'Film',
    icon: '🎞️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-5',
    asin: amazonSearch('ring light with tripod stand for iphone content creator'),
    title: '12" Creator Ring Light + 62" Phone Tripod',
    desc: 'Glare-free LED lighting & wireless shutter remote for shooting panoramas and overhead prints.',
    badge: 'Top Pick',
    icon: '💡',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-6',
    asin: amazonSearch('Aura Carver WiFi Digital Picture Frame'),
    title: 'Aura HD Wi-Fi Digital Photo Frame',
    desc: 'Instantly display your newly split and restored family photos in any living room.',
    badge: 'Frame',
    icon: '🖼️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-7',
    asin: amazonSearch('archival photo storage box acid free museum quality'),
    title: 'Acid-Free Archival Photo Storage Box Set',
    desc: 'Museum-grade acid-free storage boxes with dividers to protect original prints after scanning.',
    badge: 'Archival',
    icon: '📦',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-8',
    asin: amazonSearch('DJI Osmo Mobile 6 smartphone gimbal stabilizer'),
    title: 'DJI Osmo Mobile 6 3-Axis Phone Gimbal',
    desc: 'Automated panorama alignment and smooth tracking for seamless Instagram multi-slide carousels.',
    badge: 'Creator Gear',
    icon: '📱',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-9',
    asin: amazonSearch('Hollyland Lark M2 wireless lavalier microphone iphone usb c'),
    title: 'Hollyland Lark M2 Wireless Creator Mic',
    desc: 'Studio-grade clip-on wireless microphone for Instagram Reels, TikToks, and family oral histories.',
    badge: 'Reels Audio',
    icon: '🎙️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-10',
    asin: amazonSearch('Anker USB C SD card reader high speed'),
    title: 'Anker 2-in-1 USB-C SD / microSD Card Reader',
    desc: 'Import camera scans and RAW photos straight into your laptop, iPad, or iPhone.',
    badge: 'Workflow',
    icon: '🔌',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-11',
    asin: amazonSearch('Giottos Rocket Air Blaster dust removal camera scanner'),
    title: 'Rocket Air Blaster & Anti-Static Brush Kit',
    desc: 'Blow away dust and lint from prints and scanner glass before scanning.',
    badge: 'Scanner care',
    icon: '🧹',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-12',
    asin: amazonSearch('archival photo album acid free slip in pockets'),
    title: 'Linen Acid-Free 4x6 Archival Photo Album',
    desc: 'Re-house loose family prints in crystal-clear acid-free PVC-free sleeves.',
    badge: 'Album',
    icon: '📔',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-13',
    asin: amazonSearch('lint free white cotton gloves photo film handling'),
    title: 'Archival White Cotton Photo & Film Gloves',
    desc: 'Handle vintage glossy prints and 35mm negatives without leaving oil or fingerprints.',
    badge: 'Handling',
    icon: '🧤',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-14',
    asin: amazonSearch('MagicFiber microfiber lens cleaning cloths scanner glass'),
    title: 'MagicFiber Optical Microfiber Cleaning Cloths',
    desc: 'Keep your flatbed scanner glass and camera lens 100% streak-free.',
    badge: 'Scanner care',
    icon: '✨',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-15',
    asin: amazonSearch('Canon SELPHY CP1500 Compact Photo Printer 4x6'),
    title: 'Canon SELPHY CP1500 Wireless 4x6 Photo Printer',
    desc: 'Print lab-quality 100-year archival 4x6 postcards and passport sheets at home.',
    badge: 'Printer',
    icon: '🖼️',
    btnClass: 'btn-secondary'
  },
  {
    id: 'ps-active-16',
    asin: amazonSearch('Ulanzi VL49 RGB LED video light camera smartphone'),
    title: 'Ulanzi Pocket RGB LED Fill Light',
    desc: 'Rechargeable magnetic LED light for copy-stand smartphone scanning and creator shoots.',
    badge: 'Lighting',
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

function getAmazonLink(asin) {
  if (asin.startsWith('http')) return asin;
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;
}

function productVisual(product, fontSize) {
  return `<span aria-hidden="true" style="font-size:${fontSize}; line-height:1;">${product.icon || '📷'}</span>`;
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

  const products = AMAZON_PRODUCTS.slice(4, 6); // 2 high-converting sidebar products
  let html = '<div class="ad-sidebar-sticky">';

  products.forEach(product => {
    const link = getAmazonLink(product.asin);
    const btnText = 'Shop on Amazon';
    const badgeBg = product.badge === 'Top Pick' ? 'var(--accent-grad)' : 'var(--bg-surface-2)';
    const badgeColor = product.badge === 'Top Pick' ? '#fff' : 'var(--text-primary)';
    const badgeBorder = product.badge === 'Top Pick' ? 'none' : '1px solid var(--border-strong)';
    const badgeShadow = product.badge === 'Top Pick' ? '0 4px 12px var(--accent-glow)' : 'none';

    html += `
      <div style="margin-bottom: 24px; position: relative;">
        <div style="position: absolute; top: -10px; left: 16px; background: ${badgeBg}; color: ${badgeColor}; border: ${badgeBorder}; padding: 4px 12px; border-radius: 99px; font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; z-index: 10; box-shadow: ${badgeShadow};">${product.badge}</div>
        <div class="glass-ad-panel" style="padding: 24px 16px 16px; border: 1px solid var(--border-strong); border-radius: var(--radius-lg); text-align: center; background: var(--bg-surface); box-shadow: var(--shadow-sm);">
          <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${product.asin}', 'sidebar', '${product.id || ''}')" style="display:block; text-decoration:none; color:inherit; outline:none;">
            <div style="background: white; border-radius: var(--radius-md); padding: 12px; margin-bottom: 16px; display:flex; justify-content:center; align-items:center; min-height:120px;">
              ${productVisual(product, "3.5rem")}
            </div>
            <h4 style="font-weight: 800; font-size: 1rem; margin: 0 0 8px; color: var(--text-primary);">${product.title}</h4>
            <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 14px; line-height: 1.4;">${product.desc}</p>
            <span class="btn ${product.btnClass}" style="display: flex; justify-content: center; width: 100%; border-radius: 99px; font-weight: 700; padding: 10px;">
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
      <div style="display:flex; gap: 24px; align-items:stretch; justify-content:center; flex-wrap:wrap; width: 100%; max-width: 1200px;">
  `;

  products.forEach(product => {
    const link = getAmazonLink(product.asin);
    const btnText = 'Shop on Amazon';

    html += `
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${product.asin}', 'top', '${product.id || ''}')" style="flex: 1; min-width: 250px; display:flex; align-items:center; text-decoration:none; color:inherit; background:var(--bg-surface); padding: 16px; border-radius: var(--radius-lg); border: 1px solid var(--border-strong); gap: 16px; box-shadow: var(--shadow-sm); outline:none; position:relative;">
        <div style="background: white; border-radius: var(--radius-sm); padding: 8px; flex-shrink: 0; width: 80px; height: 80px; display:flex; justify-content:center; align-items:center;">
          ${productVisual(product, "2.4rem")}
        </div>
        <div style="text-align:left; flex: 1;">
          <h4 style="font-weight:800; font-size: 0.98rem; margin: 0 0 6px; color: var(--text-primary);">${product.title}</h4>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 12px; line-height: 1.3;">${product.desc}</p>
          <span class="btn ${product.btnClass} btn-sm" style="font-size:0.75rem; padding:6px 12px; border-radius: 99px; width: fit-content;">${btnText}</span>
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
    <div class="ad-container ad-banner-bottom ad-wrap-bottom glass-ad-panel" id="sticky-bottom-banner" style="margin: 0; border-radius: 0; text-align: center; box-shadow: 0 -8px 32px rgba(0,0,0,0.4); background: var(--bg-surface); padding: 16px 0; border-top: 1px solid var(--border-strong); display: flex; justify-content: center; align-items: center; gap: 24px; flex-wrap: wrap; margin-top: 2rem; position: relative;">
      <span class="ad-label" style="font-size: 0.65rem; position:absolute; top: -20px; background: var(--bg-surface-2); border: 1px solid var(--border-strong); border-bottom: none; color: var(--text-primary); padding: 4px 12px; border-radius: 8px 8px 0 0; right: 24px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">Recommended Photo & Creator Gear</span>
  `;

  products.forEach(product => {
    const link = getAmazonLink(product.asin);

    html += `
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${product.asin}', 'bottom', '${product.id || ''}')" style="display:flex; align-items:center; text-decoration:none; color:inherit; gap: 16px; background: var(--bg-surface-2); padding: 8px 16px; border-radius: 99px; border: 1px solid var(--border-strong);">
        <div style="background: white; border-radius: 50%; padding: 4px; width: 44px; height: 44px; display:flex; justify-content:center; align-items:center;">
          ${productVisual(product, "1.5rem")}
        </div>
        <div style="text-align:left;">
          <p style="font-weight:700; font-size: 0.88em; margin: 0 0 2px;">${product.title}</p>
          <p style="font-size: 0.75em; color:var(--text-secondary); margin:0;">${product.badge}</p>
        </div>
        <span class="btn ${product.btnClass} btn-sm" style="font-size:0.75em; padding:4px 12px; border-radius:99px; margin-left: 8px;">View</span>
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
          <h4 style="margin:0 0 4px; font-size:0.92rem; font-weight:800; color:var(--text-primary);">${p.title}</h4>
          <p style="margin:0 0 8px; font-size:0.78rem; color:var(--text-secondary);">${p.desc}</p>
          <span class="btn ${p.btnClass} btn-sm" style="font-size:0.72rem; padding:4px 10px;">Shop on Amazon</span>
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
  let html = `<div class="ad-container ad-widget-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:16px; margin:24px 0;">`;
  products.forEach(p => {
    const link = getAmazonLink(p.asin);
    const btnText = 'View on Amazon';
    html += `
      <a href="${link}" target="_blank" rel="sponsored nofollow noopener" onclick="trackAdClick('${p.asin}', 'grid', '${p.id || ''}')" style="display:flex; flex-direction:column; align-items:center; background:var(--bg-surface); padding:16px; border-radius:var(--radius-lg); border:1px solid var(--border-strong); box-shadow:var(--shadow-sm); text-decoration:none; color:inherit; text-align:center;">
        ${productVisual(p, "2.8rem")}
        <h4 style="margin:8px 0 6px; font-size:0.88rem; font-weight:700; color:var(--text-primary);">${p.title}</h4>
        <p style="margin:0 0 10px; font-size:0.76rem; color:var(--text-secondary); line-height:1.35;">${p.desc}</p>
        <span class="btn ${p.btnClass} btn-sm" style="font-size:0.75rem; padding:6px 12px; margin-top:auto;">${btnText}</span>
      </a>
    `;
  });
  html += `</div>`;
  container.innerHTML = html;
}

function syncDynamicProductsFromCentralEngine() {
  fetch(`${CENTRAL_AD_ENGINE}?action=serve&site=photosplitstudio&limit=6`)
    .then(r => r.json())
    .then(data => {
      if (!data || !data.allowed || !Array.isArray(data.products) || !data.products.length) return;
      const dynamicItems = data.products.map(p => ({
        id: p.id,
        asin: p.localizedUrl || p.productUrl || amazonSearch(p.searchQuery || p.title),
        title: p.title,
        desc: p.description,
        badge: p.badge || 'Top Pick',
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

  setTimeout(() => {
    renderBottomBanner();
  }, 6000);
});
