var num = [2, 6, 3, 2, 7, 9, 7, 2, 8, 10, 3, 6];

var uniqueNum = [];
var element;

for(var i = 0; i < num.length; i++) {
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if(index == -1) {
        uniqueNum.push(element);
    }

}
console.log(uniqueNum);