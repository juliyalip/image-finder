import './styles.css';
import card from './template/renderCard.hbs';// разметка одной страны
import list from './template/renderLi.hbs'; // разметка списка стран
const debounce = require('lodash.debounce');
const { error } = require('@pnotify/core');
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";



const refs = {
    form: document.querySelector('.js-form'),
    conteiner: document.querySelector('.js-render'),
   }

function fetchCountry(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
        return response.json();
    })
}


refs.form.addEventListener('input', debounce(onSearch, 500))

function onSearch(e) {
 e.preventDefault();
const form = e.currentTarget;
const searhGuery = e.target.value;
fetchCountry(searhGuery).then(result)
   
}

function result(answer) {
   if (answer.length > 10) return pushError(error);
     if (answer.length === 1) return renderCard(answer);
    if (answer.length > 1 && answer.length < 9) return renderCountryes(answer)
}


function pushError(err) {
    error({
        text: "Введите правильный запрос"
    })
};



function renderCard(country) {
 const markup = card(country);
refs.conteiner.innerHTML = markup;
}  // разметка страны




    function renderCountryes(country) {
        const markup = list(country);
        refs.conteiner.innerHTML = markup;
    }