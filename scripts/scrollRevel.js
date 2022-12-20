window.sr = ScrollReveal({ reset: true });

sr.reveal('.link1', { duration: 1000, distance: '50px', origin: 'top' });
sr.reveal('.link2', { duration: 1500, distance: '50px', origin: 'top' });
sr.reveal('.link3', { duration: 2000, distance: '50px', origin: 'top' });

ScrollReveal().reveal('.NaussHome', {
    distance: '0px',
    opacity: 0.08
});

sr.reveal('.imgStudio', { duration: 1000, distance: '50px', origin: 'right' });
sr.reveal('.textStudio', { duration: 1500, distance: '50px', origin: 'left' });
sr.reveal('.direita', { duration: 1000, distance: '50px', origin: 'right' });
sr.reveal('.esquerda', { duration: 1500, distance: '50px', origin: 'left' });


 // Obtém o elemento com o id "topo"
 var botao = document.getElementById("topo");

 // Quando o usuário clicar no botão, execute a função scrollToTop
 botao.addEventListener("click", scrollToTop);

 function scrollToTop() {
   // Obtém o elemento html
   var html = document.documentElement;
   // Obtém o elemento body
   var body = document.body;

   // Scroll lento para o topo da página
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
   });
   
 }

 // Obtém o elemento com o id "topo"
var botao = document.getElementById("topo");

// Verifica se a página está no início
function verificarPosicao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    botao.style.display = "block"; // Exibe o botão
  } else {
    botao.style.display = "none"; // Esconde o botão
  }
}

// Executa a função verificarPosicao quando a página é rolada
window.onscroll = function() {
  verificarPosicao();
};