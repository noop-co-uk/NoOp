define([
    "jquery",
    "util/logger",
    "config/pages"
], function(
    $,
    logger,
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
            self.logger.log("url :: __init");
            return self;
        },
        get_fragment: function() {
            self.logger.log("url :: get_fragment");
            var fragment;
            if (window.location.hash) {
                fragment = window.location.hash.substring(1);
            } else {
                fragment = pages.get_default_page().get_fragment();
            }
            return fragment;
        }
    }).__init();
});
