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

function salvarAtual() {
    var nomeInput = document.querySelector("#input-nome").value;
    const lista = document.querySelector("body > header > ul");
    var novoLi = document.createElement('li');
    novoLi.classList.add('salvo');
    lista.appendChild(novoLi);
    var a = document.createElement('a');
    var nomeOutput = document.createElement('p');
    novoLi.appendChild(a);
    a.appendChild(nomeOutput);
    nomeOutput.append(nomeInput);

    var imagem = document.createElement('img');
    imagem.classList.add('img-salvos');
    imagem.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dda829fd-4943-49b6-8569-41bf58368248/dcf30ck-d5732a87-b415-4c42-b74b-c2b8ed8a08a8.jpg/v1/fill/w_681,h_750,q_75,strp/jojo_s_bizarre_adventure_stand_stat_chart_by_optimusomega_dcf30ck-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvZGRhODI5ZmQtNDk0My00OWI2LTg1NjktNDFiZjU4MzY4MjQ4XC9kY2YzMGNrLWQ1NzMyYTg3LWI0MTUtNGM0Mi1iNzRiLWMyYjhlZDhhMDhhOC5qcGciLCJ3aWR0aCI6Ijw9NjgxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.qwPRotoCOPklehwcgFQkRzV-pT9q63I8o4m6M29jmDg"
    novoLi.appendChild(imagem);
    lista.scrollTop = lista.scrollHeight
}