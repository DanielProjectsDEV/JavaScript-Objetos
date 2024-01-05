const cliente = {
    nome : "João",
    idade: 24,
    email: "joaofirma.com",
    telefone: ["1155555550", "1144444440"], 
}

cliente.endereços = [{
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934"
}
]

cliente.endereços.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false
})
console.log(cliente.endereços)
