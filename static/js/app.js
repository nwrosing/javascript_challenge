// grab data from the data.js file
var tableData = data;


// create function to display UFO sightings
function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");
  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// clear the table to update with new data
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// display all sightings
console.log(tableData);
tableDisplay(tableData);

// filter button
var button = d3.select("#filter-btn");

// filter the database and display
button.on("click", function(event) {
  d3.event.preventDefault();
  deleteTbody();
  var dateInput = d3.select("#datetime").property("value");
  
  if (dateInput.trim() === "" ) {
    var filteredData = tableData;
  } else { 
    var filteredData = tableData.filter(ufoSighting => 
      ufoSighting.datetime === dateInput.trim());
  };

  // display "no records found" message
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(filteredData);
  tableDisplay(filteredData);
});