var _player = {
    new: function (options) {
        var defaults = {
            name: '',
            isHost: false,
            isCurrentPlayer: false
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    }
};