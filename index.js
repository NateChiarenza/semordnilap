const fs = require('fs');



var dictFile = "words.txt";
var dict = {};

fs.readFileSync(dictFile)
  .toString()
  .split('\n')
  .forEach(function(word) {
    dict[word] = word.split("").reverse().join("");
  });

  function isSemordnilap(word) { return dict[dict[word]]; };
 
var semordnilaps = []
for (var key in dict) {
  if (isSemordnilap(key)) {
    var rev = dict[key];
    if (key < rev) {
      semordnilaps.push([key,rev]) ;
    }
  }
}
 
var count = semordnilaps.length;
console.log("There are " + count + " semordnilaps in " +
         dictFile + ".  Here are 5:" );
 
var indices=[]
for (var i=0; i<count; ++i) {
  if (Math.random() < 1/Math.ceil(i/5.0)) {
    indices[i%5] = i 
  }
}
indices.sort()
for (var i=0; i<5; ++i) {
  console.log(semordnilaps[indices[i]]);
}