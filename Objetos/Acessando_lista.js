const cliente = {
    nome: "Igor",
    idade: 20,
    cpf: "948343843",
    email: "igorr@gmail.com"
}

const props = ["nome", "idade", "cpf", "email"]

// console.log(cliente[props[1]])

props.forEach(info => console.log(cliente[info]))