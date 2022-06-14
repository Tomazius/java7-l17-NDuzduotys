window.onload = function() {


    console.log(Isitbiggerthan100(123));
    console.log(Isitbiggerthan100(-212));

}

function Isitbiggerthan100(number){
    if(number>100){
        return true;
    }
    else{
        return false;
    }

}