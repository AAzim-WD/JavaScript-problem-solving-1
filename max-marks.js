// declare variable
var marks = [23, 45, 67, 89, 76, 80, 95];
var max = [0];
for(var i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element > max) {
        max = element;
    }
}
console.log(max);