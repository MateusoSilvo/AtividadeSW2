var nome = document.getElementById("txtNome");
var telefone = document.getElementById("txtTel");
var email = document.getElementById("txtEmail");

var NOMES = document.getElementById("nomes");
var TELEFONE = document.getElementById("telefone");
var EMAIL = document.getElementById("email");

const agenda = [];
let user = [];

function salvardados() {
  // console.log(nota.value)

  user.push(nome.value); 
  user.push(telefone.value);
  user.push(email.value);

//   NOMES.textContent, TELEFONE.textContent, EMAIL.textContent = user;

  var criarLinha = document.createElement("li");
  var conteudoNovo = document.createTextNode(user);
  criarLinha.appendChild(conteudoNovo);
  document.getElementById('linhas').appendChild(criarLinha);
  
//   console.log(conteudoNovo);

  //console.log(todasNotas.length);

  agenda.push(user);
  user = [];
  
  console.log(agenda);


}


//createElement
//criar linhas html