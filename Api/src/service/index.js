class GatoService{

  constructor(GatoModel){
    this.gato = GatoModel
  }

  async listaGatos(){
    return await this.gato.findAll()
  }

  async encontraGato(id){
    return await this.gato.findOne({where: { id: id}})
  }

  async adicionar(gatoDTO){
    const lista = await this.listaGatos()
    const tamanhoLista = lista.length
    gatoDTO.id = tamanhoLista + 1
    await this.gato.create(gatoDTO)
  }

  async modificar(id, gatoDTO){
    await this.gato.update(gatoDTO, { where: { id: id } })
    return this.encontraGato(id)
  }

  async deletar(id){
    return await this.gato.destroy({ where: { id: id } })
  }
}

module.exports = GatoService