// javascript used to handle the data additions, updates and deletions when users interact with the view. 

$(function () {
    $(".create-form").on("submit",function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("added new burger");
            location.reload();
        })
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();
        
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        })
    });

    $(".deleteburger").on("click", function(event){
        event.preventDefault();
        
        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function() {
            console.log("Burger deleted");
            location.reload();
        })
    });

});