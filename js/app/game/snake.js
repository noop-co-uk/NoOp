define([
    "jquery",
    "underscore",
    "util/cache",
    "util/logger",
    "component/window"
], function(
    $,
    _,
    cache,
    logger,
    window
) {
    var self = {
        config: {
            debug: false,
            template: "templates/game/snake.html",
            icon: "fa-solid fa-gamepad",
            title: "Snake"
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("snake :: __init");
            return self;
        },
        render: function($parent) {
            self.logger.log("snake :: render[$parent == " + ($parent ? "{...}" : null) + "]");
            window.render($parent, {
                icon: self.config.icon,
                title: self.config.title
            }, function($content) {
                cache.get(self.config.template, function(data) {
                    var template = _.template(data);
                    $content.html(template({
                        //
                    }));
                });
            });
        }
    }).__init();
});
