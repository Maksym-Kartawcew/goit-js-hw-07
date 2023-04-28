import { galleryItems } from './gallery-items.js';

const galleryUl = document.querySelector('.gallery');
const galleryItem = galleryItems
.map( (item) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`
).join("");
galleryUl.innerHTML = galleryItem;

galleryUl.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${event.target.dataset.source}" width="800" height="600">

    </div>`,
  );
  instance.show();
  
  const modalElement = document.querySelector('.modal')
  modalElement.addEventListener('click', () => { instance.close();})

  document.addEventListener('keydown', onModalKeyDown);
  function onModalKeyDown(event) {
      if (event.code === 'Escape') {
          instance.close();
          document.removeEventListener('keydown', onModalKeyDown);
      }

}
}



