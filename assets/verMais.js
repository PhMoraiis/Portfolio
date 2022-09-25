// Deve fazer com que o botão "Ver mais" mostre mais 4 projetos
// e mude o texto para "Ver menos" e diminua a quantidade de projetos mostrados na página

const btnVerMais = document.querySelector(".verMais");
const projetos = document.querySelectorAll(".portfolio-item");

btnVerMais.addEventListener("click", function () {
    if (btnVerMais.textContent == "Ver mais projetos") {
        btnVerMais.textContent = "Ver menos";
        for (let i = 4; i < projetos.length; i++) {
            projetos[i].style.display = "block";
        }
    } else {
        btnVerMais.textContent = "Ver mais projetos";
        for (let i = 4; i < projetos.length; i++) {
            projetos[i].style.display = "none";
        }
    }
});

// Quando carregar a página deve mostrar apenas 4 projetos
window.addEventListener("load", function () {
    for (let i = 4; i < projetos.length; i++) {
        projetos[i].style.display = "none";
    }
});

// Quando apertar o ver mais e o ver menos suavizar a transição
btnVerMais.addEventListener("click", function () {
    for (let i = 4; i < projetos.length; i++) {
        projetos[i].style.transition = "all 0.5s";
    }
});

// Quando o botão estiver em ver mais ele deve estar em uma posição um pouco mais acima
// do que quando estiver em ver menos
btnVerMais.addEventListener("click", function () {
    if (btnVerMais.textContent == "Ver mais projetos") {
        btnVerMais.style.marginTop = "-12rem";
    } else {
        btnVerMais.style.marginTop = "0";
    }
});

// Quando carregar a página o botão deve estar em uma posição um pouco mais acima
// do que quando estiver em ver menos
window.addEventListener("load", function () {
    btnVerMais.style.marginTop = "-12rem";
});