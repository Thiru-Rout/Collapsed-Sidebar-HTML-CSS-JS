function myFunction(e){

    e.classList.toggle("show");

    let elem = document.getElementById("nav-id"),
        style = window.getComputedStyle(elem),
        right = style.getPropertyValue("right");

    if (right === "0"){
        let elam;
        elam.style.right = "-260px";
    }else {
        elem.style.right = "0px"
    }
}