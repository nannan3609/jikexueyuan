/**
 * Created by nannan on 16-4-28.
 */
define(function(require, exports, module) {
    require('jquery');
    exports.doSomething = function() {
        $(function() {
            $("#mobile").hover(
                function() {
                    $("#mobile-list").show();
                },
                function() {
                    $("#mobile-list").hide();
                }
            );
            $("#web").hover(
                function() {
                    $("#web-list").show();
                },
                function() {
                    $("#web-list").hide();
                }
            );
            $("#dev").hover(
                function() {
                    $("#dev-list").show();
                },
                function() {
                    $("#dev-list").hide();
                }
            );
            $("#base").hover(
                function() {
                    $("#base-list").show();
                },
                function() {
                    $("#base-list").hide();
                }
            );
            $("#clouddata").hover(
                function() {
                    $("#clouddata-list").show();
                },
                function() {
                    $("#clouddata-list").hide();
                }
            );
            $("#intellegence").hover(
                function() {
                    $("#intellegence-list").show();
                },
                function() {
                    $("#intellegence-list").hide();
                }
            );
            $("#db").hover(
                function() {
                    $("#db-list").show();
                },
                function() {
                    $("#db-list").hide();
                }
            );
            $("#certificate").hover(
                function() {
                    $("#certificate-list").show();
                },
                function() {
                    $("#certificate-list").hide();
                }
            );
            $("#enterpriseit").hover(
                function() {
                    $("#enterpriseit-list").show();
                },
                function() {
                    $("#enterpriseit-list").hide();
                }
            );
            $("#design").hover(
                function() {
                    $("#design-list").show();
                },
                function() {
                    $("#design-list").hide();
                }
            );
            $("#navbox").hover(
                function() {
                    $(".list").show();

                },
                function() {
                    $(".list").hide();
                }
            );


        })
    }
})
