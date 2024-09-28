let idPrimeiroJogo = document.querySelector(".idJogo1");
let nomePrimeiroJogo = document.querySelector(".nomeJogo1");
let descricaoJogoPrimeiroJogo = document.querySelector(".descricaoJogo1");
let anoCriacaoPrimeiroJogo = document.querySelector(".anoCriacao1");
let generoPrimeiroJogo = document.querySelector(".generoJogo1");

let idSegundoJogo = document.querySelector(".idJogo2");
let nomeSegundoJogo = document.querySelector(".nomeJogo2");
let descricaoJogoSegundoJogo = document.querySelector(".descricaoJogo2");
let anoCriacaoSegundoJogo = document.querySelector(".anoCriacao2");
let generoSegundoJogo = document.querySelector(".generoJogo2");

let idTerceiroJogo = document.querySelector(".idJogo3");
let nomeTerceiroJogo = document.querySelector(".nomeJogo3");
let descricaoJogoTerceiroJogo = document.querySelector(".descricaoJogo3");
let anoCriacaoTerceiroJogo = document.querySelector(".anoCriacao3");
let generoTerceiroJogo = document.querySelector(".generoJogo3");

let idQuartoJogo = document.querySelector(".idJogo4");
let nomeQuartoJogo = document.querySelector(".nomeJogo4");
let descricaoJogoQuartoJogo = document.querySelector(".descricaoJogo4");
let anoCriacaoQuartoJogo = document.querySelector(".anoCriacao4");
let generoQuartoJogo = document.querySelector(".generoJogo4");

const getJogosTodosURL = 'http://localhost:5081/api/games/get'

const getTodosJogos = async () => {
	try {
		const responseTodosJogos = await fetch(getJogosTodosURL ); // pega a url e direcionar buscar
		const TodosJogos = await responseTodosJogos.json();
		return TodosJogos; // retorna pokemon pesquisado

	} catch(err){
		console.log(err);
	}
}

let repasseJogo = (jogo, numero) => {

	if(numero == 1){
		idPrimeiroJogo.innerHTML = jogo.id
		nomePrimeiroJogo.innerHTML = jogo.name;
		descricaoJogoPrimeiroJogo.innerHTML = jogo.description;
		anoCriacaoPrimeiroJogo.innerHTML = jogo.dateOfCreation;
		generoPrimeiroJogo.innerHTML = jogo.genre;
	}else 
	if(numero == 2){
		idSegundoJogo.innerHTML = jogo.id
		nomeSegundoJogo.innerHTML = jogo.name;
		descricaoJogoSegundoJogo.innerHTML = jogo.description;
		anoCriacaoSegundoJogo.innerHTML = jogo.dateOfCreation;
		generoSegundoJogo.innerHTML = jogo.genre;
	}else 
	if(numero == 3){
		idTerceiroJogo.innerHTML = jogo.id
		nomeTerceiroJogo.innerHTML = jogo.name;
		descricaoJogoTerceiroJogo.innerHTML = jogo.description;
		anoCriacaoTerceiroJogo.innerHTML = jogo.dateOfCreation;
		generoTerceiroJogo.innerHTML = jogo.genre;
	}else
	if(numero == 4){
		idQuartoJogo.innerHTML = jogo.id
		nomeQuartoJogo.innerHTML = jogo.name;
		descricaoJogoQuartoJogo.innerHTML = jogo.description;
		anoCriacaoQuartoJogo.innerHTML = jogo.dateOfCreation;
		generoQuartoJogo.innerHTML = jogo.genre;
	}
	
}


(async () => {
	let chamadaTodosJogos = await getTodosJogos();
	repasseJogo(chamadaTodosJogos[0], 1);
	repasseJogo(chamadaTodosJogos[1], 2);
	repasseJogo(chamadaTodosJogos[2], 3);
	repasseJogo(chamadaTodosJogos[3], 4);
	console.log(chamadaTodosJogos);
})()
