import { t, toggleLanguage } from "../i18n/i18n.js";

export function renderNavbar() {
  return `
    <header class="is-sticky navbar-shadow">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a href="#/overview" class="navbar-item logo-item has-text-weight-bold is-uppercase">
              <figure class="image">
                <img src="./img/icon/icon.png" alt="logo" />
              </figure>
              <p><span>${t("nav.brandSpan")}</span> ${t("nav.brand")}</p>
            </a>

            <a
              class="navbar-burger"
              role="button"
              aria-expanded="false"
              data-target="navbarMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div class="navbar-menu has-text-weight-semibold has-text-centered" id="navbarMenu">
            <div class="navbar-start navbar-main-menu">
              <a href="#/overview" class="navbar-item">
                <span class="icon has-text-warning">
                  <i class="fas fa-circle-question"></i>
                </span>
                <span>${t("nav.overview")}</span>
              </a>
                <a href="#/search" class="navbar-item">
                  <span class="icon has-text-primary">
                    <i class="fas fa-search"></i>
                  </span>
                  <span>${t("nav.search")}</span>
                </a>
                <a href="#/calculation" class="navbar-item">
                  <span class="icon has-text-link">
                    <i class="fas fa-calculator"></i>
                  </span>
                  <span>${t("nav.calculation")}</span>
                </a>
                <a href="#/books" class="navbar-item">
                  <span class="icon has-text-info">
                    <i class="fas fa-book"></i>
                  </span>
                  <span>${t("nav.books")}</span>
                </a>

                <a href="#/contact" class="navbar-item">
                  <span class="icon has-text-danger">
                    <i class="fas fa-address-card"></i>
                  </span>
                  <span>${t("nav.contact")}</span>
                </a>
            </div>

            <div class="navbar-end">
              <a href="#" id="language-toggle" class="navbar-item">${t("nav.language")}</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
}

export function initNavbar() {
  const burger = document.querySelector(".navbar-burger");
  const languageToggle = document.getElementById("language-toggle");

  if (burger) {
    const targetId = burger.dataset.target;
    const menu = document.getElementById(targetId);

    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menu?.classList.toggle("is-active");

      const isExpanded = burger.classList.contains("is-active");
      burger.setAttribute("aria-expanded", String(isExpanded));
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", (event) => {
      event.preventDefault();
      toggleLanguage();
      window.location.reload();
    });
  }
}

export function mountNavbar(root) {
  if (!root) return;
  root.innerHTML = renderNavbar();
  initNavbar();
}
