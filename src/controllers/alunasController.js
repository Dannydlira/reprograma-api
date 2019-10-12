const alunas = require("../model/alunas.json")

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(alunas)
}

exports.getById = (req, res) => {
  const id = req.params.id
  if (id > 17 || id <= 0) {
    res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")
  }
  res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req, res) => {
  const id = req.params.id
  const aluna = alunas.find(aluna => aluna.id == id)
  if (!aluna) {
    res.send("Nao encontrei essa garota")
  }
  const livrosAluna = aluna.livros
  const livrosLidos = livrosAluna.filter(livro => livro.leu == "true")
  const tituloLivros = livrosLidos.map(livro => livro.titulo)
  res.send(tituloLivros)
}

exports.getSp = (req, res) => {
  const nasceuSp = alunas.filter(aluna => {
    console.log(aluna)
    return aluna.nasceuEmSp == "true"
  })
  const meninasSp = nasceuSp.map(aluna => aluna.nome)

  res.status(200).send(meninasSp)
}
