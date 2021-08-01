const menu = document.querySelectorAll('a[href^="#"]');
for(let nav of menu) {
  nav.addEventListener("click", function(e) {
    e.preventDefault() 
    const blockID = nav.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

const search = document.querySelector('.icon_search');

search.addEventListener('click', () => {
  alert('dvsdv');
})

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.tabs__nav-btn').click();


/*slider*/
const slider = document.querySelector('.slider');
const dots1 = document.getElementById('slider-dots_item_1');
const dots2 = document.getElementById('slider-dots_item_2');
const dots3 = document.getElementById('slider-dots_item_3');
const dots4 = document.getElementById('slider-dots_item_4');
const dots5 = document.getElementById('slider-dots_item_5');

let sliderIndex = 1;
showSlides(sliderIndex);

function plusSlider(n) {
  showSlides(sliderIndex += n);
};

function previousSlide(n) {
  showSlides(slideIndex -= n);  
}

function currentSlide(n) {
  showSlides(sliderIndex = n);
}

function showSlides(n) {
  let i;
  const slider = document.querySelectorAll('.item__sl');
  const dots = document.querySelectorAll('.slider-dots_item');

if (n > slider.length) {
sliderIndex = 1;
}

if (n < 1) {
sliderIndex = slider.length;
}

for ( i = 0; i < slider.length; i++) {
slider[i].style.display = "none";
dots[i].classList.add('active');
}


slider[sliderIndex - 1].style.display='block';
dots[sliderIndex - 1].className='active';
}
