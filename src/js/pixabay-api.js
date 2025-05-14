//Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

// getImagesByQuery(query);

import axios from 'axios';

const API_KEY = '50290691-d51719558e36c91c48babc26d'; // свій API-ключ.
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Виконує запит до Pixabay API для пошуку зображень за ключовим словом.
 * @param {string} query - Пошуковий запит.
 * @returns {Promise<Object>} - Дані відповіді API.
 */
export async function getImagesByQuery(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await axios.get(url);
    return response.data;
  }
  catch (error) {
    console.error('Помилка під час виконання HTTP-запиту:', error.message); 
    throw new Error('Помилка завантаження даних з Pixabay.');
  }
}

