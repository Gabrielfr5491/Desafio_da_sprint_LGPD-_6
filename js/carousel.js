let carouselArr = [];

class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        if (arr.length <= 0) {
            alert("Array vazio");
            return;
        }

        Carousel._items = arr;
        Carousel._sequence = 0;
        Carousel._size = arr.length;

        // Chamamos o Next pela primeira vez
        Carousel.Next();

        // Criamos o intervalo, mas agora guardamos o ID dele em uma variável estática
        Carousel._interval = setInterval(() => {
            Carousel._sequence++;
            if (Carousel._sequence >= Carousel._size) {
                Carousel._sequence = 0;
            }
            Carousel.Next();
        }, 7000);
    }

    static Next() {

        let container = document.getElementById("carousel");
        let titleContainer = document.getElementById("carousel-title");
        let dotsContainer = document.getElementById("carousel-dots");

        let item = Carousel._items[Carousel._sequence];

        container.innerHTML = `
        
            <button id="esquerda"><</button>

            <a href="${item.link}"><img src="img/${item.image}"></a>

            <button id="direita">></button>
        `;

        titleContainer.innerHTML = `<a href="${item.link}"><p>${item.title}</p></a>`;

        dotsContainer.innerHTML = "";

        for(let i = 0; i < Carousel._size; i++){

            let dot = document.createElement("div");

            dot.classList.add("dot");

            if(i == Carousel._sequence){

                dot.classList.add("active");
            }

            dot.onclick = () => {

                Carousel._sequence = i;

                Carousel.Next();
            };

            dotsContainer.appendChild(dot);
        }

        document.getElementById("esquerda").onclick = () => {

            Carousel._sequence--;

            if(Carousel._sequence < 0){

                Carousel._sequence = Carousel._size - 1;
            }

            Carousel.Next();
        };

        document.getElementById("direita").onclick = () => {

            Carousel._sequence++;

            if(Carousel._sequence >= Carousel._size){

                Carousel._sequence = 0;
            }

            Carousel.Next();
        };
    }
}