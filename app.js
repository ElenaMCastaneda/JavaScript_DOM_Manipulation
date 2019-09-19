// from data.js
var sightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log display data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log data from data.js.  

// Create table ~ Add <tr> and <td> - populate with (key , value) 
function ufoTable(data){
    tbody.html("");
    data.forEach(function(ufoSightings) {
        console.log(ufoSightings);
      
        var row = tbody.append("tr");

        Object.entries(ufoSightings).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
          });
        });
}

//function for click hander ~ filter button
function clickHandler() {
    //Prevent initial table from displaying after click
    d3.event.preventDefault()   

// Select the input element and get the raw HTML node
    var inputField = d3.select("#datetime").property("value"); 
    var filteredSightings = sightings;


    if (inputField) {
        filteredSightings = filteredSightings.filter((row) => row.datetime === inputField);
        
    }
    //Display filtered table
    ufoTable(filteredSightings);
} 


// Select the button
button = d3.selectAll("#filter-btn");

// Click handler
button.on("click", clickHandler);

//Display full table
ufoTable(sightings);










