        var link = document.querySelector(".buttons");
        var popup = document.querySelector(".modal");
            
        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            if (popup.classList.contains("modal")) {
                    popup.classList.remove("modal");
                }
            else {
                popup.classList.add("modal");
            }
        };
            