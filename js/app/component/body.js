define([
    "jquery",
    "util/listener",
    "util/logger",
    "util/url",
    "config/pages"
], function(
    $,
    listener,
    logger,
    url,
    pages
) {
    var self = {
        config: {
            debug: false
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("body :: __init");
            return self;
        },
        render: function($parent) {
            self.logger.log("body :: render[$parent == " + ($parent ? "{...}" : null) + "]");
            var render = function() {
                var url_fragment = url.get_fragment();
                self.logger.log("body :: render :: url_fragment == " + url_fragment);
                pages.find_page(url_fragment, function(page) {
                    page.render($parent);
                });
            };
            listener.register_on_hash_change(render);
            render();
        }
    }).__init();
});
