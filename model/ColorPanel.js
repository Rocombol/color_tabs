function ColorPanel (title, firstColor, secondColor, thirdColor) {
    this.title = title;
    this.firstColor = firstColor;
    this.secondColor = secondColor;
    this.thirdColor = thirdColor;

    this.colorPanelHash = function () {
        return {
            title: this.title,
            firstColor: this.firstColor,
            secondColor: this.secondColor,
            thirdColor: this.thirdColor
        };
    };
}
