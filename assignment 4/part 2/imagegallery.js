/*
    Name: Kade Chukwuebuka
    File: imagegallery.js
    Date: 10 April 2025
 JavaScript logic for thumbnail switching and brightness toggling in the image gallery.
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const fullImgContainer = document.querySelector('.full-img');

// Array of image file names
const imageNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Loop through the array (starting at 1 for file names)
for (let i = 0; i < imageNames.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + imageNames[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function () {
        displayedImage.setAttribute('src', 'images/' + imageNames[i]);
    });
}

// Toggle dark/light class
btn.addEventListener('click', function () {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        fullImgContainer.style.backgroundColor = 'rgba(0,0,0,0.7)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        fullImgContainer.style.backgroundColor = 'white';
    }
});
