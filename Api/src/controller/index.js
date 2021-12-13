const express = require('express')
const rota = express.Router()

const { gato, sequelize } = require('../model')
const GatoService = require('../service')
const gatoService = new GatoService(gato)

sequelize.sync().then(() => console.log('banco ok'))

rota.get('/', (req, res) => res.send('Aplicação no ar'))

rota.get('/gatos', async (req, res) => {
  const gatos = await gatoService.listaGatos()
  res.status(200).json(gatos)
})

rota.get('/gato/:id', async (req, res) => {
  const id = req.params.id
  const gatos = await gatoService.encontraGato(id)
  return gatos ? res.status(200).send(gatos) : res.status(404).send()
})

rota.post('/gato', async (req, res) => {
  try{
    await gatoService.adicionar(req.body)
    return res.status(201).send('Adicionado com sucesso')
  }catch(e){ 
    return res.status(400).send(e)
  }
})

rota.put('/gato/:id', async (req, res) =>{
  const id = req.params.id
  const gato = await gatoService.modificar(id, req.body)
  return gato.id ? res.status(200).send(gato) : res.status(404).send()
})

rota.delete('/gato/:id', async (req, res) =>{
  const id = req.params.id
  const gato = await gatoService.deletar(id)
  return await gato.id ? res.status(200).send(gato) : res.status(404).send()
})

module.exports = rota