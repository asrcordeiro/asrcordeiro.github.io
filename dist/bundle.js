!function(){var e=document.querySelector(".hamburguer"),t=document.querySelector("#close"),r=document.querySelector(".half-menu"),c=document.querySelector("#orcamentos"),n=document.querySelector("#parcerias"),o=document.querySelector("#submit"),s=document.querySelectorAll(".button"),i=document.querySelector("#subject");s.forEach((function(e){e.addEventListener("click",(function(){window.scrollTo(0,0),a}))})),e.addEventListener("click",(function(){r.classList.toggle("hide")})),t.addEventListener("click",(function(){r.classList.toggle("hide")})),c.addEventListener("click",(function(){c.classList.add("bg-green"),c.classList.remove("bg-darkGreen"),n.classList.add("bg-darkGreen"),n.classList.remove("bg-green"),o.innerHTML="Solicitar orçamento",i.setAttribute("value","Orçamento")})),n.addEventListener("click",(function(){c.classList.add("bg-darkGreen"),c.classList.remove("bg-green"),n.classList.add("bg-green"),n.classList.remove("bg-darkGreen"),o.innerHTML="Entrar em contato",i.setAttribute("value","Parceria")}))}();