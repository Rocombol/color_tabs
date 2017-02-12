function CounterList (title, firstclick, secondclick, thirdclick) {
    this.title = title;
    this.firstclick = firstclick;
    this.secondclick = secondclick;
    this.thirdclick = thirdclick;
    
	this.counterListHash = function () {
        return {
            title: this.title,
            firstclick: this.firstclick,
            secondclick: this.secondclick,
            thirdclick: this.thirdclick 
        };
    };	
}