
// Task 1
var inp1 = document.getElementById('inp1');
document.getElementById('btn1').onclick = btn1;
	function btn1 () {
		var inp1 = document.getElementById('inp1').value;
		out1.innerHTML = inp1.length;
	}


// Task 2

// var city = {
//   "c1" : {
//       "id": 707860,

// var city = {
//    'pict':{
//    'img':'1.png',
//    'img':'2.png',
//    'img':'3.png'

   // '1.png',
   // '2.png',
   // '3.png'
// }};
// var div = document.getElementById('out');
// var out = '';

// for (var key in city) {
//   out +=`<p><img src="images/${city.img}"></p>`;
// }
//   out +='<p><img src="images/${city.img}"></p>';
// }
// div.innerHTML += '<img src="'+goods.img+'">';
// div.innerHTML += `<img src="${goods.img}">`;
// div.innerHTML = out;



var arr2 = ['1', '2', '3']
var c2 = document.getElementById('c2');
document.getElementById('btn2').onclick = btn2;
	function btn2 () {
		for (i = 0; i<arr2.length; i++) {
			out2.innerHTML += '<img src="img/' + arr2[i] + '.png">';
// div.innerHTML += '<img src="'+goods.img+'">'; старый вариант
// div.innerHTML += `<img src="${goods.img}">`; новый
		}
	}


// Task 3


var out3 = document.getElementById('out3');
document.getElementById('btn3').onclick = btn3;
	function btn3 () {
		var inp3 = document.getElementById('inp3').value;
		
		if (inp3.indexOf('https://') == 0) {
			// Ищет подстроку с начала массива
			// и находит в самом начале, то есть на 0 месте
			out3.innerHTML = inp3.slice(8);
		}

		if(inp3.indexOf('http://') == 0) {
			out3.innerHTML = inp3.slice(7);
		}
	}

// Task 4


var out4 = document.getElementById('out4');
document.getElementById('btn4').onclick = btn4;
	function btn4 () {
		var inp4 = document.getElementById('inp4').value;

		 if (inp4.indexOf('https://www.') == 0) {
			out4.innerHTML = inp4.slice(12);
		}

		else if (inp4.indexOf('http://www.') == 0) {
			out4.innerHTML = inp4.slice(11);
		}
		else if (inp4.indexOf('https://') == 0) {
			out4.innerHTML = inp4.slice(8);
		}

		else if(inp4.indexOf('http://') == 0) {
			out4.innerHTML = inp4.slice(7);
		}

		else {
			out4.innerHTML = inp4;
		}
	}


// Task 5
var result = document.getElementById('result');

document.getElementById('btn5').onclick = btn5;
	function btn5 () {
		var name = document.getElementById('name').value;
		var surname = document.getElementById('surname').value;
		var mail = document.getElementById('mail').value;
		var password = document.getElementById('password').value;

		// Синтаксис
		// str.replace(regexp|substr, newSubStr|function[, flags])
		// \s - пробел
		// флаг g - глобальная замена
		// Спасиб ОГРОМНОЕ!!! Я долго думал,почему replace заменял не все строки,
		// но когда поставил с new RegExp("тест",'g') 
		// всё пофурчало!!! СПС!!!
		name = name.replace(/\s/g, '');
		surname = surname.replace(/\s/g, '');
		mail = mail.replace(/\s/g, '');
		password = password.replace(/\s/g, '');
		if ( (password.length > 4) && (mail.indexOf('@') != -1) ) {
			result.innerHTML = 'Добро пожаловать';
		}
		else {
			result.innerHTML = 'Ошибка';
		}

		console.log(name);
	}




// Task 6
var inp6 = document.getElementById('inp6');
document.getElementById('btn6').onclick = btn6;
	function btn6 () {
		var inp6 = document.getElementById('inp6').value;
		out6.innerHTML += inp6.charCodeAt();
	}