

function mudaPagina() {
    document.getElementById("next").click(); // Click on the checkbox
}


// Respostas do Teste1 (tem que referenciar o javascript no começo de cada pagina de pergunta e botar o nome da variavel igual ao do formulario da pagina (EX: QUIZ1))

function check1(){

	var question1 = document.quiz1.resp.value;

	switch(question1) {
    case '1':
        alert ("Resposta incorreta! Este é o autor da Teoria da Relatividade");
        break;
    case '2':
        alert ("Resposta incorreta! Este é o Lider do Sionismo Politico");
        break;
    case '3':
    	alert ("Resposta correta!");
    	break;
    case '4':
    	alert ("Resposta incorreta! Este é o Ex-Primeiro ministro. Responsável por muitos acordos de paz");
    	break;
    default:
        alert ("Nenhuma alternativa selecionada!");
}


}

// Respostas do Teste2

function check2(){

	var question2 = document.quiz2.resp.value;

	switch(question2) {
    case '1':
        alert ("Resposta incorreta! Tente novamente...");
        break;
    case '2':
        alert ("Resposta incorreta! Tente novamente");
        break;
    case '3':
    	alert ("Resposta correta!");
    	break;
    case '4':
    	alert ("Resposta incorreta! Tente novamente");
    	break;
    default:
        alert ("Nenhuma alternativa selecionada!");
}


}

// Respostas do Teste3

function check3(){

	var question3 = document.quiz3.resp.value;

	switch(question3) {
    case '1':
        alert ("Resposta incorreta! Este é o Rimon");
        break;
    case '2':
        alert ("Resposta correta!");
        break;
    case '3':
    	alert ("Resposta incorreta! Este é o Shalom");
    	break;
    case '4':
    	alert ("Resposta incorreta! Este é o BeHatzlachá");
    	break;
    default:
        alert ("Nenhuma alternativa selecionada!");
}


}

// Respostas do Teste4

function check4(){

	var question4 = document.quiz4.resp.value;

	switch(question4) {
    case '1':
        alert ("Resposta incorreta! Não existe nenhuma letra que representa o som de A");
        break;
    case '2':
        alert ("Resposta incorreta! Este é o Gimel");
        break;
    case '3':
    	alert ("Resposta incorreta! Este é o Kuf");
    	break;
    case '4':
    	alert ("Resposta correta!");
    	break;
    default:
        alert ("Nenhuma alternativa selecionada!");
}


}

// Respostas do Teste45

function check5(){

	var question5 = document.quiz5.resp.value;

	switch(question5) {
    case '1':
        alert ("Resposta correta!");
        break;
    case '2':
        alert ("Resposta incorreta! Esta letra não existe");
        break;
    case '3':
    	alert ("Resposta incorreta! Esta letra representa o som do R");
    	break;
    case '4':
    	alert ("Resposta incorreta! Esta é a primeira letra do alfabeto");
    	break;
    default:
        alert ("Nenhuma alternativa selecionada!");
}


}
