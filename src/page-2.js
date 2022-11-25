import './page-2.css';
import sanjiProfile from './images/sanji-profile.png';

function addPage2(){
    const pageTwoButton = document.querySelector(".tab-container button:nth-child(2)");
    const mainContent = document.querySelector(".main-content");
    pageTwoButton.addEventListener("click",()=>{
        while(mainContent.firstElementChild){
            mainContent.firstElementChild.remove();
        }
        const myProfile = document.createElement("img");
        myProfile.src = sanjiProfile;
        const profileContainer = document.createElement("div");
        const  infoContainer = document.createElement("div");

        mainContent.appendChild(profileContainer);
        profileContainer.appendChild(myProfile);
        profileContainer.appendChild(infoContainer);

        profileContainer.classList.add("profile-container");
        myProfile.classList.add("profile-picture");
        infoContainer.insertAdjacentText("afterbegin","Sanji");
    });    
} 

export {addPage2};