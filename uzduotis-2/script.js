window.onload = function(){

    console.log(lyginisarne(256));
    console.log(lyginisarne(-389));


}

function lyginisarne(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}