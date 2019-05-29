// JS and JQuery for the income of an individual household will go within the function below.
$(document).ready(() => {
    $("income_submit_button").on("click", function (event) {
        event.preventDefault();
        var income;

        var newIncome = {
            IEtype: "Income",
            Source: $("#income-source").val().trim(),
            Category: $("#income-category").val().trim(),
            Amount: $("#income-amount").val().trim(),
            Date: $("#income-date").val().trim(),
            Description: $("#income-description").val().trim(),
        };
        console.log(newIncome);


        // Adding event listeners for deleting, editing, and adding income
    

    });
});
