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
}