const galleryItem = document.getElementsByClassName("gallery-item");
const lightboxContainer = document.createElement("div");
const lightboxContent = document.createElement("div");
const lightboxImg = document.createElement("img");
const lightboxPrev = document.createElement("div");
const lightboxNext = document.createElement("div");

lightboxContainer.classList.add("lightbox");
lightboxContent.classList.add("lightbox-content");
lightboxPrev.classList.add("fa", "fa-angle-left", "lightbox-Prev");
lightboxNext.classList.add("fa", "fa-angle-right", "lightbox-Next");

lightboxContainer.appendChild(lightboxContent);
lightboxContent.appendChild(lightboxImg);
lightboxContent.appendChild(lightboxPrev);
lightboxContent.appendChild(lightboxNext);
document.body.appendChild(lightboxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }

    let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
    lightboxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightboxContainer.style.display = "block";
    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}

for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
    showLightBox(index += n);
}

function prevImage() {
    sliderImage(-1);
}

function nextImage() {
    sliderImage(1);
}

lightboxPrev.addEventListener("click", prevImage);
lightboxNext.addEventListener("click", nextImage);

function closeLightBox(event) {
    if (event.target === this) {
        lightboxContainer.style.display = "none";
    }
}

lightboxContainer.addEventListener("click", closeLightBox);
