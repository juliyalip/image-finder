const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
 const key = '19520072-2a079db9835241cceccf8dd5b';

export default class ApiServise {

    constructor() {
        this.searchQuery = '',
            this.page = 1
    }
    
    fetchPixabay() {
     return  fetch(`${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`)
            .then(response => response.json()).then(data => {
             console.log(this);
             console.log(data)
             this.incrementPage();
                return data.hits;
         })
        
        }

    get query() {
        return this.searchQuery
    };

    set query(newQuery) {
        this.searchQuery = newQuery
    };

    incrementPage() {
        this.page += 1
    };


    resetPage() {
        this.page = 1
    }

}