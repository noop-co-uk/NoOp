define([
    "jquery",
    "underscore",
    "util/cache",
    "util/logger"
], function(
    $,
    _,
    cache,
    logger
) {
    var self = {
        config: {
            debug: false,
            template: "templates/component/quote.html",
            title: "Quote",
            quote: "NoOp, for no operation, is a computer science term for something that does nothing.",
            author: "NoOp",
            citation: "//no-op.co.uk"
        },
        logger
    };
    return $.extend(self, {
        __init: function() {
            self.logger = logger.get(self.config.debug);
            self.logger.log("quote :: __init");
            return self;
        },
        render: function($parent) {
            self.logger.log("quote :: render[$parent == " + ($parent ? "{...}" : null) + "]");
            cache.get(self.config.template, function(data) {
                var template = _.template(data);
                $parent.html(template({
                    title: self.config.title,
                    quote: self.config.quote,
                    author: self.config.author,
                    citation: self.config.citation
                }));
            });
        }
    }).__init();
});
