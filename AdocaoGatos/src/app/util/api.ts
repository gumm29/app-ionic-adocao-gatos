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
    const produtoAtualizado = gato

    // const body = Object.keys(produtoAtualizado)
    //   .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(produtoAtualizado[k])}`)
    //   .join('&')

      await fetch(`${this.url}/gato`, { method: 'POST', body: new URLSearchParams(gato) })
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
