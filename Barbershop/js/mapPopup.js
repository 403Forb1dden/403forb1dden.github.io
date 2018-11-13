var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".map-modal-close");
var mapPopupOverlay = document.querySelector(".modal-overlay");

mapLink.addEventListener("click", function (evt) {
            evt.preventDefault();
            mapPopup.classList.add("modal-show"); 
            mapPopupOverlay.classList.add("modal-show"); 
            login.focus();
        });

mapClose.addEventListener("click", function (evt) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show"); 
            mapPopupOverlay.classList.remove("modal-show"); 
        });

window.addEventListener("keydown", function(evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                
                if (mapPopup.classList.contains("modal-show")) {
                    mapPopup.classList.remove("modal-show");
                    mapPopupOverlay.classList.remove("modal-show");
                }
            }
        });