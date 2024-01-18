const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];
  
  const chavesDoObjeto = Object.keys(cliente); // Com esse método vamos obter uma array com todas as chaves de cada objeto da const cliente.
  
  console.log(chavesDoObjeto);
  
  if (!chavesDoObjeto.includes("enderecos")) {  // fazendo uma verificação se há ou nao a chave enderecos para validação de dados utilizando o método includes com uma negação para caso nao haver a chave enderecos ele retornar o erro.
    console.error("Erro. É necessário ter um endereço cadastrado.");
  }