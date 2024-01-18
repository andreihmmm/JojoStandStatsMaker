const notas = ['F', 'E', 'D', 'C', 'B', 'A', 'S'];

const rangex = [199, 215, 230, 246, 263, 278, 292]
const rangey = [202, 211, 220, 229, 239, 248, 256]

const durabilityx = [199, 199, 199, 199, 199, 199, 199]
const durabilityy = [202, 221, 238, 257, 276, 294, 310]

const precisionx = [199, 182, 167, 151, 134, 119, 105]
const precisiony = [202, 211, 220, 229, 239, 248, 256]

const potentialx = [199, 182, 167, 151, 134, 119, 105]
const potentialy = [202, 192, 184, 174, 165, 156, 148]

const powerx = [199, 199, 199, 199, 199, 198, 198]
const powery = [202, 183, 166, 147, 128, 110, 94]

const speedx = [199, 215, 230, 246, 263, 278, 292]
const speedy = [202, 192, 184, 174, 165, 156, 148]


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

function salvarAtual() {

    var nomeInput = document.querySelector("#input-nome").value;

    if (nomeInput == '') {
        alert("Nome não digitado... se liga man")
    }
    else {
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

        const rangexSalvo = [96, 104, 111, 120, 128, 134, 142]
        const rangeySalvo = [98, 103, 107, 112, 116, 120, 125]

        const durabilityxSalvo = [96, 96, 96, 96, 96, 96, 96]
        const durabilityySalvo = [98, 108, 116, 126, 135, 143, 152]

        const precisionxSalvo = [96, 87, 80, 71, 63, 57, 49]
        const precisionySalvo = [98, 103, 107, 112, 116, 120, 125]

        const potentialxSalvo = [96, 87, 80, 71, 63, 57, 49]
        const potentialySalvo = [98, 93, 89, 84, 79, 75, 71]

        const powerxSalvo = [96, 96, 96, 96, 96, 95, 95]
        const powerySalvo = [98, 88, 80, 70, 61, 53, 44]

        const speedxSalvo = [96, 104, 111, 120, 128, 134, 142]
        const speedySalvo = [98, 93, 89, 84, 79, 75, 71]

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

        novoLi.addEventListener('click', abrirChartzinho);

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

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        svg.setAttribute("height", "195")
        svg.setAttribute("width", "195")
        secao.appendChild(svg)

        //////////

        var nrange = document.createElementNS("http://www.w3.org/2000/svg", "text");
        nrange.classList.add("notas-salvas")
        nrange.textContent = notas[input1];
        nrange.setAttribute("x", "143");
        nrange.setAttribute("y", "135");
        svg.appendChild(nrange);

        var ndurability = document.createElementNS("http://www.w3.org/2000/svg", "text");
        ndurability.classList.add("notas-salvas")
        ndurability.textContent = notas[input2];
        ndurability.setAttribute("x", "92");
        ndurability.setAttribute("y", "165");
        svg.appendChild(ndurability);

        var nprecision = document.createElementNS("http://www.w3.org/2000/svg", "text");
        nprecision.classList.add("notas-salvas")
        nprecision.textContent = notas[input3];
        nprecision.setAttribute("x", "40");
        nprecision.setAttribute("y", "136");
        svg.appendChild(nprecision);

        var npotential = document.createElementNS("http://www.w3.org/2000/svg", "text");
        npotential.classList.add("notas-salvas")
        npotential.textContent = notas[input4];
        npotential.setAttribute("x", "38");
        npotential.setAttribute("y", "70");
        svg.appendChild(npotential);

        var npower = document.createElementNS("http://www.w3.org/2000/svg", "text");
        npower.classList.add("notas-salvas")
        npower.textContent = notas[input5];
        npower.setAttribute("x", "92");
        npower.setAttribute("y", "42");
        svg.appendChild(npower);

        var nspeed = document.createElementNS("http://www.w3.org/2000/svg", "text");
        nspeed.classList.add("notas-salvas")
        nspeed.textContent = notas[input6];
        nspeed.setAttribute("x", "145");
        nspeed.setAttribute("y", "72");
        svg.appendChild(nspeed);

        var poligono = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
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

        poligono.setAttribute("fill", 'red');

        // RESETA O CHART ATUAL

        document.querySelector("#input-nome").value = '';
        resetarChart();


    }
}



