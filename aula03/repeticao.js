const cliente = {
    nome : "João",
    idade: 24,
    email: "joaofirma.com",
    telefone: ["1155555550", "1144444440"], 
}

cliente.endereços = [
    {
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
    }
]

for (let chave in cliente) {
    console.log(cliente[chave])
}