document.addEventListener("DOMContentLoaded", () => {

  const btnToggleEl = document.querySelector(".or-chat-btntoggle"),
        chatEl = document.querySelector(".or-chat__wrap");

  btnToggleEl.addEventListener("click", () => {
    btnToggleEl.classList.toggle("active");
    btnToggleEl.textContent = btnToggleEl.classList.contains("active") ? 'Скрыть чат' : 'Открыть чат';
    chatEl.classList.toggle("hidden");
  });

});