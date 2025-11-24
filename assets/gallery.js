let lightbox = document.getElementById('lightbox');
let lightboxImage = lightbox.querySelector('.lb-image');
let closeButton = lightbox.querySelector('.lb-close');
let currentIndex = -1;
let images = [];

function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[index].src;
    lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
}

closeButton.addEventListener('click', closeLightbox);

const galleryImages = document.querySelectorAll('.gallery figure img');
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
    images.push(img);
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') {
        if (currentIndex > 0) openLightbox(currentIndex - 1);
    }
    if (event.key === 'ArrowRight') {
        if (currentIndex < images.length - 1) openLightbox(currentIndex + 1);
    }
});