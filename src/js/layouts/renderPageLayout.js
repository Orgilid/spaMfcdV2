export function renderPageLayout({ title, content }) {
  return `
    <div class="box">
      <h2 class="title is-4">${title}</h2>
      <p>${content}</p>
    </div>
  `;
}
