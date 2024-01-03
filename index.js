function botaoSalvos() {
    var header = document.querySelector("header");
    var classeHeader = header.className;

    switch (classeHeader) {
        case "header-aberta":
            header.classList.remove("header-aberta");
            header.classList.add("header-fechada");
            break;
        case "header-fechada":
            header.classList.remove("header-fechada");
            header.classList.add("header-aberta");
            break;
    }
}

function botaoStats() {
    var section = document.querySelector("section#direita");
    var classeSection = section.className;

    switch (classeSection) {
        case "direita-aberta":
            section.classList.remove("direita-aberta");
            section.classList.add("direita-fechada");
            break;
        case "direita-fechada":
            section.classList.remove("direita-fechada");
            section.classList.add("direita-aberta");
            break;
    }
}