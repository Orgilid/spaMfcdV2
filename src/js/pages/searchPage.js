import { renderPageLayout } from "../layouts/renderPageLayout.js";

export function renderSearchPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: "Search",
    content: `
      <p>Welcome to the search page.</p>
    `,
  });
}
