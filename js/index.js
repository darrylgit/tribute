$(document).ready(function () {
textfit();
$(window).on('resize', textfit);

function textfit() {
    $('.text-fitter').css('font-size', 'medium');
    var w1 = $('.container').width()-10;
    var w2 = $('.text-fitter').width();
    var wRatio = Math.round(w1 / w2 * 10) / 10;

    var h1 = $('.container').height()-10;
    var h2 = $('.text-fitter').height();
    var hRatio = Math.round(h1 / h2 * 10) / 10;

    var constraint = Math.min(wRatio, hRatio);

    $('.text-fitter').css('font-size', constraint + 'em');
};
})