// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line



const makeGalleryItem = item => {
  const { preview, original, description } = item;
  return `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `;
};

const galleryContainer = document.querySelector('.gallery');

const galleryImages = galleryItems.map(makeGalleryItem).join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryImages);

let galleryDescription = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});