const user = {
    nome: "Igor",
    email: "igorr2693@gmail.com",
    role: "programador",
    nascimento: "23/04/2002",
    ativo: true,
    exibirInfo: function() {
        console.log(this.nome, this.email, this.role, this.nascimento, this.ativo)
    }
}

user.exibirInfo()

const exibir = user.exibirInfo
exibir()