//import jsonData from 'bikes.json'; 

$(document).ready(function() {
    // Initialize array that will contain bike JSON data
    var bikes = [];
    // Initialize string that will contain HTML for our menu page
    var menuHTML = ``;
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
            // Skip the first "template" bike, start at 1 instead of 0
            for (var i = 1; i < data.bikes.length; i++) {
                // Add data to array
                bikes.push(data.bikes[i]);
                // Every 3 bikes starting at 1st bike
                // Add a new row div tag to HTML
                if (i % 3 == 1) {
                    menuHTML += `<div class="row">`;
                }
                // Add HTML for current selected bike
                menuHTML += `<figure class="column stat"><a href="" id="` + (i - 1) + `">
                            <img src="` + data.bikes[i].image + `" class="small-img">
                            <figcaption>` + data.bikes[i].name + `</figcaption></a>
                            </figure>`
                // Every 3 bikes starting at 3rd bike
                // Close row div tag
                if (i % 3 == 0) {
                    menuHTML += `</div>`;
                }
            }
            // Add bikes from JSON to html menu
            $("#menu").html(menuHTML);
        }
    });
    
    // When a bike is clicked on
    $("#menu").on('click','a',function(e) {
        e.preventDefault();
        var bikeHTML = ``;
        // Get index of the bike stored in the id attribute
        var i = parseInt($(this).attr('id'));
        
        // Create all of the HTML needed
        // Includes: Back button, image, title, description, stats table, sources
        bikeHTML = `<button type="button"><-- Back To Bike List</button>
        <h1>` + bikes[i].name + `</h1>
        <p>` + bikes[i].description + `</p>
        <img src="` + bikes[i].image + `" class="side-img">
        <table>
            <tr>
                <th>Category</th>
                <th>` + bikes[i].name + `</th>
            </tr>
            <tr>
                <th>MSRP</th>
                <td>$` + bikes[i].price.toLocaleString("en-US") + `</td>
            </tr>
            <tr>
                <th>Top Speed</th>
                <td>` + bikes[i].speed + ` mph</td>
            </tr>
            <tr>
                <th>Weight</th>
                <td>` + bikes[i].weight + ` lbs</td>
            </tr>
            <tr>
                <th>Fuel Tank Capacity</th>
                <td>` + bikes[i].tank + ` gal</td>
            </tr>
            <tr>
                <th>Seat Height</th>
                <td>` + bikes[i].seat + ` in</td>
            </tr>
            <tr>
                <th>Ground Clearance</th>
                <td>` + bikes[i].clearance + ` in</td>
            </tr>
        </table>
        <p class="credit">Information and pictures from <a href="` + bikes[i].sources[0].link + `">` + bikes[i].sources[0].name + `</a> and <a href="` + bikes[i].sources[1].link + `">` + bikes[i].sources[1].name + `</a></p>`
        
        // Change menu html to our new bikeHTML
        $("#menu").html(bikeHTML);
    });

    // Change bikehtml back to our menu HTML when back button is pressed
    $("#menu").on('click','button',function(e) {
        $("#menu").html(menuHTML);
    });
});