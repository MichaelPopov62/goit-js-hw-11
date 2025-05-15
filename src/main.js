// //напиши всю логіку роботи додатка

// //Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.

// //Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: 'Будь ласка, введіть пошуковий запит.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        title: 'Нічого не знайдено',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);

    iziToast.success({
      title: 'Успіх',
      message: `Знайдено ${data.hits.length} зображень.`,
      position: 'topRight',
      timeout: 3000,
    });
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити зображення. Спробуйте пізніше.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
    input.value = ''; // очищаємо поле вводу після пошуку
  }
});
