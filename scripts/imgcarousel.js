var index = [];

//sets up the index array
function setIndex(n) {
  for(i = 0; i < n; i++){
    index.push(1);
  }
}

// Next/previous controls
function moveSlides(n, num) {
  showSlides(index[num-1] += n, num);
  console.log(index[num-1]);
}

function showSlides(n, num) {
  const className = "img carousel"+num;
  var i;
  var slides = document.getElementsByClassName(className);
  if (n > slides.length) {index[num-1] = 1}
  if (n < 1) {index[num-1] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[index[num-1]-1].style.display = "block";
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