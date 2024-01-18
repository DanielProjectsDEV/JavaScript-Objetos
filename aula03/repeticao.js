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

for (let chave in cliente) {  // a palavra reservada in vai percorer todas as chaves ou objetos dentro de cliente 
    console.log(`A chave ${chave} tem como valor o objeto ${cliente[chave]}`)
}