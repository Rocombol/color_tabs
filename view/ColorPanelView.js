function ColorPanelView () {

    this.createPanel = function (hashData) {
        var contentElement = document.getElementById('buttons'),
            buttonExtrTpl='',
			counterList,
			counterListView;

		buttonExtrTpl+=renderTemplate(colorPanelTpl, hashData);
			
        contentElement.innerHTML = buttonExtrTpl;
		
		addButtonListeners();
		
		counterList = new CounterList('CountPanel', 'blue', 'red', 'green');

	
		counterListView = new CounterListView();
		
		counterListView.createCountPanel(counterList.counterListHash());
		
		
        function addButtonListeners () {
			var buttonsColletion = document.body.querySelectorAll('.changeColors'),
				сhangeColorView;
			
            [].forEach.call(buttonsColletion, function (button) {
                button.addEventListener('click', function () {
					сhangeColorView=new ChangeColorView();
					
					сhangeColorView.changeColor();

                }, false);
				
                button.addEventListener('click', function () {				
					
					counterListView.runCounter();

                }, false);				

            });
        };										   		
    };    	
	return this;
}