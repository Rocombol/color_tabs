function ChangeColorView (){
	
	this.changeColor=function (){
		var target = event.target,
			divchangecolor = document.getElementById('colorarea');

			if (target.innerHTML == 'blue') {
				divchangecolor.style.backgroundColor = 'blue'
			} else {
				changeColorRedBlue();
			}
		
		function changeColorRedBlue (){
			
			if(target.innerHTML == 'red'){
				divchangecolor.style.backgroundColor = 'red'
			}else{
				divchangecolor.style.backgroundColor = 'green'
			}
			
		};
		
	};

	return this;
}