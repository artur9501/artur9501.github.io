//$(function () {
//
//    $('#btn').click(function () {
//
//        $.ajax({
//            url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
//            dataType: "json",
//
//            success: function (data) {
//                $('#onload').html(" UserID:  " + data.userId + " UserName:  " + data.userName + " UserURL:  " + data.userURL);
//            },
//        })
//
//    })
//
//})

$(function () {

    $('#btn').click(function () {

        $.getJSON("http:echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {
            $('#onload').html(" UserID:  " + data.userId + " UserName:  " + data.userName + " UserURL:  " + data.userURL);
        })
    });
});
