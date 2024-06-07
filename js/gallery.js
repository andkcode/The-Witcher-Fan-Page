let photosArray = [
    '../images/gallery/developers.jpg',
    '../images/gallery/geralt.jpeg',
    '../images/gallery/maincharacters.jpeg',
    '../images/gallery/meme.jpg',
    '../images/gallery/secondmeme.jpg',
    '../images/gallery/yennefer.jpg'
  ];
  let currentIndex = 0;
  let galleryContainer = document.getElementById("gallery-container");
  let firstImage = document.createElement("img");
  firstImage.src = photosArray[currentIndex];
  galleryContainer.appendChild(firstImage);
  
  function displayGallery(side) {
    switch(side) {
      case 'left':
        if (currentIndex === 0) {
          currentIndex = photosArray.length - 1;
        } else {
          currentIndex--;
        }
        break;
      case 'right':
        if (currentIndex === photosArray.length - 1) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        break;
    }
  
    galleryContainer.innerHTML = "";
    let newImage = document.createElement("img");
    newImage.src = photosArray[currentIndex];
    galleryContainer.appendChild(newImage);
  }
  