console.log ("Insira sua idade:"); //campo para inserção da idade

	let idadeInserida = 19; //Exemplo de idade

console.log (idadeInserida);

		if (idadeInserida>=18) { 
		console.log("Cadastro aprovado."); //Se Sim
		}

		else {
		console.log("Cadastro não aprovado."); //Se Não
		}

console.log ("Insira a data do evento:"); //campo para inserção de data

	let dataInserida = 30062022; //Exemplo de data inserida
	let dataAtual = 21062022; //Data atual que foi feito o projeto 

console.log (dataInserida);

		if (dataInserida>dataAtual) { 
			console.log("Data do evento permitida."); //Se Sim
		}
	
		else {
			console.log("Data inválida."); //Se Não
		}

console.log ("Insira os nomes dos participantes que estarão no evento:");//Lista dos nomes dos participantes
		
	let nomesDosParticipantes = ["Gustavo", "José", "Vitor", "Renato", "Luana", "Ana"];
	let quantidadeDeParticipantes = nomesDosParticipantes.length;

console.log ("Número atual de Pessoas Colocadas na lista:"); //Quantidade de participantes
console.log (quantidadeDeParticipantes) ;

		if (quantidadeDeParticipantes>100) { 
		console.log("Lista com número maior do que 100 pessoas, cadastro não aprovado."); //Se Não
		}

		else {
			console.log("Evento criado com sucesso."); //Se Sim
		}