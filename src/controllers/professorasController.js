const professoras = require('../model/professoras.json')
    
exports.get = (req, res) => {
    const arrProfs =[]
    for (let i = 0; i < professoras.length; i++) {
        const semCpf = {}
        semCpf.id = professoras[i].id
        semCpf.nome = professoras[i].nome
        semCpf.especialidade = professoras[i].especialidade
        semCpf.signo = professoras[i].signo
        arrProfs.push(semCpf) 
    }
    console.log(req.url)
    
    res.status(200).send(arrProfs)
}
exports.getById = (req, res) => {
    const id = req.params.id
    const prof = professoras.find(prof => prof.id == id)
    delete prof.semCpf
    res.status(200).send(prof)

// exports.getById = (req, res) => {
//     const id = req.params.id
//     const professoras = professoras.find(professoras => professoras.id == id)
//     const profSemCpf = professoras.map(item => {
//         delete item.semCpf
//         return item
//     })


//  exports.get = (req, res) => {
//     const profSemCpf = professoras.map(item => {) 
//         item.cpf = "************"
//         return item

//     }

// const profSemCpf = professoras.map(item => { 
//    delete item.cpf
//    return item
// })   
    
