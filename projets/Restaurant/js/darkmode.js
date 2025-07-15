const btnToggle = document.querySelector(".btn-toggle");
const body=document.querySelector("body");

btnToggle.addEventListener("click",( ) => {

    if(body.classList.contains("dark")){
        body.classList.add("light")
        body.classList.remove("dark")
        btnToggle.innerHTML = "Go Dark"
    }

        else if(body.classList.contains("light")){
            body.classList.add("dark")
            body.classList.remove("light")
            btnToggle.innerHTML = "Go Light"
        }
})




/* icon soleil

<i class="fa-solid fa-sun-bright"></i>



icon lune

<i class="fa-solid fa-moon-stars"></i> */