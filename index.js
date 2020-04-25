let a = 'red';
let b = 'blue';
let c = '';

let swap = function() {
  c = b;
  b = a;
  a = c;
  console.log(a,b);
}
