var _server = {
    game: {
        create: function () {
            var response = {
                success: true,
                game: {
                    id: 0
                }
            }
            var newGame = _game.new(
                {
                    id: response.game.id
                }
            );
            _game.startGame(newGame);
        }
    }
};