/**
 * Created by nannan on 16-4-29.
 */
define(function(require, exports, module) {
    require('jquery');
    exports.doSomething = function() {
        $(function() {
            $(".learn-card a").each(function(index) {
                var aNode = $(this);
                aNode.hover(
                    function() {
                        $('.learn-card a .greenbtn2' + index).css({
                            "background": "#35b558",
                            "color": "#f3fff6"
                        });
                    },
                    function() {
                        $('.learn-card a .greenbtn2' + index).css({
                            "background": "#f3fff6",
                            "color": "#35b558"
                        });
                    });

            });
        });
    }
})
