var jugar = document.getElementById('jugar');
    jugar.style.display = 'none';

var trivia = document.getElementById('trivia');
	trivia.style.display = 'none';

var resultados = document.getElementById('resultados');
	resultados.style.display = 'none';

function enviarName(){

	var name = document.getElementById('myName').value;
	document.getElementById('myNameDiv').innerHTML= name;
	var enviarNam = document.getElementById('enviarNam');
	enviarNam.style.display = 'none';
	jugar.style.display = "block";
}

function siJuegas() {

	jugar.style.display = 'none';
	trivia.style.display = 'block';

  }

function noJuegas(){

	jugar.style.display = 'none';
	enviarNam.style.display = 'block';
}


function check() {

		var contCorrect = 0;
		var contIncorrect = 0;

		var correcta1 = document.getElementById('javu').checked;
		var correcta2 = document.getElementById('tm').checked;
		var correcta3 = document.getElementById('3').checked;

		if (correcta1 == true) {

			contCorrect += 1;
			document.getElementById('correcta1').innerHTML='1.-CORRECTA';
		} else {

			contIncorrect += 1;
			document.getElementById('incorrecta1').innerHTML='1.-INCORRECTA';
		}
		if (correcta2 == true) {

			contCorrect += 1;
			document.getElementById('correcta2').innerHTML='2.-CORRECTA';
		} else {

			contIncorrect += 1;
			document.getElementById('incorrecta2').innerHTML='2.-INCORRECTA';
		}
		if (correcta3 == true)
		{

			contCorrect += 1;
			document.getElementById('correcta3').innerHTML='3.-CORRECTA';
		} else {

			contIncorrect += 1;
			document.getElementById('incorrecta3').innerHTML='3.-INCORRECTA';
		}

		document.getElementById('totalCorrec').innerHTML='Tu total correstas ' + contCorrect;
		document.getElementById('totalIncor').innerHTML='Tu total incorrectas ' + contIncorrect;

		trivia.style.display = 'none';
		resultados.style.display = 'block';
 }
   function noJuegas(){
   body.innerHTML = 'Nos vemos la proxima vez';
 }
