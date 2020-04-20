'use strict';

(function () {
  var pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  var render = function (picture) {
    var pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

    pictureElement.addEventListener('click', function () {
      window.preview.openPicturePopup(picture);
    });
    return pictureElement;
  };

  window.picture = {
    render: render
  };
})();
