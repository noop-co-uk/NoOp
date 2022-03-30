define([
    "jquery",
    "underscore",
    "util/cache",
    "util/logger",
    "game/snake"
], function(
    $,
    _,
    cache,
    logger,
    snake
) {
    var self = {
        config: {
            debug: false,
            display_name: "Games",
            fragment: "games",
            template: "templates/page/games.html",
            snake_selector: "#snake"
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("games :: __init");
            return self;
        },
        get_display_name: function() {
            self.logger.log("games :: get_display_name");
            return self.config.display_name;
        },
        get_fragment: function() {
            self.logger.log("games :: get_fragment");
            return self.config.fragment;
        },
        render: function($parent) {
            self.logger.log("games :: render[$parent == " + ($parent ? "{...}" : null) + "]");
            cache.get(self.config.template, function(data) {
                var template = _.template(data);
                $parent.html(template({
                    //
                }));
                snake.render($(self.config.snake_selector));
            })
        }
    }).__init();
});
