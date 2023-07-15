console.log("hello");
let showImg = document.getElementById("showImg");
let showSaved = document.getElementById("savedImgs");

const images = [
  { id: 1, src: "https://shorturl.at/ahNOU" },
  { id: 2, src: "https://shorturl.at/etKP5" },
  { id: 3, src: "https://shorturl.at/jpBHQ" },
  { id: 4, src: "https://shorturl.at/dkBY9" },
  { id: 5, src: "https://bit.ly/3ry9qcm" },
  { id: 6, src: "https://bit.ly/44pQRpz" },
];
let savedImg = [];
// function displayImg() {
images.forEach((image) => {
  let imageDiv = document.createElement("div");
  let img = document.createElement("img");
  let btn = document.createElement("button");
  img.src = image.src;
  btn.textContent = "Save";
  imageDiv.className = "imgSec";
  btn.addEventListener("click", function () {
    saveImg(image);
  });
  imageDiv.appendChild(img);
  imageDiv.appendChild(btn);
  showImg.appendChild(imageDiv);
});

function saveImg(val) {
  savedImg.push(val);
  displaySaved();
}
function displaySaved() {
  showSaved.innerHTML = "";
  savedImg.forEach((image) => {
    let imgSaved = document.createElement("img");
    console.log("tet", image.src);
    imgSaved.src = image.src;
    showSaved.appendChild(imgSaved);
  });
}
