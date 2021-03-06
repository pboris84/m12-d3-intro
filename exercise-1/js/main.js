// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {

  // Select the element with id `sandbox` and append a `div` element to it. Make sure to store the div in a JavaScript varaible
  var myDiv = d3.select('#sandbox').append('div')  //note how you select by #
            .attr('id', 'you-can-name-this-whatever-you-want');
            // each one of these d3 calls is returning the object itself, so we can continue to manipulate it. 

  // Create a variable `mySvg` by appending an `svg` element to your newly created `div`
  var mySvg = myDiv.append('svg');

  // Set both the width and height attributes of your `svg` to 300 (this could have been chained above)
  mySvg.attr('width', 300)
       .attr('height', 300);

  // Append a `circle` element to your `svg`, setting the properties noted in index.html
  mySvg.append('circle')
       .attr('r', 30)
       .attr('cx', 75)
       .attr('cy', 30)  //moves it down
       .style('opacity', .5)
       .style('fill', 'blue');

  // Append a `rect` element to your `svg`, setting the properties noted in index.html
  mySvg.append('rect')
       .attr('x', 70)
       .attr('y', 60)
       .attr('width', 10)
       .attr('height', 250)
       .style('opacity', .5)
       .style('fill', 'orange');
});

// You always draw from the top left, bottom-up in most things web design.
// the last thing you add is "on top" of everything else