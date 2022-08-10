// declare variable

var a = 5;
var b = 6;

console.log("Before Swap number a =", a, " b =", b );

// swapping

var tem = a;
 a = b;
 b = tem;

console.log( "After Swap number a =", a, " b =", b );

var m = 9;
var n = 7;

m = m + n;
n = m - n;
m = m - n;

console.log( "After Swap number m =", m, " n =", n );

// swapping in array way

var x = 3;
var y = 6;

[x, y] = [y, x];

console.log( "After Swap number x =", x, " y =", y );

