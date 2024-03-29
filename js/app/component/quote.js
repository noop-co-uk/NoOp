define([
    "jquery",
    "underscore",
    "util/cache",
    "util/logger",
    "component/window"
], function(
    $,
    _,
    cache,
    logger,
    window
) {
    var self = {
        config: {
            debug: false,
            template: "templates/component/quote.html",
            icon: "fa-solid fa-quote-right",
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
            window.render($parent, {
                icon: self.config.icon,
                title: self.config.title
            }, function($content) {
                cache.get(self.config.template, function(data) {
                    var template = _.template(data);
                    $content.html(template({
                        quote: self.config.quote,
                        author: self.config.author,
                        citation: self.config.citation
                    }));
                });
            });
        }
    }).__init();
});
