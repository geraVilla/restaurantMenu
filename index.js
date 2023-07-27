
let sideBar = document.querySelector(".sideBar")

let breakfastMenu = document.querySelector(".breakfastMenu")


let restaurantTitle = document.querySelector(".restaurantTitle")

let introImage = document.querySelector(".introImage")

let allMenus = document.querySelector(".allMenus")
let socialIcons = document.querySelector(".socialIcons")


let firstPart = document.querySelector(".firstPart")
let secondPart = document.querySelector(".secondPart")
let thridPart = document.querySelector(".thridPart")

let titleAndImage = document.querySelector(".titleAndImage")

window.addEventListener("load", function(){

    /// play first animation for three seconds total
    setTimeout(function(){
        sideBar.classList.add("firstAnimation")
    }, 500)

    setTimeout(function(){
        introImage.style.display = "block"
        introImage.classList.add("introImageAnimate")
        restaurantTitle.classList.add("fadeInRestaurantTitle")
    }, 1900)

    setTimeout(function(){
        introImage.classList.remove("introImageAnimate")
        introImage.classList.add("fadeOutImage")
        
    }, 3200)

    setTimeout(function(){
        introImage.style.display = "none"
        
    }, 3750)


    setTimeout(function(){
        sideBar.classList.add("secondAnimation")
        
    
    }, 3800)

    setTimeout(function(){
        //allMenus.style.display = "flex"
        //allMenus.style.opacity = "1"
        allMenus.classList.remove("allMenus")
        allMenus.classList.add("revealAllMenus")
        socialIcons.classList.remove("socialIcons")
        socialIcons.classList.add("revealSocialIcons")
    }, 4500)

    setTimeout(function(){
        titleAndImage.style.opacity = "1"
    }, 5000)

    setTimeout(function(){
        firstPart.style.opacity = "1"
    }, 5500)

    setTimeout(function(){
        secondPart.style.opacity = "1"
    }, 5625)

    setTimeout(function(){
        thridPart.style.opacity = "1"
    }, 5750)


    

})