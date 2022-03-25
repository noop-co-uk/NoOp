define(["jquery", "underscore", "util/logger", "util/cache"], function($, _, logger, cache) {
    var self = {
        config: {
            //debug: true,
            template: "templates/quote.html",
            title: "Quote",
            quote: "NoOp, for no operation, is a computer science for something that does nothing.",
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
