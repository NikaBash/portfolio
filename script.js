const back = document.querySelector('#back');
const next = document.querySelector('#next');
const photos = ['certificate-js.png', 'certificate-html.png', 'certificate-bootstrap.png'];

let i = 0;

next.addEventListener('click', () => {
    i++;
    if(i > photos.length - 1) i = 0;
    document.querySelector('#pictures').src = photos [i];
})

back.addEventListener('click', () => {
    i--;
    if(i < 0) {
        i = photos.length - 1;
    }
    document.querySelector('#pictures').src = photos [i];
})

gsap.from("#parOne", {
  y: -200,
  duration: 2,
  ease: "power1.in",
  opacity: 0
})
gsap.to("#parTwo", {
  text: "I'm a front-end web developer.",
  duration: 2,
  delay: 1,
  ease: "power1.in",
  delay: 3
})
gsap.from(".photo", {
  duration: 3, 
  opacity: 0,
  ease: "power1.in",
  scale: 0,
})
gsap.from(".link", {
  opacity: 0,
  duration: 2,
  delay: 1, 
  ease: "power1.in",
  stagger: 1
})




//https://github.com/VincentGarreau/particles.js/

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 3000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 200,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "star.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 20,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});