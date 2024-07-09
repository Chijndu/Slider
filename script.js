let nextCon = document.getElementById("next");
let prevCon = document.getElementById("prev");
let carouselCon = document.querySelector(".carousel");
let listitemCon = document.querySelector(".carousel .list");
let thumbnailCon = document.querySelector(".carousel .thumbnail");

nextCon.onclick = function(){
    showslider("next");
}
prevCon.onclick = function(){
    showslider("prev");
}
let timeRunning = 3000;
let runTimeOut;
function showslider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if(type === "next"){
        listitemCon.appendChild(itemSlider[0]);
        thumbnailCon.appendChild(itemThumbnail[0]);  
        carouselCon.classList.add("next");
    }else{
        let positionLastItem = itemSlider.length - 1;
        listitemCon.prepend(itemSlider[positionLastItem]);
        carouselCon.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselCon.classList.remove("next");
        carouselCon.classList.remove("prev");
    }, timeRunning)
}