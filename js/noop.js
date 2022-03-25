requirejs.config({
    "baseUrl": "js/app",
    "paths": {
        "jquery": "//code.jquery.com/jquery-3.6.0.min",
        "underscore": "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.2/underscore-min"
    }
});

requirejs(["main"], function(main) {
    main.start();
});
