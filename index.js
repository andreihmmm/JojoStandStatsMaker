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
    const notas = ['F', 'E', 'D', 'C', 'B', 'A'];

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;
    var input5 = document.getElementById("input5").value;
    var input6 = document.getElementById("input6").value;

    var nomePower = document.getElementById("nome-power").value;
    var nomeSpeed = document.getElementById("nome-speed").value;
    var nomeRange = document.getElementById("nome-range").value;
    var nomeDurability = document.getElementById("nome-durability").value;
    var nomePrecision = document.getElementById("nome-precision").value;
    var nomePotential = document.getElementById("nome-potential").value;

    const rangexSalvo = [96,]
    const rangeySalvo = [98,]

    const durabilityxSalvo = [96]
    const durabilityySalvo = [98]

    const precisionxSalvo = [96]
    const precisionySalvo = [98]

    const potentialxSalvo = [96]
    const potentialySalvo = [98]

    const powerxSalvo = [96]
    const powerySalvo = [98]

    const speedxSalvo = [96]
    const speedySalvo = [98]

    var nomeInput = document.querySelector("#input-nome").value;
    const lista = document.querySelector("body > header > ul");
    var novoLi = document.createElement('li');
    novoLi.classList.add('salvo');
    lista.appendChild(novoLi);
    var aSalvo = document.createElement('a');
    aSalvo.classList.add("a-salvo");
    novoLi.appendChild(aSalvo);
    var pzinho = document.createElement('p');
    pzinho.innerText = nomeInput;
    aSalvo.appendChild(pzinho);
    var secao = document.createElement('section');
    secao.classList.add("chart-salvo");
    novoLi.appendChild(secao)
    var imagemChart = document.createElement('img');
    imagemChart.src = "chart.png";
    imagemChart.classList.add("img-salvos");
    secao.appendChild(imagemChart);
    var aChartzinho = document.createElement('a');
    aChartzinho.classList.add('a-chartzinho');
    secao.appendChild(aChartzinho);

    var hpower = document.createElement("h5");
    hpower.classList.add("power-chart-salvo");
    hpower.innerText = nomePower

    var hspeed = document.createElement("h5");
    hspeed.classList.add("speed-chart-salvo");
    hspeed.innerText = nomeSpeed

    var hrange = document.createElement("h5");
    hrange.classList.add("range-chart-salvo");
    hrange.innerText = nomeRange

    var hdurability = document.createElement("h5");
    hdurability.classList.add("durability-chart-salvo");
    hdurability.innerText = nomeDurability

    var hprecision = document.createElement("h5");
    hprecision.classList.add("precision-chart-salvo");
    hprecision.innerText = nomePrecision

    var hpotential = document.createElement("h5");
    hpotential.classList.add("potential-chart-salvo");
    hpotential.innerText = nomePotential

    aChartzinho.appendChild(hpower)
    aChartzinho.appendChild(hspeed)
    aChartzinho.appendChild(hrange)
    aChartzinho.appendChild(hdurability)
    aChartzinho.appendChild(hprecision)
    aChartzinho.appendChild(hpotential)

    var svg = document.createElement('svg');
    svg.setAttribute("height", "195")
    svg.setAttribute("width", "195")
    secao.appendChild(svg)

    var nrange = document.createElement('text')
    nrange.classList.add("notas-salvas")
    nrange.innerText = notas[input1];
    nrange.setAttribute("x", "143");
    nrange.setAttribute("y", "135");
    svg.appendChild(nrange);

    var ndurability = document.createElement('text')
    ndurability.classList.add("notas-salvas")
    ndurability.innerText = notas[input2];
    ndurability.setAttribute("x", "92");
    ndurability.setAttribute("y", "165");
    svg.appendChild(ndurability);

    var nprecision = document.createElement('text')
    nprecision.classList.add("notas-salvas")
    nprecision.innerText = notas[input3];
    nprecision.setAttribute("x", "40");
    nprecision.setAttribute("y", "136");
    svg.appendChild(nprecision);

    var npotential = document.createElement('text')
    npotential.classList.add("notas-salvas")
    npotential.innerText = notas[input4];
    npotential.setAttribute("x", "38");
    npotential.setAttribute("y", "70");
    svg.appendChild(npotential);

    var npower = document.createElement('text')
    npower.classList.add("notas-salvas")
    npower.innerText = notas[input5];
    npower.setAttribute("x", "92");
    npower.setAttribute("y", "42");
    svg.appendChild(npower);

    var nspeed = document.createElement('text')
    nspeed.classList.add("notas-salvas")
    nspeed.innerText = notas[input6];
    nspeed.setAttribute("x", "145");
    nspeed.setAttribute("y", "72");
    svg.appendChild(nspeed);


    var poligono = document.createElement("polygon");
    svg.appendChild(poligono);


    var coordenadas = [
        [rangexSalvo[input1], rangeySalvo[input1]],
        [durabilityxSalvo[input2], durabilityySalvo[input2]],
        [precisionxSalvo[input3], precisionySalvo[input3]],
        [potentialxSalvo[input4], potentialySalvo[input4]],
        [powerxSalvo[input5], powerySalvo[input5]],
        [speedxSalvo[input6], speedySalvo[input6]]
    ];

    // Criar uma string atualizada para o atributo "points"
    var pontosAtualizados = coordenadas.map(function (coordenadas) {
        return coordenadas.join(",");
    }).join(" ");

    // Definir os pontos atualizados no atributo "points" do polígono
    poligono.setAttribute("points", pontosAtualizados);

    poligono.setAttribute("fill", 'red')
}

function verInputs() {

    const notas = ['F', 'E', 'D', 'C', 'B', 'A', 'S'];

    const rangex = [215,];
    const rangey = [211.5,];

    const durabilityx = [199,];
    const durabilityy = [221];

    const precisionx = [182,];
    const precisiony = [211.5,];

    const potentialx = [182,];
    const potentialy = [192.5,];

    const powerx = [199,];
    const powery = [183];

    const speedx = [215];
    const speedy = [192.5];

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;
    var input5 = document.getElementById("input5").value;
    var input6 = document.getElementById("input6").value;

    var area = document.getElementById("vermelhinho");

    var pontosAtuais = area.getAttribute("points");

    var coordenadas = pontosAtuais.split(" ").map(function (coordenada) {
        return coordenada.split(",").map(parseFloat);
    });

    coordenadas[0][0] = rangex[input1];
    coordenadas[0][1] = rangey[input1];


    coordenadas[1][0] = durabilityx[input2];
    coordenadas[1][1] = durabilityy[input2];


    coordenadas[2][0] = precisionx[input3];
    coordenadas[2][1] = precisiony[input3];


    coordenadas[3][0] = potentialx[input4];
    coordenadas[3][1] = potentialy[input4];


    coordenadas[4][0] = powerx[input5];
    coordenadas[4][1] = powery[input5];


    coordenadas[5][0] = speedx[input6];
    coordenadas[5][1] = speedy[input6];

    // Criar uma string atualizada para o atributo "points"
    var pontosAtualizados = coordenadas.map(function (coordenada) {
        return coordenada.join(",");
    }).join(" ");

    // Definir os pontos atualizados no atributo "points" do polígono
    area.setAttribute("points", pontosAtualizados);

    document.getElementById("nota-power").textContent = notas[input5];
    document.getElementById("nota-speed").textContent = notas[input6];
    document.getElementById("nota-range").textContent = notas[input1];
    document.getElementById("nota-durability").textContent = notas[input2];
    document.getElementById("nota-precision").textContent = notas[input3];
    document.getElementById("nota-potential").textContent = notas[input4];


}

