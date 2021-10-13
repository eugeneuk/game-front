document.addEventListener("DOMContentLoaded", function() {

  class Tab {
    constructor(el) {
      this.$switchWrapper = el;
      this.$switch = this.$switchWrapper.querySelector(".switch");
      this.$switchBoxes = this.$switchWrapper.querySelectorAll(".switch-box");
      this.setup();
    }

    setup() {
      this.handleClick = this.handleClick.bind(this);
      this.$switch.addEventListener("click", this.handleClick);
    }

    handleClick(e) {
      const $switchTabClicked = e.target.closest(".switch-item"),
            $switchTab = this.$switch.querySelectorAll(".switch-item"),
            $switchValue = this.$switch.querySelector(".switch-value");
      
      if ($switchTabClicked && !$switchTabClicked.classList.contains("active")) {
        $switchTab.forEach(el => el.classList.remove("active"));
        $switchTabClicked.classList.add("active");
        $switchValue.value = $switchTabClicked.dataset.value;
      }

      this.$switchBoxes.forEach(box => {
        if ($switchTabClicked && !box.classList.contains("active") && box.dataset.boxId == $switchTabClicked.dataset.boxId) {
          box.classList.add("active");
        } else if (box.dataset.boxId !== $switchTabClicked.dataset.boxId) {
          box.classList.remove("active");
        }
      })

    }
  }

  const tabs = document.querySelectorAll(".switch-wrapper");

  tabs && tabs.forEach(el => {
    const switchEl = new Tab(el);
  });

});