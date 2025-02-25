const toggleNav = () => {
    document.getElementById("main-nav-items").classList.toggle("hidden");
};

const loopItUp = () => {
    let resultUl = document.getElementById("result");
    resultUl.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        const liElem = document.createElement("li");
        resultUl.append(liElem);
    }
};

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
    document.getElementById("button-loop").onclick = loopItUp;
}; 