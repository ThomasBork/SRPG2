var _player = {
    new: function (options) {
        var defaults = {
            id: null,
            name: '',
            isHost: false
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};