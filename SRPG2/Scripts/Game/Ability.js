var _ability = {
    new: function (options) {
        var defaults = {
            name: '',
            isSingleTarget: false,
            description: '',
            effectsAllies: false,
            effectsEnemies: false,
            mpCost: 0,
            hpCost: 0
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};