let images = [
  '<img class="box" src="./assets/img/bonino.jpg">',
  '<img class="box" src="./assets/img/dimaio.jpeg">',
  '<img class="box" src="./assets/img/pillon.jpg">',
  '<img class="box" src="./assets/img/sgarbi.jpg">',
  '<img class="box" src="./assets/img/adinolfi.jpg">'
];

let interval

function carouselStart() {
  let i = 0;
  interval = setInterval(() => {
    let link = images[i];
    document.getElementById("carousel").innerHTML = link;
    i++;
    if (i == images.length) {
        i=0
    }
  }, 2500);
}

function carouselStop() {
    clearInterval(interval)
}
