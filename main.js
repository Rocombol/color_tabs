'use strict';
document.addEventListener ('DOMContentLoaded', function () {
    var colorPanel = new ColorPanel('ColorPanel', 'blue', 'red', 'green'),
        colorPanelView = new ColorPanelView();

    colorPanelView.createPanel(colorPanel.colorPanelHash());

}, false);