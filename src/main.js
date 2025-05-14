//напиши всю логіку роботи додатка

//Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.

//Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showErrorMessage,
  showSuccessMessage,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]');
// подія на сабміт форми
form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = searchInput.value.trim();

  // Перевірка на порожній рядок
  if (!query) {
    alert('Будь ласка, введіть пошуковий запит.');
    return;
  }
// очищення галереі передтновим запитом
  clearGallery();

  try {
    const data = await getImagesByQuery(query);

    // Якщо порожній масив
    if (data.hits.length === 0) {
      showErrorMessage('Sorry, there are no images matching your search query. Please try again!');
    } else {
      //створюю галерею
      createGallery(data.hits);
      showSuccessMessage('Images loaded successfully!');
     
    }
  } catch (error) {
    console.error(error);
    showErrorMessage('An error occurred while loading images.');
  }
});
