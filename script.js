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
