$(function(){
//execute your event bindings here 
$("#btn").click(btnclicked);
$("#list").on("click","li", remove);
});

function btnclicked()
{
    var newtodo=$("#input").val();
    if(!newtodo)
    {
        $("#input").addClass("error");
        return;
    }
    $("#input").removeClass("error");
   $("#list").append("<li>" +newtodo+"</li>");
  $("#input").val("");


}
function remove()
{
    $(this).remove();
}
$("list").addClass("stu");
