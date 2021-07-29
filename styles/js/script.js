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
const sliderDots = document.querySelectorAll('.slider-dots_item');
let banner = document.querySelector('.banner');
for(i of sliderDots) { i.addEventListener('click', () => {
  banner.style.backg
})

}