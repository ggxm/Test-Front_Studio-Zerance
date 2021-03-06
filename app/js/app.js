const app = new Vue({
  el: '#app',
  data: {
    navHeader: [
      { name: 'Nos Clients', link: '#nos-clients' },
      { name: 'Notre Offre', link: '#notre-offre' },
      { name: 'Le Studio', link: '#le-studio' },
      { name: 'Contact', link: '#contact' }
    ],
    clients: [
      { name: 'YOKO', img: 'img/clients/yoko.webp', link: 'https://yokoshop.com' },
      { name: 'Webedia', img: 'img/clients/webedia.webp', link: '#' },
      { name: 'AVNIER', img: 'img/clients/avnier.webp', link: '#' },
      { name: 'seasonly', img: 'img/clients/seasonly.webp', link: '#' },
      { name: 'JOONE', img: 'img/clients/joone.webp', link: '#' },
      { name: 'UNIVERSAL', img: 'img/clients/universal.webp', link: '#' },
      { name: 'BOXTAL', img: 'img/clients/boxtal.webp', link: '#' },
      { name: 'FEMPO', img: 'img/clients/fempo.webp', link: '#' },
      { name: 'Bonsoirs', img: 'img/clients/bonsoirs.webp', link: '#' },
      { name: 'MARS', img: 'img/clients/mars.webp', link: '#' },
      { name: 'BIG FERNAND', img: 'img/clients/big-fernand.webp', link: '#' },
      { name: 'La Fourche', img: 'img/clients/la-fourche.webp', link: '#' },
      { name: 'Rivieras', img: 'img/clients/rivieras.webp', link: '#' },
      { name: 'Cdiscount', img: 'img/clients/cdiscount.webp', link: '#' },
      { name: 'Tealer', img: 'img/clients/tealer.webp', link: '#' },
    ],
    sliderSZ: [
      { img: 'img/slider/Artboard_2.jpg', title: 'From scratch /', logo: 'img/slider/logo-slide.png', txt: 'Développement site from scratch et d’un quiz personnalisé avec abonnement. Développement site from scratch et d’un quiz personnalisé avec abonnement.', link: '#' },
      { img: 'img/slider/Artboard_1.jpg', title: 'From scratch /', logo: 'img/slider/logo-slide.png', txt: 'Développement site from scratch et d’un quiz personnalisé avec abonnement. Développement site from scratch et d’un quiz personnalisé avec abonnement.', link: '#' }
    ],
    txtInfinite: [ 'Good cat Bad cat', 'Frédéric Diefental', 'Quand c’est trop, c’est Tropico', 'Qu’est ce qui est jaune et qui attend ?' ]
  }
});

const sliderSZ = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.swiper-button-next'
  }
});
