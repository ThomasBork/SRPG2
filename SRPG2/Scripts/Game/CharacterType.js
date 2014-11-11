var _characterType = {
    new: function (options) {
        var defaults = {
            character: null,
            damageTaken: 0,
            manaSpent: 0,
            effects: []
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};