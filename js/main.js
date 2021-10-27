/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const images = document.querySelector('.images')
const thumbs = document.querySelector('.thumbs')
let imageNumber = 0

for (let i = 0; i < imageCollection.length; i++){
    // Images
    images.innerHTML += `<div class="image-container">
    <img src="${imageCollection}" alt="${titleCollection}">
    <div class="text">
        <h3>${titleCollection}</h3>
        <p>${textCollection}</p>
    </div>`
    // Thumbs
    thumbs.innerHTML += `<div class="image-container">
    <img src="${imageCollection}" alt="${titleCollection}">
    <div class="text">
        <h3>${titleCollection}</h3>
        <p>${textCollection}</p>
    </div>`
}

document.getElementsByClassName('image-container')[imageNumber].classList.add('active')
document.getElementsByClassName('thumb')[imageNumber].classList.add('active')
