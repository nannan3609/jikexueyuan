/**
 * Created by nannan on 16-4-28.
 */
define(function(require, exports, module) {
    require('jquery');
    $(function() {
        $('#tab li').each(function(index) {
            var liNode = $(this);
            liNode.hover(function() {
                $('#tab .on').removeClass("on");
                liNode.addClass("on");
                if (index == 0) {
                    $('#zero').show();
                    $('#one').hide();
                    $('#two').hide();
                    $('#three').hide();
                    $('#four').hide();
                    $('#five').hide();
                } else if (index == 1) {
                    $('#zero').hide();
                    $('#one').show();
                    $('#two').hide();
                    $('#three').hide();
                    $('#four').hide();
                    $('#five').hide();
                } else if (index == 2) {
                    $('#zero').hide();
                    $('#one').hide();
                    $('#two').show();
                    $('#three').hide();
                    $('#four').hide();
                    $('#five').hide();
                } else if (index == 3) {
                    $('#zero').hide();
                    $('#one').hide();
                    $('#two').hide();
                    $('#three').show();
                    $('#four').hide();
                    $('#five').hide();
                } else if (index == 4) {
                    $('#zero').hide();
                    $('#one').hide();
                    $('#two').hide();
                    $('#three').hide();
                    $('#four').show();
                    $('#five').hide();
                } else if (index == 5) {
                    $('#zero').hide();
                    $('#one').hide();
                    $('#two').hide();
                    $('#three').hide();
                    $('#four').hide();
                    $('#five').show();
                }
            }, function() {});
        });
        //$('.ullist li').hover(
        //
        //);
    })
})
