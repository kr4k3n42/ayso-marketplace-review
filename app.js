const state = loadAYSOState();
const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const number = new Intl.NumberFormat("en-US");

document.querySelector(".menu-button")?.addEventListener("click", (event) => {
  const nav = document.querySelector(".main-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

function resolveSiteUrl(value = "") {
  const url = String(value).trim();
  if (!url || /^(?:https?:|data:|blob:|mailto:|tel:|#)/i.test(url)) return url;
  return new URL(url.replace(/^\/+/, ""), document.baseURI).href;
}

function logoMarkup(item, className = "partner-logo") {
  const fallback = `<span class="logo-fallback">${escapeHTML((item.name || item.brand || "?").slice(0, 2).toUpperCase())}</span>`;
  if (!item.logo) return fallback;
  return `<img class="${className}" src="${escapeHTML(resolveSiteUrl(item.logo))}" alt="${escapeHTML(item.name || item.brand)} logo" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'logo-fallback',textContent:'${escapeHTML((item.name || item.brand || "?").slice(0, 2).toUpperCase())}'}))">`;
}

function placementBudget(sponsor) {
  return Number(sponsor.budget || 0) * 0.8;
}

function renderMarketplace() {
  const grid = document.querySelector("#sponsorGrid");
  if (!grid) return;
  let activeFilter = "all";
  const draw = () => {
    const sponsors = state.sponsors.filter((item) => activeFilter === "all" || item.status === activeFilter);
    grid.innerHTML = sponsors.length ? sponsors.map((sponsor) => `
      <article class="product-card" style="--card-accent:${escapeHTML(sponsor.accent || "#1b5fa7")}">
        <div class="product-visual">${logoMarkup(sponsor)}<span class="status-pill ${sponsor.status}">${sponsor.status === "available" ? "Available now" : "Review required"}</span></div>
        <div class="product-copy">
          <p class="utility-label">${escapeHTML(sponsor.category)}</p>
          <h3>${escapeHTML(sponsor.name)}</h3>
          <p>${escapeHTML(sponsor.description)}</p>
          <div class="price-line"><span>From</span><strong>${currency.format(sponsor.sleeve)}<small> / uniform</small></strong></div>
          <button class="button card-button" type="button" data-offer="${escapeHTML(sponsor.id)}">View offer</button>
        </div>
      </article>`).join("") : `<div class="empty-results"><h3>No offers in this view.</h3><p>Try another filter or add an offer in Offer Manager.</p></div>`;
    grid.querySelectorAll("[data-offer]").forEach((button) => button.addEventListener("click", () => openOffer(button.dataset.offer)));
  };
  document.querySelectorAll("[data-filter]").forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === button));
    draw();
  }));
  draw();
}

function openOffer(id) {
  const sponsor = state.sponsors.find((item) => item.id === id);
  const drawer = document.querySelector("#offerDrawer");
  const content = document.querySelector("#drawerContent");
  if (!sponsor || !drawer || !content) return;
  const uniformInput = document.querySelector("#uniformCount");
  const count = Math.max(1, Number(uniformInput?.value || 500));
  const placements = [["Sleeve", sponsor.sleeve], ["Back below number", sponsor.back], ["Center chest", sponsor.chest]];
  content.innerHTML = `
    <div class="drawer-brand" style="--card-accent:${escapeHTML(sponsor.accent || "#1b5fa7")}">${logoMarkup(sponsor, "drawer-logo")}</div>
    <p class="utility-label">${escapeHTML(sponsor.category)}</p><h2>${escapeHTML(sponsor.name)}</h2><p>${escapeHTML(sponsor.description)}</p>
    <div class="drawer-meta"><span>Placement budget<strong>${currency.format(placementBudget(sponsor))}</strong></span><span>Approval<strong>${sponsor.status === "available" ? "Available" : "Additional review"}</strong></span></div>
    <h3>Choose a placement</h3>
    <div class="placement-options">${placements.map(([label, price], index) => {
      const estimate = Math.min(count * Number(price || 0), placementBudget(sponsor));
      return `<label class="placement-option"><input type="radio" name="placement" ${index === 0 ? "checked" : ""}><span><strong>${label}</strong><small>${currency.format(price)} per uniform</small></span><b>${currency.format(estimate)}</b></label>`;
    }).join("")}</div>
    <p class="estimate-note">Estimate based on ${number.format(count)} uniforms and capped by the available placement budget.</p>
    <a class="button full-button" href="explainers.html">Review how it works</a>`;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  drawer.querySelector(".drawer-close").focus();
}

