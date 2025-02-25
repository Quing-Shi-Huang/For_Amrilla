let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//CONFIG PARAM 
let countItem = items.length;
let itemAtive = 0;

//EVENT NEXT CLICK 
next.onclick = function(){
    itemAtive = itemAtive + 1;
    if(itemAtive >= countItem){
        itemAtive = 0;
    }
    showSlider();
}
//EVENT PREV CLICK
prev.onclick = function() {
    itemAtive = itemAtive - 1;
    if(itemAtive < 0) {
        itemAtive = countItem - 1;
    }
    showSlider();
}
//AUTO RUN SLIDER 
let refreshInterval = setInterval(() => {
    next.click();   
}, 3000)


function showSlider(){
    //Remove Item ACTIVE OLD
    let itemAtiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemAtiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //Active new item 
    items[itemAtive].classList.add('active');
    thumbnails[itemAtive].classList.add('active');


    // CLEAN AUTO TIME RUN SLIDER
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)

}

//CLICK THUMBNAIL 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemAtive = index;
        showSlider();
    })
})
