let slideWrapper = document.querySelector('.slidewrapper');
let slideContainer = slideWrapper.querySelector('.slide-container');
let slides = slideContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');

//product 
let mtslideWrapper = document.querySelector('.mtslide');
let pdslideContainer = document.querySelector('.pdinfo');
let pdslides = document.querySelectorAll('.mtslide li');
let pdslideCount = pdslides.length;
let pdnextBtn = document.querySelector('#pdnext');
let pdprevBtn = document.querySelector('#pdprev');
let pdcurrentIdx = 0;

//tap
let tabContent = document.querySelectorAll('#tab-content div');
let tabMenu = document.querySelectorAll('.tab-menu a');

// slides.forEach((slide, index) => {
//   slide.classList.toggle('active', index === currentIdx);
//   slide.style.left = `${index * 100}%`;
// });
// console.log(slides); 
document.addEventListener('DOMContentLoaded',()=>{
 
    const goTop = document.querySelector('#go-top');
    
    window.addEventListener('scroll',()=>{
      let scrollAmt = window.scrollY; 
      console.log(scrollAmt);
    
      if(scrollAmt > 600){
        goTop.classList.add('active');
      }else{
        goTop.classList.remove('active');
      }
    });
  
    goTop.addEventListener('click',(e)=>{ 
      e.preventDefault();
      window.scrollTo({
        left:0, 
        top:0,
        behavior:'smooth'
      });
    });
  });

  function goToSlide(num) {

    slideContainer.style.left = `${-num* 100}%`;
    currentIdx = num;

    if (currentIdx === slideCount - 1) {
      nextBtn.classList.add('hiddenn');
    } else {
      nextBtn.classList.remove('hiddenn');
    }
    
    if (currentIdx === 0) {
      prevBtn.classList.add('hiddenn');
    } else {
      prevBtn.classList.remove('hiddenn');
    }

  }goToSlide(0);

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(currentIdx + 1);
  });
  
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();

    goToSlide(currentIdx - 1);
  });
  
  goToSlide(0);

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentIdx);
    slide.style.left = `${index * 100}%`;
  });

  //products slide


  // pdslides.forEach((pdslide, pdindex) => {
  //   pdslide.classList.toggle('active', pdindex === pdcurrentIdx);
  //   pdslide.style.left = `${pdindex * 100}%`;
  // });

  function pdgoToSlide(num) {

    pdslideContainer.style.left = `${-num* 100}%`;
    pdcurrentIdx = num;
  
    if (pdcurrentIdx === pdslideCount - 1) {
      pdnextBtn.classList.add('hidden');
    } else {
      pdnextBtn.classList.remove('hidden');
    }

    if (pdcurrentIdx === 0) {
      pdprevBtn.classList.add('hidden');
    } else {
      pdprevBtn.classList.remove('hidden');
    }
  }pdgoToSlide(0);

  
  pdnextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pdgoToSlide(pdcurrentIdx + 1);
  });
  
  pdprevBtn.addEventListener('click', (e) => {
    e.preventDefault();

    pdgoToSlide(pdcurrentIdx - 1);
  });
  
  pdgoToSlide(0);

/* TAB */
for(let pdtm of tabMenu){
  pdtm.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let pdtm of tabMenu){
      pdtm.classList.remove('active'); 
    }
    pdtm.classList.add('active');

    for(let pdtc of tabContent){
      pdtc.classList.remove('active');
    }
    let target = pdtm.getAttribute('href');
    document.querySelector(target).classList.add('active');
  });
}


const popup = document.querySelector('.popup');
const check = document.querySelector('#check');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
  if(check.checked){
    //쿠키생성
    setCookie('Company','ABC',1);
  } else{
    //쿠키제거
    delCookie('Company','ABC');
  }
  popup.classList.remove('show');
});

function setCookie(name,val,due){
  let date = new Date();
    date.setDate(date.getDate() + due);

    let myCookie = `${name}=${val};expires=`+date.toUTCString();
    document.cookie = myCookie;
}

function delCookie(name,val){
  let date = new Date();
    date.setDate(date.getDate() -1);

    let myCookie = `${name}=${val};expires=`+date.toUTCString();
    document.cookie = myCookie;
}

//Company=ABC, checkCookie
function checkCookie(name,val){
  if(document.cookie.search(`${name}=${val}`) === -1){
    popup.classList.add('show');
  }
}

checkCookie('Company','ABC');