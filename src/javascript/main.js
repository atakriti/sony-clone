let sites = document.querySelector(".sites")
sites.style.height = "0vw"
let siteClose = () => {
    if (sites.style.height === "30vw") {
        setTimeout(() => (sites.style.height = "0vw"), 500)
        sites.style.animationName = "siteCloseA"
        sites.style.animationDuration = "2s"
    } else {
        setTimeout(() => ( sites.style.height = "30vw"),500)
        sites.style.animationName = "siteOpenA"
        sites.style.animationDuration = "2s"
}
}
// ============ open ========
let siteOpen = () => {
    if (sites.style.height === "0vw") {
       setTimeout(() => ( sites.style.height = "30vw"),500)
        sites.style.animationName = "siteOpenA"
        sites.style.animationDuration = "2s"
    } else {
        setTimeout(() => (sites.style.height = "0vw"), 500)
        sites.style.animationName = "siteCloseA"
        sites.style.animationDuration = "2s"
}
}