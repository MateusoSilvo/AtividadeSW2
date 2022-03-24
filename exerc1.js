var numeros = document.getElementById('txtNumeros');
var salvos = document.getElementById('Numsalvos');
var media = document.getElementById('media');
    let arrayNum = [];
    var soma = 0;

    

    function salvar() {

    arrayNum.push(Number(numeros.value));
    salvos.textContent = arrayNum;
            
    }

    function calcular(){

    var soma = arrayNum.reduce(function(soma, i) {
    var soma2 = soma + i;
        return soma2 / arrayNum.length;
        
        
    });

    console.log(soma);

    }