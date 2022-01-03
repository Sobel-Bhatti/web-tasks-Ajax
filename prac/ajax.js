$(function(){
    $("#btn").click(function(){
        $.get("ajax.txt",function(res){
            $("#result").empty();
            $("#result").append(res)
        });

    });
});



