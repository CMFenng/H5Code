window.onload = function () {
	var arr =  [65, 83, 68, 70, 71, 72, 74, 75,76]
	var divs = document.querySelectorAll('.mainKey')
	var audio = document.querySelector('audio')
	var lis = document.querySelectorAll('li')
	var word = document.querySelector('#word')
	var temp = null;

	for (var i = 0; i < divs.length; i++) {
		divs[i].onmousedown = (function (x) {
			return function () {
				audio.src = 'music/' + (x+1) + '.ogg'
				audio.play();
				this.style.boxShadow = '10px 10px 10px pink';
			}
		})(i);
		
		divs[i].onmouseup = function () {
			this.style.boxShadow = "5px 5px 5px black";
		};
		
		
		
	}	
	document.onkeydown = function (e) {
		var e = window.event || e;
		for (var i = 0; i<arr.length;i++) {
			if(e.keyCode == arr[i]) {
				audio.src = 'music/' + (i+1) + '.ogg'
				audio.play();
				divs[i].style.boxShadow = '10px 10px 10px pink';
			}
		}
	}
	document.onkeyup = function (e) {
		var e = window.event || e;
		for (var i = 0; i<arr.length;i++) {
			divs[i].style.boxShadow = "5px 5px 5px black";
		}
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick = (function (x) {

			return function () {
				if(temp){	
					word.removeChild(temp)		
				}
				var img = document.createElement('img');
				img.src = 'img/' + (x+1) + '.png';
				temp = img;
				word.appendChild(img);
			}
		})(i);
	}
}