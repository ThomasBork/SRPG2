var _battle = {
    new: function (options) {
        var defaults = {
            currentTick: 0,
            players: [],
            characterTypes: [],
            nextActions: []
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    },
    addPlayer: function (battle, player) {
        battle.players.push(player);
    },
    addCharacterType: function (battle, characterType) {
        battle.characterTypes.push(characterType);
    }
};