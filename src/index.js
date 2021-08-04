import './styles.css';
import './modal/modal.css';
import cardImageTpl from './template/cardImage.hbs';
import ApiServise from './api/api-servise';
import LoadMoreBtn from './btnClass';
import getRefs from './getRefs';
import{ onOpenModal} from './modal/modal'





const refs = getRefs();

const apiService = new ApiServise();
const loadMoreBtn = new LoadMoreBtn({selector: '[data-set="load"]', hidden: true})


refs.form.addEventListener('submit', onChangeInput)

function onChangeInput (e){
    e.preventDefault();
    clearContainer(); // чистит галлерею перед запросом
    apiService.resetPage() // сбрасывает страницу поиска на 1 
    loadMoreBtn.show()
    apiService.query = e.currentTarget.elements.query.value;
    apiService.fetchPixabay().then(renderCard)
}

loadMoreBtn.refs.button.addEventListener('click', onLoadMore )



function onLoadMore (e) {
    e.preventDefault();
    loadMoreBtn.disable
    apiService.fetchPixabay().then(renderCard)
}


function renderCard(array) {
    return refs.gallery.insertAdjacentHTML('beforeend',
    cardImageTpl(array))
};

function clearContainer() {
    refs.gallery.innerHTML = ''
};


////////////////////////

refs.gallery.addEventListener('click', onOpenModal )