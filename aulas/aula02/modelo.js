class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.proce = preco;
  }

  toString() {
    return`${this.nome}-${this.preco}`;
  }
}

module.exports = Produto;
