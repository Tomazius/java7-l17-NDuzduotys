window.onload = function(){

    let nr1 = 90;
    let nr2 = 10;
    let nr3 = -100;

    console.log(kartotinis(nr1));
    console.log(kartotinis(nr2));
    console.log(kartotinis(nr3));


}

function kartotinis(skaicius){

    if((skaicius % 10 === 0) && (skaicius % 5 === 0) && (skaicius % 3 === 0)){
        return true
    }
    else{
        return false
    }

}