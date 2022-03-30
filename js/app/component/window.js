define([
    "jquery",
    "underscore",
    "util/cache",
    "util/logger"
], function(
    $,
    _,
    cache,
    logger
) {
    var self = {
        config: {
            debug: false,
            template: "templates/component/window.html",
            content_selector: ".window-content"
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("window :: __init");
            return self;
        },
        render: function($parent, params, callback) {
            self.logger.log("window :: render[$parent == " + ($parent ? "{...}" : null) + ", params == " + params + ", callback == " + (callback ? "(...)" : null) + "]");
            cache.get(self.config.template, function(data) {
                var template = _.template(data);
                $parent.html(template({
                    icon: params.icon,
                    title: params.title
                }));
                callback($parent.find(self.config.content_selector));
            });
        }
    }).__init();
});
