const contatosCollection = require("../model/contatoSchema")
const dataNasc = contatosCollection.dataNascimento

const getAll = (request, response) => {
    //response.status(200).send(model.agenda)
    console.log(request.url)
    contatosCollection.find((error,contatos) => {
        if(error){
            return response.status(500).send(error)
        }else{
        return response.status(200).send(contatos)
}
    })
};

const add = (request, response) => {
    //novo objeto para nossa coleção
    let contatoDoBody = request.body
    const contato = new contatosCollection(contatoDoBody)

    contato.save((error) => {
        //if(error !== null && error !== undefined)
        if(error){
            return response.status(400).send(error)
        }else{
            return response.status(201).send(contato)
        }
    })
}

const getNome = (request, response) => {
    const nomeContato = request.params.nome
    const regex = new RegExp(nomeContato)

    const filtro = { nome : regex }

    contatosCollection.find(filtro,(error,contatos) => {
        if(error){
            return response.status(500).send(error)
        }else{
        return response.status(200).send(contatos)
}
    })
};

const getById = (request, response) => {
    const idContato = request.params.id;
    contatosCollection.findById(idContato, (error, contato) => {
        if(error){
            return response.status(500).send(error)
        }else{
            if(contato){
            contato.remove();
            return response.sendStatus(200)   
            }else{
                return response.sendStatus(404)
            }
        }
    })
}

const updateById = (request, response) => {
    const idContato = request.params.id;
    const contato = request.body;
    const options = {new: true}

    contatosCollection.findByIdAndUpdate(idContato, contato, options, (error, contato) => {
        if(error) {
            return response.status(500).send(error)
        } else if (contato) {
            // return response.sendStatus(204) //retorno sem exibição de resposta
            return response.status(200).send(contato)
          } else {
              return response.sendStatus(404)
          }   
    })

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

    
}

module.exports = {
    getAll,
    add,
    getNome,
    getById,
    updateById
}