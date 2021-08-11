const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const refs = {
  gallery: document.querySelector('.js-gallery'),
  gallery__image: document.querySelector('.gallery_image'),
  modal:  document.querySelector('.js-lightbox'),
  modalImage: document.querySelector('.lightbox__image'),
  backGroundModal: document.querySelector('.lightbox__overlay'),
  modalCloseBtn: document.querySelector('.lightbox__button')
}
const createImg = function(array){
  const galleryImg = galleryItems.map(el => `<li class = 'gallery__item'><img class = 'gallery__image' src = ${el.preview} data-source = ${el.original} alt = ${el.description}></li>`);
  refs.gallery.insertAdjacentHTML("beforeend", galleryImg.join(''))
}
const galleryCreate = createImg(galleryItems)

let currentImageIndex = 0;
const originalLink = galleryItems.map((el) => el.original);

function modalOpen(event){
  if(event.target.nodeName !== 'IMG'){
    return
  } else {
    refs.modal.classList.add('is-open');
    refs.modalImage.src = event.target.dataset.source;
    refs.modalImage.alt = event.target.alt;

    currentImageIndex = originalLink.indexOf(event.target.dataset.source)
    window.addEventListener("keydown", changeImgOnKeyClick)
    window.addEventListener('keydown', onEscKeyClick)
  }
}
refs.gallery.addEventListener('click' , modalOpen)

function changeImgOnKeyClick(event) {
  if(event.keyCode === 39 && currentImageIndex < originalLink.length - 1) {
    currentImageIndex += 1
  } else if (event.keyCode === 39 && currentImageIndex === originalLink.length - 1) {
    currentImageIndex = 0
  }
  if(event.keyCode === 37 && currentImageIndex > 0) {
    currentImageIndex -= 1
  } else if(event.keyCode === 37 && currentImageIndex === 0) {
    currentImageIndex = originalLink.length - 1
  }
  refs.modalImage.src = originalLink[currentImageIndex]
}

function modalClose(event) {
  refs.modal.classList.remove('is-open')
  refs.modalImage.scr = '';
  refs.modalImage.alt = '';

  currentImageIndex = 0;
  window.removeEventListener("keydown", changeImgOnKeyClick)
  window.removeEventListener('keydown', onEscKeyClick)
}
refs.modalCloseBtn.addEventListener('click', modalClose)
refs.backGroundModal.addEventListener('click', modalClose)

function onEscKeyClick(event) {
  if(event.keyCode === 27){
    modalClose()
  }
}




//if (event.target.classlist.contains('gallery_image')){
  //console.log(event.target)
  //modalRef.classList.add('is-open')
//}