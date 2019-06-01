// JS and JQuery for the main dashboard page will go within the function below.
$(document).ready(() => {
    Chart.defaults.global.elements.line.fill = false;
    Chart.defaults.global.defaultFontSize = 14;

    //default values
    var durationTxt = "current month";
    var queryURL = "/api/spending/currentMonth";
    var chartOption = "";

    //When page loads get query data from server and display it dynamically
    runQuerySpending(queryURL);

    $("input[name='chart-type']").on("click", function () {
        chartOption = ($(this).val());
        if ($(this).val() == "spending") {
            durationTxt = "current month";
            queryURL = "/api/spending/currentMonth";
            chartOption = "spending";
            runQuerySpending(queryURL);
        } else {
            durationTxt = "year to date";
            queryURL = "/api/incmExp/ytd";
            chartOption = "incmExp"
            runQueryIncmExp(queryURL);
        }
    });

    $("#btnCurrent").click(function () {
        durationTxt = "current month";
        if(chartOption == "spending"){
            queryURL = "/api/spending/currentMonth";
            runQuerySpending(queryURL);
        }else if(chartOption = "incmExp"){
            queryURL = "/api/incmExp/currentMonth";
            runQueryIncmExp(queryURL);
        }
    });

    $("#btnLast").click(function () {
        durationTxt = "last month";
        if(chartOption == "spending"){
            queryURL = "/api/spending/last";
            runQuerySpending(queryURL);
        }else if(chartOption = "incmExp"){
            queryURL = "/api/incmExp/last";
            runQueryIncmExp(queryURL);
        }
    });

    $("#btnLastThree").click(function () {
        durationTxt = "last three months";
        if(chartOption == "spending"){
            queryURL = "/api/spending/lastThree";
            runQuerySpending(queryURL);
        }else if(chartOption = "incmExp"){
            queryURL = "/api/incmExp/lastThree";
            runQueryIncmExp(queryURL);
        }
    });

    $("#btnYtd").click(function () {
        durationTxt = "year to date";
        if(chartOption == "spending"){
            queryURL = "/api/spending/ytd";
            runQuerySpending(queryURL);
        }else if(chartOption = "incmExp"){
            queryURL = "/api/incmExp/ytd";
            runQueryIncmExp(queryURL);
        }
    });

    //AJAX for rendering Income vs Expense chart
    function runQueryIncmExp(queryURL) {
        $.ajax(
            {
                url: queryURL,
                method: "GET"
            }
        ).then(function (tableData) {

            let income = [];
            let expense = [];
            let months = [];

            //loop thru tableData and populate the arrays above
            for (var i = 0; i < tableData.length; i++) {
                income.push(tableData[i].income);
                expense.push(tableData[i].expense);
                months.push(tableData[i].month);
            }
            renderIncmExpChart(income, expense, months);
        });
    }

    //AJAX for rendering the Spending Summary chart
    function runQuerySpending(queryURL) {
        $.ajax(
            {
                url: queryURL,
                method: "GET"
            }
        ).then(function (tableData) {

            let totalExpenditure = [];
            let chartLabels = [];

            //loop thru tableData and populate the arrays above
            for (var i = 0; i < tableData.length; i++) {
                totalExpenditure.push(tableData[i].amt);
                chartLabels.push(tableData[i].cat);
            }
            renderSpendingChart(totalExpenditure, chartLabels);
        });
    }

    //function for rendering the Spendings chart
    function renderSpendingChart(data, labels) {

        $(".chart-container-bar").hide();
        $(".chart-container-pie").show();

        var ctx = $("#pieChart");
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Total Expenditure",
                        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                        data: data
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Total expenditure (in Dollars) for the ' + durationTxt
                }
            }
        });
    }

    //function for rendering the Income vs Expense chart
    function renderIncmExpChart(income, expense, months) {

        $(".chart-container-pie").hide();
        $(".chart-container-bar").show();

        var ctx = document.getElementById("barChart");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [
                    {
                        data: income,
                        label: "Income",
                        backgroundColor: "#3e95cd",
                        fill: false
                    },
                    {
                        data: expense,
                        label: "Expense",
                        backgroundColor: "#8e5ea2",
                        fill: false
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Income vs expense " + durationTxt
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function (value, index, values) {
                                return float2dollar(value);
                            }
                        }
                    }]
                }
            }
        });
    }

    //function to format a float into a currency string: 1000 -> U$ 1,000.00
    function float2dollar(value) {
        return "U$ " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
});     //End of document.ready()
