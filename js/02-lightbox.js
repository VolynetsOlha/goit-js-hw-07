//  Галерея на бібліотеці SimpleLightbox, яка візьме на себе обробку кліків по зображеннях,
// відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури.
// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.
// <li class="gallery__item">
//    <a class="gallery__link" href="large-image.jpg">
//       <img class="gallery__image" src="small-image.jpg" alt="Image description" />
//    </a>
// </li>
// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Використовуй готовий код з першого завдання.
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs.
//  Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.
// Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery.
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt.
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
     </a>
     </li>`).join('')
}

galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems))


const instance = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250 });
