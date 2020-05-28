var index = 1;

// Next/previous controls
function moveSlides(n) {
  showSlides(index += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[index-1].style.display = "block";
}

function openModal(n) {
    var imgName = "img"+n;
    var modal = document.getElementById("modal");
    var captionText = document.getElementById("caption");
    var imageClicked = document.getElementById(imgName);
    modal.style.display = "flex";
    imageClicked.style.display = "block";
    captionText.innerHTML = imageClicked.alt;
    setTimeout(() => { modal.style.opacity = 1; }, 100);
}

function closeModal() {
    var i;
    var modal = document.getElementById("modal");
    var bigSlides = document.getElementsByClassName("modal-img");
    modal.style.opacity = 0;
    setTimeout(() => { modal.style.display = "none"; 
                    for (i = 0; i < bigSlides.length; i++) {
                        bigSlides[i].style.display = "none";
                    }
                    }, 100);
}