//Resposta item 1 e 3

const pessoa = {
  nome: "Danilo Alves",
  idade: 27,
  profissao: "estudante",
  telefone:83998554126,
  endereco: {
    logradouro: "Espanha",
    bairro: "jardim Europa",
    cidade: "Patos",
    cep: "12345-321"
    
  }
  
  
}

//Resposta item 2

function imprimir(pessoa) {
  console.log("Nome: " + pessoa.nome);
  console.log("Idade: " + pessoa.idade);
  console.log("Profissão: " + pessoa.profissao);
  console.log("Endereço:");
  console.log("  Logradouro: " + pessoa.endereco.logradouro);
  console.log("  Bairro: " + pessoa.endereco.bairro);
  console.log("  Cidade: " + pessoa.endereco.cidade);
  console.log("  CEP: " + pessoa.endereco.cep);
  console.log("  Número de contato: " + pessoa.endereco.telefone);
}
imprimir(pessoa);

//Resposta item 4

pessoa.obterDados = function() {
    return "Nome: " + this.nome + ", Idade: " + this.idade + ", Profissão: " + this.profissao + ", Endereço: " + this.endereco.logradouro + ", " + this.endereco.bairro + ", " + this.endereco.cidade + ", " + this.endereco.cep + ", Telefone: " + this.telefone;
  }
  
  console.log(pessoa.obterDados());

//Resposta item 5

  pessoa.comparar = function(outraPessoa) {
    if (this.nome === outraPessoa.nome && this.idade === outraPessoa.idade) {
      return true;
    } else {
      return false;
    }
  }
  
  const outraPessoa = {
    nome: "igor",
    idade: 24,
    profissao: "estudante",
    endereco: {
      logradouro: "Rua do meio",
      bairro: "Bairro placa",
      cidade: "Spatos",
      cep: "12345-678"
    },
    telefone: "839999-9999"
  }
  
  console.log(pessoa.comparar(outraPessoa));

  // Resposta item 6

const novaPessoa = {
    nome: "klebio",
    idade: 29,
    profissao: "artista",
    endereco: {
      logradouro: "rua da mata",
      bairro: "dos dinossauros",
      cidade: "Sousa",
      cep: "44444-444"
    },
    telefone: "834321-1234"
  }

  // Resposta item 7
  
console.log(pessoa.comparar(novaPessoa));