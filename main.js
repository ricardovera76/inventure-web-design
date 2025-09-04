// toggle menu for mobile view + section view-mode button handler
function toggleMenu() {
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
// get the current year for the footer
document.getElementById("year").textContent = new Date().getFullYear();

const stats = {
  maria: { engagement: 82, referrals: 3, matches: 2 },
  rick: { engagement: 74, referrals: 1, matches: 3 },
  john: { engagement: 65, referrals: 2, matches: 1 },
};

const select = document.getElementById("candidate-select");
const statsList = document.getElementById("candidate-stats");

select.addEventListener("change", () => {
  const c = stats[select.value];
  statsList.innerHTML = `
      <li>Engagement score: ${c.engagement}</li>
      <li>Referrals: ${c.referrals}</li>
      <li>Matching roles: ${c.matches}</li>
    `;
});
