export default class Api{
  url = 'https://miau-dote.herokuapp.com'

  async busca(){
    const resposta = await fetch(`${this.url}/gatos`)
    return await resposta.json()
  }

  async buscaId(id){
    const resposta = await fetch(`${this.url}/gato/${id}`)
    return await resposta.json()
  }

  async criaGato(gato){
    const novoGato = {
      arquivo: gato.arquivo,
      nome: gato.nome,
      descricao: gato.descricao,
      adotado: gato.adotado,
      nomeArquivo: gato.nomeArquivo
    }

      await fetch(`${this.url}/gato`, { method: 'POST', headers: {
            'Accept': '*/*',
            'Content-Type': ' application/json'
        }, body: JSON.stringify(novoGato) })
      this.busca()
  }

  async atualizar(gato): Promise<void> {
    await fetch(`${this.url}/gato/${gato.id}`, { method: 'PUT',headers: {
        'Accept': '*/*',
        'Content-Type': ' application/json'
      }, body: JSON.stringify(gato) })
    this.busca()
  }

  async remover(id: number): Promise<void> {
    await fetch(`${this.url}/gato/${id}`, { method: 'DELETE',headers: {
      'Accept': '*/*',
      'Content-Type': ' application/json'
    }})
    this.busca()
  }
}
