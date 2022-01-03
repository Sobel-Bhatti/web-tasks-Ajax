$( function(){
    loadrecipes();
});
function loadrecipes()
{
    $.ajax({
        URL="https://usman-recipes.herokuapp.com/api/recipes",
        method:GET,
        success:function(response)
        {
            var recipies=$("#result");
            recipies.empty();
            for (let i = 0; i < response.length; i++) {
                rec= response[i];
                recipies.append("<div><h4>"+rec.title+"</h4></div>");
            }
           

        }
    })
}