import { renderPageLayout } from "../layouts/renderPageLayout.js";

export function renderCalculationPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    title: "Calculation",
    content: `
      <p>Welcome to the calculation page.</p>
    `,
  });
}
