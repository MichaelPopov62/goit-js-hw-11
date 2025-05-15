
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox = null;

// Створюємо галерею та оновлюємо SimpleLightbox
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="gallery-item">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
           <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
  
      </li>`;
      }
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}

// Очищуємо галерею
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

// Показуємо лоадер (додаємо клас до body)
export function showLoader() {
  document.body.classList.add('loading');
}

// Ховаємо лоадер (видаляємо клас)
export function hideLoader() {
  document.body.classList.remove('loading');
}
