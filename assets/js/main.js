var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".modulo1").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo I - Introdução, Sistemas e Aplicações";
});

document.querySelector(".modulo2").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo II - Linguagens de Programação";
});

document.querySelector(".modulo3").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo III - Aprendendo HTML e Elementos";
});

document.querySelector(".modulo4").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo IV - Aprendendo CSS";
});

document.querySelector(".modulo5").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo V - Elementos de Página";
});

document.querySelector(".modulo6").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo VI - Elementos de Página e GIT";
});

document.querySelector(".modulo7").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo VII - Introdução ao Javascript";
});

document
    .querySelector(".modulo8")
    .addEventListener("mouseover", function mudarTexto8() {
        texto1.innerHTML =
            "Modulo VIII - HTML Semântico e FlexBox";
    });

document.querySelector(".modulo9").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo IX - Programação Orientada a Objetos";
});

document.querySelector(".modulo10").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo X - Introdução ao NodeJS";
});

document.querySelector(".modulo11").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Modulo XI - Introdução a SQL";
});

document.querySelector(".modulo12").addEventListener("mouseover", function () {
    texto1.innerHTML =
        "Hackathon";
});

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
    sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
        texto1.innerHTML = `O Aprendizado do Agora - #EuMeComprometo`;
    });
}