document.querySelectorAll("[data-close-drawer]").forEach((button) => button.addEventListener("click", () => {
  const drawer = document.querySelector("#offerDrawer");
  drawer?.classList.remove("open");
  drawer?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
}));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") document.querySelector("[data-close-drawer]")?.click(); });

function renderBenefits() {
  const grid = document.querySelector("#benefitGrid");
  if (!grid) return;
  grid.innerHTML = state.benefits.map((benefit) => {
    const placeholder = !benefit.url || benefit.url.startsWith("#placeholder");
    return `<article class="benefit-card" style="--card-accent:${escapeHTML(benefit.accent || "#1b5fa7")}">
      <div class="benefit-visual">${logoMarkup(benefit)}</div>
      <div class="benefit-copy"><p class="utility-label">${escapeHTML(benefit.brand)}</p><h2>${escapeHTML(benefit.name)}</h2><strong class="discount">${escapeHTML(benefit.discount)}</strong><p>${escapeHTML(benefit.description)}</p>
      <div class="code-row"><span>Member code</span><button type="button" data-copy="${escapeHTML(benefit.code)}" aria-label="Copy code ${escapeHTML(benefit.code)}">${escapeHTML(benefit.code)}</button></div>
      <a class="button full-button ${placeholder ? "placeholder-link" : ""}" href="${escapeHTML(benefit.url)}" ${placeholder ? 'aria-disabled="true"' : 'target="_blank" rel="noopener"'}>${placeholder ? "Partner link coming soon" : "Claim this offer"}</a></div>
    </article>`;
  }).join("");
  grid.querySelectorAll("[data-copy]").forEach((button) => button.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy); button.textContent = "Copied!"; }
    catch { button.textContent = button.dataset.copy; }
  }));
  grid.querySelectorAll(".placeholder-link").forEach((link) => link.addEventListener("click", (event) => event.preventDefault()));
}

function sponsorEditor(item, index) {
  const national = Number(item.budget || 0) * 0.2;
  return `<article class="editor-card" data-sponsor-index="${index}">
    <div class="editor-card-head"><div><p class="utility-label">Sponsor ${index + 1}</p><h3>${escapeHTML(item.name)}</h3></div><button class="text-button danger" type="button" data-remove-sponsor="${index}">Remove</button></div>
    <div class="form-grid">
      <label>Name<input data-field="name" value="${escapeHTML(item.name)}"></label>
      <label>Category<input data-field="category" value="${escapeHTML(item.category)}"></label>
      <label class="wide">Description<textarea data-field="description">${escapeHTML(item.description)}</textarea></label>
      <label>Logo URL or path<input data-field="logo" value="${escapeHTML(item.logo)}"></label>
      <label>Accent color<input data-field="accent" type="color" value="${escapeHTML(item.accent || "#1b5fa7")}"></label>
      <label>Total sponsor budget<input data-field="budget" type="number" min="0" step="1000" value="${Number(item.budget || 0)}"></label>
      <div class="calculation"><span>AYSO National rev-share (20%)</span><strong data-national-share>${currency.format(national)}</strong><small>Placement budget: <b data-placement-budget>${currency.format(Number(item.budget || 0) - national)}</b></small></div>
      <label>Sleeve / uniform<input data-field="sleeve" type="number" min="0" step=".5" value="${Number(item.sleeve || 0)}"></label>
      <label>Back / uniform<input data-field="back" type="number" min="0" step=".5" value="${Number(item.back || 0)}"></label>
      <label>Chest / uniform<input data-field="chest" type="number" min="0" step=".5" value="${Number(item.chest || 0)}"></label>
      <label>Status<select data-field="status"><option value="available" ${item.status === "available" ? "selected" : ""}>Available</option><option value="review" ${item.status === "review" ? "selected" : ""}>Review required</option></select></label>
    </div>
  </article>`;
}

