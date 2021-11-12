let num;

$(function(){
    $('#countUp').keyup(function(){
        $('#c1').text($(this).val().length);
    });
    $('#countDown').keyup(function(){
        //var val = $('#myform [name=my-number]').val();
        //var val = $('#myform [name=my-text]').val();
        //var val = Number(valText) || 0;
        //let num = parseInt(val, 10);
        var remain = 140 - $(this).val().length;

        $('#c2').text(remain);
        if (remain < 0) {
            $('#c2').css('color', 'red');
        } else {
            $('#c2').css('color', 'grey');
        }
    });
    /*$('#cnumber').keyup(function(){
        var val = $('#myform [name=my-number]').val();
        var val = Number(valText) || 0; 
        num = parseInt(val, 10);
        $('#c2').text(num);
    });*/
});