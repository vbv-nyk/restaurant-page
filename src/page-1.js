import './page-1.css';

function addPage1(){
    const pageOneButton = document.querySelector(".tab-container button:nth-child(1)");
    const mainContent = document.querySelector(".main-content");
    pageOneButton.addEventListener("click",()=>{
        while(mainContent.firstElementChild){
            mainContent.firstElementChild.remove();
        }
        const menuContainer = document.createElement("div");
        let cost = 1;
        for(let i=0;i<6;i++){
            const menuItem = document.createElement("div");
            const dishName = document.createElement("div");
            const price = document.createElement("div");

            menuContainer.classList.add("menu-container");
            menuItem.classList.add("menu-item");
            dishName.classList.add("dish-name");
            price.classList.add("price");

            mainContent.appendChild(menuContainer);
            menuContainer.appendChild(menuItem);
            menuItem.appendChild(dishName);
            menuItem.appendChild(price);

            dishName.insertAdjacentText("afterbegin",`Item: ${i + 1}`);
            price.insertAdjacentText("afterbegin",`Cost: ${cost}$`);
            cost += 2;
        }
    });
};
export {addPage1};