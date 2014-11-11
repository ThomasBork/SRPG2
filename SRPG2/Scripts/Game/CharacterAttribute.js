var _characterAttribute = {
    new: function (options) {
        var defaults = {
            baseAmount: 0,
            amountPerLevel: 0,
            attribute: null
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};