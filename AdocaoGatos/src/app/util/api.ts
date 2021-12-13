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
    

    const body = Object.keys(novoGato)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(novoGato[k])}`)
      .join('&')

      await fetch(`${this.url}/gato`, { method: 'POST', headers: {
                  'Accept': 'application/json',
                  'Content-Type': ' application/json'
              }, body: new URLSearchParams(novoGato) })
      this.busca()
  }

  async atualizar(gato): Promise<void> {
    const gatoAtualizado = gato

    const body = Object.keys(gatoAtualizado)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(gatoAtualizado[k])}`)
      .join('&')

    await fetch(`${this.url}/gato/${gato.id}`, { method: 'PUT', body: new URLSearchParams(body) })
    this.busca()
  }

  async remover(id: number): Promise<void> {
    await fetch(`${this.url}/gato/${id}`, { method: 'DELETE' })
    this.busca()
  }
}
