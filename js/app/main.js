define([
    "jquery",
    "util/logger",
    "component/navbar",
    "component/body"
], function(
    $,
    logger,
    navbar,
    body
) {
   var self = {
       config: {
           debug: false,
           navbar_selector: "#navbar",
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
            navbar.render($(self.config.navbar_selector));
            body.render($(self.config.body_selector));
        }
   }).__init();
});
