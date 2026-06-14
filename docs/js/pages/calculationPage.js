import { getNutritions } from "../services/nutritionService.js"; // Хоолны шим тэжээлийн өгөгдлийг авна.
import { buildFoodGroups } from "../fn/foodSearchEvents.js"; // food_group бүрээр багцалсан food_code, food_name-үүдийг авна. Жишээ нь: "Cereals and Cereal products" → [{ food_code: "01_0106", food_name: "Barley flour, whole grain" }, ...]

import { renderSidebarPageLayout } from "../layouts/sidebarPageLayout.js"; // Sidebar-тай хуудасны layout-г үүсгэх
import { bindSidebar, bindMenuListToggle } from "../fn/sidebarEvents.js";

import { renderPageLayout } from "../layouts/pageLayout.js";
import { renderNotification } from "../layouts/notificationLayout.js";

import { renderFoodGroupList } from "../components/searchFoodGroupListSidebar.js";
import { renderCalculationTable, refreshCalculationTable } from "../components/calculationTable.js";

import { t } from "../i18n/i18n.js";

export async function renderCalculationPage() {
  const app = document.getElementById("app");

  app.innerHTML = renderPageLayout({
    content: renderNotification(t("notification.loadingData")),
  });

  try {
    const nutritionData = await getNutritions(); // Хүнсний найрлагын JSON өгөгдүүдлийг авна.
    const groupedFoods = buildFoodGroups(nutritionData); // food_group бүрээр багцалсан food_code, food_name-үүдийг авна. Жишээ нь: "Cereals and Cereal products" → [{ food_code: "01_0106", food_name: "Barley flour, whole grain" }, ...]

    app.innerHTML = renderSidebarPageLayout({
      sidebarContent: `${renderFoodGroupList(groupedFoods)}`,
      pageId: "calculation",
      pageTitle: t("calculation.title"),
      mainContent: `
          <div id="resultCalculatedTbl">          
           ${renderCalculationTable([])}            
          </div>
        `,
    });

    bindSidebar();
    bindMenuListToggle();

    bindCalculationEvents(nutritionData);
  } catch (error) {
    app.innerHTML = renderPageLayout({
      content: renderNotification(t("notification.failedToLoadNutritionData"), "danger"),
    });
    console.error("Failed to load nutrition data:", error);
  }
}

function bindCalculationEvents(nutritionData) {
  const calculationRoot = document;
  if (!calculationRoot) return;

  calculationRoot.addEventListener("change", async (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.matches('input[name="foodcode"]')) {
      await refreshCalculationTable(nutritionData);
    }
  });
}
