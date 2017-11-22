var a = prompt('Podaj wartość zmiennej a:');
var b = prompt('Podaj wartość zmiennej b:');
var value = (a * a) - (2 * a * b) + (b * b);
console.log('Wynik: ' + value);
var comparsion = value;
if (comparsion > 0) {
    console.log('Wynik dodatni');
} else if (comparsion < 0) {
    console.log('Wynik ujemny');
} else {
    console.log('Wynik równy zero');
}