// Efeito no menu ao rolar a página

window.addEventListener("scroll", function(){

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.15)";
header.style.background="#ffffff";

}else{

header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";
header.style.background="#ffffff";

}

});

// Animação ao aparecer na tela

const elementos = document.querySelectorAll(".card, .atividade");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

elementos.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".8s";

observer.observe(el);

});