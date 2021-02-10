const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  //    добавляем параметр по умолчанию display , далее можемего изменять по надобности
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function hideTypeContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTypeContent(i = 1) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }
  hideTypeContent();
  showTypeContent();

  console.log("hide");

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTypeContent();
          showTypeContent(i);
        }
      });
    }
  });
};

export default tabs;
