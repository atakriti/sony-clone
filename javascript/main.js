let sites = document.querySelector(".sites")
sites.style.height = "0vw"
let siteClose = () => {
    if (sites.style.height === "30vw") {
        setTimeout(() => (sites.style.height = "0vw"), 500)
        sites.style.animationName = "siteCloseA"
        sites.style.animationDuration = "1s"
    } else {
        setTimeout(() => ( sites.style.height = "30vw"),500)
        sites.style.animationName = "siteOpenA"
        sites.style.animationDuration = "1s"
}
}
// ============ open ========
let siteOpen = () => {
    if (sites.style.height === "0vw") {
       setTimeout(() => ( sites.style.height = "30vw"),500)
        sites.style.animationName = "siteOpenA"
        sites.style.animationDuration = "1s"
    } else {
        setTimeout(() => (sites.style.height = "0vw"), 500)
        sites.style.animationName = "siteCloseA"
        sites.style.animationDuration = "1s"
}
}
// ==================================== MENU ================
let menuMobile = document.querySelector(".menu-mobile")

menuMobile.style.display = "block"
let menuClose = () => {
    if (menuMobile.style.display === "block") {
        setTimeout(() => (menuMobile.style.display = "none"), 1000)
        menuMobile.style.animationName = "menuClose"
        menuMobile.style.animationDuration = "1s"
        
    } else {
        menuMobile.style.display = "block"
    }
}
let menuOpen = () => {
    if (menuMobile.style.display === "none") {
        setTimeout(() => (menuMobile.style.display = "block"), 100)
        menuMobile.style.animationName = "menuOpen"
        menuMobile.style.animationDuration = "1s"
        
    } else {
        menuMobile.style.display = "none"
    }
}
// ======================= menu lists =============
let one = () => {
    if (menuMobile.style.display === "block") {
        setTimeout(() => (menuMobile.style.display = "none"), 1000)
        menuMobile.style.animationName = "menuClose"
        menuMobile.style.animationDuration = "1s"
        
    } else {
        menuMobile.style.display = "block"
    }
}
let two = () => {
    if (menuMobile.style.display === "block") {
        setTimeout(() => (menuMobile.style.display = "none"), 1000)
        menuMobile.style.animationName = "menuClose"
        menuMobile.style.animationDuration = "1s"
        
    } else {
        menuMobile.style.display = "block"
    }
}
let three = () => {
    if (menuMobile.style.display === "block") {
        setTimeout(() => (menuMobile.style.display = "none"), 1000)
        menuMobile.style.animationName = "menuClose"
        menuMobile.style.animationDuration = "1s"
        
    } else {
        menuMobile.style.display = "block"
    }
}
let four = () => {
    if (menuMobile.style.display === "block") {
        setTimeout(() => (menuMobile.style.display = "none"), 1000)
        menuMobile.style.animationName = "menuClose"
        menuMobile.style.animationDuration = "1s"
        
    } else {
        menuMobile.style.display = "block"
    }
}