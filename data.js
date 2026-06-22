const AYSO_STORE_KEY = "aysoMarketplaceStateV1";

const AYSO_DEFAULTS = {
  sponsors: [
    {
      id: "carvana",
      name: "Carvana",
      category: "Automotive",
      description: "A nationally coordinated uniform sponsorship opportunity designed to support participating Regions.",
      logo: "assets/partners/carvana.svg",
      accent: "#1b5fa7",
      budget: 100000,
      status: "available",
      sleeve: 4,
      back: 7,
      chest: 12
    },
    {
      id: "chobani",
      name: "Chobani",
      category: "Food & wellness",
      description: "A family-oriented partner opportunity with flexible placement options for local uniform programs.",
      logo: "assets/partners/chobani.svg",
      accent: "#3d6b3e",
      budget: 75000,
      status: "available",
      sleeve: 3.5,
      back: 6,
      chest: 10
    },
    {
      id: "robinhood",
      name: "Robinhood",
      category: "Financial services",
      description: "A premium placement opportunity pending final category and creative review for youth-sports alignment.",
      logo: "assets/partners/robinhood.svg",
      accent: "#0a0a0a",
      budget: 125000,
      status: "review",
      sleeve: 5,
      back: 8,
      chest: 14
    }
  ],
  benefits: [
    {
      id: "fanatics",
      brand: "Fanatics",
      name: "Gear up for less",
      discount: "20% off",
      description: "Save on eligible fan gear for the whole household.",
      code: "AYSO20",
      url: "#placeholder-fanatics",
      logo: "assets/partners/fanatics.svg",
      accent: "#152a4f"
    },
    {
      id: "descendants",
      brand: "Disney’s Descendants",
      name: "Descendants tour offer",
      discount: "Member pricing",
      description: "Access special AYSO member pricing for select tour dates.",
      code: "AYSO-FAMILY",
      url: "#placeholder-descendants",
      logo: "assets/partners/disney.svg",
      accent: "#6b3e86"
    },
    {
      id: "lagalaxy",
      brand: "LA Galaxy / MLS",
      name: "A family night at the match",
      discount: "Up to 25% off",
      description: "Specially priced select-match tickets for AYSO families.",
      code: "AYSO-MATCHDAY",
      url: "#placeholder-lagalaxy",
      logo: "assets/partners/lagalaxy.svg",
      accent: "#c4935a"
    },
    {
      id: "disneyworld",
      brand: "Walt Disney World",
      name: "Make the trip more magical",
      discount: "Special ticket offer",
      description: "Explore an AYSO member ticket offer for a future family visit.",
      code: "AYSO-MAGIC",
      url: "#placeholder-disneyworld",
      logo: "assets/partners/disneyworld.svg",
      accent: "#1b5fa7"
    }
  ]
};

function cloneDefaults() {
  return JSON.parse(JSON.stringify(AYSO_DEFAULTS));
}

function loadAYSOState() {
  try {
    const saved = JSON.parse(localStorage.getItem(AYSO_STORE_KEY));
    if (saved && Array.isArray(saved.sponsors) && Array.isArray(saved.benefits)) return saved;
  } catch (error) {
    console.warn("Saved AYSO Marketplace data could not be read.", error);
  }
  return cloneDefaults();
}

function saveAYSOState(state) {
  localStorage.setItem(AYSO_STORE_KEY, JSON.stringify(state));
}

function resetAYSOState() {
  localStorage.removeItem(AYSO_STORE_KEY);
  return cloneDefaults();
}
