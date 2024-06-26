const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
})

let paciente = []

exibirMenu()

function exibirMenu() {
    console.log(`
    Menu:
    1. Adicionar uma nova consulta
    2. Lista todas as consultas
    3. Atualizar uma consulta existente
    4. cancelar uma consulta
    5. Sair
    `);
    rl.question("Escolha uma opção: ", (opção) => {
        switch (opção) {
            case "1":
                adicionarConsulta()
                break
            case "2":
                listadeConsulta()
                    exibirMenu()
                break
            case "3":
                atualizarConsulta()
                break
            case "4":
                cancelarConsulta()
                break
            case "5" :
                rl.close()
                break
                default:
    console.log("Opção invalida, tente nnovamente");
            exibirMenu()
                break
        }
    })
}

function adicionarConsulta() {
        rl.question("Digite o nome do paciente: ", (nomepaciente) => {
        rl.question("Digite a nome do medico: ", (nomeMedico) => {
            rl.question("Digite a data da consulta: ", (dataConsulta) => {
                rl.question("Digite o horario da consulta: ", (horario) => {
            paciente.push({ nomepaciente, nomeMedico, dataConsulta, horario })
    console.log("Paciente cadatrado com sucesso!")
                    exibirMenu()
                })
            })
        })
    })
}

function listadeConsulta() {
        if (paciente.length === 0) {
    console.log("Nunhum paciente cadastrado.");
        } else {
    console.log("Lista de Consulta:");
            paciente.forEach((paciente, index) => {
    console.log(`${index + 1}. Nome: ${paciente.nomepaciente}, Medico: ${paciente.nomeMedico}, Data Consulta: ${paciente.dataConsulta}, Horario Consulta: ${paciente.horario}`);
        })
    }
}
