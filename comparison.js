//import jsonData from 'bikes.json'; 

$(document).ready(function() {
    var bikes = [
        {
            "name": "---",
            "price": 0,
            "speed": 0,
            "weight": 0,
            "tank": 0,
            "seat": 0,
            "clearance": 0
        },
        {
            "name": "2021 Honda ADV150",
            "price": 4299,
            "speed": 85,
            "weight": 294.1,
            "tank": 2.087,
            "seat": 31.3,
            "clearance": 6.5
        },
        {
            "name": "2021 Honda CRF450RL",
            "price": 9999,
            "speed": 90,
            "weight": 291,
            "tank": 2.0,
            "seat": 37.2,
            "clearance": 12.6
        },
        {
            "name":"2021 Royal Enfield INT650",
            "price": 5799,
            "speed": 129,
            "weight": 470,
            "tank": 3.6,
            "seat": 31.7,
            "clearance": 6.85
        }
    ]
    var dropdownHTML = "";
    for (var i = 0; i < bikes.length; i++) {
        dropdownHTML += '<option value="' + i + '">' + bikes[i].name + "</option>";
    }
    // Add options from JSON to dropdown menus
    $("select").html(dropdownHTML);
    
    $("#select1").on("change",function() {
        $("#msrp-1").html(bikes[this.value].price);
        $("#top-1").html(bikes[this.value].speed);
        $("#weight-1").html(bikes[this.value].weight);
        $("#tank-1").html(bikes[this.value].tank);
        $("#seat-1").html(bikes[this.value].seat);
        $("#clear-1").html(bikes[this.value].clearance);
    });
    $("#select2").on("change",function() {
        $("#msrp-2").html(bikes[this.value].price);
        $("#top-2").html(bikes[this.value].speed);
        $("#weight-2").html(bikes[this.value].weight);
        $("#tank-2").html(bikes[this.value].tank);
        $("#seat-2").html(bikes[this.value].seat);
        $("#clear-2").html(bikes[this.value].clearance);
    });
});