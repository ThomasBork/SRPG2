var _test = {
    getRandomCharacter: function () {
        var returnObject = _character.new({
            name: _test.getRandomString(8),
            baseHp: _test.getRandomNumber(100, 200),
            hpPerLevel: _test.getRandomNumber(100, 200) / 10,
            baseMp: _test.getRandomNumber(100, 200),
            mpPerLevel: _test.getRandomNumber(100, 200) / 10,
            level: _test.getRandomNumber(8, 14)
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