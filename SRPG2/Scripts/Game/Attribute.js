var _attribute = {
    new: function (options) {
        var defaults = {
            name: '',
            shortName: ''
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};