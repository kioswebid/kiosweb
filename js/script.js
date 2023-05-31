/**************************/
/* Make faq accordion work */
/**************************/
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((accItem) => {
  const accBtn = accItem.querySelector(".accordion-button");
  const accCollapse = accItem.querySelector(".accordion-collapse");

  accBtn.addEventListener("click", () => {
    const activeAccCollapse = accItem
      .closest(".accordion")
      .querySelector(".accordion-collapse.collapse.show");

    accBtn.classList.remove("collapsed");
    accCollapse.classList.add("show");

    if (activeAccCollapse === accCollapse) {
      accBtn.classList.add("collapsed");
      accCollapse.classList.remove("show");
      return;
    }

    if (activeAccCollapse !== null) {
      const activeAccBtn = activeAccCollapse
        .closest(".accordion-item")
        .querySelector(".accordion-button");

      activeAccBtn.classList.add("collapsed");
      activeAccCollapse.classList.remove("show");
    }
  });
});

/**************************/
/* Make navigation mobile work */
/**************************/
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.removeProperty("overflow");
  }
});

/**************************/
/* Make smooth scrolling animation */
/**************************/
const navLinks = document.querySelectorAll(".main-nav-link, .btn--nav-cta");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl.offsetTop);
      const topPos = sectionEl.offsetTop - headerEl.offsetHeight;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }

    headerEl.classList.remove("nav-open");
    document.body.style.removeProperty("overflow");
  });
});

/**************************/
/* Sticky header */
/**************************/
window.addEventListener("scroll", () => {
  if (scrollY > headerEl.clientHeight) {
    headerEl.classList.add("bg-white");
  } else {
    headerEl.classList.remove("bg-white");
  }
});
