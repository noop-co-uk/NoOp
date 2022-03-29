define([
    "jquery",
    "underscore",
    "util/cache",
    "util/listener",
    "util/logger",
    "util/url",
    "config/pages"
], function(
    $,
    _,
    cache,
    listener,
    logger,
    url,
    pages
) {
    var self = {
        config: {
            debug: false,
            template: "templates/component/navbar.html"
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("navbar :: __init");
            return self;
        },
        render: function($parent) {
            self.logger.log("navbar :: render[$parent == " + ($parent ? "{...}" : null) + "]");
            var render = function() {
                cache.get(self.config.template, function(data) {
                    var url_fragment = url.get_fragment();
                    self.logger.log("navbar :: render :: url_fragment == " + url_fragment);
                    var template = _.template(data);
                    $parent.html(template({
                        pages: pages.get_navbar_pages().map(page => {
                            return {
                                display_name: page.get_display_name(),
                                fragment: page.get_fragment(),
                                active: page.get_fragment() === url_fragment
                            };
                        })
                    }));
                });
            };
            listener.register_on_hash_change(render);
            render();
        }
    }).__init();
});
