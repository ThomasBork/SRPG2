var _character = {
    new: function (options) {
        var defaults = {
            name: '',
            abilities: [],
            hp: null,
            mp: 0,
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