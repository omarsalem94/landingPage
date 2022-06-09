window.onscroll = function() {
  let menu = document.getElementById('navigation');
  if (scrollY > 400) {
      menu.classList.add('fx');
  } else {
      menu.classList.remove('fx');
  }
}


window.onload = function() {
  let load = document.getElementById('load');
  document.body.style.overflow = 'hidden';
  setTimeout(()=> {
    load.style.display = 'none';
    document.body.style.overflow = 'auto';
  },1000)
}

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay: true,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})