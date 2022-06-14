window.onload = function () {

    let z1 = 15746;
    let z2 = 95000;
    let z3 = 39857;


    let skSuma1 = skaitmenuSuma(z1);
    let skSuma2 = skaitmenuSuma(z2);
    let skSuma3 = skaitmenuSuma(z3);

    console.log(skSuma1);
    console.log(skSuma2);
    console.log(skSuma3);

} 

function skaitmenuSuma(a) {
    a = a.toString();
    return parseInt(a[0])+parseInt(a[1])+parseInt(a[2])+parseInt(a[3])+parseInt(a[4]);    
}