// Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// createGallery(images);

//Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// clearGallery();

//Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// showLoader();

//Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
// hideLoader();
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox = null;// Ініціалізуємо змінну для SimpleLightbox

/**
 * Створює розмітку галереї з масиву зображень.
 * @param {Array} images - Масив об'єктів із зображеннями.
 */
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
      }) => `
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
    </li>`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  
}
  // Ініціалізуємо або оновлюємо SimpleLightbox після додавання розмітки
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt', // Підпис до зображення береться з атрибута alt
      captionDelay: 250, // Затримка відображення підпису
      enableKeyboard: true, // Увімкнути управління клавіатурою
      showCounter: true, // Показати лічильник зображень
      overlayOpacity: 0.9, // Прозорість фону
      close: true, // Увімкнути кнопку закриття
      animationSpeed: 300, // Швидкість анімації
    });
  } else {
    lightbox.refresh(); // Оновлюємо, якщо елементи вже додані
  }

/** Очищує вміст галереї. */
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

/** Показує повідомлення про помилку. */
export function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}

/** Показує успішне повідомлення. */
export function showSuccessMessage(message) {
  iziToast.success({
    title: 'Success',
    message,
  });
}
