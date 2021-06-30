const fs = require('fs');
var dictFile = "words.txt";
var dict = {};

fs.readFileSync(dictFile)
  .toString()
  .split('\n') 
  .forEach(function(word) {
    dict[word] = word.split("").reverse().join("");
  });

  function isSemordnilap(word) { 
    return dict[dict[word]]; 
  }
 
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
         dictFile);
 
for (var i=0; i<count; ++i) {
  console.log(semordnilaps[i]);
}