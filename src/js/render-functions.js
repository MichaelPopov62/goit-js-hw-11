
/*Призначення:
Відповідає за створення, оновлення та очищення галереї зображень, а також за інтеграцію лайтбоксу (SimpleLightbox).

Функції:
1.createGallery(images):
  -Приймає масив об'єктів із зображеннями (дані від API).
  -Створює HTML-розмітку для галереї.
  -Додає цю розмітку до контейнера .gallery.
  -Ініціалізує або оновлює SimpleLightbox для роботи з галереєю.
2.clearGallery():
 -Очищає контейнер галереї.
3.showLoader():
-Додає клас loading до тега <body>, активуючи стилі лоадера (визначені в CSS).
4.hideLoader():
  -Видаляє клас loading із тега <body>.*/



// Імпортую бібліотеку для лайтбоксу
  import SimpleLightbox from 'simplelightbox';
  import 'simplelightbox/dist/simple-lightbox.min.css';

// Знаходжу контейнер для галереї
  const galleryContainer = document.querySelector('.gallery'); // Вибираю елемент галереї за класом "gallery"

// перевірка елемента галереї
// console.log('Контейнер галереї знайдено:', galleryContainer);

  let lightbox = null; // Змінна для екземпляра SimpleLightbox
// console.log('Ініціалізовано змінну для SimpleLightbox:', lightbox); // перевіряю початкового значення змінної

// Функція для створення галереї з масиву зображень
export function createGallery(images) {
    
  //console.log('Виклик функції createGallery з масивом зображень:', images); //  отримую зображення

// Генерую HTML-розмітку для кожного елемента з масиву зображень 
  const markup = images
    .map(
      ({
        webformatURL, // URL для відображення маленького зображення
        largeImageURL, // URL для великого зображення
        tags, // Опис зображення
        likes, // Кількість лайків
        views, // Кількість переглядів
        comments, // Кількість коментарів
        downloads, // Кількість завантажень
      }) => {
        //Виводжу  дані, які обробляються.
        console.log('Обробка зображення:', {
          webformatURL,
          largeImageURL,
          tags,
        });
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
    
//Метод .join('') перетворює масив рядків, отриманих після виконання .map(), в єдиний рядок.
    .join('');

// Додаю згенеровану розмітку в контейнер галереї
  galleryContainer.insertAdjacentHTML('beforeend', markup);
 

// Перевіряю чи вже існує екземпляр SimpleLightbox
  if (lightbox) {
  lightbox.refresh(); // Якщо так,оновлюю існуючий екземпляр лайтбоксу для нових елементів
  } else {

//створюю новий екземпляр SimpleLightbox
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', // Використовую атрибут "alt" для підписів зображення
    captionDelay: 250, // Затримка перед показом підпису
    });

    //перевіряю створення
    // console.log('Створено новий екземпляр SimpleLightbox:', lightbox);
  }
}

// Функція для очищення галереї
  export function clearGallery() {
  galleryContainer.innerHTML = ''; // видаляю весь HTML-контент с контейнера галереї
 
}

// Функція для відображення лоадера
  export function showLoader() {
    
    // console.log('Виклик функції showLoader.'); //  виклику функції
    
    document.body.classList.add('loading'); // присвоюю тегу <body>  клас "loading" який вмикає анимацію через 
    
  // console.log('Клас "loading" додано до тега <body>.'); // підтвердження додавання класу після невірного вводу
}

// Функція для приховування
export function hideLoader() {
    
  // console.log('Виклик функції hideLoader.'); //  виклик 
  
  document.body.classList.remove('loading'); // Видаляю клас "loading" з <body>, щоб приховати стилі лоадера
  
  // console.log('Клас "loading" видалено з тега <body>.'); //  підтвердження видалення класу
}
