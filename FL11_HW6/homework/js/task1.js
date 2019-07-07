const div = 2;

let a1 = Number(prompt('A x = ', '0'));
let a2 = Number(prompt('A y = ', '0'));

let b1 = Number(prompt('B x = ', '0'));
let b2 = Number(prompt('B y = ', '0'));

let c1 = Number(prompt('C x = ', '0'));
let c2 = Number(prompt('C y = ', '0'));

if (isNaN(a1) || isNaN(a2) || isNaN(b1) || isNaN(b2) || isNaN(c1) || isNaN(c1)) {
    console.log('Wrong input!!!');
} else {
    let midpoint1 = (a1 + b1) / div === c1;
    let midpoint2 = (a2 + b2) / div === c2;

    console.log(midpoint1 && midpoint2);
}
