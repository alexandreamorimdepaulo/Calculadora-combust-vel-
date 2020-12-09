
        function calcular(oper){
        var gaso = document.calcform.valor1.value
        var eta = document.calcform.valor2.value
        var res = eta/gaso;
        
        if  (res<0.7){
            window.alert('etanol é melhor')
        } else {
            res > 0.7
            window.alert('gasolina é melhor')
        }
        document.calcform.res.value = res;
        
    }
  
        