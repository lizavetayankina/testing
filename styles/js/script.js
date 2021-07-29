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

const navMenu = document.querySelectorAll('.nav_link');

/*for(let i = 0; i < navMenu.length; i++) {

}*/