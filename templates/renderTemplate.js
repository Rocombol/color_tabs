  function renderTemplate(tpl, valueHash) {
    var tplNew = '',
        str = tpl;
	
        for (var key in valueHash) {
            str = str.replace(key, valueHash[key]);
        }

        tplNew += str

    return tplNew;
}