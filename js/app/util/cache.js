define(["jquery", "util/logger", "util/http"], function($, logger, http) {
    var self = {
        config: {
            debug: true
        },
        cache: {}
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("cache :: __init");
            return self;
        },
        get: function(path, callback) {
            self.logger.log("cache :: get[path == " + path + ", callback == " + (callback ? "(...)" : null) + "]");
            if (self.cache[path]) {
                callback(self.cache[path]);
            } else {
                http.get(path, function(data) {
                    self.cache[path] = data;
                    callback(data);
                });
            }
        }
    }).__init();
});
