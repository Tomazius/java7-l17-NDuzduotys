window.onload = function () {

    let z1 = 15746;
    let z2 = 95000;
    let z3 = 39857;



    console.log(pakĮstring(z1)+1);
    console.log(pakĮstring(z2)+1);
    console.log(pakĮstring(z3)+1);

    let a1 = pakĮstring(z1);
    let a2 = pakĮstring(z2);
    let a3 = pakĮstring(z3);

    let skSuma1 = skaitmenuSuma(a1);
    let skSuma2 = skaitmenuSuma(a2);
    let skSuma3 = skaitmenuSuma(a3);

    console.log("------")
    console.log(pakeistas1);
    console.log(pakeistas2);
    console.log(pakeistas3);

} 

function skaitmenuSuma(a) {
    a = a.toString();
    return parseInt(a[0])+parseInt(a[1])+parseInt(a[2])+parseInt(a[3])+parseInt(a[4]);    
}
