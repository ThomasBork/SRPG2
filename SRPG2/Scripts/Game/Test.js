var _test = {
    getRandomCharacter: function () {
        var returnObject = _character.new({
            name: _test.getRandomString(8)
        });
        return returnObject;
    },
    getRandomString: function(length){    
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < length; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },
    getRandomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};