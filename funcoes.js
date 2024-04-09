const convert = document.getElementById('converter');
const result = document.getElementById('resultado');
const vazio = document.getElementById('vazio')
const money = document.getElementById('moeda');
const dolar = document.getElementById('dolar');
const euro = document.getElementById('euro');
const iene = document.getElementById('iene');
const valor = document.getElementById('valor');
const valor_result = document.getElementById('valor_resultado');

convert.addEventListener('click', function(){
    if (money.value === vazio.value){
        var mult = valor.value*0
        result.style.display = 'block'
        valor_result.innerHTML = mult.toFixed(2)
    }
    else if (money.value === dolar.value){
        var mult = valor.value*5.07
        result.style.display = 'block'
        valor_result.innerHTML = mult.toFixed(2)
    }

    else if (money.value === euro.value){
        var mult = valor.value*5.49
        result.style.display = 'block'
        valor_result.innerHTML = mult.toFixed(2)
    }

    else if (money.value === iene.value){
        var mult = valor.value*0.033
        result.style.display = 'block'
        valor_result.innerHTML = mult.toFixed(2)
    }
})