//create an svg of of a smiley face and append it to the page using d3.

//select the body and append a new svg element
var svg = d3.select("body").append("svg");
//specify the size of the svg container
var svgHeight = '800px';
var svgWidth = '1200px';
svg.attr('width', svgWidth).attr('height', svgHeight);

//create the main circle and make it gold
svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 80)
    .attr('r', 80)
    .attr('fill', 'gold');
//create the eyes
svg.append('circle')
    .attr('cx', 70)
    .attr('cy', 60)
    .attr('r', 8)
    .attr('fill', 'black');

svg.append('circle')
    .attr('cx', 130)
    .attr('cy', 60)
    .attr('r', 8)
    .attr('fill', 'black');

//coordinates for the smile's curve
var smileCurve = "M70, 100 Q100, 130 130, 100";

//create a svg path with the curve

svg.append('path')
    .attr('d', smileCurve)
    .attr('stroke', 'black')
    .attr('fill', 'none')
    .attr('stroke-width', '5px');
