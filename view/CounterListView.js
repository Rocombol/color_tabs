function CounterListView  () {
	
    this.createCountPanel = function (hashData){
        var contentElement = document.getElementById('countarea'),
			countExtrTpl='';
		
		countExtrTpl+=renderTemplate(counterTpl, hashData);
		
        contentElement.innerHTML = countExtrTpl;

    };
	
	this.runCounter = function (){		
			var counter = makeCounter(),
				target = event.target,
				spanContainElement = document.querySelectorAll('h3');
		
		[].forEach.call(spanContainElement, function (clickItem){
			if (clickItem.firstChild.textContent == target.innerText){
				clickItem.lastChild.innerHTML = counter()+Number(clickItem.lastChild.innerHTML);
			};
		});
					
    	function makeCounter () {
			var currentCount = 0;
			
			return function () { 
				return currentCount+=1;
			};
    	};			   	
	};
	
	return this;
  };