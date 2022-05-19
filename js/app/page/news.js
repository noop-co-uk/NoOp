define([
    "jquery",
    "underscore",
    "util/cache",
    "util/logger",
    "component/post"
], function(
    $,
    _,
    cache,
    logger,
    post
) {
    var self = {
        config: {
            debug: false,
            display_name: "News",
            fragment: "news",
            template: "templates/page/news.html",
            data: "data/page/news.json",
            posts_selector: "#posts"
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("news :: __init");
            return self;
        },
        get_display_name: function() {
            self.logger.log("news :: get_display_name");
            return self.config.display_name;
        },
        get_fragment: function() {
            self.logger.log("news :: get_fragment");
            return self.config.fragment;
        },
        render: function($parent) {
            self.logger.log("news :: render[$parent == " + ($parent ? "{...}" : null) + "]");
            cache.get(self.config.template, function(data) {
                var template = _.template(data);
                $parent.html(template({
                    //
                }));
                cache.get(self.config.data, function(data) {
                    data.posts.forEach(function(post_location) {
                        cache.get(post_location, function(data) {
                            $(self.config.posts_selector).append($("<div>", {
                                id: data.id,
                                class: "mb-2"
                            }));
                            post.render($("#" + data.id), data);
                        });
                    });
                });
            });
        }
    }).__init();
});
