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
  async atualizar(id: number): Promise<void> {
    const produtoAtualizado = {

  };

  const body = Object.keys(produtoAtualizado)
  .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(produtoAtualizado[k])}`)
  .join('&');

  await fetch(`${this.url}/${id}`, { method: 'PUT', body: new URLSearchParams(body) });
  this.busca();
  }
}
