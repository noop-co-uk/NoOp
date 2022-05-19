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
            template: "templates/component/post.html",
            icon: "fa-solid fa-comment-dots",
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("post :: __init");
            return self;
        },
        render: function($parent, post) {
            self.logger.log("post :: render[$parent == " + ($parent ? "{...}" : null) + ", post == " + post + "]");
            window.render($parent, {
                icon: self.config.icon,
                title: post.title
            }, function($content) {
                cache.get(self.config.template, function(data) {
                    var template = _.template(data);
                    $content.html(template({
                        body: post.body
                    }));
                });
            });
        }
    }).__init();
});
