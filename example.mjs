import * as d3 from 'd3';

const table = [
    {"name": "Eve",   "parent": ""},
    {"name": "Cain",  "parent": "Eve"},
    {"name": "Seth",  "parent": "Eve"},
    {"name": "Enos",  "parent": "Seth"},
    {"name": "Noam",  "parent": "Seth"},
    {"name": "Abel",  "parent": "Eve"},
    {"name": "Awan",  "parent": "Eve"},
    {"name": "Enoch", "parent": "Awan"},
    {"name": "Azura", "parent": "Eve"}
  ]

const data = d3.stratify()
  .id((d) => d.name)
  .parentId((d) => d.parent)
(table);

const root = d3.hierarchy(data);

//now root is in the heirarchical structure 

root.sum((d) => d.value ? 1 : 0);

// Construct the treemap layout.
const treemap = d3.treemap();
treemap.size([10, 15]);
treemap.padding(2);

// Sum and sort the data.
root.sum((d) => d.value);
root.sort((a, b) => b.height - a.height || b.value - a.value);

// Compute the treemap layout.
treemap(root);

// Retrieve all descendant nodes.
const nodes = root.descendants();
//console.log(nodes); 


var diameter = Math.min(window.innerWidth, window.innerHeight),
  radius = diameter / 2,
  innerRadius = radius - 280; // between center and edge end

console.log(innerRadius); 


