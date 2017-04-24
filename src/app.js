var layers = [ "School Board", "Neighborhood Associations", "Magistrates", "Elementary", "Middle", "High",
                "State Representatives", "State Senators", "Urban County Officials", "Voting Precincts" ],
schoolYears = ["[ALL]", "2016-2017", "2017-2018"],
geoLayers = d3.select("body").append("div"),
file = '../data/updatedGeoJSON.json',
geoms = [];

var geoSelector = geoLayers.text("Select the geographical data layer : ")
                           .append("select")
                           .attr("id", "layer")
                           .attr("onchange", "mapit()");

var yearSelector = d3.select("body").append("div")
                     .text("Select School Year : ")
                     .append("select")
                     .attr("id", "schyr")
                     .attr("onchange", "mapit()");

geoSelector.selectAll("option")
            .data(layers)
            .enter().append("option")
            .attr("value", function(d) { return d; })
            .text(function(d) { return d; });

yearSelector.selectAll("option")
            .data(schoolYears)
            .enter().append("option")
            .attr("value", function(d) { return d; })
            .text(function(d) { return d; });

var svg = d3.selectAll("body").append("svg").attr("height", 1050).attr("width", 800)
            .append("g").attr("stroke", "black")
            .attr("fill", "#CCCCCC");


mapit();


function mapit() {

    // Loads and displays the data
    d3.json(file, function(err, geojson) {
        if (err) throw err;

        // Gets the values from the two drop down selectors
        var mapLayer = d3.select("select#layer").property("value"),
            mapYear = d3.select("select#schyr").property("value");

        // Iterates over the feature sets to select the appropriate geometry layer
        geojson.features.forEach(function(d) {
            if (d.properties.area_type === mapLayer) {
                geoms.push(d);
            } else if (d.properties.area_group === mapLayer) {
                if (d.properties.school_year === mapYear) geoms.push(d);
            }
        });

        // Sets the map projection and path generator
        var projection = d3.geoAlbersUsa().fitSize([700, 1000], geojson),
            path = d3.geoPath(projection);

        // Adds paths for the selected geometry layer
        svg.selectAll("path")
            .data(geoms)
            .enter().append("path")
            .attr("d", path)
            .classed("geom");

        // Removes existing path elements from the DOM if they are not part of the selected layer
        d3.selectAll("path").data(geoms).exit();

    });

}
