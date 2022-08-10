
function addingArrayNum(marks) {
      var sum = 0;
      for(var i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
      }
     return sum;
}

var marks = [23, 45, 67, 89, 76, 80, 95, 55];

var result = addingArrayNum(marks);
var result2 = addingArrayNum([34, 67, 99, 92, 34]);
console.log("Total Marks " + result);
console.log("Total Marks " + result2);



var total = 0;
for(var i = 0; i < marks.length; i++) {
//    total += marks[i];
   total = total + marks[i];
}
console.log(total);