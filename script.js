var moeda = prompt("Informe qual moeda você quer converter \n 1 - Dolar \n 2 - Libra \n 3 - Peso Argentino");

if(moeda == 1) {
  
  var tipoConversao = prompt("Informe qual tipo de conversão deseja. \n 1 - Dolar para Real \n 2 - Real para Dolar");
  
  if(tipoConversao == 1){
    
    var valorEmDolar = prompt("Informe o valor em Dolar");
    var virgula = valorEmDolar.replace("," , ".");
    var valorEmReal = Number(virgula) * 5.00;
    
    if(isNaN(valorEmReal)){
       document.write("<h2>Informe um valor valido.</h2>")
    }else{
      document.write("<h2>O valor em Real é " + valorEmReal.toFixed(2) + "</h2>");
    }
    
  } else if(tipoConversao == 2){
    
    var valorEmReal = prompt("Informe o valor em Real");
    var virgula = valorEmReal.replace("," , ".");
    var valorEmDolar = Number(virgula) / 5.00;
  
    if(isNaN(valorEmDolar)){
       document.write("<h2>Informe um valor valido.</h2>")
    }else{
      document.write("<h2>O valor em Dolar é " + valorEmDolar.toFixed(2) + "</h2>");
    }
    
  } else {
    document.write("<h2>Opção Invalida</h2>");
  }

} else if (moeda == 2) {
  
  var tipoConversao = prompt("Informe qual tipo de conversão deseja. \n 1 - Libra para Real \n 2 - Real para Libra");
  
  if(tipoConversao == 1){
    
    var valorEmLibra = prompt("Informe o valor em Libra");
    var virgula = valorEmLibra.replace("," , ".");
    var valorEmReal = Number(virgula) * 7.00;
  
    if(isNaN(valorEmReal)){
       document.write("<h2>Informe um valor valido.</h2>")
    }else {
      document.write("<h2>O valor em Real é " + valorEmReal.toFixed(2) + "</h2>");
    }
    
  } else if(tipoConversao == 2){
    
    var valorEmReal = prompt("Informe o valor em Real");
    var virgula = valorEmReal.replace("," , ".");
    var valorEmLibra = Number(virgula) / 7.00;
  
    if(isNaN(valorEmLibra)){
       document.write("<h2>Informe um valor valido.</h2>")
    }else{
      document.write("<h2>O valor em Libra é " + valorEmLibra.toFixed(2) + "</h2>");
    }
    
  } else {
    document.write("<h2>Opção Invalida</h2>");
  }
  
} else if (moeda == 3){
  
  var tipoConversao = prompt("Informe qual tipo de conversão deseja. \n 1 - Peso Artentino para Real \n 2 - Real para Peso Argentino");
  
  if(tipoConversao == 1){
    
    var valorEmPeso = prompt("Informe o valor em Peso Argentino");    
    var virgula = valorEmPeso.replace("," , ".");
    var valorEmReal = Number(virgula) * 0.062;
    
    if (isNaN(valorEmReal)){
      document.write("<h2>Informe um valor valido.</h2>") 
    } else {
      document.write("<h2>O valor em Real é " + valorEmReal.toFixed(2) + "</h2>");
    }
    
  } else if(tipoConversao == 2){
    
    var valorEmReal = prompt("Informe o valor em Real");
    var virgula = valorEmReal.replace("," , ".");
    var valorEmPeso = Number(virgula) / 0.062;
  
    if(isNaN(valorEmPeso)){ 
      document.write("<h2>Informe um valor valido.</h2>")
      
    }else {
      document.write("<h2>O valor em Peso Argentino é " + valorEmPeso.toFixed(2) + "</h2>");
    }
    
  } else {
    document.write("<h2>Opção Invalida</h2>");
  }
  
} else {
  document.write("<h2>Opção Invalida</h2>");
}
