var _character = {
    new: function (options) {
        var defaults = {
            name: '',
            abilities: [],
            baseHp: null,
            hpPerLevel: 0,
            baseMp: 0,
            mpPerLevel: 0,
            characterAttributes: [],
            level: null,
            experience: 0,
            items: [],
            player: null
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};