let a = Number(prompt('A = ', '0'));
let b = Number(prompt('B = ', '0'));
let c = Number(prompt('C = ', '0'));

if( !(a + b > c && a + c > b && b + c > a) ) {
    console.log('Triangle doesn’t exist');
} else if ( a === b && b === c ) {
    console.log('Eequivalent triangle');
} else if ( a === b || a === c || b === c ) {
    console.log('Isosceles triangle');
} else if ( a !== b && a !== c && b !== c ) {
    console.log('Normal triangle');
}