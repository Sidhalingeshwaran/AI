// Animate on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("[data-animate]").forEach((el) => {
  observer.observe(el);
});

// Collapse navbar on link click (Bootstrap 5)
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".navbar-collapse");
    const bsCollapse = bootstrap.Collapse.getInstance(nav);
    if (bsCollapse) bsCollapse.hide();
  });
});

// EmailJS init
(function () {
  emailjs.init("OgG-EWzPWy4ttiXmG");
})();

// Form submit handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("aiForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const idea = this.idea.value.trim();

    // Validation
    if (!name || !email || !idea) {
      alert("Please fill in all the fields ❗");
      return;
    }

    emailjs
      .sendForm("service_70coj1i", "template_3mf9cne", this)
      .then(() => {
        this.reset();

        const modalEl = document.getElementById("exampleModal");
        const modal = new bootstrap.Modal(modalEl);
        modal.show();

        // Auto close after 3s
        setTimeout(() => modal.hide(), 3000);
      })
      .catch((err) => {
        console.error(err);
        alert("Submission failed ❌ Please try again.");
      });
  });
});
