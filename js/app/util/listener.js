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
        logger,
        on_hash_change_callbacks: []
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("listener :: __init");
            window.onhashchange = function() {
                self.on_hash_change_callbacks.forEach(function(callback) {
                    if (callback) {
                        callback();
                    }
                });
            };
            return self;
        },
        register_on_hash_change: function(callback) {
            self.logger.log("listener :: register_on_hash_change[callback == " + (callback ? "(...)" : null) + "]");
            self.on_hash_change_callbacks.push(callback);
        }
    }).__init();
});
