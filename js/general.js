$(function() {
    var lis = $(".box1 li"),
        currentHighlight = 0;
        N = 3;//interval in seconds
    setInterval(function() {
        currentHighlight = (currentHighlight + 1) % lis.length;
        lis.removeClass('active').eq(currentHighlight).addClass('active');
    }, N * 700);
});