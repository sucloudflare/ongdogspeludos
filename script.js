// Dados fictícios de cachorros abandonados com mais informações
const dogs = [
    {
        name: 'Rex',
        breed: 'Labrador',
        age: 3,
        gender: 'Macho',
        weight: 25,
        color: 'Amarelo',
        image: 'https://th.bing.com/th/id/OIP.kzLCJKuv6yhEOGXk76svrAHaFj?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Bella',
        breed: 'Poodle',
        age: 2,
        gender: 'Fêmea',
        weight: 15,
        color: 'Branca',
        image: 'https://th.bing.com/th/id/R.2225aa9529fb62ebd3c455311dfd1076?rik=vY7jRcDv8SJQxQ&pid=ImgRaw&r=0'
    },
    {
        name: 'Max',
        breed: 'Beagle',
        age: 4,
        gender: 'Macho',
        weight: 20,
        color: 'Marrom',
        image: 'https://th.bing.com/th/id/OIP.n_bXP9PQuqxg01q4Z4k6pwHaE8?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Luna',
        breed: 'Bulldog',
        age: 1,
        gender: 'Fêmea',
        weight: 18,
        color: 'Cinza',
        image: 'https://th.bing.com/th/id/OIP.D_0iViz543z2HLTH99XhMAHaE8?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Charlie',
        breed: 'Rottweiler',
        age: 5,
        gender: 'Macho',
        weight: 30,
        color: 'Preto',
        image: 'https://th.bing.com/th/id/OIP.ozH-tP13L6LFvdq5GeKivAHaE8?rs=1&pid=ImgDetMain'
    },
    {
        name: 'Daisy',
        breed: 'Cocker Spaniel',
        age: 3,
        gender: 'Fêmea',
        weight: 22,
        color: 'Caramelo',
        image: 'https://th.bing.com/th/id/OIP.3RSwAWTFezj1FO12exnt2wHaGj?rs=1&pid=ImgDetMain'
    }
];

const dogList = document.getElementById('dog-list');
const dogDetails = document.getElementById('dog-details');
const dogName = document.getElementById('dog-name');
const dogImage = document.getElementById('dog-image');
const dogBreed = document.getElementById('dog-breed');
const dogAge = document.getElementById('dog-age');
const dogGender = document.getElementById('dog-gender');
const dogWeight = document.getElementById('dog-weight');
const dogColor = document.getElementById('dog-color');

function showDetails(dog) {
    dogName.textContent = dog.name;
    dogImage.src = dog.image;
    dogBreed.textContent = dog.breed;
    dogAge.textContent = dog.age;
    dogGender.textContent = dog.gender;
    dogWeight.textContent = dog.weight;
    dogColor.textContent = dog.color;
    dogDetails.classList.remove('hidden');
}

function hideDetails() {
    dogDetails.classList.add('hidden');
}

dogs.forEach(dog => {
    const card = document.createElement('div');
    card.className = 'dog-card';
    card.innerHTML = `
        <img src="${dog.image}" alt="Imagem de ${dog.name}">
        <h3>${dog.name}</h3>
        <p><strong>Raça:</strong> ${dog.breed}</p>
        <p><strong>Idade:</strong> ${dog.age} anos</p>
    `;
    card.addEventListener('click', () => showDetails(dog));
    dogList.appendChild(card);
});

// Funções para os botões de navegação do carrossel
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselContainer = document.getElementById('carousel-container');

prevButton.addEventListener('click', () => {
    carouselContainer.scrollBy({
        left: -carouselContainer.clientWidth,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carouselContainer.scrollBy({
        left: carouselContainer.clientWidth,
        behavior: 'smooth'
    });
});
