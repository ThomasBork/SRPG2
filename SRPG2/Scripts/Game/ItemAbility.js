var _itemAbility = {
    new: function (options) {
        var defaults = {
            description: '',
            itemAttribute: null,
            abilityType: null
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};