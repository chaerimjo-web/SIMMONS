let slideWrapper = document.querySelector('.slidewrapper');
let slideContainer = document.querySelector('.slide-container');
let slides = slideContainer.querySelectorAll('li');
let slideCount = slides.length;
let currentIdx = 0;
let nextBtn = document.querySelector('#next');
let prevBtn = document.querySelector('#prev');
// let timer;

slides.forEach((slide, index) => {
  slide.classList.toggle('active', index === currentIdx);
  slide.style.left = `${index * 100}%`;
});
console.log(slides);
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
  
    slideContainer.style.left = `${-num * 100}%`;
    currentIdx = num;
  
    // 버튼 상태 업데이트
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

    // 슬라이드 활성화
   
  }
  
  // function AutoSlide(){
  //   timer = setInterval(()=>{
  //     let nextIdx = (currentIdx + 1)%slideCount;
  
  //     goToslide(nextIdx);
  //   }, 4000);
  // }

  // let timer = setInterval(()=>{
  //   let nextMove = (currentIdx + 1)%slideCount;
  // },4000);

  nextBtn.addEventListener('click', () => {
    goToSlide(currentIdx + 1);
  });
  
  prevBtn.addEventListener('click', () => {
    goToSlide(currentIdx - 1);
  });
  
  goToSlide(0);
