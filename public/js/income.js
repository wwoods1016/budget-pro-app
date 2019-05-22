// JS and JQuery for the income of an individual household will go within the function below.

$(document).ready(function() {
    // incomeContainer holds all of our income entries
    var incomeContainer = $(".income-container");
                      
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleIncomeDelete);
    $(document).on("click", "button.edit", handleIncomeEdit);
    
    var Incomes;
  
    // This function grabs income entries from the database and updates the view
    function getIncome(IEtype) {
      var IEtypeString = IEtype || "";
      if (IEtypeString) {
        IEtypeString = "/IEtype/" + IEtypeString;
      }
      $.get("/api/incm_exp" + IEtypeString, function(data) {
        console.log("Incm_Exp: ", data);
        incm_exp = data;
        if (!incm_exp || !incm_exp.length) {
          displayEmpty();
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete Income entries
    function deleteIncome(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/incm_exp/" + id
      })
        .then(function() {
          getIncome(incomeIEtypeSelect.val());
        });
    }
  
    // Getting the initial list of Income entries
    getIncome();
    // InitializeRows handles appending all of our constructed income entries HTML inside
    // incomeContainer
    function initializeRows() {
      incomeContainer.empty();
      var incomeEntryToAdd = [];
      for (var i = 0; i < incm_exp.length; i++) {
        incm_expToAdd.push(createNewRow(incm_exp[i]));
      }
      incomeContainer.append(incm_expToAdd);
    }
  
    // This function constructs an income entrie's HTML
    function createNewRow(income) {
      var newIncomeCard = $("<div>");
      newIncomeCard.addClass("card");
      var newIncomeCardHeading = $("<div>");
      newIncomeCardHeading.addClass("card-header");
      var deleteBtn = $("<button>");
      deleteBtn.text("x");
      deleteBtn.addClass("delete btn btn-danger");
      var editBtn = $("<button>");
      editBtn.text("EDIT");
      editBtn.addClass("edit btn btn-default");
      var newIncomeTitle = $("<h2>");
      var newIncomeDate = $("<small>");
      var newIncomeincm_exp = $("<h5>");
      newIncomeincm_exp.text(Income.incm_exp);
      newIncomeincm_exp.css({
        float: "right",
        "font-weight": "700",
        "margin-top":
        "-15px"
      });
      var newIncomeCardBody = $("<div>");
      newIncomeCardBody.addClass("card-body");
      var newIncomeBody = $("<p>");
      newIncomeTitle.text(Income.title + " ");
      newIncomeBody.text(Income.body);
      var formattedDate = new Date(Income.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      newIncomeDate.text(formattedDate);
      newIncomeTitle.append(newIncomeDate);
      newIncomeCardHeading.append(deleteBtn);
      newIncomeCardHeading.append(editBtn);
      newIncomeCardHeading.append(newIncomeTitle);
      newIncomeCardHeading.append(newIncomeincm_exp);
      newIncomeCardBody.append(newIncomeBody);
      newIncomeCard.append(newIncomeCardHeading);
      newIncomeCard.append(newIncomeCardBody);
      newIncomeCard.data("Income", Income);
      return newIncomeCard;
    }
  
    // This function figures out which Income we want to delete and then calls
    // deleteIncome
    function handleIncomeDelete() {
      var currentIncome = $(this)
        .parent()
        .parent()
        .data("Income");
      deleteIncome(currentIncome.id);
    }
  
    // This function figures out which Income we want to edit and takes it to the
    // Appropriate url
    function handleIncomeEdit() {
      var currentIncome = $(this)
        .parent()
        .parent()
        .data("Income");
      window.location.href = "/cms?Income_id=" + currentIncome.id;
    }
  
    // This function displays a message when there are no Incomes
    function displayEmpty() {
      incomeContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No Incomes yet for this incm_exp, navigate <a href='/cms'>here</a> in order to create a new Income.");
      incomeContainer.append(messageH2);
    }
  
    // This function handles reloading new Incomes when the incm_exp changes
    function handleincm_expChange() {
      var newIncomeincm_exp = $(this).val();
      getIncomes(newIncomeincm_exp);
    }
  
  });
  
