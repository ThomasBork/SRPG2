var _page = {
    initialize: function () {
        _page.home.initialize();
        _page.game.initialize();
    },
    home: {
        initialize: function () {
            $('#page-home #btn-new-game').on('click', function () {
                _page.game.navigateTo();
            });
            $('#page-home').addClass('current-page');
        },
        navigateTo: function () {

        }
    },
    game: {
        initialize: function () {
            $('#page-game #btn-add-player').on('click', function () {
                var id = prompt("Id:", "1");
                var name = prompt("Name:", "DenAnden");
                var newPlayer = _player.new({ id: id, name: name });
                _game.addPlayer(currentGame, newPlayer);
                _templates.game.addPlayer(newPlayer);
            });
            $('#page-game #btn-start-battle').on('click', function () {
            });
        },
        navigateTo: function () {
            $('.current-page').removeClass('current-page');
            $('#page-game').addClass('current-page');
            $('#page-game .list-players').empty();
            _game.createGame();
            _game.addPlayer(currentGame, playerLoggedIn);
            _templates.game.addPlayer(playerLoggedIn);
        }
    }
};