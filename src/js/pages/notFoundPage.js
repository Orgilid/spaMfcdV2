import { renderPageLayout } from "../layouts/renderPageLayout.js";

export function renderNotFoundPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: "Not Found",
    content: `
      <p>Welcome to the not found page.</p>
    `,
  });
}
