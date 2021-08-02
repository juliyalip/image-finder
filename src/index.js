import './styles.css';
import cardImageTpl from './template/cardImage.hbs';
import ApiServise from './api/api-servise'
import getRefs from './getRefs';



const refs = getRefs();

const apiService = new ApiServise();

refs.form.addEventListener('submit', onChangeInput)

function onChangeInput (e){
    e.preventDefault();
    clearContainer(); // чистит галлерею перед запросом
    apiService.query = e.currentTarget.elements.query.value;
    apiService.fetchPixabay().then(renderCard)
}

function renderCard(array) {
    return refs.gallery.insertAdjacentHTML('beforeend',
    cardImageTpl(array))
};

function clearContainer() {
    refs.gallery.innerHTML = ''
}