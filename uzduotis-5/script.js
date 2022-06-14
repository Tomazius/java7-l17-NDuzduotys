window.onload = function(){

    let xx1 = "Architektūra";
    let xx2 = "Švitrinis";
    let yy1 = "Zoologija";
    let yy2 = "Reformacija";
    let zz1 = "Pusiausvyra";
    let zz2 = "Kardiograma";

    console.log(zodzioilgis(xx1, xx2));
    console.log(zodzioilgis(yy1, yy2));
    console.log(zodzioilgis(zz1, zz2));


}

function zodzioilgis(zodis1, zodis2){
    if (zodis1.length > zodis2.length){
        return 1;
    }
    else if (zodis1.length < zodis2.length){
        return -1;
    }
    else (zodis1.length = zodis2.length);{
        return 0;
    }

    //KODĖL reikia 24 eilutėj po else() padėti ;??????? - kitaip error.
}