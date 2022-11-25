
const loadPage = (function intialPageLoad(){
    const content = document.querySelector(".content");
    const container = document.createElement("div");
    const navBar = document.createElement("div");
    const logo = document.createElement("div");
    const tabContainer = document.createElement("div");
    const tabButton1 = document.createElement("button");
    const tabButton2 = document.createElement("button");
    const tabButton3 = document.createElement("button");
    const mainContent = document.createElement("div");

    content.appendChild(container);
    container.appendChild(navBar);
    container.appendChild(mainContent);
    navBar.appendChild(logo);
    navBar.appendChild(tabContainer);
    tabContainer.appendChild(tabButton1);
    tabContainer.appendChild(tabButton2);
    tabContainer.appendChild(tabButton3);
    content.appendChild(mainContent);

    mainContent.classList.add("main-content");
    container.classList.add("container");
    navBar.classList.add("nav-bar");
    logo.classList.add("logo");
    logo.insertAdjacentText("afterbegin","Logo");
    tabContainer.classList.add("tab-container");
    tabButton1.textContent = "Menu";
    tabButton2.textContent = "About";
    tabButton3.textContent = "Contact";
})();

export { loadPage };