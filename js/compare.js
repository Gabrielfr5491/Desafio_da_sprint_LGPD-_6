let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function SetCarToCompare(el, car) {
    if (el.checked) {
        if (carArr.length >= 2) {
            alert("Só pode comparar 2 carros");
            el.checked = false;
            return;
        }
        carArr.push(car);
    } else {
        carArr = carArr.filter(c => c.nome !== car.nome);
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Selecione 2 carros para comparar");
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    carArr.forEach((car, i) => {
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" width="150">`;
        document.getElementById(`compare_modelo_${i}`).innerText = car.nome;
        document.getElementById(`compare_preco_${i}`).innerText = car.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
        document.getElementById(`compare_alturacacamba_${i}`).innerText = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = car.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
    });
}