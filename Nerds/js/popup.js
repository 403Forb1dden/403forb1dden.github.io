        var link = document.querySelector(".button-contact-us");
        var popup = document.querySelector(".modal-feedback");
        var popupOverlay = document.querySelector(".modal-overlay");  
        var close = document.querySelector(".modal-close");
        var userName = popup.querySelector("[name=name]");
        var email = popup.querySelector("[name=email]");
        var textarea = popup.querySelector("[name=textarea]")
        var form = popup.querySelector("form");
        var storage = localStorage.getItem("userName");
            
        var isStorageSupport = true;
        var storage = "";
            
        try {
            storage = localStorage.getItem("userName");
        } catch(err) {
            isStorageSupport = false;
        };
            
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show"); 
            popupOverlay.classList.add("modal-show"); 
            userName.focus(); 
            if (storage) {
                userName.value = storage;
                email.focus();
            } else {
                userName.focus();
            }
        });
            
        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show"); 
            popupOverlay.classList.remove("modal-show"); 
            popup.classList.remove("modal-error");
        });
            
        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
            if (!userName.value || !email.value || !textarea.value) {
                console.log(!userName.value);
                console.log(!email.value);
                console.log(!textarea.value);
                evt.preventDefault();
                popup.classList.add("modal-error");
            } else {
                if (isStorageSupport) {
                    localStorage.setItem("userName", userName.value);
                }
            }
        });
            
        window.addEventListener("keydown", function(evt) {
            if (evt.keyCode === 27) {
                evt.preventDefault();
                
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                    popupOverlay.classList.remove("modal-show");
                    popup.classList.remove("modal-error");
                }
            }
        });