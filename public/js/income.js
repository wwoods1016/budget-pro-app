// JS and JQuery for the income of an individual household will go within the function below.
$(document).ready(() => {
    $("income_submit_button").on("click", function (event) {
        event.preventDefault();
        var income;

        var newIncome = {
            source: $("#income-source").val().trim(),
            category: $("#income-category").val().trim(),
            amount: $("#income-amount").val().trim(),
            date: $("#income-date").val().trim(),
            description: $("income-description").val.trim()
        };
        console.log(newIncome);


        // Adding event listeners for deleting, editing, and adding income
    

    });
});
