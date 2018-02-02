

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

for(let i=0; i<alphabet.length; i++){

	var div = document.createElement('DIV');
	var letters = document.createTextNode(alphabet[i])
	div.appendChild(letters);
	// div.style.width='40px';
	// div.style.height='40px';
	// div.style.border='2px solid';
	// div.style.margin='10px';
	div.style.display='inline-block';
	div.classList.add('letterBox');
	// letters.style.margin='5px';
	document.body.appendChild(div);
	var letterBoxes = document.getElementsByClassName('letterBox');
	letterBoxes[i].addEventListener('click', function(){
		showLetter(i)
	})

}

  // var buttons = function () {
  //   myButtons = document.getElementById('buttons');
  //   letters = document.createElement('ul');

  //   for (var i = 0; i < alphabet.length; i++) {
  //     letters.id = 'alphabet';
  //     list = document.createElement('li');
  //     list.id = 'letter';
  //     list.innerHTML = alphabet[i];
  //     check();
  //     myButtons.appendChild(letters);
  //     letters.appendChild(list);
  //   }
  // }

function showLetter(x){
	console.log(alphabet[x])
}

