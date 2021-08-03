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

/*search*/
let userSearch = [];
function getValue() {
 let inputValue = document.querySelector('input').value;
 const id = Date.now();
  let serchInfo = { info: inputValue, id };
 

  userSearch.push(serchInfo);
  console.log(userSearch);
  clear();
}
 function clear() {
  let inp = document.querySelector('input[type="search"]');
    inp.value = "";
 }

 function validForm() {
  const inp = document.querySelector('input[type="search"]');
  if (!inp.value) { inp.classList.add('error'); } else {
    inp.classList.remove('error');
    getValue();
  }
}
const searchIcon = document.querySelector('.icon_search');
searchIcon.addEventListener('click', () => {
  validForm()
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
const slides = document.querySelectorAll('.item'),
 dots = document.querySelectorAll('.slider-dots_item'),
 prev = document.getElementById('btn-prev'),
 next = document.getElementById('btn-next');

 let index = 0;

 const activeSlide = n => {
     console.log(n);
     for (slide of slides) {
         slide.classList.remove('active');
         slides[n].classList.add('active');
     }
 }

 const activeDots = n => {
   console.log(n);
   for (dot of dots) {
       dot.classList.remove('active');
      dots[n].classList.add('active');
   }
}

const prepareCurentSlide = ind => {
activeSlide(ind);
activeDots(ind);
}
const nextSlide = () => {
if(index == slides.length - 1 ) {
   index = 0;
   prepareCurentSlide(index); 
} else {
   index++;
   prepareCurentSlide(index); 
   }
}
 const prevSlide = () => {
   if(index == 0) {
       index = slides.length - 1 
       prepareCurentSlide(index); 
   } else {
       index--;
       prepareCurentSlide(index); 
   }
}

dots.forEach((item, indexDot) => {
 item.addEventListener('click', ()=> {
     index = indexDot;
     prepareCurentSlide(index);

})
})

 


