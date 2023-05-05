import { galleryItems } from "./gallery-items.js";

const galleryUl = document.querySelector(".gallery");
const galleryItem = galleryItems
  .map(
    (item) =>
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
  )
  .join("");
galleryUl.innerHTML = galleryItem;

galleryUl.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
      return;
  }
  const instance = basicLightbox.create(
  `<img src="${event.target.dataset.source}" width="800" height="600">`,
  
    {
      onShow: () => {
        document.addEventListener("keydown", onEscapePress);
      },

      onClose: () => {
        document.removeEventListener("keydown", onEscapePress);
      },
    }
  );

  instance.show();

  function onEscapePress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}




