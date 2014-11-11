var _effect = {
    new: function (options) {
        var defaults = {
            attribute: null,
            amount: 0,
            isPercent: false
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};