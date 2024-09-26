let nomePrimeiroJogo = document.querySelector(".nomeJogo");
let descricaoJogoPrimeiroJogo = document.querySelector(".descricaoJogo");
let anoCriacaoPrimeiroJogo = document.querySelector(".anoCriacao");
let generoPrimeiroJogo = document.querySelector(".generoJogo");


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

let repasseJogo = (jogo) => {
	nomePrimeiroJogo.innerHTML = jogo.name;
	descricaoJogoPrimeiroJogo.innerHTML = jogo.description;
	anoCriacaoPrimeiroJogo.innerHTML = jogo.dateOfCreation;
	generoPrimeiroJogo.innerHTML = jogo.genre;
}

(async () => {
	let chamadaTodosJogos = await getTodosJogos();
	repasseJogo(chamadaTodosJogos[0]);

	console.log("Só avisando que você conectou com sucesso com a API da super Larissa S2");
})()