function verInputs() {



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

// RANGE

document.addEventListener('DOMContentLoaded', function () {

    // Get the slider and output elements
    var inputElement = document.getElementById('input1');
    var vermelho = document.getElementById('vermelhinho');
    var notaRangeElement = document.getElementById('nota-range');

    function updatePoints() {
        var valor = inputElement.value;

        // Your logic to calculate new coordinates
        var coord = [rangex[valor], rangey[valor]];

        // Update the points attribute
        var pontosAtuais = vermelho.getAttribute('points');
        var valoresAntigos = pontosAtuais.split(' ');

        // Update the first pair of coordinates
        valoresAntigos[0] = coord[0] + ',' + coord[1];

        // Update the 'points' attribute
        vermelho.setAttribute('points', valoresAntigos.join(' '));

        // Update the note
        notaRangeElement.textContent = notas[valor];
    }

    // Initial update when DOM is loaded
    updatePoints();

    // Update points and note whenever the input value changes
    inputElement.addEventListener('input', updatePoints);
});


// DURABILITY

document.addEventListener('DOMContentLoaded', function () {

    // Get the slider and output elements
    var inputElement = document.getElementById('input2');
    var vermelho = document.getElementById('vermelhinho');
    var notaDurabilityElement = document.getElementById('nota-durability');

    function updatePoints() {
        var valor = inputElement.value;

        // Your logic to calculate new coordinates
        var coord = [durabilityx[valor], durabilityy[valor]];

        // Update the points attribute
        var pontosAtuais = vermelho.getAttribute('points');
        var valoresAntigos = pontosAtuais.split(' ');

        // Update the first pair of coordinates
        valoresAntigos[1] = coord[0] + ',' + coord[1];

        // Update the 'points' attribute
        vermelho.setAttribute('points', valoresAntigos.join(' '));

        // Update the note
        notaDurabilityElement.textContent = notas[valor];
    }

    // Initial update when DOM is loaded
    updatePoints();

    // Update points and note whenever the input value changes
    inputElement.addEventListener('input', updatePoints);
});

// PRECISION

document.addEventListener('DOMContentLoaded', function () {

    // Get the slider and output elements
    var inputElement = document.getElementById('input3');
    var vermelho = document.getElementById('vermelhinho');
    var notaPrecisionElement = document.getElementById('nota-precision');

    function updatePoints() {
        var valor = inputElement.value;

        // Your logic to calculate new coordinates
        var coord = [precisionx[valor], precisiony[valor]];

        // Update the points attribute
        var pontosAtuais = vermelho.getAttribute('points');
        var valoresAntigos = pontosAtuais.split(' ');

        // Update the first pair of coordinates
        valoresAntigos[2] = coord[0] + ',' + coord[1];

        // Update the 'points' attribute
        vermelho.setAttribute('points', valoresAntigos.join(' '));

        // Update the note
        notaPrecisionElement.textContent = notas[valor];
    }

    // Initial update when DOM is loaded
    updatePoints();

    // Update points and note whenever the input value changes
    inputElement.addEventListener('input', updatePoints);
});

// POTENTIAL

document.addEventListener('DOMContentLoaded', function () {

    // Get the slider and output elements
    var inputElement = document.getElementById('input4');
    var vermelho = document.getElementById('vermelhinho');
    var notaPotentialElement = document.getElementById('nota-potential');

    function updatePoints() {
        var valor = inputElement.value;

        // Your logic to calculate new coordinates
        var coord = [potentialx[valor], potentialy[valor]];

        // Update the points attribute
        var pontosAtuais = vermelho.getAttribute('points');
        var valoresAntigos = pontosAtuais.split(' ');

        // Update the first pair of coordinates
        valoresAntigos[3] = coord[0] + ',' + coord[1];

        // Update the 'points' attribute
        vermelho.setAttribute('points', valoresAntigos.join(' '));

        // Update the note
        notaPotentialElement.textContent = notas[valor];
    }

    // Initial update when DOM is loaded
    updatePoints();

    // Update points and note whenever the input value changes
    inputElement.addEventListener('input', updatePoints);
});

// POWER

document.addEventListener('DOMContentLoaded', function () {

    // Get the slider and output elements
    var inputElement = document.getElementById('input5');
    var vermelho = document.getElementById('vermelhinho');
    var notaPowerElement = document.getElementById('nota-power');

    function updatePoints() {
        var valor = inputElement.value;

        // Your logic to calculate new coordinates
        var coord = [powerx[valor], powery[valor]];

        // Update the points attribute
        var pontosAtuais = vermelho.getAttribute('points');
        var valoresAntigos = pontosAtuais.split(' ');

        // Update the first pair of coordinates
        valoresAntigos[4] = coord[0] + ',' + coord[1];

        // Update the 'points' attribute
        vermelho.setAttribute('points', valoresAntigos.join(' '));

        // Update the note
        notaPowerElement.textContent = notas[valor];
    }

    // Initial update when DOM is loaded
    updatePoints();

    // Update points and note whenever the input value changes
    inputElement.addEventListener('input', updatePoints);
});

// SPEED

document.addEventListener('DOMContentLoaded', function () {

    // Get the slider and output elements
    var inputElement = document.getElementById('input6');
    var vermelho = document.getElementById('vermelhinho');
    var notaSpeedElement = document.getElementById('nota-speed');

    function updatePoints() {
        var valor = inputElement.value;

        // Your logic to calculate new coordinates
        var coord = [speedx[valor], speedy[valor]];

        // Update the points attribute
        var pontosAtuais = vermelho.getAttribute('points');
        var valoresAntigos = pontosAtuais.split(' ');

        // Update the first pair of coordinates
        valoresAntigos[5] = coord[0] + ',' + coord[1];

        // Update the 'points' attribute
        vermelho.setAttribute('points', valoresAntigos.join(' '));

        // Update the note
        notaSpeedElement.textContent = notas[valor];
    }

    // Initial update when DOM is loaded
    updatePoints();

    // Update points and note whenever the input value changes
    inputElement.addEventListener('input', updatePoints);
});




function abrirChartzinho() {

    var textos = this.querySelectorAll("text");

    var arrayzinho = Array.from(textos).map(function (element) {
        return element.innerHTML;
    });



    var notonas = document.querySelectorAll(".notas");

    var arrayzao = Array.from(notonas).map(function (element) {
        return element.innerHTML;
    });


    for (i = 0; i < 6; i++) {
        arrayzao[i] = arrayzinho[i];
    }

    for (i = 0; i < 6; i++) {
        notonas[i].innerHTML = arrayzao[i];
    }

    var novosPontos = getValuesAsString(arrayzao);

    console.log(arrayzao)

    var vermelho = document.getElementById('vermelhinho');

    vermelho.setAttribute('points', novosPontos);


}

function getValuesAsString(noteVector) {
    const attributes = ["Range", "Durability", "Precision", "Potential", "Power", "Speed"];
    let resultString = "";

    if (noteVector.length !== 6) {
        console.error("Invalid vector length");
        return null;
    }

    noteVector.forEach((note, index) => {
        const attributeName = attributes[index].toLowerCase();
        const xValues = eval(`${attributeName}x`);
        const yValues = eval(`${attributeName}y`);

        const noteIndex = notas.indexOf(note.toUpperCase());

        if (noteIndex === -1) {
            console.error(`Invalid note: ${note}`);
            return null;
        }

        const x = xValues[noteIndex];
        const y = yValues[noteIndex];

        resultString += `${x},${y} `;
    });

    // Remove trailing space
    resultString = resultString.trim();

    return resultString;
}

function resetarChart() {
    var vermelho = document.getElementById('vermelhinho');
    var resetChart = getValuesAsString(['C', 'C', 'C', 'C', 'C', 'C']);
    vermelho.setAttribute('points', resetChart);

    var notonas = document.querySelectorAll(".notas");
    for (i = 0; i < 6; i++) {
        notonas[i].innerHTML = 'C';
    }
}