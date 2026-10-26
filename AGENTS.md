# PhotoSplit Studio — Coding Agent Operational Guide

This document is the authoritative contract for all AI coding agents working on PhotoSplit Studio.

---

## 1. Runtime & Stack Invariants

- **Architecture:** Pure client-side, zero-framework web tools (HTML5, Vanilla ES6 JavaScript, Web Workers, Canvas API).
- **Core Tools:**
  - Photo Splitter (`app.html` + `js/app.js` / `js/worker.js` / `js/yolo26-depth.js`).
  - Auxiliary tools: `convert.html`, `crop.html`, `resize.html`, `passport.html`, `transcribe.html`.
- **Component & Build Caveat:**
  - `components/` contains shared header, footer, and widget slots copied into HTML pages by `build.js`.
  - **IMPORTANT:** `build.js` is NOT strictly idempotent—always inspect git diffs after running it.
- **Privacy Invariant:** Scanned photos and personal albums never leave the client's browser.
- **Monetization:** Amazon affiliate widgets in `js/amazon-products.js` must maintain tracking tag `photoid03-20`.

---

## 2. Golden Verification Commands

```bash
# Build component slots into pages (check git diff afterwards!)
node build.js

# Preview or deploy via Cloudflare
npx wrangler pages dev .
npx wrangler deploy
```

---

## 3. Architecture & Forbidden Zones

- `js/`: Client-side algorithms and worker threads.
- `blog/`: Scanning tutorials and photo preservation guides.
- `reports/`, `logs/`, `tests/`: Automated test logs (hidden from deployment by `.assetsignore`).
- **Forbidden:**
  - NEVER introduce heavy frontend frameworks (React, Vue, Next.js).
  - NEVER remove Web Worker offloading for image splitting—processing 1200 DPI scans must never lock the main UI thread.

---

## 4. 🛑 The YAGNI Rule (You Ain't Gonna Need It)

1. **No Speculative Code:** Solve only the specific crop, split, or scanner bug requested. Do not build user authentication or cloud storage backends.
2. **No Unsolicited Refactoring:** Do not rewrite working canvas deskew or edge-detection math unless fixing a reported bug.
3. **Zero Unnecessary Dependencies:** Rely on native Canvas 2D and Web Workers.
4. **Surgical, Minimal Diffs:** Keep edits isolated and review `build.js` diffs carefully.

---

## 5. Definition of Done

Before completing any task:
- [ ] Photo splitting and cropping continue to run smoothly in Web Workers.
- [ ] Pages load without console errors.
- [ ] Git diff after `node build.js` contains only intended component changes.
