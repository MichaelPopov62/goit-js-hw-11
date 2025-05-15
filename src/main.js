// //напиши всю логіку роботи додатка

// //Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.

// //Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.
console.log('ghhjj');
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

console.log('main.js завантажено.'); // Перевіряємо, що файл підключено

// Очікуємо завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded: DOM повністю завантажений.');
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  console.log('Форма відправлена.'); // Перевіряємо подію submit
  

  const query = input.value.trim();

  console.log('Пошуковий запит:', query); // Перевіряємо, що отримуємо введене значення

  if (!query) {
    iziToast.error({
      title: 'Помилка',
      message: 'Будь ласка, введіть пошуковий запит.',
      position: 'topRight',
    });

    console.log('Пошуковий запит порожній.'); // Перевіряємо на порожній запит
    return;
  }

  clearGallery();
  showLoader();

  try {
    console.log('Перед викликом getImagesByQuery з запитом:', query);
    const data = await getImagesByQuery(query);
    console.log('Після виклику getImagesByQuery. Отримано дані:', data);
    if (!data.hits || data.hits.length === 0) {
      iziToast.info({
        title: 'Нічого не знайдено',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      console.log('Масив hits порожній або не існує.'); // Лог про порожній результат
      return;
      return;
    }

    createGallery(data.hits);

    console.log('Галерея створена. Кількість зображень:', data.hits.length); // Лог про створення галереї

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

    console.log('Лоадер схований, поле введення очищене.'); // Лог завершення операції
  }
});
