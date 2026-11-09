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