function benefitEditor(item, index) {
  return `<article class="editor-card" data-benefit-index="${index}">
    <div class="editor-card-head"><div><p class="utility-label">Benefit ${index + 1}</p><h3>${escapeHTML(item.brand)}</h3></div><button class="text-button danger" type="button" data-remove-benefit="${index}">Remove</button></div>
    <div class="form-grid">
      <label>Brand<input data-field="brand" value="${escapeHTML(item.brand)}"></label>
      <label>Offer name<input data-field="name" value="${escapeHTML(item.name)}"></label>
      <label>Discount amount<input data-field="discount" value="${escapeHTML(item.discount)}"></label>
      <label>Discount code<input data-field="code" value="${escapeHTML(item.code)}"></label>
      <label class="wide">Description<textarea data-field="description">${escapeHTML(item.description)}</textarea></label>
      <label>Unique redemption link<input data-field="url" value="${escapeHTML(item.url)}"></label>
      <label>Logo URL or path<input data-field="logo" value="${escapeHTML(item.logo)}"></label>
      <label>Accent color<input data-field="accent" type="color" value="${escapeHTML(item.accent || "#1b5fa7")}"></label>
    </div>
  </article>`;
}

function bindEditorFields(container, collectionName) {
  container.querySelectorAll(`[data-${collectionName}-index]`).forEach((card) => {
    const index = Number(card.dataset[`${collectionName}Index`]);
    card.querySelectorAll("[data-field]").forEach((input) => input.addEventListener("input", () => {
      const numeric = ["budget", "sleeve", "back", "chest"].includes(input.dataset.field);
      state[collectionName === "sponsor" ? "sponsors" : "benefits"][index][input.dataset.field] = numeric ? Number(input.value) : input.value;
      if (input.dataset.field === "name" || input.dataset.field === "brand") card.querySelector("h3").textContent = input.value;
      if (input.dataset.field === "budget") {
        card.querySelector("[data-national-share]").textContent = currency.format(Number(input.value) * 0.2);
        card.querySelector("[data-placement-budget]").textContent = currency.format(Number(input.value) * 0.8);
      }
    }));
  });
}

function renderAdmin() {
  const sponsorContainer = document.querySelector("#sponsorEditor");
  const benefitContainer = document.querySelector("#benefitEditor");
  if (!sponsorContainer || !benefitContainer) return;
  const draw = () => {
    sponsorContainer.innerHTML = state.sponsors.map(sponsorEditor).join("");
    benefitContainer.innerHTML = state.benefits.map(benefitEditor).join("");
    bindEditorFields(sponsorContainer, "sponsor");
    bindEditorFields(benefitContainer, "benefit");
    sponsorContainer.querySelectorAll("[data-remove-sponsor]").forEach((button) => button.addEventListener("click", () => { state.sponsors.splice(Number(button.dataset.removeSponsor), 1); draw(); }));
    benefitContainer.querySelectorAll("[data-remove-benefit]").forEach((button) => button.addEventListener("click", () => { state.benefits.splice(Number(button.dataset.removeBenefit), 1); draw(); }));
  };
  document.querySelector("#addSponsor").addEventListener("click", () => { state.sponsors.push({ id: `sponsor-${Date.now()}`, name: "New sponsor", category: "Category", description: "Add the offer description.", logo: "", accent: "#1b5fa7", budget: 100000, status: "review", sleeve: 4, back: 7, chest: 12 }); draw(); });
  document.querySelector("#addBenefit").addEventListener("click", () => { state.benefits.push({ id: `benefit-${Date.now()}`, brand: "New partner", name: "New member offer", discount: "Offer amount", description: "Add the benefit details.", code: "AYSO-CODE", url: "#placeholder-new-benefit", logo: "", accent: "#1b5fa7" }); draw(); });
  document.querySelector("#saveData").addEventListener("click", () => {
    saveAYSOState(state);
    const notice = document.querySelector("#saveNotice");
    notice.textContent = "Changes saved. Marketplace and Benefits now use this content.";
    notice.classList.add("show");
    setTimeout(() => notice.classList.remove("show"), 3500);
  });
  document.querySelector("#resetData").addEventListener("click", () => {
    if (!confirm("Reset all marketplace and benefit content to the prototype defaults?")) return;
    const defaults = resetAYSOState();
    state.sponsors = defaults.sponsors;
    state.benefits = defaults.benefits;
    draw();
  });
  draw();
}

renderMarketplace();
renderBenefits();
renderAdmin();
