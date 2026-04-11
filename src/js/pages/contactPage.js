import { renderPageLayout } from "../layouts/renderPageLayout.js";

export function renderContactPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: "Contact",
    content: `
      <p>Welcome to the contact page.</p>
    `,
  });
}