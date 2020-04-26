let a = 'red';
let b = 'blue';
let c = '';

let swap = function() {
  c = b;
  b = a;
  a = c;
  console.log(a,b);
}

let hour = 10;

if (hour >= 6 && hour < 12) {
  console.log('Good morning!');
}
else if (hour >= 12 && hour < 18) {
  console.log('Good afternoon');
}
else {
  consol.log('Good evening');
}
