
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Pricing calculator
  const calcBtn = document.getElementById("pc-calc-btn");
  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      const hourly = parseFloat(document.getElementById("pc-hourly-rate").value || "0");
      const hours = parseFloat(document.getElementById("pc-hours").value || "0");
      const costs = parseFloat(document.getElementById("pc-costs").value || "0");
      const margin = parseFloat(document.getElementById("pc-margin").value || "0");
      const resultEl = document.getElementById("pc-result");

      const base = hourly * hours + costs;
      if (base <= 0 || !resultEl) {
        resultEl.textContent = "—";
        return;
      }

      const price = base * (1 + margin / 100);
      resultEl.textContent = price.toFixed(2);
    });
  }

  // Name generator
  const genBtn = document.getElementById("ng-generate-btn");
  if (genBtn) {
    genBtn.addEventListener("click", () => {
      const main = (document.getElementById("ng-keyword-main").value || "").trim();
      const support = (document.getElementById("ng-keyword-support").value || "").trim();
      const list = document.getElementById("ng-results");
      if (!list) return;
      list.innerHTML = "";

      if (!main && !support) {
        const li = document.createElement("li");
        li.textContent = "Add at least one keyword to generate ideas.";
        list.appendChild(li);
        return;
      }

      const ideas = [];
      const m = main || "Flow";
      const s = support || "Studio";

      ideas.push(`${m} ${s}`);
      ideas.push(`${s} ${m}`);
      ideas.push(`${m}${s}`);
      ideas.push(`${m} & ${s}`);
      ideas.push(`${m} Collective`);
      ideas.push(`${s} Lab`);
      ideas.push(`${m} Works`);
      ideas.push(`${m} Hub`);
      ideas.push(`${s} Co.`);
      ideas.push(`${m} & Co.`);

      ideas.forEach((idea) => {
        const li = document.createElement("li");
        li.textContent = idea;
        list.appendChild(li);
      });
    });
  }
});
