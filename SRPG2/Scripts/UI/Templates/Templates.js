var _templates = {
    game: {
        addPlayer: function (player) {
            var jqTemplate = $('#templates .game .player').clone();
            jqTemplate.attr('data-id', player.id);
            jqTemplate.find('.name').text(player.name);
            jqTemplate.appendTo($('#page-game .list-players'));

            jqTemplate.find('.btn-add-character').on('click', function () {

            });
        }
    }
};