function verInputs() {

    const notas = ['F', 'E', 'D', 'C', 'B', 'A', 'S'];

    const rangex = [297, 322, 344, 369, 393, 416, 438];
    const rangey = [303, 317.5, 330.5, 345, 358.5, 372, 384.5];

    const durabilityx = [297, 297, 297, 297, 297, 297, 297];
    const durabilityy = [303, 332, 358, 387, 414, 441, 466];

    const precisionx = [297, 271, 249, 224, 200, 177, 155];
    const precisiony = [303, 317.5, 330.5, 345, 358, 372, 384];

    const potentialx = [297, 271, 249, 224, 200, 177, 155];
    const potentialy = [303, 288.5, 275.5, 261, 247, 234, 221];

    const powerx = [297, 297, 297, 297, 297, 297, 296];
    const powery = [303, 274, 248, 219, 192, 165, 140];

    const speedx = [297, 322, 344, 369, 393, 416, 438];
    const speedy = [303, 288.5, 275.5, 261, 247, 234, 221];

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

