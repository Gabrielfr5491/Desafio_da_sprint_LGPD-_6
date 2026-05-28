
//class contato

class contato {

    constructor(nome, email, telefone, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
    }
}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("mensagem").value);

    Enviar(data);
    form.reset();
}

function Enviar(recebido) {
    document.addEventListener("submit", (e) => {
        e.preventDefault();
        
        

        if (recebido.nome != "") {
            alert('Obrigado sr(a) ' + recebido.nome + ' os seus dados foram encaminhados com sucesso');
        };

        console.log(recebido);

    },{ once: true })
}