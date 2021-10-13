document.addEventListener("DOMContentLoaded", function() {

  if (document.documentElement.clientWidth <= 768) {
    console.log(1);
    const menuBtn = document.querySelector(".menu-mobile-btn"),
        menuEl = document.querySelector(".menu-mobile");

    function handleOutside(e) {
      const menu = e.target.closest(".menu-mobile");
      const btn = e.target.closest(".menu-mobile-btn");

      if (!menu && !btn) {
        menuEl.classList.remove("active");
      }
    }

    menuBtn.addEventListener("click", function() {
      menuEl.classList.toggle("active");

      if (menuEl.classList.contains("active")) {
        document.addEventListener("click", handleOutside);
      } else {
        document.removeEventListener("click", handleOutside);
      }

    });
  }


});