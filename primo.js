const nome = prompt('Digite seu nome completo:');



  document.body.innerHTML += `Seu nome é: ${nome}<br />`;
  document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
  document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(1)}______<br />`;
  document.body.innerHTML += `Qual o primeiro índice da letra c no seu nome? _${nome.indexOf("c")}_____<br />`;
  document.body.innerHTML += `Qual o último índice da letra c no seu nome? _${nome.lastIndexOf("C")}_____<br />`;
  document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}______<br />`;
  document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}______<br />`;
  document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()}______<br />`;
  document.body.innerHTML += `Seu nome com letras minúsculas: __${nome.toLocaleLowerCase()}____<br />`;
 