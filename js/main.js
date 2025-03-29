'use strict';

{
  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click',e =>{
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content =>{
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    })
  });
}

/*輪播效果*/ 
document.addEventListener("DOMContentLoaded", () => {
  const swipers = document.querySelectorAll(".swiper-container");

  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl, {
      loop: true, // 讓圖片輪播循環
      autoplay: {
        delay: 3000, // 每 3 秒自動播放
        disableOnInteraction: false // 互動後仍然繼續播放
      },
      slidesPerView: 1, // 一次顯示 1 張
      spaceBetween: 0, // 讓圖片緊貼不留空隙
      centeredSlides: true, // 確保圖片置中
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev')
      },
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true
      }
    });
  });
});