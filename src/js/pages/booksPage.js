import { renderPageLayout } from "../layouts/renderPageLayout.js";

export function renderBooksPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: "Books",
    content: `
      <p>Welcome to the books page.</p>
    `,
  });
}
