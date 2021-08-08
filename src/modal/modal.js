const backDrop = document.querySelector('.backDrop');
const content = document.querySelector('.content');


   

backDrop.addEventListener('click', onClickBackDrop);


 export function onOpenModal(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
    return
     };
     backDrop.classList.remove('is-hidden')
    
     const imageEl = e.target;
    
     imageEl.scr = e.target.dataset.sourse;
     imageEl.alt = e.target.alt;
     console.log(imageEl)
      renderBigImage(imageEl.scr)


};




function onClickBackDrop(e) {
    e.preventDefault();

   if (e.target !== e.currentTarget) {
        return
    };

      backDrop.classList.add('is-hidden');

  
}

function renderBigImage(src) {
    const markup = `<img src="${src}" alt="foto" />`;
   return content.insertAdjacentHTML('afterend', markup)
}

