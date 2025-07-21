alert("Bem-vindo(a) ao classificador de herói. A seguir, iremos definir sua classificação no jogo");

let heroi = prompt("Digite o nome do herói");
let experiencia = parseInt(prompt("Digite o nível de experiência (de 0 a 10.001)"));

let nivel;

if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1000 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else if (experiencia >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Indefinido"; 
}

console.log(`O Herói de nome ${heroi} está no nível de ${nivel}`);
