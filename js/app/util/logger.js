define(["jquery"], function($) {
    var self = {
        config: {
            debug: false
        },
        logger: null
    };
    return $.extend(self, {
        __init: function() {
            self.logger = self.get(self.config.debug);
            self.logger.log("logger :: __init");
            return self;
        },
        get: function(debug) {
            return {
                log: function(message) {
                    if (debug) {
                        console.log(message);
                    }
                }
            };
        }
    }).__init();
});
