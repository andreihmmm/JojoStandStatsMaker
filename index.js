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

const noteMap = { 'F': 0, 'E': 1, 'D': 2, 'C': 3, 'B': 4, 'A': 5, 'S': 6 };
const inputMap = { 0: 'F', 1: 'E', 2: 'D', 3: 'C', 4: 'B', 5: 'A', 6: 'S' };

function resetarClicado() {
    var clicado = document.getElementById("clicado");
    if (clicado != null) {

        atualizarChartzinho(clicado);
        clicado.setAttribute("id", '');
        resetarChart();
    }
}

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

    if (document.getElementById("clicado") != null) {
        alert("Se liga man.... voce ta editando um salvo...")
        return 0;
    }

    var nomeInput = document.querySelector("#input-nome").value;

    if (nomeInput == '') {
        alert("Nome não digitado... se liga man")
    }
    else {

        /// ABRE A ABA LATERAL
        var abaLateral = document.querySelector("header");

        if (abaLateral.classList.contains("header-fechada")) {
            abaLateral.classList.remove("header-fechada");
            abaLateral.classList.add("header-aberta");
        }

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

        var corAtualEsquerda = document.getElementById("fundo-esquerda").value
        var corAtualBody = document.getElementById("fundo-body").value

        const lista = document.querySelector("body > header > ul");
        var novoLi = document.createElement('li');
        novoLi.classList.add('salvo');

        novoLi.setAttribute("color-body", corAtualBody);
        novoLi.setAttribute("color-esquerda", corAtualEsquerda);

        lista.appendChild(novoLi);

        var fonteImagem = document.getElementById("inputImagem").getAttribute("src");
        if (fonteImagem != "insert.png") {
            var novaImagem = document.createElement('img');
            novaImagem.classList.add("imagem-salva");
            novaImagem.setAttribute("src", fonteImagem);
            novoLi.appendChild(novaImagem);
        }

        var aSalvo = document.createElement('a');
        aSalvo.classList.add("a-salvo");
        novoLi.appendChild(aSalvo);
        var pzinho = document.createElement('p');
        pzinho.innerText = nomeInput;
        aSalvo.appendChild(pzinho);
        var secao = document.createElement('section');
        secao.classList.add("chart-salvo");
        novoLi.appendChild(secao)
        var imagemLixeira = document.createElement('img');
        imagemLixeira.src = "lixeira.png";
        imagemLixeira.classList.add("imagemLixeira")
        secao.appendChild(imagemLixeira)

        var imagemChart = document.createElement('img');
        imagemChart.src = "chart.png";
        imagemChart.classList.add("img-salvos");
        secao.appendChild(imagemChart);
        var aChartzinho = document.createElement('a');
        aChartzinho.classList.add('a-chartzinho');
        secao.appendChild(aChartzinho);

        imagemChart.addEventListener('click', abrirChartzinho);

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

        setarCorzinha(poligono);

        // RESETA O CHART ATUAL

        resetarChart();

    }
}


// RANGE

