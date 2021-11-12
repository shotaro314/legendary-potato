$(function(){
    $('#countUp').keyup(function(){
        $('#count1').text($(this).val().length);
    });
    $('#countDown').keyup(function(){
        var remain = 30 - $(this).val().length;

        $('#count2').text(remain);
        if (remain < 0) {
            $('#count2').css('color', 'red');
        } else {
            $('#count2').css('color', 'grey');
        }
    });
});