document.addEventListener("DOMContentLoaded", function() {

  const elQuests = document.querySelectorAll(".que__inner"),
        elItem = document.querySelectorAll(".que");

  elQuests.forEach((elem, index) => {
    elQuests[index].style.height = elQuests[index].clientHeight + 'px';
    elItem[index].style.height = elQuests[index].clientHeight + 'px';
    elem.addEventListener("click", () => {
      elem.classList.toggle("active");
      elItem[index].classList.toggle("noneShadow");
      let currHeight = parseInt(window.getComputedStyle(elItem[index], null).getPropertyValue("height"), 10);
      if (elQuests[index].clientHeight === currHeight) {
          elItem[index].style.height = `${ elItem[index].scrollHeight }px`;
      } else {
          elItem[index].style.height = `${ elQuests[index].clientHeight }px`;
      }
    });
  });

});