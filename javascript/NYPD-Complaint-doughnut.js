// this is the code for creating the doughnut Chart for the differnet boroughs in Network City//
// loading data and choosing the columns and counting the number of crimes reported in each of the 5 boroughs.//

			//Width and height
			var w = 300;
			var h = 300;

			var dataset = [ 19.8155,   29.8751,  23.8685,  4.7610,  21.6799 ];

			var outerRadius = w / 2;
			var innerRadius = w / 3;
			var arc = d3.arc()
						.innerRadius(innerRadius)
						.outerRadius(outerRadius);
			
			var pie = d3.pie();
			
			//Easy colors accessible via a 10-step ordinal scale
			var color = d3.scaleOrdinal(d3.schemeCategory10);

			//Create SVG element
			var svg = d3.select("body")
						.append("svg")
						.attr("width", w)
						.attr("height", h);
			
			//Set up groups
			var arcs = svg.selectAll("g.arc")
						  .data(pie(dataset))
						  .enter()
						  .append("g")
						  .attr("class", "arc")
						  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
			
			//Draw arc paths
			arcs.append("path")
			    .attr("fill", function(d, i) {
			    	return color(i);
			    })
			    .attr("d", arc);
			
			//Labels
			arcs.append("text")
			    .attr("transform", function(d) {
			    	return "translate(" + arc.centroid(d) + ")";
			    })
			    .attr("text-anchor", "middle")
			    .text(function(d) {
			    	return d.value;
			    });

