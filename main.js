

let header = document.querySelector("header");
let btn = document.querySelector("button");


btn.addEventListener("click", () => {
    if (btn.innerHTML == "Tun") {
        header.classList.add("tun");
        header.classList.remove("kun");
        btn.innerHTML = "Kun";
    } else {
        header.classList.remove("tun");
        header.classList.add("kun");
        btn.innerHTML = "Tun";
    }
});