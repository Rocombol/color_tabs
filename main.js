'use strict';

var colorCounter = new ColorCounter(),
    colorView = new ColorView(),
    counterView = new CounterView(colorCounter),
    buttonView = new ButtonView(colorCounter);

document.addEventListener('DOMContentLoaded', createPalette, false);

function createPalette(){
    buttonView.renderButtons();
    counterView.renderCounters();

    colorCounter.on('change', colorView.renderColor);
    colorCounter.on('change', counterView.renderCounters);
}