/**
 * Created by nannan on 16-4-29.
 */
define(function(require, exports, module) {
    require('jquery');
    exports.doSomething = function() {
        $(function() {
            var i = 0;
            var clone = $(".middle .slider li").first().clone();
            //克隆
            $(".middle .slider").append(clone);
            //加入克隆
            var size = $('.middle .slider li').size();
            $(".num li").first().addClass("do");

            //鼠标划入长线
            $(".num li").hover(function() {
                var index = $(this).index();
                i = index;
                $('.middle .slider').stop().animate({ left: -index * 560 }, 500);
                $(this).addClass("do").siblings().removeClass("do");
            });
            //向左轮播
            function moveL() {
                i--;
                if (i == -1) {
                    $('.middle .slider').css({ left: -(size - 1) * 560 });
                    i = size - 2;
                };
                $('.middle .slider').stop().animate({ left: -i * 560 }, 500);
            }
            //向右轮播
            function moveR() {
                i++;
                if (i == size) {
                    $('.middle .slider').css({ left: 0 });
                    i = 1;
                };
                $('.middle .slider').stop().animate({ left: -i * 560 }, 500);
                if (i == size - 1) {
                    $(".num li").eq(0).addClass("do").siblings().removeClass("do");
                } else {
                    $(".num li").eq(i).addClass("do").siblings().removeClass("do");
                }
            }
            //自动轮播
            var t = setInterval(moveR, 2500);
            //鼠标划入时停止自动轮播
            $('.middle').hover(function() {
                clearInterval(t);
            }, function() {
                t = setInterval(moveR, 2500);
            });
            //向左按钮
            $('.btn_l').click(function() {
                moveL();
            });
            //向右按钮
            $('.btn_r').click(function() {
                moveR();
            });
        })
    };
})
