var _game = {
    new: function (options) {
        var defaults = {
            id: null,
            players: [],
            characters: [],
            host: null,
            currentBattle: null
        };
        var returnObject = $.extend({}, defaults, options);
        return returnObject;
    },
    createGame: function () {
        _server.game.create();
    },
    startGame: function (game) {
        currentGame = game;
    },
    addPlayer: function (game, player) {
        game.players.push(player);
    },
    addCharacter: function (game, character) {
        game.characters.push(character);
    },
    setHost: function (game, player) {
        for (var index in game.players) {
            game.players[index].isHost = false;
        }
        game.host = player;
        player.isHost = true;
    }
};