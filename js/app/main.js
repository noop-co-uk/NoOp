define(["jquery", "util/logger", "component/quote"], function($, logger, quote) {
   var self = {
       config: {
           debug: true,
           body_selector: "#body"
       },
       logger
   };
   return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("main :: __init");
            return self;
        },
        start: function() {
            self.logger.log("main :: start");
            var $body = $(self.config.body_selector);
            quote.render($body);
        }
   }).__init();
});
