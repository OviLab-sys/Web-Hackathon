const menubtn = document.querySelector(".menubtn");
const navmenu = document.querySelector("nav-menu");

menubtn.addEventListener("click", () =>{
     menubtn.classList.toggle("active");
     navmenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
     addEventListener("click", () =>{
          manubtn.classList.remove("active");
          navmenu.classList.remove("active");
     }))
