let images = [
  '<img class="box" src="./assets/img/bonino.jpg">',
  '<img class="box" src="./assets/img/dimaio.jpeg">',
  '<img class="box" src="./assets/img/pillon.jpg">',
  '<img class="box" src="./assets/img/sgarbi.jpg">',
];

function carousel() {
  let i = 0;
  setInterval(() => {
    let link = images[i];
    document.getElementById("carousel").innerHTML = link;
    i++;
    if (i == images.length) {
        i=0
    }
  }, 2000);
}

