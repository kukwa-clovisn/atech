let numb = [3, 2, 3, 4];
let n = 0;
for (let i = 0; i < numb.length; i++) {
  n += parseInt(numb[i]);
}
console.log(n / numb.length);

// or
function average(...args) {
  let n = 0;
  for (let i = 0; i < args.length; i++) {
    n += parseInt(args[i]);
  }
  console.log(n / args.length);
}

average(2, 4, 5, 6, 3);
