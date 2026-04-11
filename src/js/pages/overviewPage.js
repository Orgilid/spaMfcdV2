import { renderPageLayout } from "../layouts/renderPageLayout.js";

export function renderOverviewPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: "Overview",
    content: `
      <p>Welcome to the overview page.</p>
    `,
  });
}
