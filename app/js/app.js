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
      { name: 'YOKO', img: 'img/yoko.png', link: 'https://yokoshop.com', offset: true },
      { name: 'Webedia', img: 'img/webedia.png', link: '#', offset: false },
      { name: 'AVNIER', img: 'img/avnier.png', link: '#', offset: false },
      { name: 'seasonly', img: 'img/seasonly.png', link: '#', offset: false },
      { name: 'JOONE', img: 'img/joone.png', link: '#', offset: false },
      { name: 'UNIVERSAL', img: 'img/universal.png', link: '#', offset: true },
      { name: 'BOXTAL', img: 'img/boxtal.png', link: '#', offset: false },
      { name: 'FEMPO', img: 'img/fempo.png', link: '#', offset: false },
      { name: 'Bonsoirs', img: 'img/bonsoirs.png', link: '#', offset: false },
      { name: 'MARS', img: 'img/mars.png', link: '#', offset: false },
      { name: 'BIG FERNAND', img: 'img/big-fernand.png', link: '#', offset: true },
      { name: 'La Fourche', img: 'img/la-fourche.png', link: '#', offset: false },
      { name: 'Rivieras', img: 'img/revieras.png', link: '#', offset: false },
      { name: 'Cdiscount', img: 'img/cdiscount.png', link: '#', offset: false },
      { name: 'Tealer', img: 'img/tealer.png', link: '#', offset: false },
    ]
  }
})
