//import jsonData from 'bikes.json'; 

$(document).ready(function() {
    var bikes = [];
    var menuHTML = ``;

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
                bikes.push(data.bikes[i]);
                if (i % 3 == 1) {
                    menuHTML += `<div class="row">`;
                }
                menuHTML += `<figure class="column stat"><a href="" id="` + (i - 1) + `">
                            <img src="` + data.bikes[i].image + `" class="small-img">
                            <figcaption>` + data.bikes[i].name + `</figcaption></a>
                            </figure>`
                if (i % 3 == 0) {
                    menuHTML += `</div>`;
                }
            }
            // Add bikes from JSON to html menu
            $("#menu").html(menuHTML);
        }
    });
    
    $("#menu").on('click','a',function(e) {
        e.preventDefault();
        var bikeHTML = ``;
        var i = parseInt($(this).attr('id'));
        
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
        $("#menu").html(bikeHTML);
    });

    
    $("#menu").on('click','button',function(e) {
        $("#menu").html(menuHTML);
    });
});