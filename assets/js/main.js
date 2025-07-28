/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// hidden menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when click on each nav__link, we remove the show menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  // When the scroll is greater tha 50 viewport
  this.scrollY >= 50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header') 
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  // When the scroll is higher than 350 viewport height, add the scroll class
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll') 
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*='+ sectionId +']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '40px',
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  // reset: true, // Animation repeat
})

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)

sr.reveal(`.home__image, .footer__img-1, .footer__img-2`, {rotate: {z: -15}})
sr.reveal(`.home__bread, .about__bread`, {rotate: {z: 15}})
sr.reveal(`.home__footer`, {scale: 1, origin: 'bottom'})

sr.reveal(`.new__card:nth-child(1) img`, {roate: {z: -30}, distance: 0})
sr.reveal(`.new__card:nth-child(2) img`, {roate: {z: 15}, distance: 0, delay: 600})
sr.reveal(`.new__card:nth-child(3) img`, {roate: {z: -30}, distance: 0, delay: 900})

sr.reveal(`.favorite__card img`, {internal: 100, roate: {z: 15}, distance: 0})

sr.reveal(`.footer__container`, {scale: 1})

 function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  // Tutup modal ketika klik di area luar modal
  window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
      });
  };

  const form = document.getElementById('orderForm');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const produk = document.getElementById('produk').value;
    const harga = document.getElementById('harga').value;
    const nama = document.getElementById('nama').value;
    const nomor = document.getElementById('nomor').value;
    const alamat = document.getElementById('alamat').value;

    const pesan = `Halo, saya ingin memesan ${produk}.

Detail Pesanan:
Produk: ${produk}
Harga: Rp.${harga}
Nama: ${nama}
Nomor: ${nomor}
Alamat: ${alamat}

Terima kasih.`;

    const encodedPesan = encodeURIComponent(pesan);
    const whatsappLink = `https://wa.me/6285724887713?text=${encodedPesan}`;

    window.open(whatsappLink, '_blank');
  });
}

  