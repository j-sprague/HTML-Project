//import jsonData from 'bikes.json'; 

$(document).ready(function() {
    // Initialize array that will contain bikes JSON data
    var bikes = [];
    // Initialize index values for the currently selected bike
    var bike1 = 0;
    var bike2 = 0;
    // Process data with ajax
    $.ajax({
        type: "get",
        url: "bikes.json",
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var dropdownHTML = "";
            for (var i = 0; i < data.bikes.length; i++) {
                bikes.push(data.bikes[i]);
                dropdownHTML += '<option value="' + i + '">' + bikes[i].name + "</option>";
            }
            // Add options from JSON to dropdown menus
            $("select").html(dropdownHTML);
        }
    });
    
    $("#select1").on("change",function() {
        // Get name of bike
        var bike_name = bikes[this.value].name
        // If the name of bike is the placeholder "---", make name Bike #1
        // Otherwise, set name as normal
        if (bike_name === "---") {
            $("#bike-1").html("Bike #1");
        }
        else {
            $("#bike-1").html(bike_name);
        }
        // Add values to table with proper formatting
        $("#msrp-1").html(`$` + bikes[this.value].price.toLocaleString("en-US"));
        $("#top-1").html(bikes[this.value].speed + ` mph`);
        $("#weight-1").html(bikes[this.value].weight + ` lbs`);
        $("#tank-1").html(bikes[this.value].tank + ` gal`);
        $("#seat-1").html(bikes[this.value].seat + ` in`);
        $("#clear-1").html(bikes[this.value].clearance + ` in`);
        // Add image to table if it's not the placeholder
        if (this.value > 0) {
            $("#img-1").html(`<img src="` + bikes[this.value].image + `" width="190" height="120">`);
        }
        else {
            $("#img-1").html(``);
        }
        // Edit variable bike1 to be the index of current bike
        bike1 = this.value;
        // Call comparison
        compare();
    });
    $("#select2").on("change",function() {
        // Get name of bike
        var bike_name = bikes[this.value].name
        // If the name of bike is the placeholder "---", make name Bike #1
        // Otherwise, set name as normal
        if (bike_name === "---") {
            $("#bike-2").html("Bike #2");
        }
        else {
            $("#bike-2").html(bike_name);
        }
        // Add values to table with proper formatting
        $("#msrp-2").html(`$` + bikes[this.value].price.toLocaleString("en-US"));
        $("#top-2").html(bikes[this.value].speed + ` mph`);
        $("#weight-2").html(bikes[this.value].weight + ` lbs`);
        $("#tank-2").html(bikes[this.value].tank + ` gal`);
        $("#seat-2").html(bikes[this.value].seat + ` in`);
        $("#clear-2").html(bikes[this.value].clearance + ` in`);
        // Add image to table if it's not the placeholder
        if (this.value > 0) {
            $("#img-2").html(`<img src="` + bikes[this.value].image + `" width="190" height="120">`);
        }
        else {
            $("#img-2").html(``);
        }
        // Edit variable bike1 to be the index of current bike
        bike2 = this.value;
        // Call comparison
        compare();
    });

    function compare() {
        // Find the difference of each bike1 and bike2 value and place it in the Comparison column of the table in proper formatting
        $("#msrp-dif").html(`$` + Math.abs(Math.round(bikes[bike1].price-bikes[bike2].price)).toLocaleString("en-US"));
        $("#top-dif").html(Math.abs(Math.round((bikes[bike1].speed-bikes[bike2].speed)*100)/100)  + ` mph`);
        $("#weight-dif").html(Math.abs(Math.round((bikes[bike1].weight-bikes[bike2].weight)*100)/100)  + ` lbs`);
        $("#tank-dif").html(Math.abs(Math.round((bikes[bike1].tank-bikes[bike2].tank)*100)/100)  + ` gal`);
        $("#seat-dif").html(Math.abs(Math.round((bikes[bike1].seat-bikes[bike2].seat)*100)/100)  + ` in`);
        $("#clear-dif").html(Math.abs(Math.round((bikes[bike1].clearance-bikes[bike2].clearance)*100)/100)  + ` in`);
        // Call highlight function
        highlight();
    }

    // Put green highlight on the greater values
    function highlight() {
        // Remove any already existing highlight
        $("td").css("background-color","white");

        // Cancel if it's placeholder or same bike
        if (bike1 == 0 || bike2 == 0 || bike1 == bike2) {
            return;
        }

        // Highlight lower price
        if (bikes[bike1].price < bikes[bike2].price) {
            $("#msrp-1").css("background-color","#98FB98");
        }
        else {
            $("#msrp-2").css("background-color","#98FB98");
        }

        // Highlight greater speed
        if (bikes[bike1].speed > bikes[bike2].speed) {
            $("#top-1").css("background-color","#98FB98");
        }
        else {
            $("#top-2").css("background-color","#98FB98");
        }

        // Highlight greater weight
        if (bikes[bike1].weight > bikes[bike2].weight) {
            $("#weight-1").css("background-color","#98FB98");
        }
        else {
            $("#weight-2").css("background-color","#98FB98");
        }

        // Highlight larger tank
        if (bikes[bike1].tank > bikes[bike2].tank) {
            $("#tank-1").css("background-color","#98FB98");
        }
        else {
            $("#tank-2").css("background-color","#98FB98");
        }

        // Highlight greater seat height
        if (bikes[bike1].seat > bikes[bike2].seat) {
            $("#seat-1").css("background-color","#98FB98");
        }
        else {
            $("#seat-2").css("background-color","#98FB98");
        }

        // Highlight higher clearance
        if (bikes[bike1].clearance > bikes[bike2].clearance) {
            $("#clear-1").css("background-color","#98FB98");
        }
        else {
            $("#clear-2").css("background-color","#98FB98");
        }
    }
});