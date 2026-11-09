// The content and links work without JavaScript; this enhances navigation.
document.documentElement.classList.add("js");

const navigation = document.querySelector("#navigation");
const toggle = document.querySelector(".menu-toggle");

function closeMenu() {
  navigation.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.querySelector("span").textContent = "+";
}

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
  toggle.querySelector("span").textContent = open ? "−" : "+";
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
    closeMenu();
    toggle.focus();
  }
});

const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -60% 0px", threshold: 0 });
  document.querySelectorAll("main > section[id]").forEach((section) => observer.observe(section));
}

document.querySelector("#year").textContent = new Date().getFullYear();

const goatCounterSite = "https://abisekdewan.goatcounter.com";

// Count only the published website, so local previews do not inflate visits.
if (location.protocol === "https:" && location.hostname === "abisekdewan.github.io") {
  const tracker = document.createElement("script");
  tracker.src = "https://gc.zgo.at/count.js";
  tracker.async = true;
  tracker.setAttribute("data-goatcounter", `${goatCounterSite}/count`);
  // This is one page: anchors, index.html, and query strings share one total.
  tracker.setAttribute("data-goatcounter-settings", JSON.stringify({ path: "/", no_events: true }));
  document.head.appendChild(tracker);
}

async function updateVisitCount() {
  const counter = document.querySelector("#visit-count");
  if (!counter) return;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(`${goatCounterSite}/counter/TOTAL.json`, {
      credentials: "omit",
      referrerPolicy: "no-referrer",
      signal: controller.signal
    });
    if (!response.ok) throw new Error("Visit count unavailable");
    const data = await response.json();
    const count = typeof data.count === "string" ? data.count : String(data.count);
    if (!/^\d[\d,]*$/.test(count)) throw new Error("Invalid visit count");
    counter.textContent = count;
    counter.title = "Visits since the counter was added; updated periodically.";
  } catch {
    // A blocked or unavailable counter should never show a fabricated number.
    counter.textContent = "—";
    counter.title = "Visit count is temporarily unavailable.";
  } finally {
    clearTimeout(timeout);
  }
}

updateVisitCount();
