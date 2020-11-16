document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tabs-header .btn").forEach((btn) => {
    btn.onclick = function () {
      // Node List not apply for map()

      document.querySelectorAll(".tabs-body .tab").forEach((tab) => {
        if (tab.className.includes("active")) tab.classList.remove("active");
      });

      const value = btn.getAttribute("data-id"); // Regular expression (other idea)

      const tabActive = document.getElementById(value);

      tabActive.className += " active";
    };
  });
});
