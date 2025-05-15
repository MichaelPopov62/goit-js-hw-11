// //Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

// // getImagesByQuery(query);

import axios from 'axios';

const API_KEY = '50290691-d51719558e36c91c48babc26d'; ; // Встав свій API ключ сюди
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40, // максимальна кількість результатів за запитом
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}

//   const response = await fetch(url.toString());
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Повертаємо поле data (в Pixabay API - це вся відповідь)
//   return data;
// }
