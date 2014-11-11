var _item = {
    new: function (options) {
        var defaults = {
            name: '',
            itemAbilities: [],
            type: null
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};