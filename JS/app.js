const toggleThemeBtns = document.querySelectorAll(".theme-toggler");
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-open-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const shopOpenBtn = document.querySelector(".shop-open-btn");
const shopCloseBtn = document.querySelector(".shop-close-btn");
const shop = document.querySelector(".shop");

// Theme Switch Mobile & Desktop
toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click" , function(){

        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

// Nav Open & Close Mobile
navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.remove("overlay-invisible");
    overlay.classList.add("overlay-visible");
})
function closeNav() {
    nav.classList.remove("right-0");
    nav.classList.add("-right-64");
    overlay.classList.remove("overlay-visible");
    overlay.classList.add("overlay-invisible");
    submenuOpenBtn.parentElement.classList.remove("text-orange-300");
    submenu.classList.remove("submenu-open");
}
navCloseBtn.addEventListener("click",closeNav)
overlay.addEventListener("click",closeNav)


// Submenu Mobile
submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    submenu.classList.toggle("submenu-open");
})

// Shopping Open & Close Mobile
shopOpenBtn.addEventListener("click",() => {
    shop.classList.remove("-left-64");
    shop.classList.add("left-0");
    overlay.classList.remove("overlay-invisible");
    overlay.classList.add("overlay-visible");
})
function closeShop() {
    shop.classList.remove("left-0");
    shop.classList.add("-left-64");
    overlay.classList.remove("overlay-visible");
    overlay.classList.add("overlay-invisible");
}
shopCloseBtn.addEventListener("click",closeShop)
overlay.addEventListener("click",closeShop)