window.onload = function(){

    let word1 = "namas";
    let word2 = "kosmonautas";
    let word3 = "rutina";
    let word4 = "dehidratacija";

    // Galima pakeisti "word1/2/3/4" į bet kokio ilgio žodį

    console.log("Pirmo žodžio ilgis: ", word1.length);
    console.log("-----------------------------------");
    console.log("Antro žodžio ilgis: ", word2.length);
    console.log("-----------------------------------");
    console.log("Trečio žodžio ilgis: ", word3.length);
    console.log("-----------------------------------");
    console.log("Ketvirto žodžio ilgis: ", word4.length);
    console.log("-----------------------------------");
   
    console.log("Žodis [1] turi daugiau raidžių nei 10: ", wordlength(word1));
    console.log("-----------------------------------");
    console.log("Žodis [2] turi daugiau raidžių nei 10: ", wordlength(word2));
    console.log("-----------------------------------");
    console.log("Žodis [3] turi daugiau raidžių nei 10: ", wordlength(word3));
    console.log("-----------------------------------");
    console.log("Žodis [4] turi daugiau raidžių nei 10: ", wordlength(word4));
    console.log("-----------------------------------");

}

function wordlength (zodis){
    if(zodis.length >= 10){
        return true;
    }
    else{
        return false;
    }

}