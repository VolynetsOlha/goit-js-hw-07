// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.
//  Подивися демо відео роботи галереї.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті source на елементі < img >, і вказуватися в href посилання. 
// Не додавай інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
console.log(basicLightbox);


const galleryList = document.querySelector(".gallery");

function createMarkup(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}

function renderGalleryItems() {
  const galleryMarkup = galleryItems.map(createMarkup).join('');
  galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
}

renderGalleryItems();

function openModal(url) {
    const instance = basicLightbox.create
        (`<img src="${url}">`);
    
  instance.show();
}

const galleryLinks = document.querySelectorAll('.gallery__link');
galleryLinks.forEach(link => link.addEventListener('click', (event) => event.preventDefault()));

galleryList.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();
  
  const target = evt.target;
  if (target.classList.contains("gallery__image")) {
    const modalImage = target.dataset.source;
    openModal(modalImage);
  }
}