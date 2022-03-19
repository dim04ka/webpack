import $ from "jquery"
import './css/styles.css'
import bar from './bar.js';
bar();


$("h1" ).html( "Next Step..." )



// let locale = "en";
// const translations = {
//   "en": {
//     "app-title": "My Appy Apperson",
//     "lead": "Welcome to my little spot on the interwebs!",
//   },
//   "ru": {
//     "app-title": "Какой-то русский текст",
//     "lead": "Просто текст",
//   },
// };
//
// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .querySelectorAll("[data-i18n-key]")
//     .forEach(translateElement);
// });
//
// function translateElement(element) {
//   const key = element.getAttribute("data-i18n-key");
//   const translation = translations[locale][key];
//   element.innerText = translation;
// }
//
//
// const button = document.querySelector('button')
//
// button.addEventListener('click', changeLanguage)
//
// function changeLanguage() {
//   locale = 'ru'
//   document.querySelectorAll("[data-i18n-key]").forEach(translateElement);
// }



// async function f() {
//   const res = await fetch('https://swapi.dev/api/people/')
//     .then(res => res.json())
//
//   console.log(res.results)
// }
//
// f()





// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     fetch(
//       `https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits`
//     ).then(res => res.json())
//       .then(res => resolve(res))
//
//   });
//   let result = await promise; // будет ждать, пока промис не выполнится (*)
//
//
//   let promise2 = new Promise((resolve, reject) => {
//     fetch(
//       `https://api.github.com/users/timmywheels/repos`
//     ).then(res => res.json())
//       .then(res => resolve(res))
//
//   });
//   let result2 = await promise2;
//
//
//   Promise.all([result, result2]).then(values => {
//     console.log(values);
//   });
// }
//
// f();


// fetch(
//   `https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits`
// ).then(res => res.json())
//   .then(res => console.log(res))




//
// let promise = new Promise((resolve, reject) => {
//
//   setTimeout(() => {
//     // переведёт промис в состояние fulfilled с результатом "result"
//     reject("result");
//   }, 1000);
//
// });
//
// promise
//   .then(res => console.log(res))
//   .catch(err => console.log(err, '!'))
//   .finally(() => {
//     console.log('final')
//   })






















