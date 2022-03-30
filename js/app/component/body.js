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
            template: "templates/component/body.html",
            page_selector: "#page"
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
                cache.get(self.config.template, function(data) {
                    var url_fragment = url.get_fragment();
                    self.logger.log("body :: render :: url_fragment == " + url_fragment);
                    var template = _.template(data);
                    $parent.html(template({
                        //
                    }));
                    pages.find_page(url_fragment, function(page) {
                        page.render($(self.config.page_selector));
                    });
                });
            };
            listener.register_on_hash_change(render);
            render();
        }
    }).__init();
});
