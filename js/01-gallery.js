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

import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);
console.log(basicLightbox);

const galleryList = document.querySelector(".gallery");

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
       <a class="gallery__link" href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"/>
       </a>
     </li>`
    )
    .join("");
}

galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

galleryList.addEventListener("click", (evt) => {
  evt.preventDefault();

  const clickedImage = evt.target.closest(".gallery__image");
  if (!clickedImage) return;

  const instance = basicLightbox.create(
    `<img src="${clickedImage.dataset.source}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
});
