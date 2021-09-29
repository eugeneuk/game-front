document.addEventListener("DOMContentLoaded", function() {

  const modals = document.querySelectorAll(".modal__wrapper"),
        btns = document.querySelectorAll(".btn-modal"),
        selectItems = document.querySelectorAll(".select-item"),
        amountInput = document.querySelector(".mf-amount-input"),
        amountBtns = document.querySelectorAll(".mf-amount-btn");

  btns.forEach(btn => {
    btn.addEventListener("click", function() {

      modals.forEach(modal => {
        if (btn.dataset.modal == modal.dataset.modal) {
          modal.classList.add("active");
          document.body.classList.add("noscroll");
        }
      });
    });
  });

  modals.forEach(modalEl => {

    modalEl.addEventListener("click", function(e) {

      e.stopPropagation();

      if (e.target.classList.contains("modal__wrapper")) {
        modalEl.classList.remove("active");
        document.body.classList.remove("noscroll");
      }
    });

  });

  if (selectItems) {
    selectItems.forEach((item, i, arr) => {
      item.addEventListener("click", () => {
        arr.forEach(p => p.classList.remove("selected"));
        item.classList.toggle("selected");
      });
    });
  }

  if (amountBtns) {
    amountBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        amountInput.value = btn.dataset.value;
      });
    });
  }

});