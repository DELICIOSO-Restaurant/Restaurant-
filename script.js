const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const tabs = document.querySelectorAll(".tab");
const dishes = document.querySelectorAll(".dish-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    dishes.forEach(dish => {
      dish.hidden = filter !== "all" && dish.dataset.category !== filter;
    });
  });
});

const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString().split("T")[0];
  dateInput.min = localToday;
}

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! This demo request is ready. Connect a booking service to receive real reservations.`;
  form.reset();
  dateInput.min = new Date().toISOString().split("T")[0];
});

document.getElementById("year").textContent = new Date().getFullYear();
