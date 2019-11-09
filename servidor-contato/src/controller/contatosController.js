const model = require("../model/contatos")
const dataNasc = model.agenda.contatos.dataNascimento

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(model.agenda)
};

const add = (request, response) => {
    let contato = request.body
    let baseDados = model.agenda.contatos
    contato.id = Math.random().toString(36).substr(-8)

    if (!contato.nome || !contato.dataNascimento || !contato.celular) {
        response.status(400).send("Dados inválidos");
    } else {
        if (baseDados.find(dado => dado.nome === contato.nome)) {
            response.status(400).send("Contato já existente!")
        } else {
            model.agenda.contatos.push(contato)
            response.status(201).send(contato)
        }
    }
}

const formatarData = (dataString) => {
    const dia = dataString.split("/")[0]
    const mes = dataString.split("/")[1] - 1
}

function verificarSigno(dia, mes) {
    dataNascimento = formatarData(dataNasc);

    if (mes == 01) {
        if (dia <= 19) {
            return "capricórnio";
        } else {
            return "aquário";
        }
    } else if (mes == 02) {
        if (dia <= 18) {
            return "aquário";
        } else {
            return "peixes";
        }
    } else if (mes == 03) {
        if (dia <= 20) {
            return "peixes";
        } else {
            return "áries";
        }
    } else if (mes == 04) {
        if (dia <= 19) {
            return "áries";
        } else {
            return "touro";
        }
    } else if (mes == 05) {
        if (dia <= 20) {
            return "touro";
        } else {
            return "gêmeos";
        }
    } else if (mes == 06) {
        if (dia <= 21) {
            return "gêmeos";
        } else {
            return "câncer";
        }
    } else if (mes == 07) {
        if (dia <= 22) {
            return "câncer";
        } else {
            return "leão";
        }
    } else if (mes == 08) {
        if (dia <= 22) {
            return "leão";
        } else {
            return "virgem";
        }
    } else if (mes == 09) {
        if (dia <= 22) {
            return "virgem";
        } else {
            return "libra";
        }
    } else if (mes == 10) {
        if (dia <= 22) {
            return "libra";
        } else {
            return "escorpião";
        }
    } else if (mes == 11) {
        if (dia <= 21) {
            return "escorpião";
        } else {
            return "sagitário";
        }
    } else if (mes == 12) {
        if (dia <= 21) {
            return "sagitário";
        } else {
            return "capricórnio";
        }
    }

    module.exports = {
        getAll,
        add
    }
}