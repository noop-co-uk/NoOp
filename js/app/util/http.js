define([
    "jquery",
    "util/logger"
], function(
    $,
    logger
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
            self.logger.log("http :: __init");
            return self;
        },
        get: function(path, callback) {
            self.logger.log("http :: get[path == " + path + ", callback == " +  (callback ? "(...)" : null) + "]");
            $.get(path, callback);
        }
    }).__init();
});
