import { galleryItems } from './gallery-items.js';


const galleryUl = document.querySelector('.gallery');
const galleryItem = galleryItems
.map( (item) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
  </li>`
).join("");
galleryUl.innerHTML = galleryItem;

const options = {
    captionsData: "alt",
    captionDelay: 250,
}
const lightbox = new SimpleLightbox('.gallery a', options );