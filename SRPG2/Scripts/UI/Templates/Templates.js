var _templates = {
    game: {
        addPlayer: function (player) {
            var jqTemplate = $('#templates .game .player').clone();
            jqTemplate.attr('data-id', player.id);
            jqTemplate.find('.name').text(player.name);
            jqTemplate.appendTo($('#page-game .list-players'));

            jqTemplate.find('.btn-add-character').on('click', function () {
                var newCharacter = _test.getRandomCharacter();
                var jqPlayerLine = $(this).closest('li.player');
                var playerId = jqPlayerLine.attr('data-id');
                var player = _game.getPlayerFromId(playerId);
                newCharacter.player = player;
                _templates.game.addCharacter(jqPlayerLine.find('.list-characters'), newCharacter);
            });
        },
        addCharacter: function (jqContainer, character) {
            var jqTemplate = $('#templates .game .character').clone();
            jqTemplate.attr('data-id', character.id);
            jqTemplate.find('.name').text(character.name);
            jqTemplate.appendTo(jqContainer);
        }
    }
};