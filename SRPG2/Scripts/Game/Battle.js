var _battle = {
    new: function (options) {
        var defaults = {
            currentTick: 0,
            players: [],
            characterTypes: [],
            nextActions: [],
            currentPlayer: null
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    },
    addPlayer: function (battle, player) {
        battle.players.push(player);
    },
    addCharacterType: function (battle, characterType) {
        battle.characterTypes.push(characterType);
    },
    setCurrentPlayer: function (battle, player) {
        for (var index in battle.players) {
            battle.players[index].isCurrentPlayer = false;
        }
        battle.currentPlayer = player;
        player.isCurrentPlayer = true;
    }
};