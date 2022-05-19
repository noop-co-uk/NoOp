define([
    "jquery",
    "util/logger",
    "page/home",
    "page/news",
    "page/games"
], function(
    $,
    logger,
    home,
    news,
    games
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
            self.logger.log("pages :: __init");
            return self;
        },
        get_default_page: function() {
            self.logger.log("pages :: get_default_page");
            return home;
        },
        get_navbar_pages: function() {
            self.logger.log("pages :: get_navbar_pages");
            return [
                home,
                news,
                games
            ];
        },
        get_all_pages: function() {
            self.logger.log("pages :: get_all_pages");
            return [
                home,
                news,
                games
            ];
        },
        find_page: function(fragment, callback) {
            self.logger.log("pages :: find_page[fragment == " + fragment + ", callback == " + (callback ? "(...)" : null) + "]");
            self.get_all_pages().forEach(function(page) {
                if (page.get_fragment() === fragment) {
                    callback(page);
                }
            });
        }
    }).__init();
});
