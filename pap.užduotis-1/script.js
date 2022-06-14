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

    let pakeistas1 = parseInt(a1[0])+parseInt(a1[1])+parseInt(a1[2])+parseInt(a1[3])+parseInt(a1[4]);
    let pakeistas2 = parseInt(a2[0])+parseInt(a2[1])+parseInt(a2[2])+parseInt(a2[3])+parseInt(a2[4]);
    let pakeistas3 = parseInt(a3[0])+parseInt(a3[1])+parseInt(a3[2])+parseInt(a3[3])+parseInt(a3[4]);

    console.log("------")
    console.log(pakeistas1);
    console.log(pakeistas2);
    console.log(pakeistas3);



} 

function pakĮstring(zodis){
    return zodis.toString();
}