document.addEventListener('DOMContentLoaded', function () {

    // Get the slider and output elements
    var inputElement = document.getElementById('input1');
    var vermelho = document.getElementById('vermelhinho');
    var notaRangeElement = document.getElementById('nota-range');

    function updatePoints() {
        // Get the small output element

        var valor = inputElement.value;

        if (document.getElementById('clicado') != null) {
            var clicado = document.getElementById('clicado');
            var poligoninho = clicado.querySelector('polygon');
            var notinha = document.querySelector("#clicado > section > svg > text:nth-child(1)")

            // Your logic to calculate new coordinates
            var coord = [rangexSalvo[valor], rangeySalvo[valor]];

            // Update the points attribute
            var pontosAtuais = poligoninho.getAttribute('points');
            var valoresAntigos = pontosAtuais.split(' ');

            // Update the first pair of coordinates
            valoresAntigos[0] = coord[0] + ',' + coord[1];

            // Update the 'points' attribute
            poligoninho.setAttribute('points', valoresAntigos.join(' '));

            // Update the note
            notinha.textContent = notas[valor];
        }


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

        if (document.getElementById('clicado') != null) {
            var clicado = document.getElementById('clicado');
            var poligoninho = clicado.querySelector('polygon');
            var notinha = document.querySelector("#clicado > section > svg > text:nth-child(2)")

            // Your logic to calculate new coordinates
            var coord = [durabilityxSalvo[valor], durabilityySalvo[valor]];

            // Update the points attribute
            var pontosAtuais = poligoninho.getAttribute('points');
            var valoresAntigos = pontosAtuais.split(' ');

            // Update the first pair of coordinates
            valoresAntigos[1] = coord[0] + ',' + coord[1];

            // Update the 'points' attribute
            poligoninho.setAttribute('points', valoresAntigos.join(' '));

            // Update the note
            notinha.textContent = notas[valor];
        }


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

        if (document.getElementById('clicado') != null) {
            var clicado = document.getElementById('clicado');
            var poligoninho = clicado.querySelector('polygon');
            var notinha = document.querySelector("#clicado > section > svg > text:nth-child(3)")

            // Your logic to calculate new coordinates
            var coord = [precisionxSalvo[valor], precisionySalvo[valor]];

            // Update the points attribute
            var pontosAtuais = poligoninho.getAttribute('points');
            var valoresAntigos = pontosAtuais.split(' ');

            // Update the first pair of coordinates
            valoresAntigos[2] = coord[0] + ',' + coord[1];

            // Update the 'points' attribute
            poligoninho.setAttribute('points', valoresAntigos.join(' '));

            // Update the note
            notinha.textContent = notas[valor];
        }

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


        if (document.getElementById('clicado') != null) {
            var clicado = document.getElementById('clicado');
            var poligoninho = clicado.querySelector('polygon');
            var notinha = document.querySelector("#clicado > section > svg > text:nth-child(4)")

            // Your logic to calculate new coordinates
            var coord = [potentialxSalvo[valor], potentialySalvo[valor]];

            // Update the points attribute
            var pontosAtuais = poligoninho.getAttribute('points');
            var valoresAntigos = pontosAtuais.split(' ');

            // Update the first pair of coordinates
            valoresAntigos[3] = coord[0] + ',' + coord[1];

            // Update the 'points' attribute
            poligoninho.setAttribute('points', valoresAntigos.join(' '));

            // Update the note
            notinha.textContent = notas[valor];
        }

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

        if (document.getElementById('clicado') != null) {
            var clicado = document.getElementById('clicado');
            var poligoninho = clicado.querySelector('polygon');
            var notinha = document.querySelector("#clicado > section > svg > text:nth-child(5)")

            // Your logic to calculate new coordinates
            var coord = [powerxSalvo[valor], powerySalvo[valor]];

            // Update the points attribute
            var pontosAtuais = poligoninho.getAttribute('points');
            var valoresAntigos = pontosAtuais.split(' ');

            // Update the first pair of coordinates
            valoresAntigos[4] = coord[0] + ',' + coord[1];

            // Update the 'points' attribute
            poligoninho.setAttribute('points', valoresAntigos.join(' '));

            // Update the note
            notinha.textContent = notas[valor];
        }

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

        if (document.getElementById('clicado') != null) {
            var clicado = document.getElementById('clicado');
            var poligoninho = clicado.querySelector('polygon');
            var notinha = document.querySelector("#clicado > section > svg > text:nth-child(6)")

            // Your logic to calculate new coordinates
            var coord = [speedxSalvo[valor], speedySalvo[valor]];

            // Update the points attribute
            var pontosAtuais = poligoninho.getAttribute('points');
            var valoresAntigos = pontosAtuais.split(' ');

            // Update the first pair of coordinates
            valoresAntigos[5] = coord[0] + ',' + coord[1];

            // Update the 'points' attribute
            poligoninho.setAttribute('points', valoresAntigos.join(' '));

            // Update the note
            notinha.textContent = notas[valor];
        }

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

function getValuesAsStringChartzinho(noteVector) {
    const attributes = ["Range", "Durability", "Precision", "Potential", "Power", "Speed"];
    let resultString = "";

    if (noteVector.length !== 6) {
        console.error("Invalid vector length");
        return null;
    }

    noteVector.forEach((note, index) => {
        const attributeName = attributes[index].toLowerCase();
        const xValues = eval(`${attributeName}xSalvo`);
        const yValues = eval(`${attributeName}ySalvo`);

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

function pegarInputsChart() {
    const rangeInputs = document.querySelectorAll('.invisiveis');
    const resultado = [];

    rangeInputs.forEach((input, index) => {
        var inputValue = input.value;
        resultado.push(inputValue);
    });

    return resultado;
}

function abrirChartzinho() {

    var clicadoAnterior = document.getElementById("clicado");

    if (clicadoAnterior != null && clicadoAnterior != this.parentElement.parentElement) {
        atualizarChartzinho(clicadoAnterior);
        clicadoAnterior.removeAttribute("id", "clicado")
    }

    // COLOCA O NOME DO CHARTZINHO CLICADO NO INPUT

    var nomeClicado = this.parentElement.parentElement.querySelector("p").innerText;
    document.getElementById("input-nome").value = nomeClicado;

    var textos = this.parentElement.parentElement.querySelectorAll("text");

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

    var vermelho = document.getElementById('vermelhinho');

    vermelho.setAttribute('points', novosPontos);

    this.parentElement.parentElement.setAttribute("id", "clicado")

    /// ESTILIZA O LI

    estilizarLi(this);

    updateRangeValues(arrayzinho)

    ///COLOCA A COR DO CHARTZINHO CLICADO NO INPUT & NO POLIGONO

    var corDoChartzinho = this.parentElement.querySelector("polygon").getAttributeNS(null, "fill");

    document.getElementById("color-picker").value = corDoChartzinho
    vermelho.setAttributeNS(null, "fill", corDoChartzinho)

    ///COLOCA A IMAGEM DO CHARTZINHO NA PARADA DE INPUT

    if (this.parentElement.parentElement.querySelector(".imagem-salva") != null) {
        var imagemEscolhida = this.parentElement.parentElement.querySelector(".imagem-salva").getAttribute("src");
        document.getElementById("inputImagem").setAttribute("src", imagemEscolhida);
    }

    ///ATUALIZA A COR DO FUNDO
    var body = document.querySelector('body')
    var esquerda = document.querySelector('#esquerda')

    body.style.backgroundColor = this.parentElement.parentElement.getAttribute('color-body')
    esquerda.style.backgroundColor = this.parentElement.parentElement.getAttribute('color-esquerda')
}

function updateRangeValues(noteArray) {
    const rangeInputs = document.querySelectorAll('.invisiveis');

    if (noteArray.length !== rangeInputs.length) {
        console.error('Array length mismatch. Cannot update range values.');
        return;
    }

    rangeInputs.forEach((input, index) => {
        const note = noteArray[index].toUpperCase();
        const mappedValue = noteMap[note];
        input.value = mappedValue;
    });

}

function resetarChart() {

    ///RESETA O INPUT DO NOME
    document.getElementById("input-nome").value = '';

    ///RESETA O POLÍGONO
    var vermelho = document.getElementById('vermelhinho');
    var resetChart = getValuesAsString(['C', 'C', 'C', 'C', 'C', 'C']);
    vermelho.setAttribute('points', resetChart);

    ///RESETA AS NOTAS NO CHARTZAO
    var notonas = document.querySelectorAll(".notas");
    for (i = 0; i < 6; i++) {
        notonas[i].innerHTML = 'C';
    }

    ///RESETA OS INPUT DOS STATS
    const rangeInputs = document.querySelectorAll('.invisiveis');

    rangeInputs.forEach(input => {
        input.value = '3'
    });

    ///RESETA A IMAGEM
    var imagemInput = document.getElementById("inputImagem")
    imagemInput.src = "insert.png"

    ///RESETA A COR DO POLÍGONO
    document.getElementById("color-picker").value = '#ff0000';
    vermelho.setAttributeNS(null, "fill", "#ff0000")
}

function atualizarChartzinho(clicadoAnterior) {

    desestilizarLi(clicadoAnterior)

    // ATUALIZANDO O NOME:

    clicadoAnterior.querySelector("p").innerText = document.getElementById("input-nome").value;

    var notasSalvas = clicadoAnterior.querySelectorAll(".notas-salvas");

    var textinhos = Array.from(notasSalvas);
    var notasAntigas = [];

    textinhos.forEach((text, index) => {
        // Check if text has innerText property before pushing
        if (text.innerHTML) {
            notasAntigas.push(text.innerHTML);
        } else {
            console.warn("Element at index " + index + " has no innerText property.");
        }
    });



    // ATUALIZANDO AS NOTAS:

    var textinhos = clicadoAnterior.querySelectorAll("text");

    var inputsAtualizadas = pegarInputsChart();

    var notasAtualizadas = []

    textinhos.forEach((text, index) => {
        var input = inputsAtualizadas[index];
        var mappedNota = inputMap[input];
        text.textContent = mappedNota;
        notasAtualizadas.push(mappedNota);
    })

    // ATUALIZANDO O POLIGONO:

    var poligoninho = clicadoAnterior.querySelector("polygon");

    var coordenadinhasNovas = [
        [rangexSalvo[inputsAtualizadas[0]], rangeySalvo[inputsAtualizadas[0]]],
        [durabilityxSalvo[inputsAtualizadas[1]], durabilityySalvo[inputsAtualizadas[1]]],
        [precisionxSalvo[inputsAtualizadas[2]], precisionySalvo[inputsAtualizadas[2]]],
        [potentialxSalvo[inputsAtualizadas[3]], potentialySalvo[inputsAtualizadas[3]]],
        [powerxSalvo[inputsAtualizadas[4]], powerySalvo[inputsAtualizadas[4]]],
        [speedxSalvo[inputsAtualizadas[5]], speedySalvo[inputsAtualizadas[5]]]
    ]

    var pontinhosAtualizados = coordenadinhasNovas.map(function (coordenadinhasNovas) {
        return coordenadinhasNovas.join(",");
    }).join(" ");

    poligoninho.setAttribute("points", pontinhosAtualizados);

    ///ATUALIZANDO A COR DO POLIGONO

    var valorCor = document.getElementById("color-picker").value;
    poligoninho.setAttributeNS(null, "fill", valorCor);


    if (JSON.stringify(notasAntigas) !== JSON.stringify(notasAtualizadas)) {
        alert("Novos stats salvo!!!");
    }
}

///////////// DELETARRRR

document.addEventListener('DOMContentLoaded', function () {
    // Attach click event listener to a common ancestor element (body in this example)
    document.body.addEventListener('click', function (event) {
        // Check if the clicked element has the class 'imagemLixeira'
        if (event.target.classList.contains('imagemLixeira')) {
            deletarChartzinho(event);
        }
    });

    function deletarChartzinho(event) {
        var result = window.confirm('Are you sure you want to delete?');

        if (result) {
            var clickedImage = event.target;
            resetarChart();

            if (clickedImage && clickedImage.parentElement.parentElement) {
                clickedImage.parentElement.parentElement.remove();
            } else {
                console.error('Parent element not found.');
            }
        }
    }

});

function handleImageInputChange() {
    // Get the input element and its files
    var input = document.getElementById('imageInput');
    var files = input.files;

    // Check if files were selected
    if (files.length > 0) {
        // Use FileReader to read the selected image file
        var reader = new FileReader();

        reader.onload = function (e) {
            // Set the source of an image element to display a preview
            var previewImage = document.getElementById('inputImagem');
            previewImage.src = e.target.result;
        };

        // Read the image file as a data URL
        reader.readAsDataURL(files[0]);
    }
}

/////////// ALTERAR COR EM TEMPO REAL

document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById("color-picker");
    var poligono = document.getElementById("vermelhinho");

    input.addEventListener('input', function () {
        var Li = document.getElementById("clicado");

        if (Li !== null) {
            poligono.setAttribute("fill", input.value);
            Li.querySelector("polygon").setAttributeNS(null, "fill", input.value);
        } else {
            poligono.setAttributeNS(null, "fill", input.value);
        }
    });
});


///////// ALTERAR COR DO CHART SALVO

function setarCorzinha(poligonoFormado) {
    var valorCor = document.getElementById("color-picker").value;
    poligonoFormado.setAttributeNS(null, "fill", valorCor);
}

///////// ALTERAR COR DO FUNDO BODY E ESQUERDA

document.addEventListener('DOMContentLoaded', function () {
    var corBody = document.getElementById('fundo-body');
    var corEsquerda = document.getElementById('fundo-esquerda');

    var body = document.querySelector('body');
    var esquerda = document.getElementById('esquerda');

    corBody.addEventListener('input', function () {
        body.style.backgroundColor = corBody.value;
    });

    corEsquerda.addEventListener('input', function () {
        esquerda.style.backgroundColor = corEsquerda.value;
    });
})


window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault();
    // Standard for most browsers
    e.returnValue = '';

    // Display a confirmation dialog
    var confirmationMessage = 'Are you sure you want to leave? Your changes may not be saved.';
    (e || window.event).returnValue = confirmationMessage; // For some older browsers

    return confirmationMessage;
});

function estilizarLi(imagemChart) {
    imagemChart.parentElement.parentElement.style.height = "200px"
    imagemChart.parentElement.parentElement.querySelector(".chart-salvo").style.height = "200px";
    imagemChart.parentElement.parentElement.querySelector(".chart-salvo").style.borderRadius = "50%";
    var chartSalvo = imagemChart.parentElement.parentElement.querySelector(".chart-salvo");

    chartSalvo.style.opacity = "1"
    chartSalvo.style.height = "100%"
    // Set display property to "flex" for all elements inside ".chart-salvo"
    chartSalvo.querySelectorAll('*').forEach(function (element) {
        element.style.display = "flex";
    });

    // Set display property to "block" for all 'text' elements inside ".chart-salvo"
    chartSalvo.querySelectorAll('text').forEach(function (element) {
        element.style.display = "block";
    });

    // Set display property to "block" for all 'h5' elements inside ".chart-salvo"
    chartSalvo.querySelectorAll('h5').forEach(function (element) {
        element.style.display = "block";
    });

    if (imagemChart.parentElement.parentElement.querySelector(".imagem-salva") != null) {
        imagemChart.parentElement.parentElement.querySelector(".imagem-salva").style.opacity = "0";
    }
}

function desestilizarLi(Li) {
    Li.style.height = "revert-layer"
    Li.parentElement.parentElement.querySelector(".chart-salvo").style.height = "revert-layer";
    Li.parentElement.parentElement.querySelector(".chart-salvo").style.borderRadius = "revert-layer";
    var chartSalvo = Li.querySelector(".chart-salvo");

    chartSalvo.style.opacity = "revert-layer"
    chartSalvo.style.display = "revert-layer"
    // Set display property to "flex" for all elements inside ".chart-salvo"
    Li.querySelectorAll('*').forEach(function (element) {
        element.style.display = "revert-layer";
    });
    console.log(chartSalvo.querySelector(".imagem-salva"))


    if (Li.querySelector(".imagem-salva") != null) {
        console.log("entrou")
        Li.querySelector(".imagem-salva").style.opacity = "revert-layer";

    }
}