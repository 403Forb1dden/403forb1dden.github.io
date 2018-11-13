        var link = document.querySelector(".login-link");
        var popup = document.querySelector(".modal-login");
        var popupOverlay = document.querySelector(".modal-overlay");  
        var close = document.querySelector(".modal-close");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");
        var form = popup.querySelector("form");
        var storage = localStorage.getItem("login");
            
        var isStorageSupport = true;
        var storage = "";
            
        try {
            storage = localStorage.getItem("login");
        } catch(err) {
            isStorageSupport = false;
        };
            
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show"); 
            popupOverlay.classList.add("modal-show"); 
            login.focus(); 
            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();
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
            if (!login.value || !password.value) {
                evt.preventDefault();
                popup.classList.add("modal-error");
            } else {
                if (isStorageSupport) {
                    localStorage.setItem("login", login.value);
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