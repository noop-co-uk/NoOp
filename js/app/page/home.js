define([
    "jquery",
    "underscore",
    "util/cache",
    "util/logger",
    "component/quote"
],
function(
    $,
    _,
    cache,
    logger,
    quote
) {
    var self = {
        config: {
            debug: false,
            display_name: "Home",
            fragment: "home",
            template: "templates/page/home.html",
            quote_selector: "#quote"
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("home :: __init");
            return self;
        },
        get_display_name: function() {
            self.logger.log("home :: get_display_name");
            return self.config.display_name;
        },
        get_fragment: function() {
            self.logger.log("home :: get_fragment");
            return self.config.fragment;
        },
        render: function($parent) {
            self.logger.log("home :: render[$parent == " + ($parent ? "{...}" : null) + "]");
            cache.get(self.config.template, function(data) {
                var template = _.template(data);
                $parent.html(template({
                    //
                }));
                quote.render($(self.config.quote_selector));
            });
        }
    }).__init();
});
