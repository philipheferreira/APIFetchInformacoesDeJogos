
/* Inicio da declaração das variaveis modais */
let modal1 = document.querySelector(".modal1");

let modal2 = document.querySelector(".modal2");

let modal3 = document.querySelector(".modal3");

let modal4 = document.querySelector(".modal4");
/* Fim das declarações das variaveis modais */

/* Inicio da declaração dos botões de inicialização das modais */
let btnModal1 = document.querySelector(".botao1");

let btnModal2 = document.querySelector(".botao2");

let btnModal3 = document.querySelector(".botao3");

let btnModal4 = document.querySelector(".botao4");
/* Fim da declaração dos botões de inicialização das modais */

/*  */
let btnFechar = document.querySelector(".fechar");


let fecharModal = () => {
	if(modal1.style.display == "block"){
		modal1.style.display = "none";
	}else 
	if(modal2.style.display == "block"){
		modal2.style.display = "none";
	}else 
	if(modal3.style.display == "block"){
		modal3.style.display = "none";
	}else 
	if(modal4.style.display == "block"){
		modal4.style.display = "none";
	}
	
}

btnModal1.addEventListener("click", function(){
	modal1.style.display = "block";
});

btnModal2.addEventListener("click", function(){
	modal2.style.display = "block";
});

btnModal3.addEventListener("click", function(){
	modal3.style.display = "block";
});

btnModal4.addEventListener("click", function(){
	modal4.style.display = "block";
});

btnFechar.addEventListener("click", fecharModal);

window.addEventListener("click", function(){
	if(event.target == modal1){ /* seleciona o modal 1 */
		modal1.style.display = "none";
	}else if(event.target == modal2){
		modal2.style.display = "none";
	}else if(event.target == modal3){
		modal3.style.display = "none";
	}else if(event.target == modal4){
		modal4.style.display = "none";
	}
})