import { t } from "../i18n/i18n.js";

export function renderOverviewPage() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="box">
      <h2 class="title is-4">${t("overview.title")}</h2>
      <p>${t("overview.welcome")}</p>
    </div>
  `;
}
