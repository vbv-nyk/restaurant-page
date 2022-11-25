import './page-3.css';
import Baratie from './images/Baratie.png';
function addPage3(){
    const pageThreeButton = document.querySelector(".tab-container button:nth-child(3)");
    const mainContent = document.querySelector(".main-content");
    pageThreeButton.addEventListener("click",()=>{
        while(mainContent.firstElementChild){
            mainContent.firstElementChild.remove();
        }
        const baratieImage = document.createElement("img");
        const baratieImageContainer = document.createElement("div");
        baratieImage.src = Baratie;
        baratieImage.classList.add("baratie-image");
        mainContent.appendChild(baratieImageContainer);
        baratieImageContainer.appendChild(baratieImage);
        baratieImageContainer.classList.add("baratie-image-container");
    });    
} 

export {addPage3};